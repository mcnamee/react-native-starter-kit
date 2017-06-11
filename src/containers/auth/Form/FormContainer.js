/**
 * Login/Sign Up/Forgot Password Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import FormRender from './FormView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  login: UserActions.login,
  signUp: UserActions.signUp,
  resetPassword: UserActions.resetPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
