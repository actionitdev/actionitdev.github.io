import React from "react";

export default function BoardMember(props) {
  return (
    <div className="col-lg-6">
      <div className="box">
        <img src={props.img} className="img" alt="" />
        <h4 className="title">
          <a href={props.link} target="_blank" rel="noreferrer">
            {props.name}
          </a>
        </h4>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
