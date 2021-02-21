import React, { useState, useContext } from 'react'
import { Input, Button } from 'antd'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const { transactions, addTransaction } = useContext(GlobalContext)
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const handleAddTransaction = () => {
        console.log(text)
        console.log(amount)
        let newTransaction = {
            id: Math.floor(Math.random() * 1000),
            text,
            amount: parseFloat(amount)
        }
        addTransaction(newTransaction)

    }
    return (
        <div>
            <h3>Add Transaction</h3>
            <div style={{ marginBottom: 16 }}>
                <Input value={text} onChange={e => setText(e.target.value)} addonBefore="Text" />
            </div>
            <div style={{ marginBottom: 16 }}>
                <Input type='number' value={amount} onChange={e => setAmount(e.target.value)} addonBefore="Amount" />
            </div>
            <Button onClick={handleAddTransaction}>Add Transaction</Button>
        </div>
    )
}

export default AddTransaction
