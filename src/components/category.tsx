import React from 'react'

interface categoryProps {
    name: string,
    definitions: string[],
    example?: string,
    synonyms?: string[],
    antonyms?: string[],
    fontName: string
}

const Category = ({name, definitions, example, synonyms, antonyms, fontName}: categoryProps) => {
  return (
    <div className={`flex flex-col gap-8 font-${fontName} text-[18px]`}>
      <div className='flex items-center mt-5'>
        <p className="flex-grow-0 mr-5 text-[24px] italic font-bold">{name}</p>
        <div className="flex-grow bg bg-gray-200 h-0.5"></div>
      </div>
      <div>
        <p className='text-subtitle mb-5 text-[20px]'>Meaning</p>
        <ul className='list-disc list-inside mx-5'>
          {definitions.map((definition, i) => (
            <li className='text-primary' key={i}>{
              <span className='text-black'>{definition}</span>}
            </li>
          ))}
          {example && <p className='ml-[24px] text-subtitle'>{`"${example}"`}</p>}
        </ul>
      </div>
      <div>
        {synonyms && synonyms?.length > 0 && <div className='flex gap-5'>
          <p>Synonyms</p>
          {synonyms.map((syn, i) => (<p className="text-primary" key={i}>{syn}</p>))}
        </div>}
        {antonyms && antonyms?.length > 0 && <div className='flex gap-5'>
          <p>Antonyms</p>
          {antonyms.map((syn, i) => (<p className="text-primary" key={i}>{syn}</p>))}
        </div>}
      </div>
    </div>
  )
}


export default Category