import React, { useState, useEffect } from 'react'

const EditStudentForm = props => {
  const [ student, setStudent ] = useState(props.currentStudent)

  useEffect(
    () => {
      setStudent(props.currentStudent)
    },
    [ props ]
  )
  
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
      <label>Math</label>
			<input type="text" name="math" value={student.math} onChange={handleInputChange} />
			<label>History</label>
			<input type="text" name="history" value={student.history} onChange={handleInputChange} />
			<label>Science</label>
			<input type="text" name="science" value={student.science} onChange={handleInputChange} />
			<label>English</label>
			<input type="text" name="english" value={student.english} onChange={handleInputChange} />
      <button>Update Student</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditStudentForm