import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl } from 'react-native';
import { Card, Text, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import AppColors from '../constants/colors';
import Loading from './Loading';
import Error from './Error';

const RecipeListing = ({
  error,
  loading,
  recipes,
  reFetch,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  const keyExtractor = item => item.id;

  return (
    <FlatList
      data={recipes}
      renderItem={({ item }) => (
        <Card image={{ uri: item.image }}>
          <Text h4>{item.title}</Text>
          <Text>{item.body}</Text>

          <Button
            onPress={() => Actions.recipe({ match: { params: { id: String(item.id) } } })}
            containerViewStyle={{
              marginTop: 15,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}
            backgroundColor={AppColors.brand.primary}
            title="View Recipe"
          />
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
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

RecipeListing.defaultProps = {
  error: null,
  reFetch: null,
};

export default RecipeListing;
