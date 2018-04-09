import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Form, Item, Label, Input, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Messages from './Messages';
import Header from './Header';
import Spacer from './Spacer';

import { DEFAULT_LOCALE } from '../../i18n/i18n';


class Locale extends React.Component {
  static propTypes = {
    locale: PropTypes.shape({
      userLocale: PropTypes.string,
    }).isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onChangeLocale: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      userLocale:
        (props.locale && props.locale.userLocale) ? props.locale.userLocale : DEFAULT_LOCALE,
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
    this.props.onChangeLocale(this.state)
      .then((promise) => {
        Actions.pop();
      })
      .catch(e => console.log(`Error: ${e}`));
  }

  render() {
    const { loading, error } = this.props;

    // Loading
    if (loading) return <Loading />;

    return (
      <Container>
        <Content padder>
          <Header
            title="Change language"
            content=""
          />

          {error && <Messages message={error} />}

          <Form>
            <Item stackedLabel>
              <Label>Language</Label>
              <Input
                autoCapitalize="none"
                value={this.state.userLocale}
                keyboardType="default"
                onChangeText={v => this.handleChange('userLocale', v)}
              />
            </Item>

            <Spacer size={20} />

            <Button block onPress={this.handleSubmit}><Text>Save</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Locale;
