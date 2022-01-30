const Expense = require('../models/expenseModel');

//add expense
exports.addExpense = async (req, res) => {

    //validate request
    if (!req.body.expenseTitle) return res.status(400).send({ message: 'expense title required' })
    if (!req.body.amount) return res.status(400).send({ message: 'input expense amount' })

    try {
        //check if expense already exists
        const result = await Expense.findOne({ expenseTitle: req.body.expenseTitle })
        if (result) return res.status(500).send({ message: 'expense already exists' })

        //save expense if it does not exist
        const expense = new Expense(req.body)
        const savedExpense = await expense.save()

        res.status(201).send(savedExpense)

    } catch (err) {
        return res.json(err.message)
    }
}

//delete expense
exports.deleteExpense = async (req, res) => {

    //validate request
    if (!req.body.expenseTitle) return res.status(400).send({ message: 'expense title required' })

    try {
        //check if expense does not exist
        const result = await Expense.findOne({ expenseTitle: req.body.expenseTitle })
        if (!result) return res.status(500).send({ message: 'expense does not exists' })

        expense = await Expense.findOneAndDelete({ expenseTitle: req.body.expenseTitle })
        if (expense) return res.status(201).send({ message: "expense deleted" })

    } catch (err) {
        return res.json(err.message)
    }
}

//update expense
exports.updateExpense = async (req, res) => {

    //validate request
    if (!req.body.expenseTitle) return res.status(400).send({ message: 'expense title required' })

    try {
        //check if expense does not exist
        const result = await Expense.findOne({ expenseTitle: req.body.expenseTitle })
        if (!result) return res.status(500).send({ message: 'expense does not exists' })

        expense = await Expense.findOneAndUpdate(req.body.expenseTitle,
            {
                amount: req.body.amount,
                expenseType: req.body.expenseType
            },
            { new: true })

        if (expense) return res.status(201).send({ message: "expense updated" })

    } catch (err) {
        return res.json(err.message)
    }
}

//homepage
exports.home = (req, res) => {
    res.send('<h1>Expense Tracker</h1>')
}