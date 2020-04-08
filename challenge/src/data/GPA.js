function GPA(props) {
  const { grades } = props
  
  let gpaMath = []
  
  for (let i = 0 ; i < grades.length; i++) {
    if (grades[i].slice(-1) === 'A') {
      gpaMath.push(4)
    }
    if (grades[i].slice(-1) === 'B') {
      gpaMath.push(3)
    }
    if (grades[i].slice(-1) === 'C') {
      gpaMath.push(2)
    }
    if (grades[i].slice(-1) === 'D') {
      gpaMath.push(1)
    }
    if (grades[i].slice(-1) === 'F') {
      gpaMath.push(0)
    }
  }
  let gpaResult = gpaMath.reduce((a, b) => a + b)/4

  return (gpaResult.toFixed(1))

}

export default GPA