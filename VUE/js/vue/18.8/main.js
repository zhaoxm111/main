var app = new Vue({
    el : "#app",
    data:{
        math:90,
        yingyu:89,
        yuwen:77,
        
    },
    computed:{
        sum: function(){
            return parseFloat(this.math) + parseFloat(this.yingyu) + parseFloat(this.yuwen);
        },
        average: function() {
            return Math.round(this.sum / 3);
        
        }
    },
   
})