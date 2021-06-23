import React from "react";
import { css } from "@emotion/react";

export default function TeamMember(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card">
        <img src={props.img} className="img" alt="" />
        <div className="card-body">
          <h5 className="card-title">
            <a
              href={props.link}
              target="_blank"
              rel="noreferrer"
              className="readmore"
            >
              {props.name}
            </a>
          </h5>

          <p
            className="card-text"
            css={css`
              font-weight: bold;
            `}
          >
            {props.title}
          </p>

          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
