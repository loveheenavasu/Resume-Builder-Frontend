import React from 'react';
import { Field } from 'formik';
import { Col, Card, Form, InputGroup, Button } from 'react-bootstrap';

function InterestsHobbies(props) {
    return (
        <Card>
            <Card.Header as="h5">
                Interests & Hobby
                <Button
                    variant="outline-primary"
                    className='float-end'
                    onClick={() => props.arrayHelpers.push('')}
                >Add Interests & Hobby</Button>
            </Card.Header>
            <Card.Body>
                {props.values.interestsHobbies && props.values.interestsHobbies.length > 0 ? (
                    props.values.interestsHobbies.map((interestsHobbie, index) => (
                        <Col key={index} lg="6" className={index > 0 ? "mt-3" : ""}>
                            <Form.Group>
                                <InputGroup>
                                    <Field
                                        name={`interestsHobbies.${index}`}
                                        className='form-control'
                                        placeholder='Enter Interests & Hobbies'
                                    />
                                    <Button
                                        variant="outline-danger"
                                        className='float-end'
                                        size="sm"
                                        onClick={() => props.arrayHelpers.remove(index)}
                                    >X</Button>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    ))
                ) : (
                    <Card.Title className='text-center'>Click Add buttion to enter your Interests & Hobbies</Card.Title>
                )}
            </Card.Body>
        </Card>
    );
}

export default InterestsHobbies;