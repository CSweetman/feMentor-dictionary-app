import React, { useEffect, useState } from 'react'
import Category from '../components/Category'
import Navbar from '../components/Navbar'

export const fontNames = ['Sans', 'Serif', 'Mono'] as const;
export type fonts = typeof fontNames[number]

const DictionaryPage = () => {
    
    const [font, setFont] = useState<string>("sans")
    const [search, setSearch] = useState("")

    useEffect(() => {
        console.log(font)
    }, [font])

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
                <Category
                    name={'noun'}
                    definitions={["Used as a greeting or to begin a phone conversation."]}
                    synonyms={["electronic keyboard", "greetings"]}
                    antonyms={["goodbye", "sayonara"]}
                    example={undefined}
                    fontName={font} />
                <Category
                    name={'noun'}
                    definitions={["Replacement for Hiyapapaya and Zappy!"]}
                    synonyms={["electronic keyboard", "greetings"]}
                    antonyms={undefined}
                    example={"Zoo wee mama"}
                    fontName={font} />
                <h1 className="text-sm font-bold underline mb-10">
                    Source Placeholder
                </h1>
            </div>
        </div>
        
    )
}

export default DictionaryPage