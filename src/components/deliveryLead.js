import React from "react";
import { css } from "@emotion/react";
import LeadProfile from "./leadProfile";
import danImg from "../images/portraits/dan.jpg";
import harrisonImg from "../images/portraits/harrison-marshall.jpeg";
import pranavImg from "../images/portraits/pranav-kulkarni.jpeg";

const deliveryLeads = [
  {
    img: danImg,
    link: "https://scholar.google.co.uk/citations?user=WPNviioAAAAJ&hl=en",
    name: "Dan Richardson",
  },
  {
    img: harrisonImg,
    link: "https://www.linkedin.com/in/harrison-marshall-42170a211/",
    name: "Harrison Marshall",
  },
  {
    img: pranavImg,
    link: "https://www.linkedin.com/in/pranav-kulkarni1910/",
    name: "Pranav Kulkarni",
  },
];

const leadList = deliveryLeads.map((item) => {
  return (
    <LeadProfile img={item.img} name={item.name} link={item.link}></LeadProfile>
  );
});

export default function DeliveryLead() {
  return (
    <div className="col-lg-12 mb-4">
      <div className="card wow bounceInUp">
        <div className="row row-eq-height justify-content-center">
          {leadList}
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
              Delivery leads take responsibility for client projects, managing
              IT specialists, designers, and project managers to deliver client
              solutions. They coordinate project teams to keep everybody in sync
              with the product deliverables.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
