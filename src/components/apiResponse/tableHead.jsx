import React, { useState } from 'react'

const TableHead = ({ columns, sortTableData }) => {
    const [sortKey, setSortKey] = useState("");
    const [sortType, setSortType] = useState("asc")
    return (

        <thead>
            <tr>
                {columns.map((col) => {
                    return <th key={col.accesor} onClick={() => sortTableData(col.accesor, sortType === "asc" ? "desc" : "asc")}>{col.label}</th>
                })}
            </tr>
        </thead>

    )
}

export default TableHead