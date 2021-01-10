import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/home';
import Wallet from './screens/wallet';
import Chat from './screens/chat';
import Account from './screens/account';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{animationEnabled: false, headerShown: false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="wallet" component={Wallet} />
        <Stack.Screen name="chat" component={Chat} />
        <Stack.Screen name="account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
