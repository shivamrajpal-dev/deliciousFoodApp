import React from 'react';
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
import NavBar from '../components/navbar/NavBar';

const Wallet = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30}}>wallet Screen</Text>

        <NavBar navigation={navigation} />
      </View>
    </ImageBackground>
  );
};

export default Wallet;
