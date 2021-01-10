import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';

const MenuTab = () => {
  return (
    <View>
      <View style={styles.tittle}>
        <Text style={styles.mainTittle}>Delicious Food</Text>
        <Text style={styles.subTittle}>we make fresh and healthy food</Text>
      </View>

      <View style={styles.menuTab}>
        <Pressable style={styles.menuIcon}>
          <Text>
            <Icon name="hamburger" size={40} />
          </Text>
        </Pressable>
        <Pressable style={styles.menuIcon}>
          <Text>
            <Icon name="cupcake" size={40} />
          </Text>
        </Pressable>
        <Pressable style={styles.menuIcon}>
          <Text>
            <Icon3 name="ios-beer-outline" size={40} />
          </Text>
        </Pressable>
        <Pressable style={styles.menuIcon}>
          <Text>
            <Icon2 name="restaurant-menu" size={40} />
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {},
  tittle: {
    height: 80,
    justifyContent: 'center',
    marginTop: 20,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  mainTittle: {fontSize: 30, marginLeft: 10, fontWeight: '600'},
  subTittle: {fontSize: 16, marginLeft: 10, fontWeight: '400'},
  menuTab: {
    flexDirection: 'row',

    alignItems: 'center',
    height: 70,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
    justifyContent: 'space-around',
  },
  menuIcon: {
    height: 54,
    width: 54,
    borderRadius: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MenuTab;
