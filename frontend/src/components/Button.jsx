import React from 'react'
import Badge from './Badge'
function Button(props) {
  return (
    <button className="btn btn-secondary" onClick={props.onclick} id={props.id}>
      {props.text}{props.badge ? <Badge items={props.badge}/> : ""}  
    </button>
  )
}

export default Button