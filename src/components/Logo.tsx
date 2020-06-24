import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, H1, View } from 'native-base';
import AppConfig from '../constants/config';
import Spacer from './UI/Spacer';

var styles = StyleSheet.create({
  headerContent: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 125,
    height: 125,
    marginBottom: 20,
  },
});

const Logo = ({ displayTitle }: { displayTitle: boolean }) => {
  return (
    <View>
      <Spacer size={30} />

      <View style={styles.headerContent}>
        <Image style={styles.image} source={require('../../assets/images/logo.png')} />

        {displayTitle && (
          <View>
            <H1> {AppConfig.productName} </H1>
            <Spacer size={10} />
            <Text> {AppConfig.productSlogan} </Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default Logo;
