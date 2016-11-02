/**
 * List Row
 *
    <ListRow
      title={title}
      image={entry.entry_image}
      onPress={()=>{alert('Go To Entry View')}}
    />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

// App Globals
import AppStyles from '../styles';
import AppConfig from '../config';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  listRow: {
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
  },
  listRowInner: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: AppConfig.borderColor,
  },
  listRow_text: {
    color: AppConfig.textColor,
    textAlign: 'center',
    fontWeight: '500',
    backgroundColor: 'transparent',
  },
  listRowImage_text: {
    color: '#FFF',
  },

  // With Image
  imageBackground: {
    backgroundColor: '#333',
  },
  imageBackground_image: {
    height: AppConfig.windowHeight / 4,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  },
});

/* Component ==================================================================== */
class ListRow extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
  }

  static defaultProps = {
    title: 'Lorem Ipsum',
  }

  render = () => {
    const { title, image, onPress } = this.props;

    if (image) {
      return (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.7}
          style={[styles.listRow, image && styles.imageBackground]}
        >
          <Image source={{ uri: image }} style={[styles.imageBackground_image]}>
            <Text
              style={[
                AppStyles.baseText,
                styles.listRow_text,
                styles.listRowImage_text,
              ]}
            >
              {title.toUpperCase()}
            </Text>
          </Image>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={[styles.listRow]}
      >
        <View style={styles.listRowInner}>
          <Text style={[AppStyles.baseText, styles.listRow_text]}>
            {title.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

/* Export Component ==================================================================== */
export default ListRow;
