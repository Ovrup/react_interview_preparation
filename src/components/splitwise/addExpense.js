import React, { useState } from 'react';
import Modal from '../fullScreenModal/modal';

const AddExpense = ({ users, showExpenseModal, setShowExpenseModal }) => {

    const [selectedUsers, setSelectedUsers] = useState([]);
    const activeUser = localStorage.getItem("user")

    function submit(e) {
        e.preventDefault();
        selectedUsers((prev) => [...prev, { name: activeUser, mobile: "" }])
        setShowExpenseModal(false)
    }
    function addExpenseUsers(name) {
        const expenseUsers = users.find((user) => user.name === name);
        setSelectedUsers((prev) => [...prev, expenseUsers])
    }
    return (
        <div>
            <Modal isOpen={showExpenseModal} onClose={() => setShowExpenseModal(false)}>
                <div>
                    <select onChange={(e) => addExpenseUsers(e.target.value)}>
                        <option>Select User...</option>
                        {
                            users.map((user) => {
                                return <option>{user.name}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    {selectedUsers.map((user) => {
                        return <div>{user.name}</div>
                    })}
                </div>
                <form onSubmit={submit}>
                    <label>
                        Description: <input type='text' />
                    </label>
                    <label>
                        Amount: <input type='text' />
                    </label>
                    <button>Submit</button>
                </form>

            </Modal>
        </div>
    )
}

export default AddExpense