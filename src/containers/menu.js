/**
 * Menu Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as UserActions from '../reducers/user/actions';

// The component we're mapping to
import Menu from '../components/ui/menu';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  logout: UserActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
