/**
 * Recipe View Screen
 *  - The individual recipe screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

// Components
import { Card, Spacer, Text } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  featuredImage: {
    left: 0,
    right: 0,
    height: AppSizes.screen.height * 0.2,
    resizeMode: 'cover',
  },
});

/* Component ==================================================================== */
class RecipeView extends Component {
  static componentName = 'RecipeView';

  static propTypes = {
    recipe: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      image: PropTypes.string,
      ingredients: PropTypes.arrayOf(PropTypes.string),
      method: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
  }

  /**
    * Ingredients
    */
  renderIngredients = (ingredients) => {
    const jsx = [];
    let iterator = 1;

    ingredients.forEach((item) => {
      jsx.push(
        <View key={`ingredient-${iterator}`} style={[AppStyles.row]}>
          <View><Text> - </Text></View>
          <View style={[AppStyles.paddingLeftSml, AppStyles.flex1]}>
            <Text>{item.toString()}</Text>
          </View>
        </View>,
      );
      iterator += 1;
    });

    return jsx;
  }

  /**
    * Method
    */
  renderMethod = (method) => {
    const jsx = [];
    let iterator = 1;

    method.forEach((item) => {
      jsx.push(
        <View key={`method-${iterator}`} style={[AppStyles.row]}>
          <View><Text> {iterator}. </Text></View>
          <View style={[AppStyles.paddingBottomSml, AppStyles.paddingLeftSml, AppStyles.flex1]}>
            <Text>{item.toString()}</Text>
          </View>
        </View>,
      );
      iterator += 1;
    });

    return jsx;
  }

  render = () => {
    const { title, body, image, ingredients, method } = this.props.recipe;

    return (
      <ScrollView style={[AppStyles.container]}>
        {image !== '' &&
          <Image
            source={{ uri: image }}
            style={[styles.featuredImage]}
          />
        }

        <Card>
          <Text h2>{title.rendered}</Text>
          <Text>{body}</Text>
        </Card>

        {ingredients ?
          <Card>
            <Text h2>Ingredients</Text>
            {this.renderIngredients(ingredients)}
          </Card>
        : null}

        {method ?
          <Card>
            <Text h2>Method</Text>
            {this.renderMethod(method)}
          </Card>
        : null}

        <Spacer size={20} />
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default RecipeView;
