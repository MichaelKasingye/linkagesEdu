import React from 'react'
import style from "../styles/body/table.module.css";

function table() {
    return (
        <div className={style.container}>
            <table className={style.table}>
    <thead className={style.tableHead}>
        <tr >
            <th>Name</th>
            <th>First Name</th>
            <th>First Name</th>
        </tr>
    </thead>
    <tbody className={style.tableBody}>
        <tr>
            <td>Doeqqqqqqqqqqqqqqqqqqqqqqqq</td>
            <td>John</td>
            <td>Johnsssssssss</td>
        </tr>
        <tr >
            <td>Doe</td>
            <td>Jane</td>
            <td>John</td>
        </tr>
        <tr >
            <td>Doe</td>
            <td>Jane</td>
            <td>Johnss</td>
        </tr>
        <tr >
            <td>Doe</td>
            <td>Janessssssssssssssssssssss</td>
            <td>John</td>
        </tr>
        <tr >
            <td>Doe</td>
            <td>Jane</td>
            <td>John</td>
        </tr>
        <tr >
            <td>Doe</td>
            <td>Jane</td>
            <td>John</td>
        </tr>
    </tbody>
</table>
        </div>
    )
}

export default table
