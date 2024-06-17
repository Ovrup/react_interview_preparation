import React, { useState } from 'react'

const TableHead = ({ columns, sortTableData }) => {
    const [sortKey, setSortKey] = useState("");
    const [sortType, setSortType] = useState("asc")
    return (

        <thead>
            <tr>
                {columns.map((col) => {
                    return <td onClick={() => sortTableData(col.accesor, sortType === "asc" ? "desc" : "asc")}>{col.label}</td>
                })}
            </tr>
        </thead>

    )
}

export default TableHead