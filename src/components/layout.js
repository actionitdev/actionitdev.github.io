import React from "react";
import { css } from "@emotion/react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Seo from "../components/seo";
import logo from "../images/logo.svg";
import introImg from "../images/intro-img.svg";
import "../lib/bootstrap/css/bootstrap.min.css";
import "../lib/font-awesome/css/font-awesome.min.css";
import "../lib/animate/animate.min.css";
import "../lib/ionicons/css/ionicons.min.css";
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/lightbox/css/lightbox.min.css";

export default function Layout({ children }) {
  return (
    <div>
      <Seo title="Action IT" />
      <Navbar bg="light" color="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt=""
            width="180"
            height="30"
            css={css`
              padding: 0;
              margin: 8px 0px 8px 12px;
            `}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ml-auto"
            css={css`
              margin-right: 24px;
            `}
          >
            <Nav.Link href="/">About Us</Nav.Link>
            <Nav.Link href="/applicants">For Applicants</Nav.Link>
            <Nav.Link href="/ngos">For NGOs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <section id="intro" className="clearfix">
        <div className="container">
          <div className="intro-img">
            <img src={introImg} className="img-fluid" alt="" />
          </div>

          <div className="intro-info">
            <h2
              css={css`
                color: white;
              `}
            >
              In-kind IT services
              <br />
              for the third sector, delivered by volunteers.
            </h2>
          </div>
        </div>
      </section>

      {children}

      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 footer-info">
                <h3>Action IT.</h3>
                <p>
                  We acknowledge and pay respects to the Elders and Traditional
                  Owners of the land on which our four Australian campuses
                  stand.
                  <a
                    href="https://www.monash.edu/indigenous-australians"
                    target="_blank"
                    rel="noreferrer"
                    className="readmore"
                  >
                    Information for Indigenous Australians
                  </a>
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/applicants">For Applicants</a>
                  </li>
                  <li>
                    <a href="/ngos">For NGOs</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  79P, 7 Innovation Walk
                  <br />
                  Clayton, VIC 3168
                  <br />
                  Australia
                  <br />
                  <strong>Executive Board Email:</strong>
                  <br />
                  ait-executive@actionit.dev
                  <br />
                  <strong>Supervisory Board Email:</strong>
                  <br />
                  ait-supervisory@actionit.dev
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright 2021 <strong>Action IT.</strong> All Rights
            Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
