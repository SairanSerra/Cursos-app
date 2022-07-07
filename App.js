import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Pages/Login';
import CreateAcount from './src/Pages/CreateAccount';

// const Stack = createStackNavigator();

export default function App(){
return (

    <CreateAcount/>
    
    // <NavigationContainer>
    //     <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Cadastro" component={CreateAcount} />
    //     </Stack.Navigator>        
    // </NavigationContainer>
    

   
  
);
 


}
