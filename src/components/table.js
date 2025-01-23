import react from 'react';
import './table.css';

const Table = (props) => {
  return (
    <table id='table' border='3'>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>GPA</th>
        </tr>
        <tr>
            <td>{props.name1}</td>  
            <td>{props.age1}</td>
            <td>{props.gpa1}</td>
        </tr>
        <tr>
            <td>{props.name2}</td>  
            <td>{props.age2}</td>
            <td>{props.gpa2}</td>
        </tr>
        <tr>
            <td>{props.name3}</td>  
            <td>{props.age3}</td>
            <td>{props.gpa3}</td>
        </tr>
    </table>
  )
};

export default Table;