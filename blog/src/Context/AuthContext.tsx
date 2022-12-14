import React  ,  { useState } from "react";
import axios from 'axios';



 type newUserParam = {username: string ;
     email: string ;
     password: string ;
     profileImage: ( string | null )
    }

interface contextValueObj {
    SetNewUser : (userData: newUserParam ) => void ;
    LogUserIn : (userData : {email: string , password: string}) => void ;
    isloading : boolean;
    Isregistered : boolean;
    loggedIn : boolean ;
    RequestError : boolean;
}

export const AuthContext = React.createContext<contextValueObj>({
SetNewUser : () => {},
LogUserIn: () => {},
isloading: false ,
RequestError: false,
Isregistered: false,
loggedIn:false
})



export const AuthContextProvider: React.FC<{children: React.ReactNode }> = (props) => {
    
    const [Isregistered , setIsRegistered] = useState(false);
    
    const [loggedIn , setIsLoggedIn] = useState(false);
   
    const [isloading , setIsloading] = useState(false);

    const [RequestError , setRequestError] = useState(false);

    const SetNewUser = ( userData: {username: string , email: string , password: string , profileImage?: string | null}) => {
        
        axios.post('http://localhost:3000/api/auth/register' , userData)
        .then((res) => {
            setIsloading(false);
            setIsRegistered(true);
        })
        .catch((err) => {
            setIsloading(false);
            setRequestError(true)
        })
    }

   const LogUserIn = ( userData: { email: string , password: string }) => {
     axios.post('http://localhost:3000/api/auth/login' , userData)
    .then((res) => {
       setIsloading(false);
       setIsLoggedIn(true);
   })
   .catch((err) => {
       setIsloading(false);
       setRequestError(true)
   })
   }
    
    const  contextValue =  {
        SetNewUser,
        LogUserIn,
        isloading,
        Isregistered,
        loggedIn,
        RequestError
    }
 
    

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}