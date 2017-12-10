import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl, View } from 'react-native';
import { Card, Text } from 'react-native-elements';

const RecipeListing = ({
  recipes,
  reFetch,
  error,
  loading,
}) => {
  const keyExtractor = item => item.id;

  if (!loading && (!recipes || recipes.length < 1)) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => (
        <Card image={{ uri: item.image }}>
          <Text h4>{item.title}</Text>
          <Text>{item.body}</Text>
        </Card>
      )}
      keyExtractor={keyExtractor}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={reFetch}
        />
      }
    />
  );
};

RecipeListing.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  reFetch: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

RecipeListing.defaultProps = {
  reFetch: null,
  error: null,
  loading: false,
};

export default RecipeListing;
