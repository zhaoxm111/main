# 如何同步GitHub......

### 前言

我们都知道,GitHub是一个方便多人协作的托管平台.如何将本地local仓库、个人远程origin仓库(GitHub上的仓库)和远程upstream仓库(在GitHub上fork别人的仓库)进行同步是多人协作的前提.那么我们就来看一下,如何进行

### 情景描述

#### 前提:

A与B两人协作管理同一个upstream远程仓库,本次操作同时fork.

#### 场景一:

现实中我们经常出现这种问题:A fork了远程upstream仓库,几天之后upstream仓库更新了新的版本,此时A的个人仓库与origin仓库已经落后,如果这个时候A 在落后的版本上继续commit,就会频频出错,那么A就需要更新本地仓库,在最新的基础上再操作.

#### 场景二:

A在最新的版本上进行了自己的修改,并且已经push到upstream仓库,此时upstream版本已被A更新. B想要同步A的此次更新需要fetch远程upstream仓库(此时local 已更新),再将local 仓库push到本地origin仓库.完成同步的操作.

###图形详解

![0](/Users/easemob/armory/git/images/0.png)

###实际操作

#### 获取代码库

##### 1 、 fork别人的仓库到自己的GitHub

![1](/Users/easemob/armory/git/images/1.png)

##### 2、将fork到的仓库clone到本地local

![2](/Users/easemob/armory/git/images/2.png)

#### 同步更新代码

因为fork并不能将所有东西都复制过来，这部操作只是获取到了路径，所以此时local仓库和upstream远程仓库并不同步，想同步需要fetch

##### 3、使A local仓库和远程upstream仓库的master分支同步

```
$ git fetch upstream
$ git rebase upstream/master
```

##### 4、A在本地对代码进行修改之后，在SmartGit进行commit提交操作，然后push到自己的origin仓库

![3](/Users/easemob/armory/git/images/3.png)

```
$ git push origin master
```

##### 5、去GitHub提pr

![4](/Users/easemob/armory/git/images/4.png)

![5](/Users/easemob/armory/git/images/5.png)

![6](/Users/easemob/armory/git/images/6.png)

到此就已经完成了所有操作，如果原作者同意你的pr申请，你就成功的对upstream的代码进行了修改

##### 6、B想要更新到upstream仓库的最新版本，就必须在终端进行fetch,rebase等操作(同上3)

##### 7、B的local仓库已同步,需要将最新版本push到B自己的origin仓库,使origin仓库更新


