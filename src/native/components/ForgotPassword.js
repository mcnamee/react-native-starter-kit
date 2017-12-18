import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { Card, Text, FormLabel, FormInput, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import AppColors from '../constants/colors';
import Loading from './Loading';

class ForgotPassword extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => {
    this.setState({
      ...this.state,
      [name]: val,
    });
  }

  handleSubmit = () => {
    this.props.onFormSubmit(this.state)
      .then(() => Actions.tabbar())
      .catch(e => console.log(`Error: ${e}`));
  }

  render() {
    const { loading, error } = this.props;

    // Loading
    if (loading) return <Loading />;

    return (
      <ScrollView>
        <Card title="Forgot Password">
          <View>
            {error &&
              <View style={{
                  backgroundColor: AppColors.danger,
                  paddingVertical: 10,
                }}
              >
                <Text style={{ color: '#fff', textAlign: 'center' }}>{error}</Text>
              </View>
            }

            <FormLabel>Email</FormLabel>
            <FormInput
              value={this.state.email}
              keyboardType="email-address"
              onChangeText={v => this.handleChange('email', v)}
            />

            <Button
              containerViewStyle={{ marginTop: 15 }}
              backgroundColor={AppColors.brand.primary}
              onPress={this.handleSubmit}
              title="Reset Password"
            />
          </View>
        </Card>
      </ScrollView>
    );
  }
}

export default ForgotPassword;
