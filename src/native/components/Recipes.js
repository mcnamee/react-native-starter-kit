import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl, View } from 'react-native';
import { Card, Text } from 'react-native-elements';

const RecipeListing = ({ recipes, reFetch }) => {
  const keyExtractor = item => item.id;

  if (recipes.error) {
    return (
      <View>
        <Text>{recipes.error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={recipes.recipes}
      renderItem={({ item }) => (
        <Card image={{ uri: item.image }}>
          <Text h4>{item.title}</Text>
          <Text>{item.body}</Text>
        </Card>
      )}
      keyExtractor={keyExtractor}
      refreshControl={
        <RefreshControl
          refreshing={recipes.loading}
          onRefresh={reFetch}
        />
      }
    />
  );
};

RecipeListing.propTypes = {
  recipes: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }).isRequired,
  reFetch: PropTypes.func,
};

RecipeListing.defaultProps = {
  reFetch: null,
};

export default RecipeListing;
