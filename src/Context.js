import React, {createContext, useState} from 'react'

export const AuthContext = createContext({})

const Context = ({children}) => {



  return (
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
  )
}

export default Context