const mongoose = require('mongoose');

const connect = async ()=> {
    try {
        const db = await mongoose.connect(process.env.DB_URL);
        const {name, host} = db.connection;
    } catch (error) {
        console.log(`Error connecting to DDBB ${error}`);
    }
};

module.exports = {connect}