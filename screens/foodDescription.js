import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  View,
  Modal,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Ionicons';

import Icon4 from 'react-native-vector-icons/Feather';
const FoodDescription = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.HeaderContainer}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.goBack}>
          <Icon2 name="left" size={40} color="black" />
        </Pressable>
        <Pressable style={styles.optionsContainer}>
          <Icon name="dots-vertical" size={30} color="black" />
        </Pressable>
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.foodImg}
          source={require('../assets/food/food1.png')}
        />
        <View
          style={{
            marginTop: 30,
            width: '87%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '600',
              }}>
              Crab Ramenn
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                WordSpacing: 20,
              }}>
              <Icon name="clock-outline" size={20} color="black" /> 25 mins
            </Text>
          </View>
          <Text
            style={{
              textAlign: 'justify',
              fontSize: 15,
              WordSpacing: 20,
              marginTop: 15,
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            fuga et dolorem temporibus facilis ullam ex eligendi! Omnis
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
            marginTop: 60,
            alignItems: 'center',
          }}>
          <View>
            <Text>Total Price</Text>
            <Text style={{fontSize: 20, fontWeight: '600', marginTop: 7}}>
              $ 15.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.foodLike}>
              <Icon4 name="heart" size={20} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',

                backgroundColor: 'black',
                padding: 18,
                paddingTop: 14,
                paddingBottom: 14,
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 25,
              }}>
              <Text style={{color: 'white'}}>Add to Cart {'     '}</Text>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 70,
                }}>
                <Icon3 name="add" size={34} backgroundColor={'black'}></Icon3>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
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
  goBack: {
    height: 50,
    width: 70,
  },
  optionsContainer: {
    height: 62,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodImg: {
    width: 300,
    height: 300,
  },
  foodLike: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: 33,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
    marginRight: 10,
  },
});

export default FoodDescription;
