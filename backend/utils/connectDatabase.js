const mongoose = require('mongoose');

//connect to database
const connectDatabase = () => {

    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log('Database connected')
        }).catch((err) => {
            console.log(err)
        });
};

module.exports = connectDatabase;