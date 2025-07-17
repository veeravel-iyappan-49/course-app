import "./App.css";

import Navbar from "./navbar";
import Footer from "./Footer";
import CourseList from "./CourseList";
import Login from "./login";
import HomePage from "./HomePage";

function App() {
  return (
    <>
      <HomePage />
      <Login />
      <CourseList />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
