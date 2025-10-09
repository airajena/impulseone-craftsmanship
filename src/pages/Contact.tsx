import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact as ContactSection } from "@/components/home/Contact";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
