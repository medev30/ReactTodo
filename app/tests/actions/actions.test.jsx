var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
    it('should generate SET_SEARCH_TEXT action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };
        var res = actions.setSearchText(action.searchText);

        expect(res).toEqual(action);
    });

    it('should generate ADD_TODO action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'New todo'
        };
        var res = actions.addTodo(action.text);

        expect(res).toEqual(action);
    });

    it('should generate TOGGLE_SHOW_COMPLETED action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED',
        };
        var res = actions.toggleShowCompleted();

        expect(res).toEqual(action);
    });

    it('should generate TOGGLE_TODO action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: 2
        };
        var res = actions.toggleTodo(action.id);

        expect(res).toEqual(action);
    });
});
