import { useState } from "react";
import DictionaryPage from "./Pages/DictionaryPage";

export default function App() {

  const [theme, setTheme] = useState<"light" | "dark">("light")

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <div data-theme={theme} className={theme === 'light' ? 'bg-white' : ''}>
      <DictionaryPage theme={theme} setTheme={changeTheme}></DictionaryPage>
    </div>
  )
}