import React from 'react';

function SortBtn (props) {

    return (
        <div>
            <button className="btn btn-success" onClick={() => {props.sortedEmployee("firstName");}}>First Name</button>
            <button className="btn btn-success" onClick={() => {props.sortedEmployee("lastName");}}>Last Name</button>
            <button className="btn btn-success" onClick={() => {props.sortedEmployee("city");}}>City</button>
        </div>
        
    )
}

export default SortBtn;