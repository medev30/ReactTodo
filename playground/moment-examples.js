var moment = require('moment');

console.log(moment().format());

// unix time is 1 January 1970 @ 12:00am = 0

var now = moment();
console.log('Current time', now.unix());

var timestamp = 1468814888;

var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format());

// 2016-07-18T14:11:12+10:00
// Current time 1468815072
// Current moment 2016-07-18T14:08:08+10:00

console.log('Current moment formated', currentMoment.format('MMM D, YY @ h:mm a'));
// Current moment formated Jul 18, 16 @ 2:08 pm

console.log('New moment formated', currentMoment.format('MMMM Do, YYYY @ H:mm A'));
// New moment formated July 18th, 2016 @ 14:08 PM

console.log('New moment formated', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
// New moment formated July 18th, 2016 @ 2:08 PM
