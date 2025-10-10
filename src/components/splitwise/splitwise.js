import React, { useEffect, useState } from 'react'
import AddUser from './addUser'
import AddExpense from './addExpense';

const Splitwise = () => {

    const [users, setUsers] = useState([]);
    const [showUserModal, setShowUserModal] = useState(false);
    const [showExpenseModal, setShowExpenseModal] = useState(false);

    return (
        <div>
            <button onClick={() => setShowUserModal(true)}>Add User</button>
            <button onClick={() => setShowExpenseModal(true)}>Add Expense</button>

            <div>{users.map((user) => {
                return <div>{user.name}</div>
            })}
            </div>
            <AddUser setUsers={setUsers} showUserModal={showUserModal} setShowUserModal={setShowUserModal} />
            <AddExpense users={users} showExpenseModal={showExpenseModal} setShowExpenseModal={setShowExpenseModal} />
        </div>
    )
}

export default Splitwise