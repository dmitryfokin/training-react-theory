import React from "react";

export default props => (
  <div>
    {console.log(props)}
    <p>Name:<strong>{props.name}</strong></p>
    <p>Year: <strong>{props.year}</strong></p>
    {props.children}
  </div>
)
