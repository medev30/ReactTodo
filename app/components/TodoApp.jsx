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
                    text: 'Walk the dog'
                }, {
                    id: uuid(),
                    text: 'Clean the dog'
                }, {
                    id: uuid(),
                    text: 'Walk the cat'
                }, {
                    id: uuid(),
                    text: 'Learn React'
                }            ]
        };
    },
    onAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text
                }
            ]
        })
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
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.onAddTodo} />
            </div>
        );
    }

});

module.exports = TodoApp;
