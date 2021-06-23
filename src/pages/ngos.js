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
    </Layout>
  );
}
