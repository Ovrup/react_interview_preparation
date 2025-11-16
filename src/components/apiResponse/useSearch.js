import React, { useState } from "react";


export function useSearch(users) {

    const [query, setQuery] = useState("");

    let filteredUsers = users.filter((user) => {
        return user.firstName.toLowerCase().includes(query.toLowerCase()) ||
            user.lastName.toLowerCase().includes(query.toLowerCase()) ||
            user.email.toLowerCase().includes(query.toLowerCase()) ||
            user.city.toLowerCase().includes(query.toLowerCase()) ||
            user.company.toLowerCase().includes(query.toLowerCase())
    });

    function filterUserData(q) {
        setQuery(q);
    }


    return { filteredUsers, filterUserData }
}