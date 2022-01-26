import '../App.css'
import '../index.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import GraphicDesign from '../components/AdditionalFields'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <div className='App'>
        <Navbar />
        <Hero />
        <div id="work">
          <Projects />
        </div>
        <GraphicDesign />
      </div>
      <Footer />
    </div>
  );
}

export default Home
