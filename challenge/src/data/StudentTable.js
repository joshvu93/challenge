import React from 'react'

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
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.students.length > 0 ? (
        props.students.map(student => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.grade[0]}</td>
            <td>{student.grade[1]}</td>
            <td>{student.grade[2]}</td>
            <td>{student.grade[3]}</td>
            <td>{student.grade[4]}</td>
            <td>{student.gpa}</td>
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