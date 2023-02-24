import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"; 
import HomeScreen from "./screens/HomeScreen";
import { createStackNavigator } from '@react-navigation/stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Provider store={store}>
    <TailwindProvider>
   <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen 
      name="Basket" 
      component={BasketScreen}
      option={{ presentation: "modal"}}
      />
      <Stack.Screen 
      name="PreparingOrderScreen" 
      component={PreparingOrderScreen} 
      options={{ presentation: "fullScreenModal", headerShown: false }}
      />
      <Stack.Screen 
      name="DeliveryScreen" 
      component={DeliveryScreen} 
      options={{ presentation: "fullScreenModal", headerShown: false }}
      />
    </Stack.Navigator>
    </TailwindProvider>
    </Provider>
    </NavigationContainer>
  );
}

