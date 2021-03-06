import React from "react";
import { css } from "@emotion/react";
import Layout from "../components/layout";

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
                Throughout the previous two Action IT bursts (S1 2021 and S2
                2021), we had 94 applicants with different skills and technical
                backgrounds. We had 8 successful projects related to different
                areas, including accessibility, data retrieval, translation,
                CI/CD, volunteer management, and financial management systems.
                These projects were done over 1,520 hours by 19 competent
                student volunteers who made through an extensive application
                process.
              </p>
            </div>
          </div>

          <div class="row counters">
            <div class="col-lg-3 col-6 text-center">
              <span>94</span>
              <p>Applicants</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span>19</span>
              <p>Student Volunteers</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span>8</span>
              <p>Projects</p>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span>1,520</span>
              <p>Development Hours</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-work" className="section-bg">
        <div className="container">
          <header className="section-header">
            <h3>How We Work</h3>
          </header>

          <p>
            Action IT operates "Burst" mode working to ensure the successful
            delivery of infrastructures and solutions. Each Development burst
            lasts for 10 weeks, which allows Action IT volunteers to work
            intensively on existing projects for NGOs. Projects are signed-off
            and handed over to NGOs at the end of each Development burst with
            detailed documentation.
            <br />
            <br />
            Due to the nature of the burst mode, all Action IT projects need to
            be well-scoped to make sure the volunteers can deliver the projects
            on time with good qualities. Amid Development bursts, Action IT also
            runs Design and Scoping bursts where goals are set and prioritized.
            Major deliverables, project schedules, and milestones are defined
            and project plans are developed. Ongoing maintenance and support
            will be performed throughout the bursts by selected student
            volunteers to ensure the sustainability of Action IT projects during
            their operational lifecycle.
            <br />
            <br />
            Please get in touch with us if you would like to know how Action IT
            can help with your organisation and whether your projects will fit
            our burst mode.
          </p>
        </div>
      </section>
    </Layout>
  );
}
