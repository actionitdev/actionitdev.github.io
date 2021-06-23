import React from "react";
import { css } from "@emotion/react";

export default function LeadProfile(props) {
  return (
    <div className="col-lg-4">
      <img src={props.img} className="img" alt="" />

      <h5
        className="card-title"
        css={css`
          margin-top: 20px;
        `}
      >
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="readmore"
        >
          {props.name}
        </a>
      </h5>
    </div>
  );
}
