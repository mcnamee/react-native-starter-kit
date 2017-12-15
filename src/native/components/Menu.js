import React from 'react';
import { View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const listItemProps = {
  containerStyle: {
    backgroundColor: '#F3F5F5',
  },
};

const Menu = () => (
  <View
    style={{
      flex: 1,
      paddingTop: 44,
      backgroundColor: '#F3F5F5',
      flexDirection: 'column',
    }}
  >
    <List>
      <ListItem {...listItemProps} key="0" title="Home" onPress={() => Actions.tabbar()} />
      <ListItem {...listItemProps} key="1" title="About Us" onPress={() => Actions.about()} />
      <ListItem {...listItemProps} key="2" title="Sign Up" onPress={() => Actions.signUp()} />
    </List>
  </View>
);

export default Menu;
