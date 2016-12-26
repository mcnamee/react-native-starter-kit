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
import AppStyles from '@config/styles';

// Components
import Card from '@components/ui/card';

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
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    onPressFavourite: PropTypes.func,
    isFavourite: PropTypes.bool,
  }

  render = () => {
    const { title, content, image, onPress, onPressFavourite, isFavourite } = this.props;

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Card image={image && { uri: image }}>
          <View style={[AppStyles.paddingBottomSml]}>
            <Text style={[AppStyles.h3]}>{title}</Text>
            <Text style={[AppStyles.baseText]}>{content}</Text>

            {!!onPressFavourite &&
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPressFavourite}
                style={[styles.favourite]}
              >
                <Icon
                  raised
                  name={'star-border'}
                  color={isFavourite ? '#FFFFFF' : '#FDC12D'}
                  containerStyle={{
                    backgroundColor: isFavourite ? '#FDC12D' : '#FFFFFF',
                  }}
                />
              </TouchableOpacity>
            }
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

/* Export Component ==================================================================== */
export default RecipeCard;
