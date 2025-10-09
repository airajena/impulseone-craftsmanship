import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Services as ServicesSection } from "@/components/home/Services";
import { TechStack } from "@/components/home/TechStack";
import { Process } from "@/components/home/Process";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ServicesSection />
        <Process />
        <TechStack />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
