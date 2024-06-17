import React, { useEffect, useState } from "react";
import Table from "./tableData";

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUserData()
    }, []);

    const getUserData = async () => {
        let res = await fetch("https://dummyjson.com/users");
        let data = await res.json();

        data.users = data.users.map((user) => {
            return {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                city: user.address.city,
                latitude: user.address.coordinates.lat,
                company: user.company.address.address
            }
        });
        console.log(data.users);
        setUsers(data.users)
    }

    return <>
        <Table users={users} setUsers={setUsers} />
    </>
}

export default UserList;