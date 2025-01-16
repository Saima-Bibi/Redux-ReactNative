import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Products from './components/Products';
import Cart from './components/Cart';

export default function App() {

  const Stack = createStackNavigator()
  return (
    
   <NavigationContainer >
    <Stack.Navigator initialRouteName='Products'>
    <Stack.Screen name='Products' component={Products}></Stack.Screen>
    <Stack.Screen name='Cart' component={Cart}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
   
  );
}


