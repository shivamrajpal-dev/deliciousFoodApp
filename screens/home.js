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

import Header from '../components/header/header';
import MenuTab from '../components/menuTab/menuTab';
import Food from '../components/food/food';
import NavBar from '../components/navbar/NavBar';

const Home = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.MainContainer}>
        <Header />
        <ScrollView showsVerticalalScrollIndicator={false}>
          <MenuTab />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Food navigation={navigation} />
            <Food navigation={navigation} />
            <Food navigation={navigation} />
            <Food navigation={navigation} />
          </ScrollView>
        </ScrollView>
      </View>
      <NavBar navigation={navigation} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  MainContainer: {},
  MainContainer: {},
});

export default Home;
