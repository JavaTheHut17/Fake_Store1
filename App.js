import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './assets/src/screens/Home';
import Electronics from './assets/src/screens/Electronics';
import Jewelery from './assets/src/screens/Jewelery';
import MensClothing from './assets/src/screens/MensClothing';
import WomensClothing from './assets/src/screens/WomensClothing';
import Jewel5 from './assets/src/screens/items/Jewel5';
import Jewel6 from './assets/src/screens/items/Jewel6';
import Jewel7 from './assets/src/screens/items/Jewel7';
import Jewel8 from './assets/src/screens/items/Jewel8';
import Elec9 from './assets/src/screens/items/Elec9';
import Elec10 from './assets/src/screens/items/Elec10';
import Elec11 from './assets/src/screens/items/Elec11';
import Elec12 from './assets/src/screens/items/Elec12';
import Elec13 from './assets/src/screens/items/Elec13';
import Elec14 from './assets/src/screens/items/Elec14';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './assets/src/screens/Cart';
import Mens1 from './assets/src/screens/items/Mens1';
import Mens2 from './assets/src/screens/items/Mens2';
import Mens3 from './assets/src/screens/items/Mens3';
import Mens4 from './assets/src/screens/items/Mens4';
import Womens15 from './assets/src/screens/items/Womens15';
import Womens16 from './assets/src/screens/items/Womens16';
import Womens17 from './assets/src/screens/items/Womens17';
import Womens18 from './assets/src/screens/items/Womens18';
import Womens19 from './assets/src/screens/items/Womens19';
import Womens20 from './assets/src/screens/items/Womens20';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
    <Stack.Screen name="Electronics" component={Electronics} options={{headerShown:false}}/>
    <Stack.Screen name="Jewelery" component={Jewelery} options={{headerShown:false}}/>
    <Stack.Screen name="MensClothing" component={MensClothing}options={{headerShown:false}}/>
    <Stack.Screen name="WomensClothing" component={WomensClothing} options={{headerShown:false}}/>
    <Stack.Screen name="Jewel5" component={Jewel5} options={{headerShown:false}}/>
    <Stack.Screen name="Jewel6" component={Jewel6} options={{headerShown:false}}/>
    <Stack.Screen name="Jewel7" component={Jewel7} options={{headerShown:false}}/>
    <Stack.Screen name="Jewel8" component={Jewel8}options={{headerShown:false}} />
    <Stack.Screen name="Elec9" component={Elec9}options={{headerShown:false}} />
    <Stack.Screen name="Elec10" component={Elec10}options={{headerShown:false}} />
    <Stack.Screen name="Elec11" component={Elec11} options={{headerShown:false}}/>
    <Stack.Screen name="Elec12" component={Elec12} options={{headerShown:false}}/>
    <Stack.Screen name="Elec13" component={Elec13} options={{headerShown:false}}/>
    <Stack.Screen name="Elec14" component={Elec14} options={{headerShown:false}}/>
    <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
    <Stack.Screen name="Mens1" component={Mens1} options={{headerShown:false}}/>
    <Stack.Screen name="Mens2" component={Mens2} options={{headerShown:false}}/>
    <Stack.Screen name="Mens3" component={Mens3} options={{headerShown:false}}/>
    <Stack.Screen name="Mens4" component={Mens4} options={{headerShown:false}}/>
    <Stack.Screen name="Womens15" component={Womens15} options={{headerShown:false}}/>
    <Stack.Screen name="Womens16" component={Womens16} options={{headerShown:false}}/>
    <Stack.Screen name="Womens17" component={Womens17} options={{headerShown:false}}/>
    <Stack.Screen name="Womens18" component={Womens18} options={{headerShown:false}}/>
    <Stack.Screen name="Womens19" component={Womens19} options={{headerShown:false}}/>
    <Stack.Screen name="Womens20" component={Womens20} options={{headerShown:false}}/>
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStack} options={{tabBarIcon: ({})=>(<Ionicons name='home' size={23} color='blue'/>),headerShown:false}}/>
        <Tabs.Screen name="Cart" component={Cart}  options={{tabBarIcon: ({})=>(<Ionicons name='cart' size={25} color='blue'/>),headerShown:false}} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
