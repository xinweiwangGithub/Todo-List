var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

var createItem = function(req, res) {
	new Todo({
		content: req.body.content,
		updated_at: Date.now()
	}).save(function(err, todo, count){
		res.redirect('/');
	});
};

var displayAll = function(req, res) {
	Todo.find(function(err, todos, count){
		res.render('index', {
			title: 'Express Todo Demo',
			todos: todos
		});
	});
};

var displaySort = function(req, res) {
	Todo.find().sort('-updated_at').exec(function(err, todos){
		res.render('index', {
			title: 'Express Todo Demo',
			todos: todos
		});
	});
}

var deleteItem = function(req, res) {
	Todo.findById(req.params.id, function(err, todo){
		todo.remove(function(err, todo){
			res.redirect('/');
		});
	});
}

var editItem = function(req, res) {
	Todo.find(function(err, todos){
		res.render('edit', {
			title: 'Express Todo Demo',
			todos: todos,
			current: req.params.id
		});
	});
}

var editItemSort = function(req, res) {
	Todo.find().sort('-updated_at').exec(function(err, todos){
		res.render('edit', {
			title: 'Express Todo Demo',
			todos: todos,
			current: req.params.id
		});
	});
}

var updateItem = function(req, res) {
	Todo.findById(req.params.id, function(err, todo){
		todo.content = req.body.content;
		console.log("content: ", todo.content);
		todo.updated_at = Date.now();
		todo.save(function(err, todo, count){
			res.redirect("/");
		});
	});
}

exports.createItem = createItem;
exports.displayAll = displaySort;
exports.deleteItem = deleteItem;
exports.editItem = editItemSort;
exports.updateItem = updateItem;

