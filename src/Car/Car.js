import React from "react"

import './Car.css'

export default props => {
  const inputClasses = ['input']

  if (props.name === '') {
    inputClasses.push('red')
  } else {
    inputClasses.push('green')
  }

  if (props.name.length > 4) {
    inputClasses.push('bold')
  }
  return (
    <div className="Car">
      <p>Name:<strong>{props.name}</strong></p>
      <p>Year: <strong>{props.year}</strong></p>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={inputClasses.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}
