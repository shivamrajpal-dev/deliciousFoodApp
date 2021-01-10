import * as React from 'react';
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

import Icon from 'react-native-vector-icons/Feather';
const Food = () => {
  return (
    <View horizontal="true">
      <View style={styles.foodContainer}>
        <Image
          style={styles.foodImg}
          source={require('../../assets/food/food1.png')}
        />
        <View style={styles.FoodDetails}>
          <Text style={styles.FoodName}>Crab Ramen</Text>
          <Text style={styles.FoodDescription}>Spicy With Garlic</Text>
        </View>
        <View style={styles.foodFooter}>
          <Text style={styles.foodPrice}>$24.00</Text>
          <View style={styles.foodLike}>
            <Text>
              <Icon name="heart" size={30} />
            </Text>
          </View>
        </View>
      </View>
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
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 5,
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
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
  },
  foodPrice: {
    fontWeight: '700',
  },
});

export default Food;
