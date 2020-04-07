import React from 'react'

const StudentTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Grades</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.students.length > 0 ? (
        props.students.map(student => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.grade}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(student)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteStudent(student.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Students</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default StudentTable