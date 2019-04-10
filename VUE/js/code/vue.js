<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <!-- view -->
    <div id="app">
        <div>
            <input v-model="title">
            <button v-on:click ="add">submit</button>
        </div>
        <ul>
            <li  v-for = "item in list">{{item}}</li>
        </ul>
    </div>
    <script type="text/javascript" src="js/vue.js"></script>
    <script type="text/javascript">
    // model
        var data = {
            title:'',
            list:[]
        },
        // viewmodel
        var vm = new Vue({
            el:"#app",
            data: data,
            methods: {
                add:function(){
                    this.list.push(this.title)
                    this.title = ''
                }
            }
        })
    </script>
</body>
</html>