/**
 * Style Guide
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {
  Card,
  List,
  Button,
  ListItem,
} from 'react-native-elements';

// App Globals
import AppStyles from '../styles';
import AppConfig from '../config';

// Components
import Alerts from '../components/alerts';

/* Component ==================================================================== */
class StyleGuide extends Component {
  static componentName = 'StyleGuide';

  render = () => (
    <ScrollView
      automaticallyAdjustContentInsets={false}
      style={[AppStyles.container]}
    >
      <Card {...AppConfig.cardDefaults}>
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

      <View style={[AppStyles.paddingVertical]}>
        <View style={[AppStyles.paddingHorizontal]}>
          <Text style={[AppStyles.h2]}>Buttons</Text>

          <View style={[AppStyles.row]}>
            <View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
              <Button
                title={'Default'}
                {...AppConfig.buttonDefaults}
                onPress={() => Alert.alert(AppConfig.appName, 'This can do what you want.')}
              />
            </View>

            <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
              <Button
                title={'Default'}
                icon={{ name: 'code' }}
                {...AppConfig.buttonDefaults}
                backgroundColor={'#FB6567'}
                onPress={() => Alert.alert(AppConfig.appName, 'This can do what you want.')}
              />
            </View>
          </View>

          <View style={[AppStyles.spacer_10]} />

          <View style={[AppStyles.row]}>
            <View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
              <Button
                title={'Small'}
                {...AppConfig.smlButtonDefaults}
                onPress={() => Alert.alert(AppConfig.appName, 'This can do what you want.')}
              />
            </View>

            <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
              <Button
                iconRight
                title={'Small'}
                icon={{ name: 'cached' }}
                {...AppConfig.smlButtonDefaults}
                backgroundColor={'#31E04A'}
                onPress={() => Alert.alert(AppConfig.appName, 'This can do what you want.')}
              />
            </View>
          </View>

          <View style={[AppStyles.spacer_10]} />

          <Text style={[AppStyles.h2]}>Alerts</Text>

          <Alerts
            status={'Something\'s happening...'}
            success={'Hello Success'}
            error={'Error hey'}
          />

          <View style={[AppStyles.spacer_10]} />

          <Text style={[AppStyles.h2]}>Cards</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => Alert.alert('Go to Post', 'Maybe someday')}
        >
          <Card
            {...AppConfig.cardDefaults}
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
          onPress={() => Alert.alert('Go to Post', 'Maybe someday')}
        >
          <Card
            {...AppConfig.cardDefaults}
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

        <View style={[AppStyles.paddingHorizontal]}>
          <View style={[AppStyles.spacer_10]} />

          <Text style={[AppStyles.h2]}>List Rows</Text>
        </View>

        <List>
          <ListItem
            title={'John Smith'}
            subtitle={'CEO'}
            onPress={() => Alert.alert(AppConfig.appName, 'Tapped on John Smith')}
          />
          <ListItem
            title={'Jane Doe'}
            subtitle={'COO'}
            onPress={() => Alert.alert(AppConfig.appName, 'Tapped on John Smith')}
          />
          <ListItem
            title={'Sam Smith'}
            subtitle={'CFO'}
            onPress={() => Alert.alert(AppConfig.appName, 'Tapped on Sam Smith')}
          />
        </List>
      </View>
    </ScrollView>
  )
}

/* Export Component ==================================================================== */
export default StyleGuide;
