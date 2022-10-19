import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const templates = [
    {
      id: "template_1",
      img: process.env.PUBLIC_URL + '/images/resume-1.png',
      premium: 0
    },
    {
      id: "template_2",
      img: process.env.PUBLIC_URL + '/images/resume-2.png',
      premium: 0
    },
    {
      id: "template_3",
      img: process.env.PUBLIC_URL + '/images/resume-3.png',
      premium: 1
    }
  ];
  return (
    <>
      <Container className='mt-5'>
        <Row style={{ backgroundColor: '#fff' }} className='p-5'>
          {templates.map((template, index) => {
            return <Col xs={4} key={index}>
              <Link to={`resume/${template.id}`}>
                <Card className="text-center" >
                  <Card.Body>
                    <Card.Img variant="bottom" src={template.img} />
                    {
                      template.premium ?
                        <Card.ImgOverlay>
                          <Badge pill bg="success" className='float-end'>
                            <Card.Img src={process.env.PUBLIC_URL + '/star.png'} style={{ width: '20px' }} />Premium
                          </Badge>
                        </Card.ImgOverlay>
                        : ''
                    }
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