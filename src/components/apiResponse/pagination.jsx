import React, { useState } from 'react'

const Pagination = ({ filteredUsers }) => {
    const pageSize = 10;
    const pageCount = Math.ceil(filteredUsers.length / pageSize);
    const [selectedPage, setSelectedPage] = useState(0);


    return (
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
    )
}

export default Pagination