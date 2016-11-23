/**
 * First Load Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as UserActions from '../reducers/user/actions';

// The component we're mapping to
import FirstLoad from '../components/first.load';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
});

// Any actions to map to the component?
const mapDispatchToProps = {
  login: UserActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstLoad);
