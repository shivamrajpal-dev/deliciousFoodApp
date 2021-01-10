import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View style={styles.HeaderContainer}>
      <Pressable
        onPress={() => {
          console.log('nav');
        }}
        style={styles.nav}>
        <View style={styles.navline}></View>
        <View style={styles.navline2}></View>
      </Pressable>
      <Pressable
        onPress={() => {
          console.log('nav');
        }}
        style={styles.cartContainer}>
        <Icon name="cart-outline" size={30} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    height: 90,
    width: '92%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  nav: {
    height: 50,
    width: 70,
    backgroundColor: 'white',
    backgroundColor: 'transparent',
    padding: 15,
  },
  navline: {
    width: 40,
    height: 2,
    backgroundColor: 'black',
    padding: 2,
  },
  navline2: {
    width: 20,
    height: 2,
    backgroundColor: 'black',
    padding: 2,
    marginTop: 7,
  },
  cartContainer: {
    backgroundColor: 'black',
    height: 62,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 10,
  },
});

export default Header;
