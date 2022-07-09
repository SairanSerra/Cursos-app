import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Pages/Login';
import CreateAccount from '../Pages/CreateAccount';
import ResetPassword from '../Pages/ResetPassword';

const Stack = createStackNavigator();



const Routes = () => {
    
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign" component={CreateAccount} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />

        </Stack.Navigator>  
    )
}

export default Routes;