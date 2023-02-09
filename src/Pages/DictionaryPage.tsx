import React, { useEffect, useState } from 'react'
import Meaning from '../components/Meaning'
import Navbar from '../components/Navbar'
import { GetWordDefinitions } from '../utils/DictionaryAPI';
import { capitalizeFirstLetter } from '../utils/utils';

export const fontNames = ['Sans', 'Serif', 'Mono'] as const;
export type fonts = typeof fontNames[number]

const DictionaryPage = () => {

    const [font, setFont] = useState<string>("sans")
    const [search, setSearch] = useState("")
    const [badResultFlag, setBadResultFlag] = useState<boolean>(false)
    const [word, setWord] = useState<IWord | undefined>(undefined)

    interface IWord {
        word: string,
        phonetics: string,
        meanings: IMeanings[]
    }

    interface IMeanings {
        partOfSpeech: string,
        synonyms: string[],
        antonyms: string[]
        definitions: {
            definition: string
            example?: string
        }[]
        sourceUrls: string[]
    }

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
            setSearch('')
        }).catch(e => setBadResultFlag(true))
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.keyCode === 13)
            handleSearch(search)
    }

    useEffect(() => {
        handleSearch('Bear')
    }, [])

    // useEffect(() => {
    //     console.log(word)
    //     // console.log(word?.meanings[0].definitions.map(def => def.definition))
    // }, [word])

    useEffect(() => {
        console.log(font)
    }, [font])

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
                <h1 className="text-[64px] font-bold">
                    {word && capitalizeFirstLetter(word.word)}
                </h1>
                {word && word?.meanings.map((meaning, i) =>
                    <Meaning
                        key={i}
                        name={meaning.partOfSpeech}
                        definitions={meaning.definitions.map(def => def.definition)}
                        synonyms={meaning.synonyms}
                        antonyms={meaning.antonyms}
                        example={meaning.definitions.map(def => def.example)}
                        fontName={font}
                    />)}
                <h1 className="text-sm font-bold underline mb-10">
                    Source Placeholder
                </h1>
            </div>
        </div>

    )
}

export default DictionaryPage