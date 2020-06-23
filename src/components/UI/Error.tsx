import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Text, H3, Button, View,
} from 'native-base';
import Spacer from './Spacer';

const Error = ({ title, content, tryAgain }: { title: string, content: string, tryAgain: any}) => (
  <Container style={{ flex: 1 }}>
    <View style={{ alignSelf: 'center' }}>
      <Spacer size={20} />
      <H3 style={{ textAlign: 'center' }}>{title}</H3>
      <Text style={{ textAlign: 'center', marginBottom: 20 }}>{content}</Text>
      {tryAgain && (
        <Button block onPress={tryAgain}>
          <Text>Try Again</Text>
        </Button>
      )}
      <Spacer size={20} />
    </View>
  </Container>
);

Error.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  tryAgain: PropTypes.func,
};

Error.defaultProps = {
  title: 'Uh oh',
  content: 'An unexpected error came up',
  tryAgain: null,
};

export default Error;
