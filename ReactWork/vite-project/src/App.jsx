import React from 'react'
import Student from './Student';
function App() {
  const h1=<h1> Hello world </h1>;
  const mystyle={
    color:'yellow',
    backgroundColor:'blue'
  }
  return (
    <div style={{ backgroundColor: 'red' }}>
    <h1>Abes Engineering College</h1>
    <div style={mystyle}>
      Abes Engineering College
    </div>
    <div style={{display:'flex'}}>
      
    <Student 
  college="Abes Engineering College"
  name="Rahul"
  pic={<img src="Harsh/ReactWork/vite-project/src/srixner.png" alt="Student" />}
  branch="CSE"
  section="A"
  rollno="123" 
/>

<Student 
  college="Abes Engineering College"
  name="Ram"
  pic={<img src="Harsh/ReactWork/vite-project/src/srixner.png" alt="Student" />}
  branch="CS"
  section="A"
  rollno="124" 
/>

    </div>
  </div>
  
  
   
  )
}
export default App
