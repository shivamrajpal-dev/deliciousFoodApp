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
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const NavBar = ({navigation}) => {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbar}>
        <Icon
          name="ios-home-outline"
          size={40}
          color="white"
          style={styles.icons}
          onPress={() => navigation.navigate('home')}
        />
        <Icon
          name="ios-wallet-outline"
          size={40}
          color="white"
          onPress={() => navigation.navigate('wallet')}
        />
        <Icon
          name="ios-chatbubble-ellipses-outline"
          size={40}
          color="white"
          onPress={() => navigation.navigate('chat')}
        />
        <Icon2
          name="account-outline"
          size={40}
          color="white"
          onPress={() => navigation.navigate('account')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  MainContainer: {},
  navbarContainer: {
    width: '100%',
    height: 70,
    backgroundColor: 'transparent',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    bottom: 20,
  },
  navbar: {
    width: '90%',
    height: '100%',
    backgroundColor: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
export default NavBar;
