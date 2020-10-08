import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;

interface Props {}

const LandingScreen: React.FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.deliveryIcon} source={require('../images/food_delivery_icon.png')} />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your Delivery Address</Text>
        </View>
        <Text style={styles.addressText}>User Address</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(242, 242, 242)',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryIcon: {
    width: 120,
    height: 120,
  },
  addressContainer: {
    width: screenWidth - 100,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(125, 125, 125)',
  },
  addressTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: 'rgb(41, 143, 163)',
  },
  addressText: {
    fontSize: 20,
    fontWeight: '200',
    color: 'rgb(79, 79, 79)',
  },
});

export default LandingScreen;
