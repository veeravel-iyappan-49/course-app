import "./App.css";

import Navbar from "./navbar";
import Footer from "./Footer";
import CourseList from "./CourseList";
import Login from "./login";


function App() {
  return (
    <>
      <Login/>
      <CourseList/>
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
