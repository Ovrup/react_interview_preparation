import React from 'react'

const TableBody = ({ columns, data, pageSize, selectedPage }) => {

    return (
        <tbody>
            {data.slice(selectedPage * pageSize, (selectedPage + 1) * pageSize).map((user) => {
                return <tr key={user.id}>{columns.map((col) => {
                    return <>
                        <td>{user[col.accesor]}</td>
                    </>
                })}
                </tr>
            })}
        </tbody>
    )
}

export default TableBody