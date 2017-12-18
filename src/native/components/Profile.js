import React from 'react';
import { ScrollView } from 'react-native';
import { Text, List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const Profile = () => (
  <ScrollView>
    <Text h4>Profile</Text>

    <List containerStyle={{ marginBottom: 20 }}>
      <ListItem title="Login" onPress={Actions.login} />
      <ListItem title="Sign Up" onPress={Actions.signUp} />
      <ListItem title="Forgot Password" onPress={Actions.forgotPassword} />
    </List>
  </ScrollView>
);

export default Profile;
