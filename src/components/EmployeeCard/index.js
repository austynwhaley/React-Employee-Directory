import React from 'react';

function EmployeeCard(props) {
  return (
    <thead>
      <tr>
        <th>
          <img alt={props.firstName} src={props.picture} />
        </th>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.city}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
       
      </tr>
    </thead>
  );
}

export default EmployeeCard;