import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './assets/src/screens/Home';
import Electronics from './assets/src/screens/electronics';
import Jewelery from './assets/src/screens/jewelery';
import MensClothing from './assets/src/screens/mensClothing';
import WomensClothing from './assets/src/screens/womensClothing';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from './assets/src/components/Cart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState} from 'react';
import store from './assets/src/redux/store';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import Details from './assets/src/screens/items/Details.js';
import { totalItemCount } from './assets/src/redux/cartSlice';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyOrders from './assets/src/screens/myOrders';
import UserAccount from './assets/src/screens/userAccount';
import UserProfile from './assets/src/screens/userProfile';
// import BottomTabs from './assets/src/components/BottomTabs';


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();




const Screens = () => {
 

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="electronics" component={Electronics} options={{ headerShown: false }} />
      <Stack.Screen name="jewelery" component={Jewelery} options={{ headerShown: false }} />
      <Stack.Screen name="men's clothing" component={MensClothing} options={{ headerShown: false }} />
      <Stack.Screen name="women's clothing" component={WomensClothing} options={{ headerShown: false }} />
      <Stack.Screen name='Details' component={Details} options={{ headerShown: false }} />
      {/* <Stack.Screen name='userProfile' component={UserProfile} options={{ headerShown: false }} /> */}
      <Stack.Screen name='userAccount' component={UserAccount} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}





export default function App() {
 const [tabBadgeCount, setTabBadgeCount] = useState();





  return (
 <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>  
    
       <NavigationContainer> 
          
   <Tabs.Navigator>
      
        <Tabs.Screen name="Home" component={Screens} options={{tabBarIcon: ({})=>(<Ionicons name='home' size={23} color='blue'/>),
        headerShown:false}}/>
     
        <Tabs.Screen name="Cart" component={Cart}  options={{tabBarIcon: ({})=>(<Ionicons name='cart' size={25} color='blue'/>),
        headerShown:false, tabBarBadge:tabBadgeCount || null}} />
    <Tabs.Screen name="myOrders" component={MyOrders}  options={{tabBarIcon: ({})=>(<Ionicons name='gift' size={25} color='blue'/>),
        headerShown:false, tabBarBadge:tabBadgeCount || null}} />

<Tabs.Screen name="userProfile" component={UserProfile}  options={{tabBarIcon: ({})=>(<Ionicons name='person-circle' size={25} color='blue'/>),
        headerShown:false, tabBarBadge:tabBadgeCount || null}}  />


     </Tabs.Navigator>
 
    </NavigationContainer>
       </Provider>
    </GestureHandlerRootView>
  );
}


