import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Member(props) {
  return (
    <div className="col-lg-3 col-md-4 col-6">
      <div className="member">
        <img src={props.img} className="img-fluid" alt="" />
        <div className="member-info">
          <div className="member-info-content">
            <h4>{props.name}</h4>
            <span>{props.team}</span>
            <div className="social">
              <a href={props.linkedin} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
