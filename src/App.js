import Headline from './Headline.js'
import './App.css';
import AOS from 'aos'; //Importing aos package
import "aos/dist/aos.css"; //Importing AOS style
import { useEffect } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Specialization from './component/Specialization/Specialization.js';
import Projects from './component/Projects/Projects.js';
import Qualifications from './component/Qualifications/Qualifications.js';
import Contact from './component/Contact/Contact.js';
import Footer from './component/Footer/Footer.js';



function App() {
  useEffect(()=>{
    AOS.init({
      duration:2000
    });
    console.log("inside useeffect")
  },[]);

  return (
    <div className="App">
      <Headline/>
      <Specialization/>
      <Projects/>
      <Qualifications/>
      <Contact/>
      <Footer/>
      
     
    </div>
  );
}

export default App;
