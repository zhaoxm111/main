## THIS常用场景

#### 1、以函数形式调用,this指向window

```
function fn(m,n){
   m=2;
   n=3;
console.log(this.m,n);//undefined,this指向了window
}
fn();
```

#### 2、以方法形式调用,this指向调用方法的那个对象

```
box.onclick =function(){
    this.style.backgroundColor = "red"; //this指向box,box颜色为红色
}
```

#### 3、构造函数调用,this指向实例的对象

```
function Person(age , name ) {
         this.a = age ;
         this.b = name;
         console.log(this)  // 此处 this 分别指向 Person 的实例对象 p1 p2
     }
    var p1 = new Person(18, 'zs')
    var p2 = new Person(18, 'ww')
 控制台输出:
 Person {a: 18, b: "zs"}
 Person {a: 18, b: "ww"}
 
```

#### 4、使用window对象的方法使,指向window

```
var box =document.getElementById("box");
box.onclick =function(){
    setTimeout(function(){
       this.style.backgroundColor="yellow"
    },1000)
}
//报错,因为setTimeout是window的一个方法.解决方法可以在14行加上var me=this,然后在本行用me.style调用
```

更改错误,使box颜色为yellow

```
var box =document.getElementById("box");
box.onclick =function(){
    var me = this;//box调用了这个方法,此时的this指向box,此操作将指向box的this赋给me,则得到的me的指向为指向this
    setTimeout(function(){
       me.style.backgroundColor="yellow"//此时的me.style就指的是box的style
    },1000)
}
```

#### 5、多重场景改变this指向

```
box.onclick=function(){ 
     function fn1(){ 
          console.log(this); 
     } 
     fn1(); //事件触发了fn1,在函数内部,以函数形式调用this依旧指向window
     console.log(this);//事件处理函数中的this,该事件由谁触发,this就指向谁
};
 控制台输出:
 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
 <div id = "box">box</div>
 
```

```
box.onclick=function(){ 
    var me = this;
    function fn1(){ 
        console.log(me); 
    } 
   fn1(); //事件触发了fn1,me指向box,所以console的是box
   console.log(this);//事件处理函数中的this,该事件由谁触发,this就指向谁
 };
 控制台输出:
 <div id = "box">box</div>
 <div id = "box">box</div>
```

#### 6、call和apply改变this指向

```
var person={
      name : "lili",
      age: 21
    };
function aa(x,y){
      console.log(x,y);
      console.log(this.name);
    }
  aa.call(person,4,5);
控制台输出
//4 5
//lili
使用call,this指向call后面紧跟的元素,this就指向person
```

