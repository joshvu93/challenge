import React, { useState }  from 'react'
import AddStudentForm from './data/AddStudentForm'
import EditStudentForm from './data/EditStudentForm'
import StudentTable from './data/StudentTable'
import data from './data/students'

const App = () => {
  const initalFormState = {id: null, name: '', grades: ''}

  const [students, setStudents] = useState(data.data)
  const [currentStudent, setCurrentStudent] = useState(initalFormState)
  const [editing, setEditing] = useState(false)

	const addStudent = newStudentObj => {
		console.log(newStudentObj)
		setStudents([...students, newStudentObj])
	}

  const deleteStudent = id => {
    setEditing(false)

    setStudents(students.filter(student => student._id !== id))
  }

  const updateStudent =(id, updatedStudent) => {
    setEditing(false)

    setStudents(students.map(student => (student._id === id ? updatedStudent : student)))
  }

  const editRow = student => {
		setEditing(true)

		setCurrentStudent({ id: student.id, name: student.name, grade: student.grade })
	}

  return (
		<div className="container">
			<h1>Admin Dashboard</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<React.Fragment>
							<h2>Edit Student</h2>
							<EditStudentForm
								editing={editing}
								setEditing={setEditing}
								currentStudent={currentStudent}
								updateStudent={updateStudent}
							/>
						</React.Fragment>
					) : (
						<React.Fragment>
							<h2>Add Student</h2>
							<AddStudentForm addStudent={addStudent} />
						</React.Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View Students</h2>
					<StudentTable students={students} editRow={editRow} deleteStudent={deleteStudent} />
				</div>
			</div>
		</div>
	)
}

export default App