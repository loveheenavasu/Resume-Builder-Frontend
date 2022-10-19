import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TemplateOne from './ResumeTemplates/TemplateOne';
import TemplateTwo from './ResumeTemplates/TemplateTwo';
import TemplateThree from './ResumeTemplates/TemplateThree';

const Home = () => {
  const templates = [
    {
      id: "template_1",
      img: process.env.PUBLIC_URL+'/images/resume-1.png',
      template: <TemplateOne />
    },
    {
      id: "template_2",
      img: process.env.PUBLIC_URL+'/images/resume-2.png',
      template: <TemplateTwo />
    },
    {
      id: "template_3",
      img: process.env.PUBLIC_URL+'/images/resume-3.png',
      template: <TemplateThree />
    }
  ];
  return (
    <>
      <Container className='mt-5'>
        <Row style={{ backgroundColor: '#fff' }} className='p-5'>
          {templates.map((template, index) => {
            return <Col xs={4} key={index}>
              <Link to={`resume/${ template.id }`}>
                <Card className="text-center" >
                  <Card.Body>
                    <Card.Img variant="bottom" src={template.img} />
                  </Card.Body>
                  <Card.Footer>Preview</Card.Footer>
                </Card>
              </Link>
            </Col>
          })}
        </Row>
      </Container>
    </>
  );
}

export default Home;