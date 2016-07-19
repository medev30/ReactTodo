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

        // expect createdAt to be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number');


    });

    it('should toggle Completed value when onToggle called', () => {
        // dummy todo
        var todoData = {
            id: 11,
            text: 'Test',
            completed: false,
            createdAt: 0,
            completedAt: null
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        // check that first todo has completed = false
        expect(todoApp.state.todos[0].completed).toBe(false);
        // call onToggle with id: 11 -> this should change the completed to True
        todoApp.onToggle(11);
        // verify that completed = true;
        expect(todoApp.state.todos[0].completed).toBe(true);

        // expect completedAt to be a number
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    it('should toggle todo from Completed to incompleted', () => {
        // dummy todo
        var todoData = {
            id: 11,
            text: 'Test',
            completed: true,
            createdAt: 0,
            completedAt: 123
        };
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        // check that first todo has completed = true
        expect(todoApp.state.todos[0].completed).toBe(true);
        // call onToggle with id: 11 -> this should toggle the completed status
        todoApp.onToggle(11);
        // verify that completed = false;
        expect(todoApp.state.todos[0].completed).toBe(false);

        // expect completedAt to be removed (because it's been just toggled to false)
        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
});
