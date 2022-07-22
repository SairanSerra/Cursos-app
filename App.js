import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import AuthProvider from './src/context/Auth';

import Routes from './src/routes';

export default function App(){
return (
   <> 
    <NavigationContainer>  
        <AuthProvider>            
         <Routes/>
        </AuthProvider>      
       
    </NavigationContainer>
    
    <Toast/>   
    </>

);
 


}
