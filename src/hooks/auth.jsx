import { createContext, useContext } from "react";
import  axios  from 'axios';

export const AuthContext = createContext({});

function AuthProvider({children}){

  async function signIn({email, password}){
    
    try{
      const response = await axios.post("https://exato.m2fsolucoes.com/api/oauth/token", {email, password});

      console.log(response);
    }catch(error){
      if(error){
        alert(error);
      }
    }
  }




    return(
        <AuthContext.Provider value={{signIn}}>
        {children}
      </AuthContext.Provider>
    );
}

function useAuth(){
   const context = useContext(AuthContext);
   return context;
}

export { AuthProvider, useAuth }