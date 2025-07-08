const { format } = require('date-fns'); // Display format for date.
const {v4: uuid } = require('uuid'); // Displays the entry id for each time.

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log(uuid());