import { Header } from "@/components/Header";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { Portfolio } from "@/components/home/Portfolio";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { TechStack } from "@/components/home/TechStack";
import { Team } from "@/components/home/Team";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <TechStack />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
