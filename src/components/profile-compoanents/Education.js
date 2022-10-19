import React from 'react';
import { Field } from 'formik';
import { Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';

function Education(props) {
    return (
        <Card>
            <Card.Header as="h5">
                Education
                <Button
                    variant="outline-primary"
                    className='float-end'
                    onClick={() => props.arrayHelpers.push('')}
                >Add Education</Button>
            </Card.Header>
            <Card.Body>
                {props.values.educations && props.values.educations.length > 0 ? (
                    props.values.educations.map((education, index) => (
                        <Col key={index} className={index > 0 ? "mt-3" : ""}>
                            <Card>
                                <Card.Header as="h5">
                                    <Button
                                        variant="outline-danger"
                                        className='float-end'
                                        size="sm"
                                        onClick={() => props.arrayHelpers.remove(index)}
                                    >X</Button>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col lg="6">
                                            <Form.Group>
                                                <Form.Label>TiTle</Form.Label>
                                                <InputGroup>
                                                    <Field
                                                        name={`educations.${index}.title`}
                                                        className='form-control'
                                                        placeholder='Enter Company Title'
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6">
                                            <Form.Group>
                                                <Form.Label>Insitute/College Name</Form.Label>
                                                <InputGroup>
                                                    <Field
                                                        name={`educations.${index}.insituteName`}
                                                        className='form-control'
                                                        placeholder='Enter Insitute/College Name'
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg="4">
                                            <Form.Group>
                                                <Form.Label>Insitute/College Address</Form.Label>
                                                <InputGroup>
                                                    <Field
                                                        name={`educations.${index}.insituteAddress`}
                                                        className='form-control'
                                                        placeholder='Enter Insitute/College Address'
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="4">
                                            <Form.Group>
                                                <Form.Label>Start Date</Form.Label>
                                                <InputGroup>
                                                    <Field
                                                        name={`educations.${index}.startDate`}
                                                        className='form-control'
                                                        type='date'
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>

                                        <Col lg="4">
                                            <Form.Group>
                                                <Form.Label>End Date</Form.Label>
                                                <InputGroup>
                                                    <Field
                                                        name={`educations.${index}.endDate`}
                                                        className='form-control'
                                                        type='date'
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Card.Title className='text-center'>Click Add buttion to enter your education</Card.Title>
                )}
            </Card.Body>
        </Card>
    );
}

Education.propTypes = {

};

export default Education;