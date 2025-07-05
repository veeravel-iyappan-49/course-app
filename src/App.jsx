
import "./App.css";
import Course from "./course";
import Navbar from "./navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Course name="HTML" time="3 Hrs"  price="$299" rating="9/10" />
      <Course name="CSS" time="2 Hrs" price="$199" rating="8.5/10" />
      <Course name="JS" time="3.5 Hrs"  price="$399" rating="9/10" />
      <Course name="React JS" time="10 Hrs" price="$699" rating="10/10" />
      <Navbar />
      <Footer/>
    </>
  );
}

export default App;

