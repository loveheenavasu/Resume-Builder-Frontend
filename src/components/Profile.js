import React, { useEffect } from 'react';
import axios from "axios";
import { Formik, Field, FieldArray } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Container, Row, Col, Card, Form, InputGroup, Button, Image, Nav } from 'react-bootstrap';
import Experiences from './profile-compoanents/Experiences';
import Education from './profile-compoanents/Education';
import InterestsHobbies from './profile-compoanents/InterestsHobbies';
import Skills from './profile-compoanents/Skills';
import { ImageInput } from "formik-file-and-image-input/lib";
import { getUser } from './Auth/Auth';

const user = getUser();

const profileData = {
  image: '',
  fullName: '',
  email: '',
  phone: '',
  address: '',
  summary: '',
  experiences: [],
  educations: [],
  interestsHobbies: [],
  skills: []
};

async function profileAction(formData) {
  if (user && Object.keys(user).length && user._id) {
    if (formData.image !== undefined) {
      let profileResponse = await profileImageUpload(formData.image);
      if (!profileResponse) {
        toast.error("Error: Please try with change your image.")
      }
    }
    const URL = process.env.REACT_APP_API_URL + `user/${user._id}`;
    try {
      const response = await axios.put(URL, formData, {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token')
        }
      });
      const data = response.data;

      if (data.success) {
        toast.success(data.message);
        localStorage.setItem('user', JSON.stringify(data.data[0]));
      } else {
        toast.error("Error: " + data.message)
      }
    } catch (err) {
      toast.error(err.response.data.message ? err.response.data.message : 'Error : Something went wrong')
    }
  }
}

async function profileImageUpload(image) {
  const URL = process.env.REACT_APP_API_URL + `user/${user._id}`;
  try {
    const response = await axios.put(URL, {image}, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'x-access-token': localStorage.getItem('token')
      }
    });
    const data = response.data;

    if (data.success) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    toast.error(err.response.data.message ? err.response.data.message : 'Error : Something went wrong')
    return false;
  }
}

async function getProfileAction(user, setFieldValue) {
  const URL = process.env.REACT_APP_API_URL + `user/${user}`;
  try {
    const response = await axios.get(URL,
      {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token')
        }
      }
    );
    const data = response.data;
    if (data.success) {
      Object.keys(profileData).forEach((field) => {
        if (data.data[0][field] !== undefined) {
          if(field === "image"){
            setFieldValue(field, process.env.REACT_APP_IMAGE_URL+data.data[0][field], false)
          }else{
            setFieldValue(field, data.data[0][field], false)
          }
        }
      });
    } else {
      toast.error("Error: " + data.message)
    }
  } catch (err) {
    toast.error(err.response.data.message ? err.response.data.message : 'Error : Something went wrong')
  }
}

function CustomImageInputWrapper({ onClick, fileName, src }) {
  return (
    <>
      <Col className="profileContainer">
        <Image
          src={src ? src : process.env.PUBLIC_URL + '/images/profile-thumb.png'}
          className="content-image w-100"
          alt={fileName}
        />
        <div className="middle">
          <Nav.Link href="#" onClick={onClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
          </svg> Edit</Nav.Link>
        </div>
      </Col>
    </>
  )
}

function Profile() {

  const imageFormats = ["image/png", "image/svg", "image/jpeg"];

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col color='light'>
            <Formik
              validationSchema={
                yup.object().shape({
                  image: yup.mixed(),
                  fullName: yup.string().required(),
                  email: yup.string().required()
                })
              }
              initialValues={profileData}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values, "values")
                profileAction(values);
                setSubmitting(false);
              }}
            >
              {({ values, handleSubmit, isSubmitting, setFieldValue, errors }) => {
                useEffect(() => {
                  getProfileAction(user._id, setFieldValue);
                }, []);
                return (
                  <Container>
                    <Row className="justify-content-md-center mt-5">
                      <Col xs lg="8">
                        <Card>
                          <Card.Body>
                            <Form onSubmit={handleSubmit}>
                              <Row className="mb-3">
                                <Col xs lg="4" className='profile-image-Container'>
                                  <ImageInput
                                    name="image"
                                    validFormats={imageFormats}
                                    component={CustomImageInputWrapper}
                                    hideEdit={true}
                                    hideDelete={true}
                                    hideName={true}
                                  />
                                </Col>
                                <Col xs lg="8" className='m-auto'>
                                  <Row>
                                    <Form.Group>
                                      <Form.Label>Full Name</Form.Label>
                                      <Field
                                        name='fullName'
                                        className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                                        placeholder='Enter Full Name'
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.fullName}
                                      </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group>
                                      <Form.Label>Email</Form.Label>
                                      <InputGroup hasValidation>
                                        <Field
                                          name='email'
                                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                          type="email"
                                          aria-describedby="inputGroupPrepend"
                                          placeholder='Enter Email'
                                        />
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        <Form.Control.Feedback type="invalid">
                                          {errors.email}
                                        </Form.Control.Feedback>
                                      </InputGroup>
                                    </Form.Group>

                                    <Form.Group>
                                      <Form.Label>Phone</Form.Label>
                                      <Field
                                        name='phone'
                                        className='form-control'
                                        type="tel"
                                        placeholder='Enter Phone'
                                      />
                                      <Form.Control.Feedback type="invalid">
                                        {errors.phone}
                                      </Form.Control.Feedback>
                                    </Form.Group>
                                  </Row>
                                </Col>
                              </Row>
                              <Row className="mb-3">
                                <Col xs lg="12">
                                  <Form.Group>
                                    <Form.Label>Address</Form.Label>
                                    <Field
                                      name='address'
                                      className='form-control'
                                      component="textarea"
                                      rows="3"
                                      placeholder='Enter Address'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                      {errors.address}
                                    </Form.Control.Feedback>
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Row className="mb-3">
                                <Col xs lg="12">
                                  <Form.Group>
                                    <Form.Label>Summary</Form.Label>
                                    <Field
                                      name='summary'
                                      className='form-control'
                                      component="textarea"
                                      rows="3"
                                      placeholder='Enter Summary'
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                              {/* Experiences Filds Component */}
                              <Row className="mb-3">
                                <Col>
                                  <FieldArray
                                    name="experiences"
                                    render={arrayHelpers => (
                                      <Experiences arrayHelpers={arrayHelpers} values={values} />
                                    )}
                                  />
                                </Col>
                              </Row>
                              {/* Education Filds Component */}
                              <Row className="mb-3">
                                <Col>
                                  <FieldArray
                                    name="educations"
                                    render={arrayHelpers => (
                                      <Education arrayHelpers={arrayHelpers} values={values} />
                                    )}
                                  />
                                </Col>
                              </Row>
                              {/* Interests And Hobby Filds Component */}
                              <Row className="mb-3">
                                <Col>
                                  <FieldArray
                                    name="interestsHobbies"
                                    render={arrayHelpers => (
                                      <InterestsHobbies arrayHelpers={arrayHelpers} values={values} />
                                    )}
                                  />
                                </Col>
                              </Row>
                              {/* Skills Filds Component */}
                              <Row className="mb-3">
                                <Col>
                                  <FieldArray
                                    name="skills"
                                    render={arrayHelpers => (
                                      <Skills arrayHelpers={arrayHelpers} values={values} />
                                    )}
                                  />
                                </Col>
                              </Row>
                              <div className="d-grid gap-2 mt-3">
                                <Button type="submit" disabled={isSubmitting}>Update Profile</Button>
                              </div>
                            </Form>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                )
              }}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Profile;