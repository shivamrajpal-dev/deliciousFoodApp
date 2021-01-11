import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Pressable,
  ScrollView,
  TouchableHighlight,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
const Food = ({navigation}) => {
  return (
    <View>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="rgba(0, 0, 0, 0.4)"
        style={styles.foodContainer}
        onPress={() => navigation.navigate('food')}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.foodImg}
            source={require('../../assets/food/food1.png')}
          />
          <View style={styles.FoodDetails}>
            <Text style={styles.FoodName}>Crab Ramen</Text>
            <Text style={styles.FoodDescription}>Spicy With Garlic</Text>
          </View>
          <View style={styles.foodFooter}>
            <View>
              <Text style={styles.foodPrice}>$24.00</Text>
            </View>
            <View style={styles.foodLike}>
              <Icon name="heart" size={20} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  foodContainer: {
    width: 170,
    height: 280,
    marginLeft: 30,
    marginTop: 10,
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  foodImg: {
    width: 130,
    height: 130,
    marginTop: 20,
  },
  foodFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
    marginLeft: 50,
    alignItems: 'center',
  },
  FoodDetails: {
    marginTop: 20,
  },
  FoodName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  foodLike: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
  },
  foodPrice: {
    fontWeight: '700',
  },
});

export default Food;
