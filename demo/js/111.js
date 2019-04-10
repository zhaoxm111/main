var CustomRouter = Backbone.Router.extend({
	routes: {
		'': 'index', // 当URL Hash在根目录时执行index方法：url#
		'list': 'getList', // 当URL Hash在list节点时执行getList方法：url#list
		'detail/:id': 'query', // 当URL Hash在detail节点时执行query方法，并将detail后的数据作为参数传递给query方法：url#list/1001
		'*error': 'showError' // 当URL Hash不匹配以上规则时, 执行error方法
	},
	index: function() {
		alert('index');
	},
	getList: function() {
		alert('getList');
	},
	query: function(id) {
		alert('query id: ' + id);
	},
	showError: function(error) {
		alert('error hash: ' + error);
	},
});
 
var custom = new CustomRouter();
Backbone.history.start();
