
import './App.css';
import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';
import Experience from './component/Experience/Experience';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Portfolio from './component/Portfolio-page/Portfolio';
import Review from './component/Review/Review';
import Skills from './component/skills/Skills';
import Service from './component/Service/Service';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Service/>
      <Experience/>
      <Portfolio/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
