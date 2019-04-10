Vue.component('alert',{
    template: '<button @click="on_click">谭谭谭</button>',
    methods:{
        on_click: function(){
            alert('hhh');
        }
    }
});
new Vue({
    el: "#seg1",
    components:{
        alert:{
            template: '<button @click="on_click">999</button>',
            methods:{
                on_click: function(){
                    alert('7890');
                }
            }
        }
    }
  
});
new Vue({
    el: '#seg2',
    components:{
        alert:Alert_component,
    }
});
var Alert_component = {
    template: '<button @click="on_click">999</button>',
        methods:{
            on_click: function(){
                alert('7890');
            }
        }
}