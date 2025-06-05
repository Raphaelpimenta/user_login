import { createContext, useState } from "react"

interface IAppContext {
  user: string,
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
}


export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({children}: any) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)

  console.log('context', isLoggedIn)
  
  const user = 'Raphael'
  // const isLoggedIn = false //Verificação se o usuário está logado 

  return (
  
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
        {children}
      </AppContext.Provider>
    
  )
}