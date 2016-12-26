/**
 * Home Screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import { Icon, Tab, Tabs } from 'react-native-elements';

// App Globals
import AppConfig from '@config/';

// Components
import Browse from '@containers/recipes/browse';
import StyleGuide from '@components/style.guide';
import ComingSoon from '@components/general/soon';

/* Component ==================================================================== */
class Home extends Component {
  static componentName = 'Home';

  static propTypes = {
    navigator: PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: '2',
    };
  }

  /**
    * When user taps to change tabs
    */
  changeTab = (selectedTab) => {
    this.setState({ selectedTab });
  }

  render = () => (
    <Tabs>
      <Tab
        title={'Timeline'}
        onPress={() => this.changeTab('1')}
        selected={this.state.selectedTab === '1'}
        renderIcon={() => <Icon name={'timeline'} size={26} color={'#BABDC2'} />}
        renderSelectedIcon={() => <Icon name={'timeline'} size={26} color={AppConfig.theme.primaryColor} />}
      >
        <ComingSoon navigator={this.props.navigator} />
      </Tab>

      <Tab
        title={'Recipes'}
        onPress={() => this.changeTab('2')}
        selected={this.state.selectedTab === '2'}
        renderIcon={() => <Icon name={'search'} size={26} color={'#BABDC2'} />}
        renderSelectedIcon={() => <Icon name={'search'} size={26} color={AppConfig.theme.primaryColor} />}
      >
        <Browse navigator={this.props.navigator} />
      </Tab>


      <Tab
        title={'Style Guide'}
        onPress={() => this.changeTab('3')}
        selected={this.state.selectedTab === '3'}
        renderIcon={() => <Icon name={'speaker-notes'} size={26} color={'#BABDC2'} />}
        renderSelectedIcon={() => <Icon name={'speaker-notes'} size={26} color={AppConfig.theme.primaryColor} />}
      >
        <StyleGuide navigator={this.props.navigator} />
      </Tab>
    </Tabs>
  )
}

/* Export Component ==================================================================== */
export default Home;
