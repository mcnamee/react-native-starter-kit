/**
 * Menu Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as UserActions from '../actions/user';

// The component we're mapping to
import Menu from '../components/menu';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  logout: UserActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
