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
import { Link } from 'react-router-dom';
import Loading from './Loading';

class SignUp extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    submitForm: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const {
      loading,
      error,
      submitForm,
    } = this.props;

    // Loading
    if (loading) return <Loading />;

    return (
      <div>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader>Sign Up</CardHeader>
              <CardBody>
                {!!error && <Alert color="danger">{error}</Alert>}
                <Form onSubmit={(e) => { e.preventDefault(); submitForm(this.state); }}>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="John"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Doe"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="john@doe.corp"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="********"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Button>Sign Up!</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <Link className="btn btn-primary" to="/login">&laquo; Back</Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SignUp;
