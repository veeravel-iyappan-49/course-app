import React from "react";
import PropTypes from "prop-types";

function Course(props) {
  return (
    <div className="card">
      <img src={props.image} alt="Course Image" />
      <h3>{props.name} Full Course</h3>
      <p>Duration:{props.time}</p>
      <p>Price:<b>{props.price}</b></p>
      <p>Rating:{props.rating}</p>
    </div>
  );
}
Course.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
};

export default Course;
