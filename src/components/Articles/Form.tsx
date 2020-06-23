import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {
  Container,
  Content,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button,
} from 'native-base';
import { Messages, Header, Spacer } from '../UI';
import { errorMessages } from '../../constants/messages';
import { ArticlesFormProps } from '../../types/ArticlesFormProps';

const ArticlesForm = ({
  error, loading, success, onFormSubmit, defaultValues,
}: ArticlesFormProps) => {
  const {
    register, handleSubmit, errors, setValue,
  } = useForm({ defaultValues });

  useEffect(() => {
    register({ name: 'email' }, { required: errorMessages.missingEmail });
  }, [register]);

  return (
    <Container>
      <Content padder>
        <Header
          title="Example form"
          content="When you submit the form, it'll simply save to your redux store"
        />

        {error && <Messages message={error} />}
        {loading && <Messages type="info" message="Loading..." />}
        {success && <Messages type="success" message={success} />}

        <Form>
          <Item stackedLabel>
            <Label>Email*</Label>
            <Input
              autoCapitalize="none"
              placeholder="james@doe.com"
              keyboardType="email-address"
              defaultValue={defaultValues.email || ''}
              onChangeText={(value) => setValue('email', value)}
            />
          </Item>
          {errors.email && <Text>{errors.email.message}</Text>}

          <Spacer size={20} />

          <Button block onPress={handleSubmit(onFormSubmit)} disabled={loading}>
            <Text>{loading ? 'Loading' : 'Submit'}</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

ArticlesForm.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  success: PropTypes.string,
  defaultValues: PropTypes.shape({
    email: PropTypes.string,
  }),
  onFormSubmit: PropTypes.func.isRequired,
};

ArticlesForm.defaultProps = {
  error: null,
  success: null,
  loading: false,
  defaultValues: {},
};

export default ArticlesForm;
