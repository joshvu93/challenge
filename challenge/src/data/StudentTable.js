import React from 'react'
import GPA from './GPA'

const StudentTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Math</th>
        <th>History</th>
        <th>Science</th>
        <th>English</th>
        <th>GPA</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.students.length > 0 ? (
        props.students.map(student => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.grades[0].slice(-1)}</td>
            <td>{student.grades[1].slice(-1)}</td>
            <td>{student.grades[2].slice(-1)}</td>
            <td>{student.grades[3].slice(-1)}</td>
            <td><GPA grades={student.grades}/></td>
            <td>
              <button
                onClick={() => props.deleteStudent(student._id)}
                className="button muted-button">
                Delete
              </button>
            </td>
          </tr>
        )
        )
      ) : (
        <tr>
          <td colSpan={3}>No Students</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default StudentTable