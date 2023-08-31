import React from "react";
import PropTypes from "prop-types";

const CardLG = (props) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={props.imgURL} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.text}</p>
        <a href={props.btnURL} class="btn btn-primary">
          {props.btnLabel}
        </a>
      </div>
    </div>
  );
};

CardLG.propTypes = {
  text: PropTypes.string,
  btnLabel: PropTypes.string,
  btnURL: PropTypes.string,
  title: PropTypes.string,
  imgURL: PropTypes.string,
};

export default CardLG;
