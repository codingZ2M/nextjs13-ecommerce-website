import React from 'react'

const Button = ({buttonLabel}) => {
  return (
    <button className='mt-4 text-white text-lg bg-black hover:bg-slate-800 px-12 py-4 leading-none'>
        {buttonLabel}
    </button>
  )
}

export default Button