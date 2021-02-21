import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions ? transactions.map(transaction => transaction.amount) : []
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2)
    const expense = (amounts.filter(item => item <= 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2)

    return (
        <div className='flex balance'>
            <div className='income'>
                <h3>Income</h3>
                <p>${income}</p>
            </div>
            <div className='expense'>
                <h3>Expense</h3>
                <p>${expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
