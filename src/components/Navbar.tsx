import React, { useEffect, useState } from 'react'
import Select, { StylesConfig } from 'react-select'
import { fontNames } from '../Pages/DictionaryPage'

interface NavbarProps {
  font: string;
    setFont: React.Dispatch<React.SetStateAction<string>>;
}



const Navbar = ({ font: currentFont, setFont }: NavbarProps) => {

  const [toggle, setToggle] = useState<"primary" | "gray">("gray")

  const handleToggle = () => {
    setToggle("primary")
  }

  interface FontOption {
    readonly value: string;
    readonly label: string;
  }

  const colorStyles: StylesConfig<FontOption> = {
    control: (styles: any) => ({ ...styles, outline: 'none', border: '0', boxShadow:'0'}),
    option: (styles: any, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles, boxShadow: 'none', color: 'black', backgroundColor: undefined,
        ':hover': { color: 'hsl(274, 82%, 60%)', boxShadow: 'none' },
        ":active": {
          ...styles[":active"],
          backgroundColor: "none"
      }
      }
    },
    indicatorSeparator: (styles: any) => ({display:'none'})
  }

  const options = [
    { value: 'sans', label: 'Sans-Serif' },
    { value: 'serif', label: 'Serif' },
    { value: 'mono', label: 'Mono'}
  ]

  


  useEffect(() => {
  console.log(currentFont)
  }, [currentFont])

  return (
    <div className='w-[100%] h-8 flex justify-between mb-4'>
        <img src="src\assets\images\logo.svg" alt="" />
        <div className='flex items-center gap-5'>
        <Select options={options} defaultValue={options[0]} onChange={e => { if (e) setFont(e.value.toLowerCase()) }} styles={colorStyles}></Select>
        <div className='border-l ml-[-3px] border-gray-200 h-[100%]'></div>
        <input type="checkbox" className={`toggle toggle-primary`} onChange={handleToggle} />
        </div>
        
    </div>
  )
}

export default Navbar