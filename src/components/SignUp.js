import React from 'react'
import axios from "axios";
import { Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Container, Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

async function SignUpAction(formData, navigate) {

  const URL = process.env.REACT_APP_API_URL + "auth/signup";
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
    console.log(data)
    if (data.success) {
      toast.success(data.message)
      navigate("/");
    } else {
      toast.error("Error: " + data.message)
    }
  } catch (err) {
    toast.error(err.response.data.message ? err.response.data.message : 'Error : Something went wrong')
  }
}

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <Formik
      validationSchema={
        yup.object().shape({
          fullName: yup.string().required(),
          email: yup.string().required(),
          password: yup.string().required(),
        })
      }
      initialValues={{ fullName: '', email: '', password: '' }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        SignUpAction(values, navigate);
        resetForm({
          values: {
            fullName: '',
            email: '',
            password: '',
          }
        });
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
        <Container>
          <Row className="justify-content-md-center mt-5">
            <Col xs lg="4">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">Sign Up</Card.Title>
                  <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type='text'
                          name='fullName'
                          placeholder='Full Name'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fullName}
                          isInvalid={!!errors.fullName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.fullName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group>
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
                      <Form.Group>
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
                      <Button type="submit" disabled={isSubmitting}>Sign Up</Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  )
};

export default SignUp;