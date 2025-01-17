import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Products from './components/Products';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import { myStore } from './redux/store/Store';

export default function App() {

  const Stack = createStackNavigator()
  return (
    <Provider store={myStore}>
   <NavigationContainer >
    <Stack.Navigator initialRouteName='Products'>
    <Stack.Screen name='Products' component={Products}></Stack.Screen>
    <Stack.Screen name='Cart' component={Cart}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
   </Provider>
  );
}


