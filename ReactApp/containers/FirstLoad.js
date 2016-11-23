/**
 * FirstLoad Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as UserActions from '../actions/user';

// The component we're mapping to
import FirstLoad from '../components/first.load';

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  login: UserActions.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstLoad);
