import "./app.scss";
import Contact from "./component/contact/Contact";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Parallax from "./component/Parallax/Parallax";
import Portfolio from "./component/Portfolio/Portfolio";
import Services from "./component/services/services";
import { projects } from "./data";

export default function App() {
  const type = "Services";
  return (
    <div>
      <section id="Homepage" className="snap-center">
        <Navbar />
        <Hero />
      </section>
      <section className="h-screen snap-center">
        <Parallax type={"Services"} />
      </section>
      <section id="Services" className="min-h-screen snap-center">
        <Services />
      </section>
      <section className="h-screen snap-center">
        <Parallax />
      </section>
      <section id="Portfolio" className="mt-20 snap-center">
        <Portfolio projects={projects}/>
      </section> 
      <section id="Contact" className="h-screen snap-center">
       <Contact/>
      </section>
    </div>
  );
}
