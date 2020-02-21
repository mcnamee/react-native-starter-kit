import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, H3, Text,
} from 'native-base';
import { Loading, Error, Spacer } from '../UI';
import { errorMessages } from '../../constants/messages';

const ArticlesSingle = ({
  error, loading, article, reFetch,
}) => {
  if (error) {
    return <Error content={error} tryAgain={reFetch} />;
  }

  if (loading) {
    return <Loading content={loading} />;
  }

  if (Object.keys(article).length < 1) {
    return <Error content={errorMessages.articles404} />;
  }

  return (
    <Container>
      <Content padder>
        {!!article.image && (
          <Image
            source={{ uri: article.image }}
            style={{
              height: 200, width: null, flex: 1, resizeMode: 'contain',
            }}
          />
        )}

        <Spacer size={25} />
        <H3>{article.name}</H3>
        <Spacer size={15} />

        {!!article.content && (
          <Card>
            <CardItem header bordered>
              <Text>Content</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{article.content}</Text>
              </Body>
            </CardItem>
          </Card>
        )}
        <Spacer size={20} />
      </Content>
    </Container>
  );
};

ArticlesSingle.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  article: PropTypes.shape(),
  reFetch: PropTypes.func,
};

ArticlesSingle.defaultProps = {
  error: null,
  loading: false,
  article: {},
  reFetch: null,
};

export default ArticlesSingle;
