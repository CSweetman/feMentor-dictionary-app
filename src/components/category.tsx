import React from 'react'

interface categoryProps {
    name: string,
    definitions: string[],
    example?: string,
    synonyms?: string,
    antonyms?: string,
}

const category = ({name, definitions, example, synonyms, antonyms}: categoryProps) => {
  return (
    <div className='flex flex-col w-60'>
        <span>{name} <hr></hr></span>
        <p>Meaning</p>
        <ul>
        {definitions.map(definition => (
            <li>{definition}</li>
        ))}
        </ul>
        {example && <p>`"${example}"`</p>}
        {}
    </div>
  )
}

export default category