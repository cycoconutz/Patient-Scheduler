import React, { Component } from 'react'

export default class Patients extends Component {
  render() {
    const patients = [
        {
            name: "Abbey",
            times: ["8am-9am ", "9am-10am ", "11am-12pm "],
            days: ["Monday ", "Tuesday ", "Thursday "],
            visits: 1

        },
        {
            name: "Billy",
            times: ["12pm-1pm"],
            days: ["Monday ", "Wednesday ", "Thursday "],
            visits: 2
        },
        {
            name: "Chuck",
            times: ["12pm-1pm ", "1pm-2pm "],
            days: ["Monday ", "Tuesday ", "Friday "],
            visits: 3

        },
    ]

    return (
        <aside>
        <h1>Patients:</h1>
            <ul>{patients.map((patients)=>
                <li>Name: {patients.name} <br></br>Visits: {patients.visits} <br></br> Days: {patients.days} <br></br> Times: {patients.times} <br></br></li>)}
            </ul>
        </aside>
        )
  }
}
