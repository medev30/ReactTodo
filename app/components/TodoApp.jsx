var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the dog'
                },
                {
                    id: 3,
                    text: 'Walk the cat'
                }
            ]
        };
    },
    onAddTodo: function (text) {
        alert('You entered: ' + text)
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
