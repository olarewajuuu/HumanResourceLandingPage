import About from "./About"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Services from "./Services"


const Home = () => {
  return (
    <div>
      <div className="bg-secondary text-accent font-sans">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Footer />
      </div>

    </div>
  )
}

export default Home