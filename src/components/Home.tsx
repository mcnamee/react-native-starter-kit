import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Button, View } from 'native-base';
import Spacer from './UI/Spacer';
import buttons from '../styles/buttons';
import Logo from './Logo';

var styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  singleButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: '10%',
    paddingRight: '10%',
  }
});

const Home = () => {
  return (
    <Container>
      <Content padder>
        <Logo displayTitle={ false }></Logo>

        <Spacer size={15} />

        <View style={styles.buttonContainer}>
          <Button primary={true} style={buttons.homeButton}>
            <Text> CTA 1 </Text>
          </Button>

          <Button primary={true} style={buttons.homeButton}>
            <Text> CTA 2 </Text>
          </Button>
        </View>

        <View style={styles.singleButtonContainer}>
          <Button primary={true} style={buttons.homeButton}>
            <Text> CTA 3 </Text>
          </Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button primary={true} style={buttons.homeButton}>
            <Text> CTA 4 </Text>
          </Button>

          <Button primary={true} style={buttons.homeButton}>
            <Text> CTA 5 </Text>
          </Button>
        </View>

      </Content>
    </Container>
  );
};

export default Home;
