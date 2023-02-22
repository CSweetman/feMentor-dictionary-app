import React, { useEffect } from 'react'
import Meaning from '../components/Meaning'
import { capitalizeFirstLetter } from '../utils/utils'
import { IWord } from './DictionaryPage'

interface DefinitionPageProps {
    searchedWord: IWord
    theme: string | undefined
}


const DefinitionPage = ({ searchedWord, theme }: DefinitionPageProps) => {
    return (
        <div>

            <div className='flex justify-between dark:text-white'>
                <div>
                    <h1 className={(theme === 'light' ? 'text-black' : 'text-white') + " text-[64px] font-bold"}>
                        {searchedWord && capitalizeFirstLetter(searchedWord.word)}
                    </h1>
                    <p className='text-[20px] text-primary'>{searchedWord.phonetics}</p>
                </div>
                <button className='' onClick={e => {
                    let audio = new Audio(searchedWord.audio)
                    audio.play()
                }}>
                    <img src='src\assets\images\icon-play.svg' />
                </button>
            </div>
            {
                searchedWord && searchedWord?.meanings.map((meaning, i) =>
                    <Meaning
                        key={i}
                        name={meaning.partOfSpeech}
                        definitions={meaning.definitions.map(def => def.definition)}
                        synonyms={meaning.synonyms}
                        antonyms={meaning.antonyms}
                        example={meaning.definitions.map(def => def.example)}
                    />)
            }
            <h1 className="text-sm underline mb-10 text-neutral">
                Source Placeholder
            </h1>
        </div>
    )
}

export default DefinitionPage