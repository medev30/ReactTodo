var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
// import {Route, Router, IndexRoute, hashHistory, browserHistory} from 'react-router';

var TodoApp = require('TodoApp');

// Load Foundation
// require('style!css!foundation-sites/dist/foundation.min.css') // replaced by sassLoader in webpack.config.js
$(document).foundation();

// Load css
require('style!css!sass!appStyles');

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);
