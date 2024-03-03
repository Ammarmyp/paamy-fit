import React from 'react'


const Button = (Props) => {
  const  {text, func}= Props;
  return (
    <button onClick={func} className="px-4 mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200">
    <p>{text} </p>
  </button>

  )
  
}

export default Button