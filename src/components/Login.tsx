import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, View } from 'native-base';
import Spacer from './UI/Spacer';
import Logo from './Logo';

var styles = StyleSheet.create({
  formContainer: {
    flex: 1,
  },
});

const Login = () => (
  <Container>
    <Content padder>
      <Logo displayTitle={ true }></Logo>

      <Spacer size={15} />

      <View style={styles.formContainer}>
      </View>

    </Content>
  </Container>
);

export default Login;
