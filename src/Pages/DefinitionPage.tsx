import React from 'react'
import Meaning from '../components/Meaning'
import { capitalizeFirstLetter } from '../utils/utils'
import { IWord } from './DictionaryPage'

interface DefinitionPageProps {
    searchedWord: IWord
}

const DefinitionPage = ({ searchedWord }: DefinitionPageProps) => {
    return (
        <div>

            <div className='flex justify-between'>
                <div>
                    <h1 className="text-[64px] font-bold">
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
            <h1 className="text-sm font-bold underline mb-10">
                Source Placeholder
            </h1>
        </div>
    )
}

export default DefinitionPage