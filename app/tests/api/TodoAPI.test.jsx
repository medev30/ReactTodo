var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    // runs before each test
    beforeEach(() =>{
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            var todos = [{
                id: 23,
                text: 'new todo',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            // toBe - comares if it's the same object
            // toEqual compares values of [] and {}
            expect(actualTodos).toEqual(todos);
        });

        it('should NOT set valid todos array', () => {
            var badTodos = { a: 'test'};
            TodoAPI.setTodos(badTodos);

            // if no Item, localStorage = null
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad localStorage data', () => {
            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual([]);
        });

        it('should return todo if valid array in localStorage', () => {
            var todos = [{
                id: 23,
                text: 'new todo',
                completed: false
            }];
            // set item directly using localStorage method
            localStorage.setItem('todos', JSON.stringify(todos));

            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterTodos', () => {
        var todos = [{
            id: 1,
            text: 'Some text here',
            completed: true
        }, {
            id: 2,
            text: 'Clean the dog',
            completed: false
        }, {
            id: 3,
            text: 'Some more text here',
            completed: true
        }];

        it('should return all items if showCompleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return non-completed todos when showCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status' , () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            // the first item in the array completed status should be false
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filteredTodos.length).toBe(2);
        });

        it('should return all todos if searchText is empty', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

    });
});
