import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import Routes from './src/routes';

export default function App(){
return (
   <> 
    <NavigationContainer>        
        <Routes/>
    </NavigationContainer>
    
    <Toast/>   
    </>

);
 


}
