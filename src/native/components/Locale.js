import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Button, ActionSheet } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Messages from './Messages';
import Header from './Header';

import { Translations } from '../../i18n';

class Locale extends React.Component {
  static propTypes = {
    locale: PropTypes.string.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onChangeLocale: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
  }

  handleChange = locale => this.props.onChangeLocale(locale)
    .then(() => Actions.pop)
    .catch(e => console.log(`Error: ${e}`));

  changeLocale = () => {
    // Form array of possible locales eg. ['en', 'it']
    const options = Object.keys(Translations);
    options.push('Cancel');

    ActionSheet.show(
      {
        title: 'Select language',
        cancelButtonIndex: options.length - 1,
        options,
      },
      (idx) => {
        if (idx !== options.length - 1) {
          this.handleChange(options[idx]);
        }
      },
    );
  }

  render() {
    const { loading, error, locale } = this.props;

    if (loading) return <Loading />;

    return (
      <Container>
        <Content padder>
          <Header
            title="Change language"
            content=""
          />

          {error && <Messages message={error} />}

          <Button block onPress={this.changeLocale}>
            <Text>Change from {locale}</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Locale;
