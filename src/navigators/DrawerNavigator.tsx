import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { ProductsScreen } from '../screens/ProductsScreen';
import { UsuarioScreen } from '../screens/UsuarioScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator=()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Products" component={ProductsScreen} />
      <Drawer.Screen name="Usuario" component={UsuarioScreen} />
    </Drawer.Navigator>
  );
}