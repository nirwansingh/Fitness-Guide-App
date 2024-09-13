import React from 'react'

const Button = (props) => {
    const {text, func} = props
  return (
    <button onClick={func}
        className="px-8 mx-auto py-4 rounded-md border-2 border-blue-100 border-solid
       bg-slate-950 blueShadow duration-200"
      >
        <p> {text} </p>
      </button>
  )
}

export default Button
