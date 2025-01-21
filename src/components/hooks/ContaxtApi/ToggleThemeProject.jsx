import { use } from "react";
import {  createContext,  useState } from "react";


export const ThemeContext = createContext() 

export const ThemeProvider = ({children}) => {
    
    const [theme, setTheme] = useState("dark")
    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    
}

export const ThemeChild = () => {
    const {theme,setTheme}=use(ThemeContext)
    const handleButton = () => {
        setTheme((preVal) => (preVal === "dark" ? "light" : "dark"))
        
    }
    return <>
        <div className={`${theme === "dark"?"bg-gray-800 text-white":"bg-white"}`}>
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus rem maiores eligendi quaerat architecto, aut odit aliquid ab totam, enim velit beatae dolores similique. Animi ut rerum molestiae mollitia eveniet!

            </p>
            <button onClick={handleButton}>change theme</button>
    </div>
    </>
}