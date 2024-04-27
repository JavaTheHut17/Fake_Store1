import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './assets/src/screens/Home';
import { createStackNavigator} from '@react-navigation/stack';
import Electronics from './assets/src/screens/Electronics';
const Stack = createStackNavigator();
import Jewelery from './assets/src/screens/Jewelery';
import MensClothing from './assets/src/screens/MensClothing';
import WomensClothing from './assets/src/screens/WomensClothing';
import Jewel5 from './assets/src/screens/items/Jewel5';
import Jewel6 from './assets/src/screens/items/Jewel6';
import Jewel7 from './assets/src/screens/items/Jewel7';
import Jewel8 from './assets/src/screens/items/Jewel8';



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Electronics" component={Electronics}/>
        <Stack.Screen name="Jewelery" component={Jewelery}/>
        <Stack.Screen name="MensClothing" component={MensClothing}/>
        <Stack.Screen name="WomensClothing" component={WomensClothing}/>
        <Stack.Screen name="Jewel5" component={Jewel5}/>
        <Stack.Screen name="Jewel6" component={Jewel6}/>
        <Stack.Screen name="Jewel7" component={Jewel7}/>
        <Stack.Screen name="Jewel8" component={Jewel8}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
