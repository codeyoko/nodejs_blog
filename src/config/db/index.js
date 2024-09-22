// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Demo_mongo_dev');
        console.log('connect successfully!');
    } catch (err) {
        console.error('connect error! please try again');
    }
}

module.exports = { connect };
