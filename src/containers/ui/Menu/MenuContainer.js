/**
 * Menu Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// Actions
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import MenuRender from './MenuView';

// Authenticated User Menu
const authMenu = [
  { title: 'Update Profile', onPress: () => { Actions.updateProfile(); } },
  { title: 'Change Password', onPress: () => { Actions.passwordReset(); } },
];

// Unauthenticated User Menu
const unauthMenu = [
  { title: 'Login', onPress: () => { Actions.login(); } },
  { title: 'Sign Up', onPress: () => { Actions.signUp(); } },
];

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
  unauthMenu,
  authMenu,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  logout: UserActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuRender);
