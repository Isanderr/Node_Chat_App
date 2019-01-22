var moment = require('moment');

var date = moment(createdAt);
console.log(date.format('HH:mm'));