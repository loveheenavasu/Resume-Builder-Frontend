import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function TemplateOne(props) {
  const user = JSON.parse(localStorage.getItem('user'));
  const URL = process.env.REACT_APP_IMAGE_URL;

  return (
    <Container style={{ backgroundColor: '#fff' }} className='justify-content-md-center w-75 p-5 pt-0'>
      <hr style={{ backgroundColor: '#10657e', height: '70px', opacity: 1, marginBottom: '2em' }} />
      <Row className=''>
        <Col md="8">
          <h1 className='fw-bold' style={{ color: '#212529' }}>{props.previewMode ? user.fullName : "Diya Agarwal"}</h1>
          <hr style={{ backgroundColor: '#10657e', height: '3px', opacity: 1, marginBottom: '2.5em' }} />
          <Row>
            <Row>
              <Col className='d-flex flex-col'>
                <h3 className='fs-3 fw-bold'>Summary</h3>&nbsp;&nbsp;&nbsp;
                <div style={{ backgroundColor: '#dbe8eb', height: '30px', width: '100%' }}>&nbsp;</div>
              </Col>
            </Row>
            <p>{props.previewMode ? user.summary : "Customer-focused Retail Sales professional with solid understanding of retail dynamics, marketing and customer service. Offering 5 years of experience providing quality product recommendations and solutions to meet customer needs and exceed expectations. Demonstrated record of exceeding revenue targets by leveraging communication skills and sales expertise."}</p>
          </Row>
          <hr style={{ backgroundColor: '#10657e', height: '3px', opacity: 1, marginBottom: '2.5em' }} />

          <Row>
            <Row>
              <Col className='d-flex flex-col'>
                <h3 className='fs-3 fw-bold'>Experience</h3>&nbsp;&nbsp;&nbsp;
                <div style={{ backgroundColor: '#dbe8eb', height: '30px', width: '100%' }}>&nbsp;</div>
              </Col>
            </Row>
            {
              props.previewMode ?
                <ul style={{ marginLeft: '1.2em' }}>
                  {
                    user.experiences !== undefined ?
                      user.experiences.map((experience, key) => {
                        return (
                          <>
                            <li key={key}>
                              <h2 className='fs-6 fw-bold'>{experience.designation} {experience.startDate ? ',' + experience.startDate : ''} {experience.endDate ? '- ' + experience.endDate : ''}</h2>
                              <h2 className='fs-6 fw-bold'>{experience.companyName} {experience.companyAddress ? ',' + experience.companyAddress : ''}</h2>
                            </li>
                          </>
                        )
                      })
                      : ''
                  }
                </ul>
                :
                <>
                  <h2 className='fs-6 fw-bold'>Retail Sales Associate, 02/2017 - Current</h2>
                  <h2 className='fs-6 fw-bold'>ZARA - New Delhi, India</h2>
                  <ul style={{ marginLeft: '1.2em' }}>
                    <li>Increased monthly sales 10% by effectively upselling and cross-selling products to maximize profitability.&nbsp;</li>
                    <li>Prevented store losses by leveraging awareness, attention to detail, and integrity to identify and investigate concerns.&nbsp;</li>
                    <li>Processed payments and maintained accurate drawers to meet financial targets.</li>
                  </ul>
                </>
            }

          </Row>
          <hr style={{ backgroundColor: '#10657e', height: '3px', opacity: 1, marginBottom: '2.5em' }} />

          <Row>
            <Row>
              <Col className='d-flex flex-col'>
                <h3 className='fs-3 fw-bold'>Education</h3>&nbsp;&nbsp;&nbsp;
                <div style={{ backgroundColor: '#dbe8eb', height: '30px', width: '100%' }}>&nbsp;</div>
              </Col>
            </Row>
            {
              props.previewMode ?
                <ul style={{ marginLeft: '1.2em' }}>
                  {
                    user.educations !== undefined ?
                      user.educations.map((education, key) => {
                        return (
                          <>
                            <li key={key}>
                              <h2 className='fs-6 fw-bold'>{education.title} {education.startDate ? ',' + education.startDate : ''} {education.endDate ? '- ' + education.endDate : ''}</h2>
                              <span className='fs-6 fw-bold w-auto'>{education.insituteName}</span> - {education.insituteAddress}
                            </li>
                          </>
                        )
                      })
                      : ''
                  }
                </ul>
                :
                <>
                  <h2 className='fs-6 fw-bold'>Diploma in Financial Accounting, 2016</h2>
                  <span className='fs-6 fw-bold w-auto'>Oxford Software Institute & Oxford School of English</span> - New Delhi, India
                </>
            }
          </Row>
          <hr style={{ backgroundColor: '#10657e', height: '3px', opacity: 1, marginBottom: '2.5em' }} />

          <Row>
            <Row>
              <Col className='d-flex flex-col'>
                <h3 className='fs-3 fw-bold data-font'>Interests and Hobbies</h3>&nbsp;&nbsp;&nbsp;
                <div style={{ backgroundColor: '#dbe8eb', height: '30px', width: '100%' }}>&nbsp;</div>
              </Col>
            </Row>
            {
              props.previewMode ?
                <>
                  <ul style={{ marginLeft: '1.2em' }}>
                    {
                      user.educations !== undefined ?
                        user.interestsHobbies.map((interestsHobbie, key) => {
                          return (
                            <>
                              <li key={key}>{interestsHobbie}</li>
                            </>
                          )
                        })
                        : ''
                    }
                  </ul>
                </>
                :
                <>
                  <ul style={{ marginLeft: '1.2em' }}>
                    <li>Recreational Football League.</li>
                    <li>Team captain</li>
                    <li>Two-time league champions</li>
                  </ul>
                </>
            }

          </Row>

        </Col>
        <Col xs md="4">
          {console.log(user.image, "User Image")}
          <img src={props.previewMode ? (user.image !== undefined && user.image !== '' ? URL + user.image: process.env.PUBLIC_URL + '/images/profile-thumb.png'): process.env.PUBLIC_URL + '/images/profile-thumb.png'} alt="Profile-Img" className="img-thumbnail" />

          <Row className='mt-5'>
            <Row>
              <Col className='d-flex flex-col'>
                <h3 className='fs-3 fw-bold'>Contact</h3>&nbsp;&nbsp;&nbsp;
                <div style={{ backgroundColor: '#dbe8eb', height: '30px', width: '100%' }}>&nbsp;</div>
              </Col>
            </Row>

            <Row>
              <div>
                <span className='fw-bold'>Address: </span>{props.previewMode ? user.address : "New Delhi,India,110034"}
              </div>
              <div>
                <span className='fw-bold'>Phone: </span>{props.previewMode ? user.phone : "+91 11 5555 3345"}
              </div>
              <div>
                <span className='fw-bold'>Email: </span>{props.previewMode ? user.email : "d.agarwal@sample.in"}
              </div>
            </Row>
          </Row>
          <hr style={{ backgroundColor: '#10657e', height: '3px', opacity: 1, marginBottom: '2.5em' }} />

          <Row>
            <Row>
              <Col className='d-flex flex-col'>
                <h3 className='fs-3 fw-bold'>Skills</h3>&nbsp;&nbsp;&nbsp;
                <div style={{ backgroundColor: '#dbe8eb', height: '30px', width: '100%' }}>&nbsp;</div>
              </Col>
            </Row>

            <ul style={{ marginLeft: '1.2em' }}>
              {
                user.skills !== undefined ?
                  props.previewMode ?
                    <>
                      {
                        user.skills.map((skill, key) => {
                          return (
                            <>
                              <li key={key}>{skill}</li>
                            </>
                          )
                        })
                      }
                    </>
                    :
                    <>
                      <li>Cash register operation&nbsp;</li>
                      <li>POS system operation&nbsp;</li>
                      <li>Sales expertise&nbsp;</li>
                      <li>Teamwork</li>
                      <li>Inventory management&nbsp;</li>
                      <li>Accurate money handling&nbsp;</li>
                      <li>Documentation and recordkeeping&nbsp;</li>
                      <li>Retail merchandising expertise</li>
                    </>
                  : ''
              }
            </ul>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TemplateOne;