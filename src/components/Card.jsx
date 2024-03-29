import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  console.log(props);

  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>

        <Avatar imgURL={props.imgURL} />
      </div>
      <div className="bottom">
        <Details detailInfo={props.id} />
        <Details detailInfo={props.tel} />
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
