import React, { useState } from "react";


export function useSearch(users) {

    const [query, setQuery] = useState("");

    let filteredUsers = users.filter((user) => user.firstName.toLowerCase().includes(query.toLowerCase()));

    function filterUserData(q) {
        setQuery(q);
    }


    return { filteredUsers, filterUserData }
}