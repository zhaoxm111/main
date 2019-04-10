# Macdown工具的常用命令以及快捷键



1. 标题设置（让字体变大，和[word](https://www.baidu.com/s?wd=word&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)的标题意思一样） 
   在[Markdown](https://www.baidu.com/s?wd=Markdown&tn=24004469_oem_dg&rsv_dl=gh_pl_sl_csd)当中设置标题，有两种方式： 
   第一种：通过在文字下方添加“=”和“-”，他们分别表示一级标题和二级标题。 
   第二种：在文字开头加上 “#”，通过“#”数量表示几级标题。（一共只有1~6级标题，1级标题字体最大）

2. 块注释（blockquote） 
   通过在文字开头添加“>”表示块注释。（当>和文字之间添加五个blank时，块注释的文字会有变化。）

3. 斜体 
   将需要设置为斜体的文字两端使用1个“*”或者“_”夹起来

4. 粗体 
   将需要设置为粗体的文字两端使用2个“*”或者“_”夹起来

5. 无序列表 
   在文字开头添加(*, +, and -)实现无序列表。但是要注意在(*, +, and -)和文字之间需要添加空格。（建议：一个文档中只是用一种无序列表的表示方式）

6. 有序列表 
   使用数字后面跟上句号。（还要有空格）

7. 链接（Links） 
   Markdown中有两种方式，实现链接，分别为内联方式和引用方式。 
   内联方式：This is an [example link](http://example.com/). 
   引用方式： 
   I get 10 times more traffic from [Google](http://google.com/) than from [Yahoo](http://search.yahoo.com/) or [MSN](http://search.msn.com/).

8. 图片（Images）

   图片的处理方式和链接的处理方式，非常的类似。 
   内联方式：`![alt text](/path/to/img.jpg "Title")` 
   引用方式：

```
![alt text][id] 


[id]: /path/to/img.jpg "Title"1234
```

##### 以下是更为方便的快捷键，强烈推荐！！！

- 加粗 `Ctrl + B`
- 斜体 `Ctrl + I`
- 引用 `Ctrl + Q`
- 插入链接 `Ctrl + L`
- 插入代码 `Ctrl + K`
- 插入图片 `Ctrl + G`
- 提升标题 `Ctrl + H`
- 有序列表 `Ctrl + O`
- 无序列表 `Ctrl + U`
- 横线 `Ctrl + R`
- 撤销 `Ctrl + Z`
- 重做 `Ctrl + Y`