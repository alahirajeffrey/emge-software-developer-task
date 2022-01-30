const expense = require('../controllers/expenseController')
const router = require('express').Router()

//add expense
router.post('/expense/add', expense.addExpense)

//delete expense
router.delete('/expense/delete', expense.deleteExpense)

//update expense
router.put('/expense/update', expense.updateExpense)

//homepage
router.get('/', expense.home)

module.exports = router