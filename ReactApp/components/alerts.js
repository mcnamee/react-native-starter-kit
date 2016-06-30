/**
 * Alerts - Status/Success/Error Messages
 *
 *  USAGE:
      <Alerts status={'Something\'s happening...'} success={'Hello Success'} error={'Error hey'}  />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
 'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

// App Globals
import AppStyles from '../styles'

/* Component ==================================================================== */
class Alerts extends Component {
  static propTypes = {
    status: React.PropTypes.string,
    success: React.PropTypes.string,
    error: React.PropTypes.string,
  }

  static defaultProps = {
    status: '',
    success: '',
    error: '',
  }

  render = () => {
    let { status, success, error } = this.props;

    // Allows you to show both error and success
    return (
      <View style={styles.alerts}>
        {success != '' &&
          <View>
            <View style={[styles.msg]}>
              <Text style={[AppStyles.baseText, styles.msg_text]}>{success}</Text>
            </View>
            <View style={AppStyles.spacer_20} />
          </View>
        }

        {status != '' &&
          <View>
            <View style={[styles.msg, styles.msgStatus]}>
              <Text style={[AppStyles.baseText, styles.msg_text, styles.msgStatus_text]}>{status}</Text>
            </View>
            <View style={AppStyles.spacer_20} />
          </View>
        }

        {error != '' &&
          <View>
            <View style={[styles.msg, styles.msgError]}>
              <Text style={[AppStyles.baseText, styles.msg_text, styles.msgError_text]}>{error}</Text>
            </View>
            <View style={AppStyles.spacer_20} />
          </View>
        }
      </View>
    )
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  alerts: {
    left: 0,
    right: 0,
  },
  // Success
  msg: {
    right: 0,
    left: 0,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderLeftWidth: 3,
    borderColor: "#1C854C",
    backgroundColor: "#59DC9A",
    // borderRadius: 2,
  },
  msg_text: {
    textAlign: "center",
    color: "#16693c",
    fontWeight: "500"
  },

  // Error
  msgError: {
    borderColor: "#C02827",
    backgroundColor: "#FB6567",
  },
  msgError_text: {
    color: "#7f1a1a",
  },

  // Status
  msgStatus: {
    borderColor: "#408491",
    backgroundColor: "#8EDBE5",
  },
  msgStatus_text: {
    color: "#2f606a",
  },
});

/* Export Component ==================================================================== */
export default Alerts