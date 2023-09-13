import "./App.css";
import ClassForm from "./Components/ClassForm/ClassForm";
import Classes from "./Components/Classes/Classes";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Instructor from "./Components/Instructor/Instructor";
import Navbar from "./Components/Navbar/Navbar";
import Importance from "./Components/importance/Importance";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Classes />
      <Instructor />
      <Importance />
      <ClassForm />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
