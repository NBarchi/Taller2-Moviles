import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ProductsScreen } from '../screens/ProductsScreen';
import { DrawerNavigator } from './DrawerNavigator';


const Stack = createStackNavigator();

export const StackNavigator=()=>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Buscar" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}