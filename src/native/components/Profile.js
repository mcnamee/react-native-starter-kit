import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { Text, List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const Profile = ({ member, logout }) => (
  <ScrollView>
    <Text h4>Profile</Text>

    <List containerStyle={{ marginBottom: 20 }}>
      {(member && member.email) ?
        <View>
          <ListItem title="Update My Profile" onPress={Actions.updateProfile} />
          <ListItem title="Logout" onPress={logout} />
        </View>
      :
        <View>
          <ListItem title="Login" onPress={Actions.login} />
          <ListItem title="Sign Up" onPress={Actions.signUp} />
          <ListItem title="Forgot Password" onPress={Actions.forgotPassword} />
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
