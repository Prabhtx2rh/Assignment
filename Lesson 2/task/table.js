function App() {

  let students = [
    {
    name: "Prabhat",
    age: 22,
    marks: 99
    },
    {
     name: "Prince",
    age: 22,
    marks: 98
    },
    {
    name: "Shobhit",
    age: 23,
    marks: 97
    }
  ]

  return (
  <>
  <h1>Students Details</h1>
<table>
  <thead> 
  <tr>
    <th>Students Name</th>
    <th>Age</th>
    <th>Marks</th>
  </tr>
  </thead>
  <tbody> 
   {students.map((student,index) => (
    <tr key={index}>
    <td>{student.name}</td>
    <td>{student.age}</td>
    <td>{student.marks}</td>
  </tr>
  ))}
  </tbody>
</table>

  </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
