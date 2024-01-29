import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Authenticate from './pages/Authenticate';

const Stack = createStackNavigator()

export default function Navigation() {      
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Authenticate">
            <Stack.Screen 
              options={{ headerShown: false }} 
              name="Authenticate" 
              component={Authenticate} 
            />
        </Stack.Navigator>
      </NavigationContainer>
    );
}