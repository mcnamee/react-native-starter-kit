/**
 * Recipe View
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
  Modal,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

// App Globals
import AppStyles from '../../styles'
import AppConfig from '../../config'

// Components
import Card from '../../components/card'


/* Component ==================================================================== */
class RecipeView extends Component {
  static componentName = 'RecipeView';

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    recipe: React.PropTypes.object.isRequired,
  }

  /**
    * Ingredients
    */
  _renderIngredients = ingredients => {
  	let ingJsx = [];
  	let iterator = 1;

  	ingredients.forEach(item => {
  		ingJsx.push(
  			<View key={'ingredient-' + iterator} style={[AppStyles.row]}>
  				<View><Text> - </Text></View>
  				<View style={[AppStyles.paddingLeftSml, AppStyles.flex1]}>
  					<Text style={[AppStyles.baseText]}>{item.ingredient.toString()}</Text>	
					</View>
				</View>
			);
			iterator++;
  	});

  	return ingJsx;
  }

  /**
    * Method
    */
  _renderMethod = methods => {
  	let ingJsx = [];
  	let iterator = 1;

  	methods.forEach(item => {
  		ingJsx.push(
  			<View key={'method-' + iterator} style={[AppStyles.row]}>
  				<View><Text> {iterator}. </Text></View>
  				<View style={[AppStyles.paddingBottomSml, AppStyles.paddingLeftSml, AppStyles.flex1]}>
  					<Text style={[AppStyles.baseText]}>{item.method.toString()}</Text>	
					</View>
				</View>
			);
			iterator++;
  	});

  	return ingJsx;
  }

  /**
    * RENDER
    */
  render = () => {
  	let { recipe } = this.props;
  	let { title, content, acf, featured_image } = recipe;

    return (
      <ScrollView style={[AppStyles.container]}>
      	{featured_image != '' &&
      		<Image
      			source={{ uri: featured_image }}
      			style={[styles.featuredImage]} />
    		}

      	<Card>
      		<View style={[AppStyles.paddingLeftSml]}>
	      		<Text style={[AppStyles.baseText, AppStyles.h2]}>{title.rendered}</Text>
	      		<Text style={[AppStyles.baseText]}>{content.rendered}</Text>
      		</View>
      	</Card>

      	{acf.ingredients ?
	      	<Card>
	      		<View style={[AppStyles.paddingLeftSml]}>
		      		<Text style={[AppStyles.baseText, AppStyles.h2]}>Ingredients</Text>
		      		{this._renderIngredients(acf.ingredients)}
	      		</View>
	      	</Card>
      	: null}

      	{acf.methods ?
	      	<Card>
	      		<View style={[AppStyles.paddingLeftSml]}>
							<Text style={[AppStyles.baseText, AppStyles.h2]}>Method</Text>      		
							{this._renderMethod(acf.methods)}  		
						</View>
	      	</Card>
      	: null}

      	<View style={[AppStyles.spacer_20]} />
      </ScrollView>
    );
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  featuredImage: {
    left: 0,
    right: 0,
    height: AppConfig.windowHeight * 0.15,
    resizeMode: 'cover',
  }
});

/* Export Component ==================================================================== */
export default RecipeView