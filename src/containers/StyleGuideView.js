/**
 * Style Guide
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import {
  View,
  Alert,
  ListView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';
import { SocialIcon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppColors, AppStyles } from '@theme/';

// Components
import {
  Alerts,
  Button,
  Card,
  Spacer,
  Text,
  List,
  ListItem,
} from '@components/ui/';

// Example Data
const dummyData1 = [
  { title: 'Settings', icon: 'build' },
  { title: 'Alarms', icon: 'alarm' },
  { title: 'Cards', icon: 'card-membership' },
  { title: 'Favourites', icon: 'grade' },
  { title: 'Help', icon: 'help' },
];

const dummyData2 = [
  {
    title: 'Jim Collins',
    role: 'Vice President',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/arashmil/128.jpg',
  },
  {
    title: 'Sarah Franklin',
    role: 'Vice Chairman',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
  },
  {
    title: 'James Fringe',
    role: 'CEO',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sindresorhus/128.jpg',
  },
  {
    title: 'Janice Overton',
    role: 'Lead Developer',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg',
  },
  {
    title: 'Lisa Smith',
    role: 'CTO',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vista/128.jpg',
  },
];

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

    // Setup ListViews
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const ds2 = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      navigation: {
        index: 0,
        routes: [
          { key: '0', title: 'Buttons' },
          { key: '1', title: 'Basics' },
          { key: '2', title: 'Cards' },
          { key: '3', title: 'Lists' },
        ],
      },
      dataSource: ds.cloneWithRows(dummyData1),
      dataSource2: ds2.cloneWithRows(dummyData2),
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
    * Each List Item
    */
  renderRow = (data, sectionID) => (
    <ListItem
      key={`list-row-${sectionID}`}
      onPress={Actions.comingSoon}
      title={data.title}
      subtitle={data.role || null}
      leftIcon={data.icon ? { name: data.icon } : null}
      avatar={data.avatar ? { uri: data.avatar } : null}
      roundAvatar={!!data.avatar}
    />
  )

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
              <Card title={'Buttons'}>
                <View>
                  <Button
                    large
                    title={'Large'}
                    onPress={Actions.comingSoon}
                  />
                  <Spacer size={10} />

                  <Button
                    large
                    title={'W/ Icon'}
                    backgroundColor={'#33BB76'}
                    icon={{ name: 'code' }}
                    onPress={Actions.comingSoon}
                  />
                  <Spacer size={10} />

                  <Button
                    title={'Default'}
                    onPress={Actions.comingSoon}
                  />
                  <Spacer size={10} />

                  <Button
                    title={'Colored'}
                    backgroundColor={'#FB6567'}
                    onPress={Actions.comingSoon}
                  />
                  <Spacer size={10} />

                  <Button
                    small
                    title={'Small'}
                    onPress={Actions.comingSoon}
                  />
                  <Spacer size={10} />

                  <Button
                    small
                    outlined
                    iconRight
                    title={'Outlined'}
                    icon={{ name: 'cached' }}
                    onPress={Actions.comingSoon}
                  />
                </View>
              </Card>

              <Spacer size={20} />

              <Card title={'Socials'}>
                <SocialIcon button type={'facebook'} title={'Login with Facebook'} />
                <SocialIcon button type={'instagram'} light title={'Connect to Instagram'} />
                <SocialIcon button type={'twitter'} />
                <SocialIcon button type={'medium'} />

                <View style={[AppStyles.row, AppStyles.centerAligned]}>
                  <SocialIcon type={'facebook'} />
                  <SocialIcon type={'instagram'} />
                  <SocialIcon type={'twitter'} />
                  <SocialIcon type={'medium'} />
                </View>
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
              <Card title={'Typography'}>
                <View>
                  <Text h1>Heading 1</Text>
                  <Text h2>Heading 2</Text>
                  <Text h3>Heading 3</Text>
                  <Text h3 onPress={() => Alert.alert('hey')}>Heading 3 with Link</Text>
                  <Text h4>Heading 4</Text>
                  <Text h5>Heading 5</Text>
                  <Text p>
                    Mus ac nostra lobortis sapien a erat in risus purus odio
                    egestas a donec fringilla scelerisque congue parturient
                    condimentum penatibus neque urna magna. <Text onPress={() => Alert.alert('hey')}>
                    Leo dictumst</Text> senectus inceptos parturient pharetra.
                  </Text>
                  <Text p>
                    Mus ac nostra lobortis sapien a erat in risus purus odio
                    egestas a donec fringilla scelerisque congue parturient
                    condimentum penatibus neque urna magna. Leo dictumst
                    senectus inceptos parturient pharetra.
                  </Text>
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
      case '2' :
        return (
          <View style={styles.tabContainer}>
            <ScrollView
              automaticallyAdjustContentInsets={false}
              style={[AppStyles.container]}
            >
              <View style={[AppStyles.paddingHorizontal]}>
                <Spacer size={15} />
                <Text h2>Cards</Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={Actions.comingSoon}
              >
                <Card
                  image={{ uri: 'http://wp-api.mcnam.ee/wp-content/uploads/2016/10/brekkie-crumble-33651_l.jpeg' }}
                >
                  <View style={[AppStyles.paddingLeftSml, AppStyles.paddingBottomSml]}>
                    <Text h3>Title of post</Text>
                    <Text>
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
                    <Text h3>Another Post</Text>
                    <Text>
                      Lorem ipsum diem or seckt original de pingdo of the lespec.
                    </Text>
                  </View>
                </Card>
              </TouchableOpacity>
            </ScrollView>
          </View>
        );
      case '3' :
        return (
          <View style={styles.tabContainer}>
            <ScrollView
              automaticallyAdjustContentInsets={false}
              style={[AppStyles.container]}
            >
              <View style={[AppStyles.paddingHorizontal]}>
                <Spacer size={15} />
                <Text h2>List Rows</Text>
                <Spacer size={-10} />
              </View>
              <List>
                <ListView
                  renderRow={this.renderRow}
                  dataSource={this.state.dataSource}
                />
              </List>
              <List>
                <ListView
                  renderRow={this.renderRow}
                  dataSource={this.state.dataSource2}
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
