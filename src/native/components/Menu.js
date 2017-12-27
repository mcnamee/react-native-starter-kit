import React from 'react';
import { View } from 'react-native';
import { List, ListItem, Text } from 'native-base';
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
      <ListItem {...listItemProps} key="0" onPress={() => Actions.tabbar()}>
        <Text>Home</Text>
      </ListItem>
      <ListItem {...listItemProps} key="1" onPress={() => Actions.about()}>
        <Text>About Us</Text>
      </ListItem>
      <ListItem {...listItemProps} key="2" onPress={() => Actions.signUp()}>
        <Text>Sign Up</Text>
      </ListItem>
    </List>
  </View>
);

export default Menu;
