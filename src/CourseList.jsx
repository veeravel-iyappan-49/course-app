import React, { useState } from "react";
import HTML from "./assets/html.jpeg";
import CSS from "./assets/css.jpeg";
import JS from "./assets/js.jpeg";
import react from "./assets/react.jpeg";
import Course from "./course";

function CourseList() {
  const [courses, setCourse] = useState([
    {
      id: 1,
      image: HTML,
      name: "HTML",
      time: "3 Hrs",
      price: 99,
      rating: "9/10",
    },
    {
      id: 2,
      image: CSS,
      name: "CSS",
      time: "2 Hrs",
      price: 199,
      rating: "8.5/10",
    },

    {
      id: 3,
      image: JS,
      name: "JS",
      time: "3.5 Hrs",
      price: 399,
      rating: "9/10",
    },
    {
      id: 4,
      image: react,
      name: "React JS",
      time: "10 Hrs",
      price: 699,
      rating: "10/10",
    },
    {
      id: 5,
      image: react,
      name: "Python",
      time: "8 Hrs",
      price: 599,
      rating: "9/10",
    },
  ]);

  function handleDelete(id) {
    const newCourses = courses.filter((course) => course.id != id);
    setCourse(newCourses);
  }

  //for sorting
  //   courses.sort((x, y) => y.price - x.price);

  const courseList = courses.map((course) => (
    <Course
      key={course.id}
      name={course.name}
      image={course.image}
      rating={course.rating}
      price={course.price}
      time={course.time}
      delete={handleDelete}
      id={course.id}
    />
  ));

  return <>{courseList}</>;
}

export default CourseList;
