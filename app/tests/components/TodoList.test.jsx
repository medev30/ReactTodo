var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: 'Do something'
        }, {
            id: 2,
            text: 'Do somthing else'
        }];

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        // how many components (e.g. Todo) are rendered under a separate component (e.g. todoList)
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render empty message if no todos', () => {
        var todos = [];

        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        // load DOM
        var $el = $(ReactDOM.findDOMNode(todoList));
        // find element and check if exists
        expect($el.find('.container__message').length).toBe(1);
    });
});
