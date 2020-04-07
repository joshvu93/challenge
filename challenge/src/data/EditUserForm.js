import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ student, setStudent ] = useState(props.currentStudent)

  useEffect(
    () => {
      setStudent(props.currentStudent)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setStudent({ ...student, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateStudent(student.id, student)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={student.name} onChange={handleInputChange} />
      <label>Grade</label>
      <input type="text" name="grade" value={student.grade} onChange={handleInputChange} />
      <button>Update Student</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm