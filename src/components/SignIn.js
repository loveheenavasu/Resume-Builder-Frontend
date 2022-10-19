import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Container, Row, Col, Card } from 'react-bootstrap';

async function SignInAction(formData, navigate) {
  const URL = process.env.REACT_APP_API_URL + "auth/signin";
  try {
    const response = await axios.post(URL,
      JSON.stringify(formData),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const data = response.data;

    if (data.success) {
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.user[0]));
      toast.success(data.message)

      navigate("/");
    } else {
      toast.error("Error: " + data.message)
    }
  } catch (err) {
    if (!err.response) {
      toast.error('No Server Response');
    } else if (err.response.status === 500) {
      toast.error(err.response.data.message ? "Error : check your data please" : "")
    } else {
      toast.error('Error : Something went wrong');
    }
  }
}

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col xs lg="4">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Sign In</Card.Title>
                <Formik
                  validationSchema={
                    yup.object().shape({
                      email: yup.string().required(),
                      password: yup.string().required(),
                    })
                  }
                  initialValues={{ email: '', password: '' }}
                  onSubmit={(values, { setSubmitting }) => {
                    SignInAction(values, navigate)
                    setSubmitting(false);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <Row className="mb-3">
                        <Form.Group controlId="validationCustomUsername">
                          <Form.Label>Username</Form.Label>
                          <InputGroup hasValidation>
                            <Form.Control
                              type="email"
                              name='email'
                              placeholder="Email"
                              aria-describedby="inputGroupPrepend"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              isInvalid={!!errors.email}
                            />
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group controlId="validationCustom03">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type='password'
                            name='password'
                            placeholder='Password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            isInvalid={!!errors.password}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.password}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <div className="d-grid gap-2 mt-3">
                        <Button type="submit" disabled={isSubmitting}>Login</Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default SignIn;