var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on onAddTodo', () => {
        var todoText = 'test';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        // set todos arr to empty
        todoApp.setState({todos: []});
        // add new todo // -> our state should be updated and have only one item
        todoApp.onAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);
    });

    it('should toggle Completed value when onToggle called', () => {
        // dummy todo
        var todoData = {
            id: 11,
            text: 'Test',
            completed: false
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        // check that first todo has completed = false
        expect(todoApp.state.todos[0].completed).toBe(false);
        // call onToggle with id: 11 -> this should change the completed to True
        todoApp.onToggle(11);
        // verify that completed = true;
        expect(todoApp.state.todos[0].completed).toBe(true);
    });
});
