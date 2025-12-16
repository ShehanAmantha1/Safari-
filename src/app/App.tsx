import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ServicesDetailed } from "./components/ServicesDetailed";
import { WhyChoose } from "./components/WhyChoose";
import { Packages } from "./components/Packages";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="size-full">
      <Header />
      <Hero />
      <WhyChoose />
      <ServicesDetailed />
      <About />
      <Packages />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}