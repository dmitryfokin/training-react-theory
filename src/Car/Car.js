import React from "react";

export default props => (
  <div style={{
    border: '2px solid #eee',
    marginBottom: '10px',
    padding: '5px',
    width: '300px',
  }}>
    <p>Name:<strong>{props.name}</strong></p>
    <p>Year: <strong>{props.year}</strong></p>
    <input type="text" onChange={props.onChangeName} value={props.name}/>
    <button onClick={props.onDelete}>Delete</button>
  </div>
)
