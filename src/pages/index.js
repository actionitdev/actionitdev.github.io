import React from "react";
import { css } from "@emotion/react";
import Layout from "../components/layout";
import aboutImg from "../images/about-img.svg";
import burstImg from "../images/ink-burst.png";
import structureImg from "../images/ink-structure.png";
import tomImg from "../images/portraits/tom.jpg";
import peterImg from "../images/portraits/peter.jpg";
import danImg from "../images/portraits/dan.jpg";
import delvinImg from "../images/portraits/delvin.jpg";
import dinislamImg from "../images/portraits/dinislam.jpg";
import graceImg from "../images/portraits/grace.jpg";

export default function Home() {
  return (
    <Layout>
      <main id="main">
        <section id="about">
          <div className="container">
            <header className="section-header">
              <h3>About Us</h3>
            </header>

            <div className="row about-container">
              <div className="col-lg-8 content order-lg-1 order-2">
                <p>
                  Action IT is an innovative IT consultancy supporting NGOs with
                  limited resources in delivering sustainable IT projects. We
                  support qualified university student volunteers working on
                  well-defined projects within a professional team. Action IT
                  supports both student’s professional development and the
                  delivery of projects that would have otherwise been impossible
                  to deliver at third sector organisations.
                </p>

                <div className="icon-box wow fadeInUp">
                  <div className="icon">
                    <i className="fa fa-users"></i>
                  </div>
                  <h4 className="title">Volunteers</h4>
                  <p className="description">
                    University students volunteer their time during semesters at
                    Action IT, supported and managed by the experienced team at{" "}
                    <a
                      href="https://www.monash.edu/it/hcc/action-lab"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Action Lab
                    </a>
                    . Students gain valuable experience working in real-world IT
                    projects for international NGOs, whilst producing concrete
                    examples of work for their CV.
                  </p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
                  <div className="icon">
                    <i className="fa fa-cogs"></i>
                  </div>
                  <h4 className="title">Sustainable IT Projects</h4>
                  <p className="description">
                    Action IT works with organisations to design projects that
                    map to the skills and experience and capacity of the team to
                    deliver complete and sustainable IT projects.
                  </p>
                </div>

                <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
                  <div className="icon">
                    <i className="fa fa-globe"></i>
                  </div>
                  <h4 className="title">Our Partners</h4>
                  <p className="description">
                    We are proud to be initially partnering with the
                    International Federation of Red Cross and Red Crescent
                    Societies (through{" "}
                    <a
                      href="http://media.ifrc.org/innovation/solferino-academy/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Solferino Academy
                    </a>
                    ) to support National RC societies across the world. If you
                    are a NGO and are interested,{" "}
                    <a href="#for-ngos" className="find-out-more">
                      find out more
                    </a>
                    here.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 background order-lg-2 order-1 wow fadeInUp">
                <img src={aboutImg} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="who-are-we" className="wow fadeIn">
          <div className="container">
            <header className="section-header">
              <h3>Who We Are?</h3>

              <div className="row mb-4">
                <div className="col-lg-6">
                  <p>
                    Action IT's Executive Board is responsible for day-to-day
                    delivery of client solutions, under the governance of the
                    Supervisory Board. For each client, a delivery lead is
                    responsible for managing a team (3-5) of Action IT members
                    chosen by their experience and skill set.
                    <br />
                    <br />
                    Solution delivery teams consist of developers, designers,
                    and project managers depending on the project scope.
                    <br />
                    <br />
                    The Supervisory Board reviews Action IT's operations
                    bi-annually to ensure transparency and accountability.
                  </p>
                </div>

                <div
                  className="col-lg-6 wow bounceInUp"
                  css={css`
                    text-align: center;
                  `}
                >
                  <img
                    src={structureImg}
                    className="img-fluid"
                    css={css`width: 80vh;"`}
                    alt="AIT Structure"
                  />
                </div>
              </div>
            </header>

            <div className="row row-eq-height justify-content-center">
              <div className="col-lg-6 mb-4">
                <div className="card wow bounceInUp">
                  <img src={tomImg} className="img" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">
                      <a
                        href="https://scholar.google.com/citations?user=yLecSWgAAAAJ&hl=en"
                        target="_blank"
                        rel="noreferrer"
                        className="readmore"
                      >
                        Tom Bartindale
                      </a>
                    </h5>

                    <p
                      className="card-text"
                      css={css`
                        font-weight: bold;
                      `}
                    >
                      Chief Executive Officer
                    </p>

                    <p className="card-text">
                      An academic researcher specializing in new media
                      production technologies. Tom has extensive experience
                      building and maintaining IT systems for the third sector.
                      He is responsible for making major corporate decisions,
                      building and maintaining client relationships, and
                      managing the overall operation of Action IT.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card wow bounceInUp">
                  <img src={peterImg} className="img" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">
                      <a
                        href="https://au.linkedin.com/public-profile/in/xiuzhi-chen"
                        target="_blank"
                        rel="noreferrer"
                        className="readmore"
                      >
                        Peter Chen
                      </a>
                    </h5>

                    <p
                      className="card-text"
                      css={css`
                        font-weight: bold;
                      `}
                    >
                      Chief Technology Officer
                    </p>

                    <p className="card-text">
                      Peter is a Research Software Engineer with rich experience
                      working with NGOs. He makes executive decisions with
                      regards to the technological interests of Action IT He is
                      responsible for service delivery, managing the development
                      and deployment of all services provided by Action IT to
                      clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card wow bounceInUp">
                  <img src={graceImg} className="img" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">
                      <a
                        href="https://scholar.google.com.au/citations?user=J8X_9JAAAAAJ&hl=en"
                        target="_blank"
                        rel="noreferrer"
                        className="readmore"
                      >
                        Grace Xie
                      </a>
                    </h5>

                    <p
                      className="card-text"
                      css={css`
                        font-weight: bold;
                      `}
                    >
                      Chief Information Officer
                    </p>

                    <p className="card-text">
                      With more than 15 years of experience in software
                      engineering, Grace is responsible for Action IT's
                      information and data governance. Grace supports the team
                      in streamlining suitable technologies and related policies
                      to optimize strategic benefits.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card wow bounceInUp">
                  <img src={delvinImg} className="img" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">
                      <a
                        href="https://scholar.google.com.au/citations?user=PJVzD2sAAAAJ&hl=en&oi=ao"
                        target="_blank"
                        rel="noreferrer"
                        className="readmore"
                      >
                        Delvin Varghese
                      </a>
                    </h5>

                    <p
                      className="card-text"
                      css={css`
                        font-weight: bold;
                      `}
                    >
                      Director of Partnerships
                    </p>

                    <p className="card-text">
                      Delvin is responsible for engaging with our external NGO
                      partners, building meaningful relationships which lead to
                      sustainable project deliveries. A key part of this role is
                      supporting our volunteers in building their identity as
                      volunteering professionals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 mb-4">
                <div className="card wow bounceInUp">
                  <div className="row row-eq-height justify-content-center">
                    <div className="col-lg-4">
                      <img src={danImg} className="img" alt="" />

                      <h5
                        className="card-title"
                        css={css`
                          margin-top: 20px;
                        `}
                      >
                        <a
                          href="https://scholar.google.co.uk/citations?user=WPNviioAAAAJ&hl=en"
                          target="_blank"
                          rel="noreferrer"
                          className="readmore"
                        >
                          Dan Richardson
                        </a>
                      </h5>
                    </div>

                    <div className="col-lg-4">
                      <img src={dinislamImg} className="img" alt="" />

                      <h5
                        className="card-title"
                        css={css`
                          margin-top: 20px;
                        `}
                      >
                        <a
                          href="https://scholar.google.com/citations?user=_9JseO4AAAAJ&hl=en"
                          target="_blank"
                          rel="noreferrer"
                          className="readmore"
                        >
                          Dinislam Abdulgalimov
                        </a>
                      </h5>
                    </div>
                  </div>

                  <div className="card-body">
                    <p
                      className="card-text"
                      css={css`
                        font-weight: bold;
                      `}
                    >
                      Delivery Leads
                    </p>

                    <div className="row row-eq-height justify-content-center">
                      <p
                        className="card-text"
                        css={css`
                          width: 60%;
                        `}
                      >
                        Delivery leads take responsibility for client projects,
                        managing developers, designers, and project managers to
                        deliver client solutions. They coordinate project teams
                        to keep everybody in sync with the product deliverables.
                      </p>
                    </div>
                  </div>
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
