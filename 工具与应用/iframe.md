### 获取iframe里的内容

##### 我们可以通过`contentWindow`和`contentDocument`两个API获取iframe的window对象和document对象。

```js
let iframe = document.getElementById('demo');
let iwindow = iframe.contentWindow; // 获取iframe的window对象
let idoc = iframe.contentDocument; // 获取iframe的document对象
```

##### 结合Name属性，通过window提供的frames获取.

```js
<iframe src ="/index.html" id="ifr1" name="ifr1" scrolling="yes">
  <p>Your browser does not support iframes.</p>
</iframe>
<script type="text/javascript">
    console.log(window.frames['ifr1'].window);
console.dir(document.getElementById("ifr1").contentWindow);
</script>
```

#####其实window.frames['ifr1']返回的就是window对象，即

```js
window.frames['ifr1']===window  //ture
window.frames["iframe中的name值"].document.getElementById("iframe中控件的id").事件();
```

```js
// 方式1
$("#iframe的id").contents().find("#iframe中控件的id").事件();
//方式2
$("#iframe中控件的id",document.frames("iframe的name").document).事件();
```



##### 然后，你就可以操控iframe里面的DOM内容。



### 在iframe中获取父级内容

##### 在同域下，父页面可以获取子iframe的内容，那么子iframe同样也能操作父页面内容。在iframe中，可以通过在window上挂载的几个API进行获取.

```
window.parent 获取上一级的window对象，如果还是iframe则是该iframe的window对象
window.top 获取最顶级容器的window对象，即，就是你打开页面的文档
window.self 返回自身window的引用。可以理解 window===window.self(脑残)
```

![image-20190307112750380](/Users/easemob/Library/Application Support/typora-user-images/image-20190307112750380.png)

### 跨域问题

![image-20190307142610229](/Users/easemob/Library/Application Support/typora-user-images/image-20190307142610229.png)

####iframe跨域通讯之document.domain

##### 对于主域相同子域不同的两个页面，我们可以通过document.domain + iframe来解决跨域通信问题。

#####举个🌰，网页a(<http://www.easonwong.com>)和网页b(<http://script.easonwong.com>)，两者都设置`document.domain = 'easonwong.com'`（这样浏览器就会认为它们处于同一个域下），然后网页a再创建iframe上网页b，就可以进行通信啦～！

网页a

```js
document.domain = 'easonwong.com';
var ifr = document.createElement('iframe');
ifr.src = 'http://script.easonwong.com';
ifr.style.display = 'none';
document.body.appendChild(ifr);
ifr.onload = function(){
    let doc = ifr.contentDocument || ifr.contentWindow.document;
    // 在这里操纵b.html
};
```

网页b

```js
document.domain = 'easonwong.com';
```



####iframe跨域通讯之postMessage

#####我们可以通过html5这个新特性进行iframe间的跨域通信，使用postMessage进行数据传递，通过Message监听通信事件。举个🌰

网页a

```js
document.domain = 'easonwong.com';
var ifr = document.createElement('iframe');
ifr.src = 'http://script.easonwong.com';
ifr.style.display = 'none';
document.body.appendChild(ifr);
// 发送数据
ifr.postmessage('hello, I`m a', 'http://script.easonwong.com');
```

网页b

```js
// 监听message事件
window.addEventListener('message', receiver, false);
function receiver(e) {
    if (e.origin == 'http://www.easonwong.com') {
        if (e.data == 'hello, I`m a') {
            e.source.postMessage('hello, I`m b', e.origin);信息
        }
    }
}
```

