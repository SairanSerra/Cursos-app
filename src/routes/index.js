import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth } from '../context/Auth';

import Login from '../Pages/Login';
import CreateAccount from '../Pages/CreateAccount';
import ResetPassword from '../Pages/ResetPassword';
import Home from '../Pages/Home';

const Stack = createStackNavigator();



const Routes = () => {

    const {token} = useContext(Auth);
    
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            {
                !token ?
                <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Sign" component={CreateAccount} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                </>
                
                :
                <>
                <Stack.Screen name="Home" component={Home} />
                </>
                
            }
        
        
        

        </Stack.Navigator>  
    )
}

export default Routes;