import React, {createContext, useState} from "react";
import { useNavigation } from "@react-navigation/native";

export const Auth = createContext({});

function AuthProvider({children}){
    const [token,setToken] =useState({});
    const {navigate} = useNavigation();

   async function Login(email,password,device_name){
        try{
      
        const response = await axios.post('/login',{email:email,password:password,device_name:device_name});

        if(response.data.success == false){
          throw 401;
        }
        setToken({
                email:email,
                token: response.data.token
            });
        return  Toast.show({
            type: 'success',
            text1: 'Logado com sucesso',
          });

        }catch(e){
            Toast.show({
                type: 'error',
                text1: e.message,
              });
        }
    }
    return(
        <Auth.Provider value={{nome:'Xildera the monster',Login,token}}>
        {children}
        </Auth.Provider>
    )
}

export default AuthProvider;