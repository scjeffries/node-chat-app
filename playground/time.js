const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

const date = moment();  // current point in time
moment().valueOf();  // return timestamp in ms since epoch
date.add(100, 'years').subtract(9, 'months');  // can add & subtract time periods
console.log(date.format('MMM Do YYYY hh:mm:ss A'));  // format dates however you want
console.log(date.format('h:mm a'))