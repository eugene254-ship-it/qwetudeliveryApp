import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"; 
import HomeScreen from "./screens/HomeScreen";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { TailwindProvider } from 'tailwindcss-react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <TailwindProvider>
   <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
       
    </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}

