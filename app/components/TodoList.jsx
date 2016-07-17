var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

    render: function() {
        var {todos} = this.props;

        var renderTodos = () => {
            return todos.map( (todo, index) => {
                return <Todo key={index} {...todo} onToggle={this.props.onToggle}/>
            });
        };

        // Alternative
        // var renderTodos = todos.map( (todo, index) => {
        //     return <Todo key={index} index={index} {...todo} onToggle={this.props.onToggle}/>
        // });

        return (
            <div>

                {renderTodos()}
                {/*{renderTodos}*/}
            </div>
        );
    }

});

module.exports = TodoList;
