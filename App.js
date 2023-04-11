import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

const MyStack = ()=>{
  return(
    <Stack.Navigator>
    
    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>

    </Stack.Navigator>
  )
}


