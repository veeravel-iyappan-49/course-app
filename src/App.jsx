import "./App.css";
import Course from "./course";
import Navbar from "./navbar";
import Footer from "./Footer";
import HTML from "./assets/html.jpeg";
import CSS from "./assets/css.jpeg";
import JS from "./assets/js.jpeg";
import react from "./assets/react.jpeg";

function App() {
  return (
    <>
      <Course
        image={HTML}
        name="HTML"
        time="3 Hrs"
        price="$299"
        rating="9/10"
      />
      <Course
        image={CSS}
        name="CSS"
        time="2 Hrs"
        price="$199"
        rating="8.5/10"
      />
      <Course image={JS} name="JS" time="3.5 Hrs" price="$399" rating="9/10" />
      <Course
        image={react}
        name="React JS"
        time="10 Hrs"
        price="$699"
        rating="10/10"
      />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
