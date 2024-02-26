import  { createContext, useContext, useState } from 'react'

const LayoutDesignContext = createContext({})

const LayoutDesignProvider = ({children}) => {
    const [mode,setMode] = useState(false)

    function handleModeChange(){
        setMode(prev=>!prev)
    }
  return (
   <LayoutDesignContext.Provider value={{handleModeChange,mode}}>{children}</LayoutDesignContext.Provider>
  )
}

export default LayoutDesignProvider

export function HandleLayoutDesign(){
    return useContext(LayoutDesignContext)
}