import React from 'react'

function InputBar(props) {
  return (
    <input type={props.type} 
    value={props.value} 
    name={props.name} 
    placeholder={props.placeholder}
    onChange={props.onchange}
    className="search-input-bar"
    />
  )
}

export default InputBar