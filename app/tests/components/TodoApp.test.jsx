var React = require('React');
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
});
