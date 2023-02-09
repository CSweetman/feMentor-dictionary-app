import React, { useEffect, useState } from 'react'
import Meaning from '../components/Meaning'
import Navbar from '../components/Navbar'
import { GetWordDefinitions } from '../utils/DictionaryAPI';
import { capitalizeFirstLetter } from '../utils/utils';
import { BadSearchPage } from './BadSearchPage';
import DefinitionPage from './DefinitionPage';

export const fontNames = ['Sans', 'Serif', 'Mono'] as const;
export type fonts = typeof fontNames[number]

export interface IWord {
    word: string,
    phonetics: string,
    meanings: IMeanings[]
}

export interface IMeanings {
    partOfSpeech: string,
    synonyms: string[],
    antonyms: string[]
    definitions: {
        definition: string
        example?: string
    }[]
    sourceUrls: string[]
}

const DictionaryPage = () => {

    const [font, setFont] = useState<string>("sans")
    const [search, setSearch] = useState("")
    const [badResultFlag, setBadResultFlag] = useState<boolean>(false)
    const [searchedWord, setWord] = useState<IWord | undefined>(undefined)


    const handleSearch = (lookUp: string) => {
        GetWordDefinitions(lookUp).then(res => {
            const data = res.data[0]
            const meanings: IMeanings[] = data.meanings
            const searchedWord: IWord = {
                word: data.word,
                phonetics: data.phonetics[1],
                meanings: meanings
            }
            setWord(searchedWord)
            setBadResultFlag(false)
            setSearch('')
        }).catch(e => {
            setBadResultFlag(true)
            setWord(undefined)
            setSearch('')
        })
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.keyCode === 13)
            handleSearch(search)
    }


    // useEffect(() => {
    //     console.log(word)
    //     // console.log(word?.meanings[0].definitions.map(def => def.definition))
    // }, [word])

    useEffect(() => {
        console.log(searchedWord)
    }, [searchedWord])

    return (
        <div className={`w-[40vw] h-[100vh] flex flex-col items-center m-auto font-${font}`}>
            <div className='flex flex-col w-[100%] gap-4 mt-8'>
                <Navbar font={font} setFont={setFont}></Navbar>
                <div className='flex w-[95%] m-auto max-h-12 grow-[2] bg-gray-100 rounded-xl focus-within:outline-primary focus-within:outline focus-within:outline-[1px]'>
                    <input
                        type="text" placeholder="Type here"
                        className=" h-12 bg-transparent px-2 flex-1 border-none focus:outline-none"
                        onChange={e => setSearch(e.currentTarget.value)}
                        onKeyDown={e => handleKeyDown(e)}
                        value={search}
                    />
                    <button className='bg-transparent pr-4 '>
                        <img src='src\assets\images\icon-search.svg' onClick={e => handleSearch(search)} />
                    </button>
                </div>
                {searchedWord && <DefinitionPage searchedWord={searchedWord} />}
                {badResultFlag && <BadSearchPage />}
            </div>
        </div>

    )
}

export default DictionaryPage