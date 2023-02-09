import React, { useEffect, useState } from 'react'
import Meaning from '../components/Meaning'
import Navbar from '../components/Navbar'
import { GetWordDefinitions } from '../utils/DictionaryAPI';

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



    useEffect(() => {
        GetWordDefinitions('bear').then(res => {
            const data = res.data[0]
            console.log(data)
            const definitions: string[] = data.meanings.map((mean: any) => mean.definitions.map((def: any) => def.definition)).flat()
            const synonyms: string[] = data.meanings.map((mean: any) => mean.synonyms).flat()
            const antonyms: string[] = data.meanings.map((mean: any) => mean.antonyms).flat()
            const partOfSpeech: string = data.meanings.map((mean: any) => mean.partOfSpeech)

            const meanings: IMeanings[] = data.meanings
            const searchedWord: IWord = {
                word: data.word,
                phonetics: data.phonetics[1],
                meanings: meanings
            }
            setWord(searchedWord)
        }).catch(e => setBadResultFlag(true))
    }, [])

    useEffect(() => {
        console.log(word)
        console.log(word?.meanings[0].definitions.map(def => def.definition))
    }, [word])

    return (
        <div className="w-[40vw] h-[100vh] flex flex-col items-center m-auto">
            <div className='flex flex-col w-[100%] gap-4 mt-8'>
                <Navbar font={font} setFont={setFont}></Navbar>
                <div className='flex w-[95%] m-auto max-h-12 grow-[2] bg-gray-100 rounded-xl focus-within:outline-primary focus-within:outline focus-within:outline-[1px]'>
                    <input type="text" placeholder="Type here" className=" h-12 bg-transparent px-2 flex-1 border-none focus:outline-none" />
                    <button className='bg-transparent pr-4 '><img src='src\assets\images\icon-search.svg'/></button>
                </div>
                <h1 className="text-3xl font-bold underline mb-10">
                    Searched Word Placeholder
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