import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// dumb components
import Header from '../components/Header';
import HelloWorld from '../components/HelloWorld';
// actions
import {
  toggleColor,
} from '../../actions/actions';

/** The app entry point */
class ReactNativeWebHelloWorld extends Component {
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;

    return (
      <div className="react-native-web">
        <Header />
        <HelloWorld
          onClick={() => dispatch(toggleColor())}
          color={color}
        />
      </div>
    );
  }
}

ReactNativeWebHelloWorld.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(ReactNativeWebHelloWorld);
