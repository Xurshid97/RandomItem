import React from 'react'

function Button(props) {
    let {clickPropFunc} = props
  return (
    <button onClick={clickPropFunc}>Change</button>
  )
}

export default Button