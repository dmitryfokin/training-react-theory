import React from "react";

export default props => (
  <div>
    <p>Name:<strong>{props.name}</strong></p>
    <p>Year: <strong>{props.year}</strong></p>
    <button onClick={props.onChangeTitle}>clickni</button>
  </div>
)
