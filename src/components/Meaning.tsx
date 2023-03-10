import React, { useEffect } from 'react'
import Onym from './Onym'

interface categoryProps {
  name: string,
  definitions: string[],
  example: (string | undefined)[],
  synonyms?: string[],
  antonyms?: string[],
}

const Meaning = ({ name: type, definitions, example, synonyms, antonyms }: categoryProps) => {


  return (
    <div className={`flex flex-col gap-8 text-[18px] w-[100%]`}>
      <div className='flex items-center mt-5'>
        <p className="flex-grow-0 mr-5 text-[24px] italic font-bold text-neutral">{type}</p>
        <div className="flex-grow h-0.5 bg-base-200"></div>
      </div>
      <div>
        <p className='text-subtitle mb-5 text-[20px]'>Meaning</p>
        <ul className='list-disc list-inside mx-5'>
          {definitions.map((definition, i) => (
            <li className='' key={i}>{
              <span className='text-neutral'>{definition}</span>}
            </li>
          ))}
          {example[0] !== undefined && <p className='ml-[24px] text-subtitle'>{`"${example[0]}"`}</p>}
        </ul>
      </div>
      <div>
        {synonyms && synonyms?.length > 0 && <Onym name='Synonym' onyms={synonyms} />}
        {antonyms && antonyms?.length > 0 && <Onym name='Antonym' onyms={antonyms} />}
      </div>
    </div>
  )
}


export default Meaning