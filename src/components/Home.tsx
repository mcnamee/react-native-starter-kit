import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Text, H1 } from 'native-base';
import AppConfig from '../constants/config';
import Spacer from './UI/Spacer';

var styles = StyleSheet.create({
  homeContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 125,
    height: 125,
    flex: 1,
    marginBottom: 20,
  },
});

const Home = () => (
  <Container>
    <Content padder contentContainerStyle={styles.homeContent}>
      <Spacer size={30} />
      <Image style={styles.image} source={require('../../assets/images/logo.png')} />

      <H1> {AppConfig.productName} </H1>
      <Spacer size={10} />
      <Text> {AppConfig.productSlogan } </Text>

    </Content>
  </Container>
);

export default Home;
