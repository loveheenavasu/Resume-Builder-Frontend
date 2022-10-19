import React from 'react';
import { Container } from 'react-bootstrap';
import '../../Template3.css';

function TemplateThree(props) {
    const user = JSON.parse(localStorage.getItem('user'));
    const URL = process.env.REACT_APP_IMAGE_URL;
    return (
        <>
            <Container style={{ backgroundColor: '#fff' }} className='justify-content-md-center w-75 p-5 pt-0'>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="side-details">
                                    <div className="sidebar-content">
                                        <img src={props.previewMode ? (user.image !== undefined && user.image != '' ? URL + user.image: process.env.PUBLIC_URL + '/images/profile-thumb.png'): process.env.PUBLIC_URL + '/images/profile-thumb.png'} alt="img" className="w-100" />
                                    </div>
                                    <div className="contact-details">
                                        <div className="d-flex align-items-center pb-2">
                                            <svg width="15" height="15" viewBox="0 0 7 10">
                                                <path fill="#ffffff"
                                                    d="M3.429 2.143c.708 0 1.285.577 1.285 1.286 0 .708-.577 1.285-1.285 1.285A1.287 1.287 0 0 1 2.143 3.43c0-.71.577-1.286 1.286-1.286m0-2.143A3.432 3.432 0 0 1 6.33 5.255l-2.902 4.63-2.902-4.63A3.432 3.432 0 0 1 3.429 0m-.005 5.561A2.14 2.14 0 0 0 5.56 3.424a2.14 2.14 0 0 0-2.137-2.138 2.14 2.14 0 0 0-2.138 2.138A2.14 2.14 0 0 0 3.424 5.56">
                                                </path>
                                            </svg>
                                            <span className="extras-details">
                                                {props.previewMode ? user.address : "New Delhi,India,110034"}
                                            </span>
                                        </div>

                                        <div className="d-flex align-items-center pb-2">
                                            <svg width="15" height="15" viewBox="0 0 7 12">
                                                <path fill="#ffffff"
                                                    d="M5.667 0C6.403 0 7 .559 7 1.25l-.006 9.496c0 .689-.6 1.25-1.333 1.25L1.343 12C.61 12 0 11.44 0 10.75v-9.5C0 .563.623 0 1.356 0zM2.89.75c-.11 0-.2.084-.2.187 0 .104.09.188.2.188h1.25c.11 0 .2-.084.2-.187 0-.104-.09-.188-.2-.188zm-.752.06a.183.183 0 0 0-.058.133c0 .049.021.097.058.132a.208.208 0 0 0 .282 0 .184.184 0 0 0 .06-.132.185.185 0 0 0-.06-.133.216.216 0 0 0-.282 0zm1.337 10.818c.329 0 .597-.252.597-.56 0-.31-.268-.562-.597-.562-.33 0-.597.252-.597.561 0 .31.268.561.597.561zM.698 10.125h5.683V1.78H.698z">
                                                </path>
                                            </svg>
                                            <span className="extras-details">
                                                {props.previewMode ? user.phone : "+91 11 5555 3345"}
                                            </span>
                                        </div>

                                        <div className="d-flex align-items-center pb-2">
                                            <svg width="15" height="15" viewBox="0 0 10 10">
                                                <path fill="#ffffff" d="M3.64 7.41v1.932a.313.313 0 0 0 .564.185l1.13-1.538z">
                                                </path>
                                                <path fill="#ffffff"
                                                    d="M9.866.128a.313.313 0 0 0-.325-.023L.168 5a.313.313 0 0 0 .043.573l2.606.89L8.366 1.72 4.072 6.892l4.367 1.493a.316.316 0 0 0 .263-.029.314.314 0 0 0 .147-.22L9.994.428a.313.313 0 0 0-.128-.301">
                                                </path>
                                            </svg>
                                            <span className="extras-details">
                                                {props.previewMode ? user.email : "d.agarwal@sample.in"}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="personal-details">
                                        <h2>SUMMARY</h2>
                                        <p className="extras-details p-0">
                                            {
                                                props.previewMode ? user.summary : "Customer-focused Retail Sales professional with solid understanding of retail dynamics, marketing and customer service. Offering 5 years of experience providing quality product recommendations and solutions to meet customer needs and exceed expectations. Demonstrated record of exceeding revenue targets by leveraging communication skills and sales expertise."
                                            }
                                        </p>


                                        <h2>SKILLS</h2>
                                        <ul className="special-space">
                                            {
                                                props.previewMode ?
                                                    <>
                                                        {
                                                            user.experiences !== undefined ?
                                                                user.skills.map((skill, key) => {
                                                                    return (
                                                                        <>
                                                                            <li key={key} className="extras-details">{skill}</li>
                                                                        </>
                                                                    )
                                                                })
                                                                : ''
                                                        }
                                                    </>
                                                    :
                                                    <>
                                                        <li className="extras-details">Cash register operation</li>
                                                        <li className="extras-details">POS system operation</li>
                                                        <li className="extras-details">Sales expertise</li>
                                                        <li className="extras-details">Inventory management</li>
                                                        <li className="extras-details">Accurate money handling</li>
                                                        <li className="extras-details">Documentation and recordkeeping</li>
                                                    </>
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="right-section">
                                    <h5 className="title-name">{props.previewMode ? user.fullName : "Diya Agarwal"}</h5>

                                    <div className="below-details">
                                        <h2>EXPERIENCE</h2>
                                        <ul className="deco-lines others-deco">
                                            {
                                                props.previewMode ?
                                                    user.experiences !== undefined ?
                                                        user.experiences.map((experience, key) => {
                                                            return (
                                                                <>
                                                                    <li key={key}>
                                                                        <span className="others-deco">{experience.startDate ? experience.startDate : ''} {experience.endDate ? '- ' + experience.endDate : ''}</span>
                                                                        <div className="box-right">
                                                                            <span className="eco-lines">{experience.designation} At {experience.companyName}</span>
                                                                            <span className="others-deco borders-line">{experience.companyAddress ? experience.companyAddress : ''}</span>
                                                                        </div>
                                                                    </li>
                                                                </>
                                                            )
                                                        })
                                                        :
                                                        <>
                                                            <li>
                                                                <span className="others-deco">February 2017 - Current</span>
                                                                <div className="box-right">
                                                                    <span className="eco-lines">Retail Sales Associate ZARA</span>
                                                                    <span className="others-deco borders-line">New Delhi ,India</span>
                                                                </div>
                                                            </li>
                                                        </>
                                                    : ''
                                            }
                                        </ul>
                                    </div>

                                    <div className="more-down-box pd-18">
                                        <h2>EDUCATION</h2>
                                        {
                                            props.previewMode ?
                                                user.educations !== undefined ?
                                                    user.educations.map((education, key) => {
                                                        return (
                                                            <>
                                                                <span className="others-deco" key={key}>{education.startDate ? education.startDate : ''} {education.endDate ? '- ' + education.endDate : ''}</span>
                                                                <p className="pb-0 eco-lines">{education.title}</p>
                                                                <p className="others-deco">{education.insituteName}, {education.insituteAddress}</p>
                                                            </>
                                                        )
                                                    })
                                                    :
                                                    <>
                                                        <span className="others-deco">2016</span>
                                                        <p className="pb-0 eco-lines">Diploma in Financial Accounting</p>
                                                        <p className="others-deco">Oxford Software Institute & Oxford School of English, New Delhi, India</p>
                                                    </>
                                                : ''
                                        }
                                    </div>

                                    <div className="last-box pd-18">
                                        <h2>INTERESTS AND HOBBIES</h2>
                                        {
                                            props.previewMode ?
                                                <>
                                                    <ul className="deco-lines1 others-deco mb-0">
                                                        {
                                                            user.interestsHobbies !== undefined ?
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
                                                    <ul className="deco-lines1 others-deco mb-0">
                                                        <li>Team captain</li>
                                                        <li>Two-time league champions</li>
                                                        <li>Taught classNamees in lifesaving skills including: CPR, First Aid</li>
                                                    </ul>
                                                </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}

export default TemplateThree;