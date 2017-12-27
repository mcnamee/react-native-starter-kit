import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

const Profile = ({ member, logout }) => (
  <ScrollView>
    <Text h4>Profile</Text>

    <List containerStyle={{ marginBottom: 20 }}>
      {(member && member.email) ?
        <View>
          <ListItem onPress={Actions.updateProfile}>
            <Text>Update My Profile</Text>
          </ListItem>
          <ListItem onPress={logout}>
            <Text>Logout</Text>
          </ListItem>
        </View>
      :
        <View>
          <ListItem onPress={Actions.login}>
            <Text>Login</Text>
          </ListItem>
          <ListItem onPress={Actions.signUp}>
            <Text>Sign Up</Text>
          </ListItem>
          <ListItem onPress={Actions.forgotPassword}>
            <Text>Forgot Password</Text>
          </ListItem>
        </View>
      }
    </List>
  </ScrollView>
);

Profile.propTypes = {
  member: PropTypes.shape({}),
  logout: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  member: {},
};

export default Profile;
