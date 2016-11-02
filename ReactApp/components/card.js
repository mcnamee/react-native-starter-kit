/**
 * Card
 *
    <Card onPress={() => alert('Go To Entry View')}>
      <Text>Hello!</Text>
    </Card>
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// App Globals
import AppStyles from '../styles';
import AppConfig from '../config';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  card: {
    left: 0,
    right: 0,
  },
  cardInner: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: AppConfig.borderColor,
    borderRightWidth: 1,
    borderRightColor: AppConfig.borderColor,
    borderRadius: 5,
  },
});

/* Component ==================================================================== */
const Card = ({ onPress, children }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.card]}
    activeOpacity={onPress ? 0.7 : 1}
  >
    <View
      style={[
        AppStyles.paddingTopSml,
        AppStyles.paddingLeftSml,
        AppStyles.paddingRightSml,
      ]}
    >
      <View style={styles.cardInner}>
        <View style={[AppStyles.paddingSml]}>
          {children}
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

Card.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.element.isRequired,
};

/* Export Component ==================================================================== */
export default Card;
