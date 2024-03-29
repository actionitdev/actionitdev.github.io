import React from "react";
import { css } from "@emotion/react";
import Layout from "../components/layout";
import TeamMember from "../components/team";
import BoardMember from "../components/board";
import DeliveryLead from "../components/deliveryLead";
import aboutImg from "../images/about-img.svg";
import structureImg from "../images/ink-structure.png";
import tomImg from "../images/portraits/tom.jpg";
import dinislamImg from "../images/portraits/dinislam.jpg";
import joshuaImg from "../images/portraits/joshua.jpg";
import delvinImg from "../images/portraits/delvin.jpg";
import graceImg from "../images/portraits/grace.jpg";
import allieImg from "../images/portraits/allie.jpg";
import dougImg from "../images/portraits/doug.jpg";
import heatherImg from "../images/portraits/heather.jpg";
import mattImg from "../images/portraits/matt.jpg";
import nicoleImg from "../images/portraits/nicole.jpg";
import patrickImg from "../images/portraits/patrick.jpg";
import margheritaImg from "../images/portraits/margherita-angelucci.jpeg";

const team = [
  {
    img: tomImg,
    link: "https://scholar.google.com/citations?user=yLecSWgAAAAJ&hl=en",
    name: "Tom Bartindale",
    title: "Chief Executive Officer",
    description:
      "An academic researcher specializing in new media production technologies. Tom has extensive experience building and maintaining IT systems for the third sector. He is responsible for making major corporate decisions, building and maintaining client relationships, and managing the overall operation of Action IT.",
  },
  {
    img: dinislamImg,
    link: "https://www.linkedin.com/in/dinislam-abdulgalimov/",
    name: "Dinislam Abdulgalimov",
    title: "Chief Technology Officer",
    description:
      "Dinislam is a Research Software Engineer with rich experience working with Industry and NGOs. He makes executive decisions with regards to the technological interests of Action IT He is responsible for service delivery, managing the development and deployment of all services provided by Action IT to clients.",
  },
  {
    img: graceImg,
    link: "https://scholar.google.com.au/citations?user=J8X_9JAAAAAJ&hl=en",
    name: "Grace Xie",
    title: "Chief Information Officer",
    description:
      "With more than 15 years of experience in software engineering, Grace is responsible for Action IT's information and data governance. Grace supports the team in streamlining suitable technologies and related policies to optimize strategic benefits.",
  },
  {
    img: joshuaImg,
    link: "https://research.monash.edu/en/persons/joshua-seguin",
    name: "Joshua Pablo Seguin",
    title: "Chief Experience Officer",
    description:
      "Joshua takes care of the Action IT brand and communication strategy, while providing expert guidance on the UX/UI design services of the group. Joshua has got years of experience designing digital products and marketing campaigns for multinational brands (e.g. Coca-cola, Unilever, and Uniqlo) and NGOs including IFRC and community-based organisations.",
  },
  {
    img: delvinImg,
    link: "https://scholar.google.com/citations?user=PJVzD2sAAAAJ&hl=en",
    name: "Delvin Varghese",
    title: "Director of Partnerships",
    description:
      "Delvin is responsible for engaging with our external NGO partners, building meaningful relationships which lead to sustainable project deliveries. A key part of this role is supporting our volunteers in building their identity as volunteering professionals.",
  },
  {
    img: margheritaImg,
    link: "https://www.linkedin.com/in/margherita-angelucci/",
    name: "Margherita Angelucci",
    title: "Recruitment and Volunteer Coordinator",
    description:
      "Margherita is responsible for organising and managing the recruitment process of Action IT volunteers. She leads the volunteer management and ensures service mission objectives are met. Margherita coordinates and guides volunteer students ensuring they receive sufficient support and achieve their goals.",
  },
];

