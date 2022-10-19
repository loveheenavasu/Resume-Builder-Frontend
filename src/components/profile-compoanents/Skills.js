import React from 'react';
import { Field } from 'formik';
import { Col, Card, Form, InputGroup, Button } from 'react-bootstrap';

function Skills(props) {
    return (
        <Card>
            <Card.Header as="h5">
                Skills
                <Button
                    variant="outline-primary"
                    className='float-end'
                    onClick={() => props.arrayHelpers.push('')}
                >Add Skill</Button>
            </Card.Header>
            <Card.Body>
                {props.values.skills && props.values.skills.length > 0 ? (
                    props.values.skills.map((skill, index) => (
                        <Col key={index} lg="6" className={index > 0 ? "mt-3" : ""}>
                            <Form.Group>
                                <InputGroup>
                                    <Field
                                        name={`skills.${index}`}
                                        className='form-control'
                                        placeholder='Enter Your Skill'
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
                    <Card.Title className='text-center'>Click Add buttion to enter your skill</Card.Title>
                )}
            </Card.Body>
        </Card>
    );
}

export default Skills;