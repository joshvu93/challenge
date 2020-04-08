import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', grade: '' }
	const [ student, setStudent ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setStudent({ ...student, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!student.name || !student.grade) return

				props.addStudent(student)
				setStudent(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={student.name} onChange={handleInputChange} />
			<label>Math</label>
			<input type="text" name="grade" value={student.Math} onChange={handleInputChange} />
			<label>History</label>
			<input type="text" name="grade" value={student.History} onChange={handleInputChange} />
			<label>Science</label>
			<input type="text" name="grade" value={student.Science} onChange={handleInputChange} />
			<label>English</label>
			<input type="text" name="grade" value={student.English} onChange={handleInputChange} />
			<button>Add New Student</button>
		</form>
	)
}

export default AddUserForm