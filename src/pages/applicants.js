import React from "react";
import { css } from "@emotion/react";
import Layout from "../components/layout";
import timelineImg from "../images/ink-timeline-2021s2.png";
import developerImg from "../images/contribution-developer.png";
import designerImg from "../images/contribution-designer.png";
import pmImg from "../images/contribution-pm.png";
import burstImg from "../images/ink-burst.png";
import pathwayImg from "../images/pathway.png";

export default function ApplicantPage() {
  return (
    <Layout>
      <main id="main">
        <section id="for-students">
          <div className="container">
            <header className="section-header">
              <h3>For Applicants</h3>
            </header>

            <div className="row for-students-container">
              <div className="col-lg-12 content order-lg-1 order-2">
                <p>
                  Action IT provides opportunities for university students to
                  work on real-world projects as volunteers. Becoming a member
                  of Action IT provides valuable experiences and opportunities
                  for your professional development during the study. Members
                  work collaboratively on well-defined projects under the
                  management of the Executive Board of Action IT in specialist
                  solution teams. We operate three specialisms suited to
                  different skill sets to optimize your contribution to Action
                  IT and the NGO sector.
                </p>

                <div
                  className="row mb-5 wow fadeInUp"
                  css={css`
                    text-align: center;
                  `}
                >
                  <div className="col-lg-4">
                    <div className="card-image">
                      <img className="img-fluid" src={developerImg} alt="" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Engineer</h4>
                      <p className="card-description">
                        We are onboarding software engineers (developers) for
                        S2, 2021. If you are interested, don't hesitate to lodge
                        your application now!
                      </p>
                      <a href="#how-to-apply" className="btn-apply">
                        Apply Now
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="card-image">
                      <img className="img-fluid" src={designerImg} alt="" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Graphic Designer</h4>
                      <p className="card-description">
                        The Graphic Designer track will be opening soon, please
                        submit an expression of interest for any future updates.
                      </p>
                      <a href="mailto:ait-eoi@actionit.dev" className="btn-eoi">
                        Expression of Interest
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="card-image">
                      <img className="img-fluid" src={pmImg} alt="" />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Project Manager</h4>
                      <p className="card-description">
                        The Project Manager track will be opening soon, please
                        submit an expression of interest for any future updates.
                      </p>
                      <a href="#how-to-apply" className="btn-apply">
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>

                <p
                  className="title"
                  css={css`
                    margin-top: 80px;
                  `}
                >
                  What to Expect
                </p>

                <div className="row mb-4">
                  <div className="col-lg-6 mb-2">
                    <div className="icon-box wow fadeInUp">
                      <div className="icon">
                        <i className="fa fa-user-plus"></i>
                      </div>
                      <h4 className="title">Real-world Project Experiences</h4>
                      <p className="description">
                        You will be given opportunities to work on real projects
                        with the world's largest humanitarian organisations.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 mb-2">
                    <div
                      className="icon-box wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="icon">
                        <i className="fa fa-pencil-square-o"></i>
                      </div>
                      <h4 className="title">Recommendation Letters</h4>
                      <p className="description">
                        Members will be awarded recommendation letters from both
                        Monash University and the National Red Cross or Red
                        Crescent Society they work with.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 mb-2">
                    <div
                      className="icon-box wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon">
                        <i className="fa fa-rocket"></i>
                      </div>
                      <h4 className="title">Technical Competencies</h4>
                      <p className="description">
                        Specialist domain experts sign-off a variety of
                        competencies accumulated during your time at Action IT
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 mb-2">
                    <div
                      className="icon-box wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <div className="icon">
                        <i className="fa fa-tasks"></i>
                      </div>
                      <h4 className="title">
                        Opportunities for Training and Certification
                      </h4>
                      <p className="description">
                        Depending on the project scope, you will be provided
                        with related training and certification opportunities
                        (e.g. AWS Cloud Certificate).
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="icon-box wow fadeInUp">
                      <div className="icon">
                        <i className="fa fa-coffee"></i>
                      </div>
                      <h4 className="title">Dedicated Working Space</h4>
                      <p className="description">
                        Dedicated working space in Action Lab (Monash Clayton
                        Campus) where you will work amongst Action Lab
                        researchers and engineers. Action IT follows the{" "}
                        <a
                          href="https://www.monash.edu/__data/assets/pdf_file/0010/2406790/COVID-Safe-Plan.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="link"
                        >
                          Monash COVID Safe Plan
                        </a>{" "}
                        which in line with the government's health directions
                        and advice for working arrangements.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="icon-box wow fadeInUp">
                      <div className="icon">
                        <i className="fa fa-calendar-check-o"></i>
                      </div>
                      <h4 className="title">Flexible Working Arrangements</h4>
                      <p className="description">
                        We support flexible working arrangements so you can work
                        remotely if necessary. Even if you are not in Australia
                        at the moment, you are still welcome to join us
                        virtually!
                      </p>
                    </div>
                  </div>
                </div>

                <p
                  className="title"
                  css={css`
                    margin-top: 40px;
                  `}
                >
                  Action IT Pathway
                </p>

                <div className="row mb-4">
                  <div
                    className="col-lg-6"
                    css={css`
                      margin-bottom: 24px;
                    `}
                  >
                    <p>
                      Action IT is aiming to support the development of our
                      student volunteers. After working at least one semester
                      with Action IT, eligible candidates will be able to take
                      Supporter or Consultant roles to facilitate future
                      projects with their existing project experiences. More
                      competent candidates might also get the chance to become a
                      Delivery Lead for Action IT to lead one or more project
                      teams.
                    </p>
                  </div>

                  <div
                    className="col-lg-6"
                    css={css`
                      text-align: center;
                      padding: 0 32px;
                    `}
                  >
                    <img
                      src={pathwayImg}
                      className="img-fluid"
                      css={css`width: 80vh;"`}
                      alt="AIT Structure"
                    />
                  </div>
                </div>

                <p
                  className="title"
                  css={css`
                    margin-top: 40px;
                  `}
                >
                  Who Should Apply
                </p>

                <p className="subtitle">Eligibility</p>

                <p>
                  Are you a newly enrolled student who is panic about what is
                  your future roadmap in the next couple of years? Are you a
                  current student who is looking for opportunities to build up
                  your employment competencies? Have you recently graduated and
                  willing to gain more real-world working experiences? If you
                  answered yes to any of these questions, you are the person we
                  are looking for. However, to be an eligible applicant for
                  Action IT, you should:
                </p>

                <ul>
                  <li>
                    Have the potential to apply all-round communication skills
                    to work collaboratively within the solution delivery team,
                  </li>
                  <li>
                    Strive for solving real-world problems and provide workable
                    solutions by actively seeking out new knowledge,
                  </li>
                  <li>
                    Most importantly, have a passion for digital technologies
                    and believe they can make an impact in the world.
                  </li>
                </ul>

                <p className="subtitle">Availability</p>

                <p>
                  You need to commit at least <strong>8 hours per week</strong>{" "}
                  from teaching week 1 to week 10 across 2 semesters to
                  successfully become a member of Action IT Students can work
                  individually and remotely for much of the time, but core hours
                  will be agreed upon for regularly planning and catch-up
                  meetings, and communication with external clients.
                </p>

                <p className="subtitle">Reasonable Accommodations</p>

                <p id="how-to-apply">
                  Reasonable accommodation processes will be in place to ensure
                  equal opportunities will be provided for applicants with
                  disabilities. If you would like to request any reasonable
                  adjustments as part of your application, please feel free to
                  contact us for more details.
                </p>

                <p className="title">How to Apply</p>

                <p>
                  If you think you are the right applicant for us,
                  congratulations, you are ready to apply to join Action IT now!
                  Action IT launches the recruitment process one month before
                  the start of each semester. To apply, fill out an online
                  application form by:
                </p>

                <ul>
                  <li>Reading and following all the instructions</li>
                  <li>Providing your personal details</li>
                  <li>Uploading your resume and academic transcript</li>
                  <li>
                    Answering the open-ended questions by complying strictly
                    with the word or character limits for your answers
                  </li>
                </ul>

                <p
                  css={css`
                    font-style: italic;
                    font-weight: bold;
                  `}
                >
                  Applications are now open for the S2 2021 cohort. Please
                  submit your application via{" "}
                  <a
                    href="https://forms.gle/a7X3udQTXU6ZqAqH9"
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Action IT Application Form
                  </a>{" "}
                  before 12th July 2021 to join us!
                </p>

                <div className="row justify-content-center wow bounceInUp">
                  <img
                    src={timelineImg}
                    className="img-fluid timeline-img"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-we-work" className="section-bg">
          <div className="container">
            <header className="section-header">
              <h3>How We Work</h3>
              <p>
                Action IT operates "Burst" mode working to ensure the successful
                delivery of infrastructures and solutions. Applicants initially
                join a 10-week Development Burst in either semester 1 or
                semester 2 (teaching week 1 to 10) to intensively work on
                existing, well-scoped projects for NGOs. Projects are signed-off
                and handed over to NGOs at the end of each Development burst
                with documentation.
                <br />
                <br />
                Design and Scoping bursts amid Development bursts, where goals
                are set and prioritized. Major deliverables, project schedules,
                and milestones are defined and project plans are developed. More
                experienced Action IT members will have the chance to contribute
                to the Design and Scoping burst after accomplishing at least two
                Development bursts. Ongoing maintenance and support will be
                performed throughout the bursts.
              </p>

              <div className="ink-burst wow fadeInUp">
                <img src={burstImg} className="img-fluid burst-img" alt="" />
              </div>
            </header>
          </div>
        </section>
      </main>
    </Layout>
  );
}
