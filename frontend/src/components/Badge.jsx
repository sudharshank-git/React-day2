import React from 'react'

function Badge(props) {
  return (
    <span className="badge badge-primary">
      {props.items}
    </span>
  )
}

export default Badge