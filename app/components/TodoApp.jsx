var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog',
                    completed: false
                }, {
                    id: uuid(),
                    text: 'Clean the dog',
                    completed: true
                }, {
                    id: uuid(),
                    text: 'Walk the cat',
                    completed: true
                }, {
                    id: uuid(),
                    text: 'Learn React',
                    completed: false
                }            ]
        };
    },
    onAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        })
    },
    onToggle: function (id) {
        var updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
    },
    onSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function() {
        var {todos} = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.onSearch} />
                <TodoList todos={todos} onToggle={this.onToggle}/>
                <AddTodo onAddTodo={this.onAddTodo} />
            </div>
        );
    }

});

module.exports = TodoApp;
