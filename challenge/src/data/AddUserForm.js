import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', grades: '' }
	const [ student, setStudent ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setStudent({ ...student, [name]: value })
	}

	return (
		<form
			onSubmit={() => {
				// event.preventDefault()
				// if (!student.name || !student.grades)
				
				// return
				props.addStudent(student)
			// 	setStudent(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={student.name} onChange={handleInputChange} />
			<label>Math</label>
			<input type="text" name="grade" value={student.grades[0]} onChange={handleInputChange} />
			<label>History</label>
			<input type="text" name="grade" value={student.grades[1]} onChange={handleInputChange} />
			<label>Science</label>
			<input type="text" name="grade" value={student.grades[2]} onChange={handleInputChange} />
			<label>English</label>
			<input type="text" name="grade" value={student.grades[3]} onChange={handleInputChange} />
			<button>Add New Student</button>
		</form>
	)
}

export default AddUserForm