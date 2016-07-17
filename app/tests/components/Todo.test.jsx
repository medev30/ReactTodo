var React = require('React');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var Todo = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle with id, when clicked', () => {
        // dummy todo
        var todoData = {
            id: 199,
            text: 'Test',
            completed: true
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

        // load jQuery and pass todo component
        var $el = $(ReactDOM.findDOMNode(todo));

        // simulate click event -> pass the root element of Todo, which is <div>
            TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(199);
    });
});
