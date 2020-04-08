import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', grades: '' }
	const [ newStudent, setNewStudent ] = useState('')
	const [ math, setMath ] = useState('')
	const [ history, setHistory ] = useState('')
	const [ science, setScience ] = useState('')
	const [ english, setEnglish ] = useState('')
	const handleInputChange = event => {
	const { name, value } = event.target
		
	switch (name) {
		case 'name':
			setNewStudent(event.target.value)
			break;
		case 'math':
			setMath(event.target.value)
			break;
		case 'history':
			setHistory(event.target.value)
			break;
		case 'science':
			setScience(event.target.value)
			break;
		case 'english':
			setEnglish(event.target.value)
			break;
		}
	}

return (
		<>
      <label>Name</label>
      <input type="text" name="name" value={newStudent.name} onChange={handleInputChange} />
      <label>Math</label>
      <input type="text" name="math" value={newStudent.math} onChange={handleInputChange} />
      <label>History</label>
      <input type="text" name="history" value={newStudent.history} onChange={handleInputChange} />
      <label>Science</label>
      <input type="text" name="science" value={newStudent.science} onChange={handleInputChange} />
      <label>English</label>
      <input type="text" name="english" value={newStudent.english} onChange={handleInputChange} />
      <button onClick={() =>props.addStudent({ _id: Math.random(), name: newStudent, grades: [`Math - ${math}`, `History - ${history}`, `Science - ${science}`, `English - ${english}`] })}>Add New Student</button>
    </>
  )
}
export default AddUserForm