import React, { useState } from 'react';
import Modal from '../fullScreenModal/modal';

const AddUser = ({ setUsers, showUserModal, setShowUserModal }) => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");


    function submit(e) {
        e.preventDefault();
        const user = { name, mobile };
        setUsers((prev) => [...prev, user]);
        setName("");
        setMobile("")
        setShowUserModal(false)
    }
    return (
        <div>
            <Modal isOpen={showUserModal} onClose={() => setShowUserModal(false)}>
                <form onSubmit={submit}>
                    <label>
                        Username: <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Mobile: <input type='text' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </label>
                    <button>Submit</button>
                </form>

            </Modal>


        </div>
    )
}

export default AddUser