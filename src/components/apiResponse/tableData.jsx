import React, { useState } from 'react';
import TableBody from './tableBody';
import TableHead from './tableHead';
import './tableData.css'
import { useSearch } from './useSearch';

const Table = ({ users, setUsers }) => {
    const columns = [
        { label: "First Name", accesor: "firstName" },
        { label: "Last Name", accesor: "lastName" },
        { label: "Email", accesor: "email" },
        { label: "City", accesor: "city" },
        { label: "Latitude", accesor: "latitude" },
        { label: "Company Name", accesor: "company" }
    ]

    const { filteredUsers, filterUserData } = useSearch(users);
    const pageSize = 10;
    const pageCount = Math.ceil(filteredUsers.length / pageSize);
    const [selectedPage, setSelectedPage] = useState(0);

    function sortTableData(key, sortType) {
        // const tempSorted = JSON.parse(JSON.stringify(filteredUsers));
        console.log("sorting", key, sortType);

        filteredUsers = filteredUsers.sort((a, b) => a[key].localeCompare(b[key]) * (sortType === "asc" ? 1 : -1));
    }


    return (
        <>
            <div className='table-container'>
                <input type="search" placeholder='Serach by keywords' onChange={(e) => filterUserData(e.target.value)} />
                <table>
                    <TableHead columns={columns} sortTableData={sortTableData} />
                    <TableBody columns={columns} data={filteredUsers} pageSize={pageSize} selectedPage={selectedPage} />

                </table>
                {/* <Pagination filteredUsers={filteredUsers} /> */}
                <div className='pagination-container'>
                    {Array.from({ length: pageCount }, (_, i) => i + 1).map((page, idx) => {
                        return <div
                            key={idx}
                            className={`page-box ${idx === selectedPage ? "active" : ""}`}
                            onClick={() => setSelectedPage(idx)}
                        >
                            {page}
                        </div>
                    })}
                </div>

            </div>
        </>
    )
}

export default Table;