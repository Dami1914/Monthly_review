import  { createContext, useContext, useState } from 'react'

const LayoutDesignContext = createContext({})

const LayoutDesignProvider = ({children}) => {
    const [mode,setMode] = useState(false)
    const dark = "#2b2b2b"
    const semiDark = "#3c3c3c"
    const light = "rgba(248,250,252,1)"
    const semiLight = "rgb(241 245 249 / 1)" 
    function handleModeChange(){
        setMode(prev=>!prev)
    }
  return (
   <LayoutDesignContext.Provider value={{handleModeChange,mode,dark,light,semiDark,semiLight}}>{children}</LayoutDesignContext.Provider>
  )
}

export default LayoutDesignProvider

export function HandleLayoutDesign(){
    return useContext(LayoutDesignContext)
}