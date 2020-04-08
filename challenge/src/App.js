import React, { useState }  from 'react'
import AddUserForm from './data/AddUserForm'
import EditUserForm from './data/EditUserForm'
import StudentTable from './data/StudentTable'
// import data from './data/students.json'

const App = () => {
  const studentData = [		
    { id: 1, name: 'Tania', grade: ["Math - A", "History - B", "Science - A", "English - B"] },
    { id: 2, name: 'Craig', grade: ["Math - A", "History - B", "Science - A", "English - B"] },
    { id: 3, name: 'Ben', grade: ["Math - A", "History - B", "Science - A", "English - B"] },
]

  const initalFormState = {id: null, name: '', math: '', history: '', science: '', english: ''}

  const [students, setStudents] = useState(studentData)
  const [currentStudent, setCurrentStudent] = useState(initalFormState)
  const [editing, setEditing] = useState(false)

  const addStudent = student => {
    student.id = student.length + 1
    setStudents([...students, student])
  }

  const deleteStudent = id => {
    setEditing(false)

    setStudents(students.filter(student => student.id !== id))
  }

  const updateStudent =(id, updatedStudent) => {
    setEditing(false)

    setStudents(students.map(student => (student.id === id ? updatedStudent : student)))
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
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentStudent={currentStudent}
								updateStudent={updateStudent}
							/>
						</React.Fragment>
					) : (
						<React.Fragment>
							<h2>Add Student</h2>
							<AddUserForm addStudent={addStudent} />
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