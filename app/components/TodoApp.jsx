var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
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
    render: function() {
        var {todos} = this.state;

        return (
            <div>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.onAddTodo} />
            </div>
        );
    }

});

module.exports = TodoApp;
