import React, {createContext, useState} from "react";
import api from '../services/api'
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Auth = createContext({});

function AuthProvider({children}){
    const [token,setToken] =useState(null);
    const {navigate} = useNavigation();

async function getToken(){
    const Dadostoken = await AsyncStorage.getItem('token');
    setToken(Dadostoken) ;
}

async function clearToken(){
    await AsyncStorage.clear();
    setToken(null);
}
    

    return(
        <Auth.Provider value={{nome:'Xildera the monster',getToken,clearToken,token,setToken}}>
        {children}
        </Auth.Provider>
    )
}

export default AuthProvider;