import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Text, H3, Button } from 'native-base';
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
        <Card>
          <CardItem>
            <Thumbnail source={{ uri: item.image }} />
            <Body>
              <H3>{item.title}</H3>
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
              >
                <Text>View Recipe</Text>
              </Button>
            </Body>
          </CardItem>
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
