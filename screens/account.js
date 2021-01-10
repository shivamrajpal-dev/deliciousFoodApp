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
const Account = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Account Screen</Text>
      <NavBar navigation={navigation} />
    </View>
  );
};

export default Account;
