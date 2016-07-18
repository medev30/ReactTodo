var $ = require('jQuery');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            // save our todos array in the browser storage under the name 'todos'. Array is converted to string.
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;   // if todos is invalid - 'undefined' is returned
        }
    },
    getTodos: function () {
        // get all items saved in the browser under the name 'todos'
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            // convert string to array. If it fails then catch will run
            todos = JSON.parse(stringTodos);
        } catch (e) {
            // runs if error -> nothing to run here
        }
        // check if array
        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function (todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            // if true, the item will stay in the array
            return !todo.completed || showCompleted;
        });

        // filter by searchTex  // if true, the item will stay in the array
        filteredTodos = filteredTodos.filter((todo) => {
            var text = todo.text.toLowerCase();

            // return true if no searchText or if text is found
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        // sort todos with non-completed first
        // if return -1 -> A comes before B, if return 1 - B first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {  // a = false and b = true
                return -1;
            } else if (a.completed && !b.completed) {   // a = true and b = false
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
};

//
// todos: [
//     {
//         id: uuid(),
//         text: 'Walk the dog',
//         completed: false
//     }, {
//         id: uuid(),
//         text: 'Clean the dog',
//         completed: true
//     }, {
//         id: uuid(),
//         text: 'Walk the cat',
//         completed: true
//     }, {
//         id: uuid(),
//         text: 'Learn React',
//         completed: false
//     }
// ]
