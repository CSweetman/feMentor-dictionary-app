import React, { useEffect, useState } from 'react'
import Select, { StylesConfig } from 'react-select'
import { fontNames } from '../Pages/DictionaryPage'
import ThemeIcon from './ThemeIcon'

interface NavbarProps {
  font: string,
  setFont: React.Dispatch<React.SetStateAction<string>>,
  theme: string | undefined,
  setTheme: () => void
}



const Navbar = ({ font: currentFont, setFont, theme, setTheme }: NavbarProps) => {

  const [toggle, setToggle] = useState<"primary" | "gray">("gray")

  const getThemeColor = () => {
    return (theme === 'light') ? 'black' : 'white'
  }

  interface FontOption {
    readonly value: string;
    readonly label: string;
  }

  const colorStyles: StylesConfig<FontOption> = {
    control: (styles: any) => ({ ...styles, outline: 'none', border: '0', boxShadow: '0', backgroundColor: undefined }),
    container: (styles: any) => ({
      ...styles, backgroundColor: 'transparent'
    }),
    option: (styles: any, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles, boxShadow: 'none', color: (theme === 'light') ? 'black' : 'white', backgroundColor: undefined, border: undefined, cursor: 'pointer',
        ':hover': { color: 'hsl(274, 82%, 60%)', boxShadow: 'none' },
        ":active": {
          ...styles[":active"],
          backgroundColor: "none"
        }
      }
    },
    menu: provided => ({
      ...provided,
      backgroundColor: (theme === 'light') ? 'white' : 'black',
      boxShadow: (theme === 'light') ? 'white' : 'hsl(274, 82%, 60%)' + ` 0px 3px 8px`
    }),
    singleValue: provided => ({
      ...provided,
      color: (theme === 'light') ? 'black' : 'white',
      cursor: 'pointer'
    }),
    indicatorSeparator: (styles: any) => ({ display: 'none' }),
    dropdownIndicator: (styles: any) => ({ color: 'hsl(274, 82%, 60%)', cursor: 'pointer' })
  }

  const options = [
    { value: 'sans', label: 'Sans-Serif' },
    { value: 'serif', label: 'Serif' },
    { value: 'mono', label: 'Mono' }
  ]

  return (
    <div className='w-[100%] h-8 flex justify-between mb-4'>
      <img src="src\assets\images\logo.svg" alt="" />
      <div className='flex items-center gap-5'>
        <Select options={options} defaultValue={options[0]} isSearchable={false}
          onChange={e => { if (e) setFont(e.value.toLowerCase()) }} styles={colorStyles} />
        <div className='border-l ml-[-3px] border-gray-200 h-[100%]'></div>
        <span className='flex gap-2'>
          <input type="checkbox" className={' toggle bg-white border-none  ' + (theme === 'light' ? 'toggle-button' : 'toggle-button-active')}
            onChange={setTheme} />
          <ThemeIcon outline={theme === 'light' ? 'gray' : 'hsl(274deg, 82%, 60%)'} />
        </span>
      </div>

    </div>
  )
}

export default Navbar