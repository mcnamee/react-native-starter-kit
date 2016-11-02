/**
 * Recipe View
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

/* Setup ==================================================================== */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

// App Globals
import AppStyles from '../../styles';
import AppConfig from '../../config';

// Components
import Card from '../../components/card';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  featuredImage: {
    left: 0,
    right: 0,
    height: AppConfig.windowHeight * 0.15,
    resizeMode: 'cover',
  },
});

/* Component ==================================================================== */
class RecipeView extends Component {
  static componentName = 'RecipeView';

  static propTypes = {
    recipe: PropTypes.shape({
      title: PropTypes.object.isRequired,
      content: PropTypes.object,
      featured_image: PropTypes.string,
      acf: PropTypes.object,
    }).isRequired,
  }

  /**
    * Ingredients
    */
  renderIngredients = (ingredients) => {
    const ingJsx = [];
    let iterator = 1;

    ingredients.forEach((item) => {
      ingJsx.push(
        <View key={`ingredient-${iterator}`} style={[AppStyles.row]}>
          <View><Text> - </Text></View>
          <View style={[AppStyles.paddingLeftSml, AppStyles.flex1]}>
            <Text style={[AppStyles.baseText]}>{item.ingredient.toString()}</Text>
          </View>
        </View>
      );
      iterator += 1;
    });

    return ingJsx;
  }

  /**
    * Method
    */
  renderMethod = (methods) => {
    const ingJsx = [];
    let iterator = 1;

    methods.forEach((item) => {
      ingJsx.push(
        <View key={`method-${iterator}`} style={[AppStyles.row]}>
          <View><Text> {iterator}. </Text></View>
          <View style={[AppStyles.paddingBottomSml, AppStyles.paddingLeftSml, AppStyles.flex1]}>
            <Text style={[AppStyles.baseText]}>{item.method.toString()}</Text>
          </View>
        </View>
      );
      iterator += 1;
    });

    return ingJsx;
  }

  render = () => {
    const { title, content, acf } = this.props.recipe;
    const featuredImage = this.props.recipe.featured_image;

    return (
      <ScrollView style={[AppStyles.container]}>
        {featuredImage !== '' &&
          <Image
            source={{ uri: featuredImage }}
            style={[styles.featuredImage]}
          />
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
              {this.renderIngredients(acf.ingredients)}
            </View>
          </Card>
        : null}

        {acf.methods ?
          <Card>
            <View style={[AppStyles.paddingLeftSml]}>
              <Text style={[AppStyles.baseText, AppStyles.h2]}>Method</Text>
              {this.renderMethod(acf.methods)}
            </View>
          </Card>
        : null}

        <View style={[AppStyles.spacer_20]} />
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default RecipeView;
