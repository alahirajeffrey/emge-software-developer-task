const mongoose = require('mongoose');

//user model
const ExpenseSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide your username'],
        unique: true
    },
    expenseTitle: {
        type: String,
        required: [true, 'Please provide a title'],
        min: 7
    },
    expenseType: {
        type: String,
        enum: ['Rent', 'Utility', 'Feeding', 'Education', 'Personal'],
        default: 'Personal'
    },
    amount: {
        type: Number,
        required: [true, 'Please provide an amount']
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Expense', ExpenseSchema)