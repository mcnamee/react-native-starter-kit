/**
 * Recipe View Screen
 *  - The individual recipe screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

// App Globals
import AppStyles from '../../utils/styles';

// Components
import Card from '../card';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  favourite: {
    position: 'absolute',
    top: -45,
    right: 0,
  },
});

/* Component ==================================================================== */
class RecipeCard extends Component {
  static componentName = 'RecipeCard';

  static propTypes = {
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onPress: PropTypes.function,
  }

  render = () => {
    const { title, content, image, onPress } = this.props;

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Card image={image && { uri: image }}>
          <View style={[AppStyles.paddingBottomSml]}>
            <Text style={[AppStyles.h3]}>{title}</Text>
            <Text style={[AppStyles.baseText]}>{content}</Text>

            <TouchableOpacity activeOpacity={0.8} style={[styles.favourite]}>
              <Icon name={'star-border'} raised color={'#FDC12D'} />
            </TouchableOpacity>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

/* Export Component ==================================================================== */
export default RecipeCard;
