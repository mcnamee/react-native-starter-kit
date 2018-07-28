import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  Form,
  Label,
  Alert,
  Input,
  Button,
  CardBody,
  FormGroup,
  CardHeader,
} from 'reactstrap';
import Loading from './Loading';

class UpdateProfile extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    success: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    member: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
    }).isRequired,
  }

  static defaultProps = {
    error: null,
    success: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: props.member.firstName || '',
      lastName: props.member.lastName || '',
      email: props.member.email || '',
      password: '',
      password2: '',
      changeEmail: false,
      changePassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [event.target.name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onFormSubmit } = this.props;
    onFormSubmit(this.state)
      .then(() => console.log('Profile updated'))
      .catch(e => console.log(`Error: ${e}`));
  }

  render() {
    const { loading, success, error } = this.props;
    const {
      firstName,
      lastName,
      changeEmail,
      email,
      changePassword,
      password,
      password2,
    } = this.state;

    // Loading
    if (loading) return <Loading />;

    return (
      <div>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader>
                Update Profile
              </CardHeader>
              <CardBody>
                {!!error && (
                  <Alert color="danger">
                    {error}
                  </Alert>
                )}
                {!!success && (
                  <Alert color="success">
                    {success}
                  </Alert>
                )}

                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label for="firstName">
                      First Name
                    </Label>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="John"
                      value={firstName}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lastName">
                      Last Name
                    </Label>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Doe"
                      value={lastName}
                      onChange={this.handleChange}
                    />
                  </FormGroup>

                  <FormGroup check style={{ marginTop: 20 }}>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="changeEmail"
                        checked={changeEmail}
                        onChange={this.handleChange}
                      />
                      {' '}
                      Change my email
                    </Label>
                  </FormGroup>
                  {changeEmail && (
                    <FormGroup>
                      <Label for="email">
                        Email
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@doe.corp"
                        value={email}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  )}

                  <FormGroup check style={{ marginTop: 20 }}>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="changePassword"
                        checked={changePassword}
                        onChange={this.handleChange}
                      />
                      {' '}
                      Change my password
                    </Label>
                  </FormGroup>
                  {changePassword && (
                    <div>
                      <FormGroup>
                        <Label for="password">
                          Password
                        </Label>
                        <Input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="password2">
                          Confirm Password
                        </Label>
                        <Input
                          type="password"
                          name="password2"
                          id="password2"
                          placeholder="••••••••"
                          value={password2}
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </div>
                  )}
                  <Button style={{ marginTop: 20 }} color="primary">
                    Update
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UpdateProfile;
