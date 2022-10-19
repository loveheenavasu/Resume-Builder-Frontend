import React from 'react';
import { Container } from 'react-bootstrap';
import '../../Template2.css';

function TemplateTwo(props) {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
            <Container style={{ backgroundColor: '#fff' }} className='justify-content-md-center w-75 p-5 pt-0'>
                <section className="bio-sec">
                    <div className="special-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="bio-content text-center">
                                    <div className="details">
                                        <h1>{props.previewMode ? user.fullName : "Diya Agarwal"}</h1>
                                    </div>
                                    <div className="more-details header-contact justify-content-center align-item-center pt-2">
                                        <h6 className="borders-deco">{props.previewMode ? user.address : "New Delhi,India,110034"}</h6>
                                        <h6 className="borders-deco">{props.previewMode ? user.phone : "+91 11 5555 3345"}</h6>
                                        <h6>{props.previewMode ? user.email : "d.agarwal@sample.in"}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="main-sec pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="more-details">
                                    <h3>Summary</h3>
                                    <p className="details-para">
                                        {
                                            props.previewMode ? user.summary : "Customer-focused Retail Sales professional with solid understanding of retail dynamics, marketing and customer service. Offering 5 years of experience providing quality product recommendations and solutions to meet customer needs and exceed expectations. Demonstrated record of exceeding revenue targets by leveraging communication skills and sales expertise."
                                        }
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="more-details">
                                    <h3>Experience</h3>
                                    {
                                        user.previewMode !== undefined ?
                                            props.previewMode ?
                                                <ul className="mb-0">
                                                    {
                                                        user.experiences.map((experience, key) => {
                                                            return (
                                                                <>
                                                                    <li className="details-para">
                                                                        <div>
                                                                            <span className="retail-details">{experience.designation}</span>
                                                                            <span key={key} className="details-span ">{experience.startDate ? experience.startDate : ''} {experience.endDate ? '- ' + experience.endDate : ''}</span>
                                                                        </div>
                                                                        <span className="retail-details border-0">{experience.companyName} {experience.companyAddress ? ',' + experience.companyAddress : ''}</span>
                                                                    </li>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                :
                                                <ul className="mb-0">
                                                    <li className="details-para">Increased monthly sales 10% by effectively upselling and
                                                        cross-selling products to
                                                        maximize profitability.</li>
                                                    <li className="details-para">Prevented store losses by leveraging awareness, attention to
                                                        detail, and integrity
                                                        to identify and investigate concerns.</li>
                                                    <li className="details-para">Processed payments and maintained accurate drawers to meet
                                                        financial targets.</li>
                                                </ul>
                                            : ''
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="more-details">
                                <h3>Skills</h3>
                            </div>
                            <div className="col-md-6">

                                <ul>
                                    {
                                        props.previewMode ?
                                            <>
                                                {
                                                    user.skills !== undefined ?
                                                        user.skills.map((skill, key) => {
                                                            return (
                                                                <>
                                                                    <li key={key}>{skill}</li>
                                                                </>
                                                            )
                                                        })
                                                        : ''
                                                }
                                            </>
                                            :
                                            <>
                                                <li>Cash register operation&nbsp;</li>
                                                <li>POS system operation&nbsp;</li>
                                                <li>Sales expertise&nbsp;</li>
                                                <li>Teamwork</li>
                                            </>
                                    }
                                </ul>
                            </div>
                        </div>


                        <div className="row">

                            <div className="col-md-12">
                                <div className="more-details">
                                    <h3>Education</h3>
                                </div>
                                {
                                    props.previewMode ?
                                        <ul>
                                            {
                                                user.educations !== undefined ?
                                                    user.educations.map((education, key) => {
                                                        return (
                                                            <>
                                                                <li key={key}>
                                                                    <p className="retail-details border-0 mb-0">
                                                                        {education.insituteName} - {education.insituteAddress} | {education.title}
                                                                    </p>
                                                                    <span className="more-details">{education.startDate ? education.startDate : ''} {education.endDate ? '- ' + education.endDate : ''}</span>
                                                                </li>
                                                            </>
                                                        )
                                                    })
                                                    : ''
                                            }
                                        </ul>
                                        :
                                        <>
                                            <div>
                                                <p className="retail-details border-0 mb-0">
                                                    Oxford Software Institute & Oxford School of English - New Delhi, India | Diploma in
                                                    Financial Accounting
                                                </p>
                                                <span className="more-details">2016</span>
                                            </div>
                                        </>
                                }
                            </div>
                        </div>


                        <div className="row">

                            <div className="col-md-12">
                                <div className="more-details">
                                    <h3>Interests and Hobbies</h3>
                                </div>
                                {
                                    props.previewMode ?
                                        <>
                                            <div>
                                                <ul className="mb-0">
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
                                            </div>
                                        </>
                                        :
                                        <>
                                            <div>
                                                <p className="mb-0">Recreational Football League</p>
                                                <ul className="mb-0">
                                                    <li>Team captain</li>
                                                    <li>Two-time league champions</li>
                                                </ul>
                                            </div>
                                        </>
                                }
                            </div>
                        </div>

                    </div>
                </section>
            </Container>
        </>
    );
}

export default TemplateTwo;