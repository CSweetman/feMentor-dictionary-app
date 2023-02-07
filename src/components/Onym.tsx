import React from 'react'

interface OnymProps {
    name: string,
    onyms: string[]
}

const Onym = ({name, onyms}: OnymProps) => {
  return (
    <div className='flex gap-5'>
      <p>{name}</p>
      {onyms.map((elem, i) => (<p className='text-primary' key={i}>{elem}</p>))}
    </div>
  )
}

export default Onym