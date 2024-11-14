import React from 'react'
import './Student.css';

function Student({ data }) {
  return (
    <div className="icard">
      {/* Uncomment this line to see the raw JSON data: */}
      {/* {JSON.stringify(data)} */}
      <table>
        <tbody>
          <tr>
            <td colSpan={2}>{data.college}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Branch:</td>
            <td>{data.branch}</td>
          </tr>
          <tr>
            <td>Section:</td>
            <td>{data.section}</td>
          </tr>
          <tr>
            <td>Roll No:</td>
            <td>{data.rollno}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// Student.defaultProps={
//   college:"akg Engineering college"
// }
export default Student