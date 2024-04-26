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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Electronics" component={Electronics}/>
        <Stack.Screen name="Jewelery" component={Jewelery}/>
        <Stack.Screen name="MensClothing" component={MensClothing}/>
        <Stack.Screen name="WomensClothing" component={WomensClothing}/>
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
