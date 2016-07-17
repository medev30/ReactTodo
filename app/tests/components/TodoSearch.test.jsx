var React = require('React');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch with entered input text', () => {
        var searchText = 'Dog';
        // spy allows to pass a function to the component and test that it is called
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        // change the value of text input field
        todoSearch.refs.searchText.value = searchText;
        // simulate the change of text
        TestUtils.Simulate.change(todoSearch.refs.searchText);
// at this point the spy should have been called with showCompleted = false and searchText = 'Dog'
// so now we test for this
        expect(spy).toHaveBeenCalledWith(false, 'Dog');


    });

    it('should call onSearch with proper checked value', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });
});
