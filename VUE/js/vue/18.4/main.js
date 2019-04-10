var app = new Vue({
    el:'#app',
    methods:{
        onClick: function(){
            console.log('clicked');
        },
        onEnter: function(){
            console.log('mouseon');
        },
        onOut: function(){
            console.log('mouseout');
        },
        onSubmit: function(e){
            // e.preventDefault();
            console.log('submit');
        },
        // onkeyUp: function(){
        //     console.log('key pressed');
        // },
        onEnter: function(){
            console.log('entered');
        },
    }
})
