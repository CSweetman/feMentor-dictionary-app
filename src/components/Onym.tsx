import React from 'react'

interface OnymProps {
  name: string,
  onyms: string[]
}

const Onym = ({ name, onyms }: OnymProps) => {
  return (
    <div className='flex gap-3 flex-wrap mb-8'>
      <p>{name}</p>
      {onyms.map((elem, i) => (<p className='text-primary font-bold' key={i}>{elem}</p>))}
    </div>
  )
}

export default Onym