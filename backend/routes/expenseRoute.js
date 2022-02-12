const expense = require('../controllers/expenseController')
const router = require('express').Router()
const { verifyToken } = require('../utils/verifyToken')

//add expense
router.post('/expense/add', verifyToken, expense.addExpense)

//delete expense
router.delete('/expense/delete', verifyToken, expense.deleteExpense)

//update expense
router.put('/expense/update', verifyToken, expense.updateExpense)

module.exports = router