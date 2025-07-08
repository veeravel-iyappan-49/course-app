import React from "react";


function Course(props) {
  return (
    <div className="card">
      <img src={props.image} alt="Course Image" />
      <h3>{props.name} Full Course</h3>
      <p>Duration:{props.time}</p>
      <p>Price:{props.price}</p>
      <p>Rating:{props.rating}</p>
    </div>
  );
}


export default Course;
