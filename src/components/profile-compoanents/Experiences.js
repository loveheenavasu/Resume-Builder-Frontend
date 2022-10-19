import React from 'react';
import { Field } from 'formik';
import { Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';

function Experiences(props) {
    return (
        <Card>
            <Card.Header as="h5">
                Experience
                <Button
                    variant="outline-primary"
                    className='float-end'
                    onClick={() => props.arrayHelpers.push('')}
                >Add Experience</Button>
            </Card.Header>
            <Card.Body>
                {props.values.experiences && props.values.experiences.length > 0 ? (
                    props.values.experiences.map((experience, index) => (
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
                                                <Form.Label>Company Name</Form.Label>
                                                <InputGroup>
                                                    <Field
                                                        name={`experiences.${index}.companyName`}
                                                        className='form-control'
                                                        placeholder='Enter Company Name'
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="6">
                                            <Form.Group>
                                                <Form.Label>Company Address</Form.Label>
                                                <InputGroup>
                                                    <Field
                                                        name={`experiences.${index}.companyAddress`}
                                                        className='form-control'
                                                        placeholder='Enter Company Address'
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                    <Col lg="4">
                                            <Form.Group>
                                                <Form.Label>Designation</Form.Label>
                                                <InputGroup>
                                                    <Field
                                                        name={`experiences.${index}.designation`}
                                                        className='form-control'
                                                        placeholder='Enter Designation'
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </Col>
                                        <Col lg="4">
                                            <Form.Group>
                                                <Form.Label>Start Date</Form.Label>
                                                <InputGroup>
                                                    <Field
                                                        name={`experiences.${index}.startDate`}
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
                                                        name={`experiences.${index}.endDate`}
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
                    <Card.Title className='text-center'>Click Add buttion to enter your experience</Card.Title>
                )}
            </Card.Body>
        </Card>
    );
}

export default Experiences;