import React from "react";
import PropTypes from "prop-types";
import CourseList from "./CourseList";

function Course(props) {
  function BuyCourse(discount) {
    console.log(
      props.name + " full course purchased with " + discount + "% discount"
    );
  }
  return (
    // using conditional rendering to omit the empty or unnamed entries

    props.name && (
      <div className="card">
        <img src={props.image} alt="Course Image" />
        <h3>{props.name} Full Course</h3>
        <p>Duration:{props.time}</p>
        <p>
          <mark>
            Price:<b>{props.price}</b>
          </mark>
        </p>
        <p>Rating:{props.rating}</p>
        <button onClick={() => BuyCourse(20)}>Buy Now</button>
        <button onClick={()=> props.delete(props.id)}>Delete</button>
      </div>
    )
  );
}
Course.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
};

export default Course;
