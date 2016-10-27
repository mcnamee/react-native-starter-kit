/**
 * Style Guide
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';
 
/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

// App Globals
import AppStyles from '../styles'

// Components
import Alerts from '../components/alerts'
import Button from '../components/button'
import ListRow from '../components/list.row'
import Card from '../components/card'

/* Component ==================================================================== */
class StyleGuide extends Component {
	static componentName = 'StyleGuide';

  render = () => {
    return (
      <ScrollView automaticallyAdjustContentInsets={false} 
        style={[AppStyles.container]}>

        <View style={[AppStyles.paddingVertical]}>
        	<View style={[AppStyles.paddingHorizontal]}>

	        	<Text style={[AppStyles.h1]}>Heading 1</Text>
	        	<Text style={[AppStyles.h2]}>Heading 2</Text>
	        	<Text style={[AppStyles.h3]}>Heading 3</Text>
	        	<Text style={[AppStyles.h4]}>Heading 4</Text>
		        <Text style={[AppStyles.p]}>Mus ac nostra lobortis sapien a erat in risus purus odio egestas a donec fringilla scelerisque congue parturient condimentum penatibus neque urna magna. Leo dictumst senectus inceptos parturient pharetra.</Text>
		        <Text style={[AppStyles.p]}>Mus ac nostra lobortis sapien a erat in risus purus odio egestas a donec fringilla scelerisque congue parturient condimentum penatibus neque urna magna. Leo dictumst senectus inceptos parturient pharetra.</Text>

		        <View style={[AppStyles.spacer_10]} />
		        <View style={[AppStyles.hr]} />
		        <View style={[AppStyles.spacer_10]} />

		        <Text style={[AppStyles.h2]}>Buttons</Text>

		        <View style={[AppStyles.row]}>
		        	<View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
				        <Button size={'large'} type={'outlined'}
				          text={'Large'}
				          onPress={()=>alert('This can do what you want.')} />
		          </View>

		          <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
				        <Button size={'large'}
				        	color={'#FB6567'}
				          text={'Large'}
				          onPress={()=>alert('This can do what you want.')} />
		          </View>
		        </View>

		        <View style={[AppStyles.row]}>
		        	<View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
				        <Button
				          text={'Default'}
				          onPress={()=>alert('This can do what you want.')} />
		          </View>

		          <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
				        <Button type={'outlined'}
				          text={'Default'}
				          onPress={()=>alert('This can do what you want.')} />
		          </View>
		        </View>

		        <View style={[AppStyles.row]}>
		        	<View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
				        <Button size={'small'} type={'outlined'}
				          text={'Small'}
				          onPress={()=>alert('This can do what you want.')} />
		          </View>

		          <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
				        <Button size={'small'}
				          text={'Small'}
				          onPress={()=>alert('This can do what you want.')} />
		          </View>
		        </View>

		        <View style={[AppStyles.spacer_10]} />
		        <View style={[AppStyles.hr]} />
		        <View style={[AppStyles.spacer_10]} />

		        <Text style={[AppStyles.h2]}>Alerts</Text>

		        <Alerts 
		        	status={'Something\'s happening...'} 
		        	success={'Hello Success'} 
		        	error={'Error hey'}  />

		        <View style={[AppStyles.spacer_10]} />
		        <View style={[AppStyles.hr]} />
		        <View style={[AppStyles.spacer_10]} />

		        <Text style={[AppStyles.h2]}>Cards</Text>
	        </View>

	        <Card onPress={()=>{alert('Hello')}}>
	        	<View style={[AppStyles.row, AppStyles.paddingBottomSml]}>
	  					<View style={[AppStyles.flex1]}>
	  						<Image 
	  							source={{uri: 'http://wp-api.mcnam.ee/wp-content/uploads/2016/10/brekkie-crumble-33651_l.jpeg'}} 
	  							style={[{ left: 0, right: 0, top: 0, bottom: 0, position: 'absolute', resizeMode: 'contain', }]} />
	  					</View>
	  					<View style={[AppStyles.flex3, AppStyles.paddingLeftSml]}>
		          	<Text style={[AppStyles.h3]}>Title of post</Text>
		          	<Text style={[AppStyles.baseText]}>Lorem ipsum diem or seckt original de pingdo of the lespec.</Text>
	          	</View>
          	</View>
	        </Card>
	        <Card onPress={()=>{alert('Hello')}}>
  					<View style={[AppStyles.row, AppStyles.paddingBottomSml]}>
	  					<View style={[AppStyles.flex1]}>
	  						<Image 
	  							source={{uri: 'http://wp-api.mcnam.ee/wp-content/uploads/2016/10/brekkie-crumble-33651_l.jpeg'}} 
	  							style={[{ left: 0, right: 0, top: 0, bottom: 0, position: 'absolute', resizeMode: 'contain', }]} />
	  					</View>
	  					<View style={[AppStyles.flex3, AppStyles.paddingLeftSml]}>
		          	<Text style={[AppStyles.h3]}>Another Title</Text>
		          	<Text style={[AppStyles.baseText]}>Lorem ipsum diem or seckt original de pingdo of the lespec.</Text>
	          	</View>
          	</View>
	        </Card>
        	
        	<View style={[AppStyles.paddingHorizontal]}>
  	        <View style={[AppStyles.spacer_10]} />
  	        <View style={[AppStyles.hr]} />
  	        <View style={[AppStyles.spacer_10]} />

  	        <Text style={[AppStyles.h2]}>List Rows</Text>
          </View>

	        <ListRow 
	          title={'Single Malt'}
	          onPress={()=>{alert('Go To Entry View')}} />
          <ListRow 
	          title={'Blended'}
	          onPress={()=>{alert('Go To Entry View')}} />
	        <ListRow 
	          title={'Bourbon'}
	          onPress={()=>{alert('Go To Entry View')}} />

          <View style={[AppStyles.paddingHorizontal]}>
		        <View style={[AppStyles.spacer_20]} />
		        <Text style={[AppStyles.h2]}>List Rows - with Image</Text>
		        <View style={[AppStyles.spacer_10]} />
	        </View>

	        <ListRow 
	          title={'Single Malt'}
	          image={'http://lorempixel.com/g/1000/250/nature'}
	          onPress={()=>{alert('Go To Entry View')}} />
          <ListRow 
	          title={'Blended'}
	          image={'http://lorempixel.com/g/1000/250/animals'}
	          onPress={()=>{alert('Go To Entry View')}} />
	        <ListRow 
	          title={'Bourbon'}
	          image={'http://lorempixel.com/g/1000/250/nature'}
	          onPress={()=>{alert('Go To Entry View')}} />
        </View>
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default StyleGuide