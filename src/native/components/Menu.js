import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const listItemProps = {
  containerStyle: {
    backgroundColor: '#F3F5F5',
  },
};

export default class Menu extends Component {
  render = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F3F5F5',
        flexDirection: 'column',
      }}
    >
      <List containerStyle={{ marginTop: 44 }}>
        <ListItem {...listItemProps} key={'0'} title={'Home'} />
        <ListItem {...listItemProps} key={'1'} title={'About Us'} onPress={() => Actions.home()} />
        <ListItem {...listItemProps} key={'2'} title={'Settings'} />
      </List>
    </View>
  )
}
