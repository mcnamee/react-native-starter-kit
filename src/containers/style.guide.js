/**
 * Style Guide
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppColors, AppStyles } from '@theme/';

// Components
import Alerts from '@components/ui/alerts';
import Button from '@components/ui/button';
import Card from '@components/ui/card';
import Spacer from '@components/ui/spacer';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  // Tab Styles
  tabContainer: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: AppColors.brand.primary,
  },
  tabbarIndicator: {
    backgroundColor: '#FFF',
  },
  tabbar_text: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
class StyleGuide extends Component {
  static componentName = 'StyleGuide';

  constructor(props) {
    super(props);

    this.state = {
      navigation: {
        index: 0,
        routes: [
          { key: '0', title: 'Basics' },
          { key: '1', title: 'Cards' },
          { key: '2', title: 'Lists' },
        ],
      },
    };
  }

  /**
    * On Change Tab
    */
  handleChangeTab = (index) => {
    this.setState({
      navigation: { ...this.state.navigation, index },
    });
  }

  /**
    * Which component to show
    */
  renderScene = ({ route }) => {
    switch (route.key) {
      case '0' :
        return (
          <View style={styles.tabContainer}>
            <ScrollView
              automaticallyAdjustContentInsets={false}
              style={[AppStyles.container]}
            >
              <Card title={'Typography'}>
                <View>
                  <Text style={[AppStyles.h1]}>Heading 1</Text>
                  <Text style={[AppStyles.h2]}>Heading 2</Text>
                  <Text style={[AppStyles.h3]}>Heading 3</Text>
                  <Text style={[AppStyles.h4]}>Heading 4</Text>
                  <Text style={[AppStyles.p]}>
                    Mus ac nostra lobortis sapien a erat in risus purus odio
                    egestas a donec fringilla scelerisque congue parturient
                    condimentum penatibus neque urna magna. Leo dictumst
                    senectus inceptos parturient pharetra.
                  </Text>
                  <Text style={[AppStyles.p]}>
                    Mus ac nostra lobortis sapien a erat in risus purus odio
                    egestas a donec fringilla scelerisque congue parturient
                    condimentum penatibus neque urna magna. Leo dictumst
                    senectus inceptos parturient pharetra.
                  </Text>
                </View>
              </Card>

              <Card title={'Buttons'}>
                <View>
                  <View style={[AppStyles.row]}>
                    <View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
                      <Button
                        large
                        title={'Large'}
                        onPress={Actions.comingSoon}
                      />
                    </View>

                    <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
                      <Button
                        large
                        title={'W/ Icon'}
                        icon={{ name: 'code' }}
                        onPress={Actions.comingSoon}
                      />
                    </View>
                  </View>

                  <Spacer size={10} />

                  <View style={[AppStyles.row]}>
                    <View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
                      <Button
                        title={'Default'}
                        onPress={Actions.comingSoon}
                      />
                    </View>

                    <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
                      <Button
                        title={'Colored'}
                        backgroundColor={'#FB6567'}
                        onPress={Actions.comingSoon}
                      />
                    </View>
                  </View>

                  <Spacer size={10} />

                  <View style={[AppStyles.row]}>
                    <View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
                      <Button
                        small
                        title={'Small'}
                        onPress={Actions.comingSoon}
                      />
                    </View>

                    <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
                      <Button
                        small
                        outlined
                        iconRight
                        title={'Outlined'}
                        icon={{ name: 'cached' }}
                        onPress={Actions.comingSoon}
                      />
                    </View>
                  </View>
                </View>
              </Card>

              <Card title={'Alerts'}>
                <Alerts
                  status={'Something\'s happening...'}
                  success={'Hello Success'}
                  error={'Error hey'}
                />
              </Card>
            </ScrollView>
          </View>
        );
      case '1' :
        return (
          <View style={styles.tabContainer}>
            <ScrollView
              automaticallyAdjustContentInsets={false}
              style={[AppStyles.container]}
            >
              <View style={[AppStyles.paddingHorizontal]}>
                <Spacer size={15} />
                <Text style={[AppStyles.h2]}>Cards</Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={Actions.comingSoon}
              >
                <Card
                  image={{ uri: 'http://wp-api.mcnam.ee/wp-content/uploads/2016/10/brekkie-crumble-33651_l.jpeg' }}
                >
                  <View style={[AppStyles.paddingLeftSml, AppStyles.paddingBottomSml]}>
                    <Text style={[AppStyles.h3]}>Title of post</Text>
                    <Text style={[AppStyles.baseText]}>
                      Lorem ipsum diem or seckt original de pingdo of the lespec.
                    </Text>
                  </View>
                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={Actions.comingSoon}
              >
                <Card
                  image={{ uri: 'http://wp-api.mcnam.ee/wp-content/uploads/2016/10/brekkie-crumble-33651_l.jpeg' }}
                >
                  <View style={[AppStyles.paddingLeftSml, AppStyles.paddingBottomSml]}>
                    <Text style={[AppStyles.h3]}>Another Post</Text>
                    <Text style={[AppStyles.baseText]}>
                      Lorem ipsum diem or seckt original de pingdo of the lespec.
                    </Text>
                  </View>
                </Card>
              </TouchableOpacity>
            </ScrollView>
          </View>
        );
      case '2' :
        return (
          <View style={styles.tabContainer}>
            <ScrollView
              automaticallyAdjustContentInsets={false}
              style={[AppStyles.container]}
            >
              <View style={[AppStyles.paddingHorizontal]}>
                <Spacer size={15} />
                <Text style={[AppStyles.h2]}>List Rows</Text>
              </View>
              <List>
                <ListItem
                  title={'John Smith'}
                  subtitle={'CEO'}
                  onPress={Actions.comingSoon}
                />
                <ListItem
                  title={'Jane Doe'}
                  subtitle={'COO'}
                  onPress={Actions.comingSoon}
                />
                <ListItem
                  title={'Sam Smith'}
                  subtitle={'CFO'}
                  onPress={Actions.comingSoon}
                />
              </List>
            </ScrollView>
          </View>
        );
      default :
        return (
          <View />
        );
    }
  }

  /**
    * Header Component
    */
  renderHeader = props => (
    <TabBarTop
      {...props}
      style={styles.tabbar}
      indicatorStyle={styles.tabbarIndicator}
      renderLabel={scene => (
        <Text style={[styles.tabbar_text]}>{scene.route.title}</Text>
      )}
    />
  )

  render = () => (
    <TabViewAnimated
      style={[styles.tabContainer]}
      renderScene={this.renderScene}
      renderHeader={this.renderHeader}
      navigationState={this.state.navigation}
      onRequestChangeTab={this.handleChangeTab}
    />
  )
}

/* Export Component ==================================================================== */
export default StyleGuide;
