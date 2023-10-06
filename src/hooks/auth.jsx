import { createContext, useContext, useState, useEffect } from "react";
import  axios  from 'axios';

export const AuthContext = createContext({});

function AuthProvider({children}){
  const [data, setData] = useState({});

  async function signIn({email, password}){
    
    try{
      const response = await axios.post("https://exato.m2fsolucoes.com/api/oauth/token", {email, password});
      const { token } = response.data;

      localStorage.setItem("@imptec:token", token);

      axios.defaults.headers.authorization = `Bearer ${token}`;
      setData({token});

    }catch(error){
      if(error){
        alert(error);
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@imptec:token");

    setData({});
  }

    useEffect(()=>{
      const token = localStorage.getItem("@imptec:token");

      if(token){
        axios.defaults.headers.authorization = `Bearer ${token}`;

        setData({token});
      }
    });


    return(
        <AuthContext.Provider value={{
          signIn,
          token:data.token, 
          signOut
          }}>
        {children}
      </AuthContext.Provider>
    );
}

function useAuth(){
   const context = useContext(AuthContext);
   return context;
}

export { AuthProvider, useAuth }