const board = [
  {
    img: patrickImg,
    link: "https://scholar.google.com/citations?user=YULFeN0AAAAJ&hl=en",
    name: "Prof. Patrick Olivier",
    description: "Chairman & Director of Action Lab, Monash University",
  },
  {
    img: heatherImg,
    link: "https://www.linkedin.com/in/heatherleson",
    name: "Heather Leson",
    description:
      "Digital Innovation Lead, IFRC (International Federation of Red Cross and Red Crescent Societies)",
  },
  {
    img: nicoleImg,
    link: "https://www.linkedin.com/in/nicolefrankel",
    name: "Nicole Frankel",
    description:
      "Student Engagement and Employability Manager, Monash University",
  },
  {
    img: dougImg,
    link: "https://www.linkedin.com/in/douglasschuler",
    name: "Doug Schuler",
    description:
      "ACM SIGCAS (Special Interest Group on Computers and Society) Chair",
  },
  {
    img: mattImg,
    link: "https://www.northumbria.ac.uk/about-us/our-staff/b/matt-baillie-smith",
    name: "Prof. Matt Baillie Smith",
    description:
      "Professor of International Development, Northumbria University",
  },
  {
    img: allieImg,
    link: "https://research.monash.edu/en/persons/allie-clemans",
    name: "Prof. Allie Clemans",
    description:
      "Professor, Director of Learning and Teaching, Monash University",
  },
];

const teamList = team.map((item) => {
  return (
    <TeamMember
      img={item.img}
      name={item.name}
      title={item.title}
      link={item.link}
      description={item.description}
    ></TeamMember>
  );
});

const boardList = board.map((item) => {
  return (
    <BoardMember
      img={item.img}
      name={item.name}
      link={item.link}
      description={item.description}
    ></BoardMember>
  );
});

export default function Home() {
  return (
    <Layout>
      <main id="main">
        <section id="announce">
          <div
            className="container"
            css={css`
              background: #eee;
              margin-top: 3em;
              padding-top: 1em;
            `}
          >
            <header className="section-header">
              <h3>What's next...</h3>
            </header>

            <div className="row about-container">
              <div className="col-lg-8 content order-lg-1 order-2">
                <p
                  css={css`
                    font-size: larger;
                  `}
                >
                  In 2023 we made the important decision to retire Action IT in
                  its current form at Monash University.
                </p>
                <p
                  css={css`
                    font-size: larger;
                  `}
                >
                  The lessons learnt from this model will go on to inform future
                  programs of supporting NGOs in IT tasks that they otherwise
                  would not be able to support.
                </p>
                <p>
                  After 5 semesters of supporting over 20 organisations by over
                  100 students, we have made the important decision to pause and
                  reflect on the model.
                </p>
                <p>
                  We want to thank all who participated, the management team,
                  supervisor board and all those who contributed in any way to
                  this journey.
                </p>
                <p>
                  We encourage those in IT wherever you are in your career to
                  consider how your skills can help those without these key
                  literacies.
                </p>
                <p>Thanks for your understanding,</p>
                <p>Tom Bartindale</p>
                <p>CEO, Action IT</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="container">
            <p
              css={css`
                font-style: italic;
                font-weight: bold;
                font-size: 28px;
                margin-bottom: 32px;
              `}
            >
              {/* Applications are now open for the S2 2022 cohort. Please submit
              your application via{" "}
              <a
                href="https://forms.gle/CCnwsoKYuBZDDVWi8"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                Action IT Application Form
              </a>{" "}
              before 27th July 2022 to join us! */}
            </p>

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
                    <a href="/ngos" className="find-out-more">
                      find out more
                    </a>{" "}
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
                    Solution delivery teams consist of IT specialists,
                    designers, and project managers depending on the project
                    scope.
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
              {teamList}
              <DeliveryLead />
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
                  To maintain such accountability, we have a Supervisory Board
                  who meet twice a year to review Action IT’s:
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
                  This team receives a summary report from the Action IT
                  Executive Board prior to each meeting, and can propose
                  recommendations or suggestions for improvement as appropriate.
                  If you have any concerns or questions related to Action IT,
                  please feel free to contact the{" "}
                  <a
                    href="mailto:ait-supervisory@actionit.dev"
                    className="link"
                  >
                    Supervisory Board
                  </a>{" "}
                  for more information.
                </p>

                <div className="row">{boardList}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
