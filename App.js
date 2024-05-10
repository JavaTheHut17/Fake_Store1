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

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Electronics" component={Electronics} />
    <Stack.Screen name="Jewelery" component={Jewelery} />
    <Stack.Screen name="MensClothing" component={MensClothing} />
    <Stack.Screen name="WomensClothing" component={WomensClothing} />
    <Stack.Screen name="Jewel5" component={Jewel5} />
    <Stack.Screen name="Jewel6" component={Jewel6} />
    <Stack.Screen name="Jewel7" component={Jewel7} />
    <Stack.Screen name="Jewel8" component={Jewel8} />
    <Stack.Screen name="Elec9" component={Elec9} />
    <Stack.Screen name="Elec10" component={Elec10} />
    <Stack.Screen name="Elec11" component={Elec11} />
    <Stack.Screen name="Elec12" component={Elec12} />
    <Stack.Screen name="Elec13" component={Elec13} />
    <Stack.Screen name="Elec14" component={Elec14} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="HomeStack" component={HomeStack} options={{headerShown:false}}/>
        <Tabs.Screen name="Home" component={Home} options={{headerShown:false}} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
