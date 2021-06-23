import React from "react";
import { css } from "@emotion/react";
import Layout from "../components/layout";
import allieImg from "../images/portraits/allie.jpg";
import dougImg from "../images/portraits/doug.jpg";
import heatherImg from "../images/portraits/heather.jpg";
import mattImg from "../images/portraits/matt.jpg";
import nicoleImg from "../images/portraits/nicole.jpg";
import patrickImg from "../images/portraits/patrick.jpg";

export default function NgoPage() {
  return (
    <Layout>
      <section id="for-ngos" className="wow fadeIn">
        <div className="container">
          <header className="section-header">
            <h3
              css={css`
                color: #333 !important;
              `}
            >
              For NGOs
            </h3>
          </header>

          <div className="row">
            <div className="col-lg-12">
              <p>
                Action IT is established with the aim of providing a range of
                common IT solutions for NGOs including: basic IT infrastructure
                services such as website development, data management, and
                volunteer management systems; digital solutions to social,
                health, humanitarian, and development challenges in low and
                middle-income countries; and organisational processes such as
                monitoring and evaluation.
              </p>

              <p>
                We tailor our service portfolio to each organisation, working
                closely with them to develop meaningful, manageable, and
                sustainable IT projects that can be delivered in "Burst" mode.
                If you are interested in finding out how Action IT can be a
                capacity for your organisation, please get in touch via{" "}
                <a href="mailto:ait-executive@actionit.dev" className="link">
                  email
                </a>
                .
              </p>

              <p>
                Action IT had a good initial run for S1 2021. Last burst, we had
                51 applicants with different skills and technical background. We
                had 4 successful projects related to different areas, including
                accessibility, data retrieval, translation, and CI/CD. These
                projects were done over 720 hours by 9 competent student
                volunteers who made through an extensive application process.
              </p>
            </div>
          </div>

          <div class="row counters">
            <div class="col-lg-3 col-6 text-center">
              <span>51</span>
              <p>Applicants</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span>9</span>
              <p>Student Volunteers</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span>4</span>
              <p>Projects</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span>720</span>
              <p>Development Hours</p>
            </div>
          </div>
        </div>
      </section>

      <section id="oversight" className="section-bg">
        <div className="container">
          <header className="section-header">
            <h3>Supervisory Board</h3>
          </header>

          <div className="row">
            <div className="col-lg-12">
              <p>
                At Action IT we aim to be a transparent and accountable
                initiative, recognising that our primary responsibility is to
                both the organisations we work with and the students that work
                within Action IT
                <br />
                <br />
                To maintain such accountability, we have a Supervisory Board who
                meet twice a year to review Action IT’s:
              </p>

              <ul>
                <li>Current project portfolio</li>
                <li>Working practices</li>
                <li>Student wellbeing and support</li>
                <li>External organisational relationships</li>
              </ul>

              <p>
                This team comprises members from across the university and NGO
                sector, whose primary responsibility is to the students and
                organisations we work with.
                <br />
                <br />
                This team receives a summary report from the Action IT Executive
                Board prior to each meeting, and can propose recommendations or
                suggestions for improvement as appropriate. If you have any
                concerns or questions related to Action IT, please feel free to
                contact the{" "}
                <a href="mailto:ait-supervisory@actionit.dev" className="link">
                  Supervisory Board
                </a>{" "}
                for more information.
              </p>

              <div className="row">
                <div
                  className="col-lg-6 wow bounceInUp"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <img src={patrickImg} className="img" alt="" />
                    <h4 className="title">
                      <a
                        href="https://scholar.google.com/citations?user=YULFeN0AAAAJ&hl=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Prof. Patrick Olivier
                      </a>
                    </h4>
                    <p className="description">
                      Chairman & Director of Action Lab, Monash University
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6 wow bounceInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <img src={heatherImg} className="img" alt="" />
                    <h4 className="title">
                      <a
                        href="https://www.linkedin.com/in/heatherleson"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Heather Leson
                      </a>
                    </h4>
                    <p className="description">
                      Digital Innovation Lead, IFRC (International Federation of
                      Red Cross and Red Crescent Societies)
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div
                  className="col-lg-6 wow bounceInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <img src={nicoleImg} className="img" alt="" />
                    <h4 className="title">
                      <a
                        href="https://www.linkedin.com/in/nicolefrankel/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Nicole Frankel
                      </a>
                    </h4>
                    <p className="description">
                      Student Engagement and Employability Manager, Monash
                      University
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6 wow bounceInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <img src={dougImg} className="img" alt="" />
                    <h4 className="title">
                      <a
                        href="https://www.linkedin.com/in/douglasschuler/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Doug Schuler
                      </a>
                    </h4>
                    <p className="description">
                      ACM SIGCAS (Special Interest Group on Computers and
                      Society) Chair
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div
                  className="col-lg-6 wow bounceInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <img src={mattImg} className="img" alt="" />
                    <h4 className="title">
                      <a
                        href="https://www.northumbria.ac.uk/about-us/our-staff/b/matt-baillie-smith/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Prof. Matt Baillie Smith
                      </a>
                    </h4>
                    <p className="description">
                      Professor of International Development, Northumbria
                      University
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-6 wow bounceInUp"
                  data-wow-delay="0.1s"
                  data-wow-duration="1.4s"
                >
                  <div className="box">
                    <img src={allieImg} className="img" alt="" />
                    <h4 className="title">
                      <a
                        href="https://research.monash.edu/en/persons/allie-clemans"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Prof. Allie Clemans
                      </a>
                    </h4>
                    <p className="description">
                      Professor, Director of Learning and Teaching, Monash
                      University
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
