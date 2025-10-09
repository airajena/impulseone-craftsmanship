import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About as AboutSection } from "@/components/home/About";
import { Team } from "@/components/home/Team";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <AboutSection />
        <WhyChooseUs />
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default About;
