import React, { useContext } from 'react'
import { List, Avatar } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { GlobalContext } from '../context/GlobalState'

const TansactionList = () => {

    const { transactions, deleteTransaction } = useContext(GlobalContext)
    console.log(transactions)
    const handleDelete = (id) => {
        deleteTransaction(id)
    }

    return (
        <div>
            <h3>History</h3>
            <List
                itemLayout="horizontal"
                dataSource={transactions}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={item.amount >= 0 ? < PlusCircleOutlined /> : <MinusCircleOutlined />}

                            title={<a>{item.text}</a>}
                        />
                        <div>{item.amount}</div>
                        <div className='deleteIcon'><DeleteOutlined onClick={e => handleDelete(item.id)} /></div>
                    </List.Item>
                )}
            />,
        </div>
    )
}

export default TansactionList
