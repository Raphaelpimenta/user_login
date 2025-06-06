import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../Services/storage"

interface IAppContext {
  user: string,
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
}


export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({children}: any) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)

  const storage = getAllLocalStorage()

  useEffect(() => {

    if(storage) {
    const { login } = JSON.parse(storage)
    console.log(login)
    setIsLoggedIn(login)
  }

  }, [])

  
  
  const user = 'Raphael'
  // const isLoggedIn = false //Verificação se o usuário está logado 

  return (
  
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
        {children}
      </AppContext.Provider>
    
  )
}