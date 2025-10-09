import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

export const ProjectDetail = () => {
  const { id } = useParams();

  const projectData: { [key: string]: any } = {
    "1": {
      title: "E-Commerce Platform",
      category: "E-commerce",
      client: "RetailCo Inc.",
      date: "January 2024",
      description: "A comprehensive e-commerce solution designed to handle high-traffic shopping experiences with advanced features for both customers and administrators.",
      problem: "The client needed a scalable online store that could handle thousands of concurrent users during peak sales periods, with a seamless shopping experience and robust admin tools.",
      solution: "We built a modern e-commerce platform using React for the frontend, Node.js for the backend, and PostgreSQL for data management. Implemented Redis for caching, Stripe for payments, and AWS for hosting and CDN.",
      result: "The platform now handles 10,000+ daily orders, reduced page load times by 60%, and increased conversion rates by 35%. The client reported a 2x increase in revenue within the first quarter.",
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS", "Docker"],
      features: [
        "Advanced product filtering and search",
        "Real-time inventory management",
        "Secure payment processing with Stripe",
        "Admin dashboard with analytics",
        "Responsive mobile-first design",
        "Email notifications and order tracking",
      ],
    },
    "2": {
      title: "FinTech Dashboard",
      category: "FinTech",
      client: "FinanceFlow Ltd.",
      date: "November 2023",
      description: "A real-time financial analytics dashboard providing comprehensive insights into portfolio performance, market trends, and investment opportunities.",
      problem: "Investment managers needed a centralized platform to monitor multiple portfolios, analyze market data in real-time, and generate custom reports for clients.",
      solution: "Developed a sophisticated dashboard using React with TypeScript, GraphQL for efficient data fetching, and AWS for infrastructure. Integrated real-time market data APIs and implemented advanced charting with custom visualizations.",
      result: "Reduced report generation time from hours to minutes, enabled real-time portfolio monitoring, and improved client satisfaction scores by 45%. The platform now manages $500M+ in assets.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=80",
      ],
      tech: ["React", "TypeScript", "GraphQL", "AWS", "PostgreSQL", "Redis", "D3.js"],
      features: [
        "Real-time market data integration",
        "Custom portfolio analytics",
        "Interactive data visualizations",
        "Automated report generation",
        "Multi-user access controls",
        "Mobile-responsive interface",
      ],
    },
    "3": {
      title: "Healthcare Portal",
      category: "Healthcare",
      client: "HealthTech Solutions",
      date: "September 2023",
      description: "A comprehensive patient management system streamlining healthcare delivery with appointment scheduling, medical records, and telemedicine capabilities.",
      problem: "Healthcare providers needed a HIPAA-compliant platform to manage patient records, enable remote consultations, and improve appointment scheduling efficiency.",
      solution: "Built a secure healthcare portal using Vue.js, Spring Boot, and MySQL, with end-to-end encryption for patient data. Integrated video conferencing for telemedicine and implemented automated appointment reminders.",
      result: "Reduced appointment no-shows by 40%, improved patient satisfaction by 50%, and enabled 1,000+ successful remote consultations monthly. Achieved full HIPAA compliance.",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=80",
        "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&q=80",
      ],
      tech: ["Vue.js", "Spring Boot", "MySQL", "Docker", "WebRTC", "AWS", "Redis"],
      features: [
        "Secure patient record management",
        "Video telemedicine consultations",
        "Appointment scheduling system",
        "Prescription management",
        "HIPAA-compliant data encryption",
        "Patient portal with mobile app",
      ],
    },
  };

  const project = projectData[id || "1"];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-12 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Button asChild variant="ghost" className="mb-6">
                <Link to="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Link>
              </Button>
              
              <div className="space-y-4 animate-fade-in">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div>
                    <span className="font-medium">Client:</span> {project.client}
                  </div>
                  <div>
                    <span className="font-medium">Completed:</span> {project.date}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div className="space-y-4 animate-fade-in">
                    <h2 className="text-2xl font-bold">Project Overview</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 animate-fade-in-up">
                    {project.images.map((image: string, index: number) => (
                      <div
                        key={index}
                        className={`rounded-2xl overflow-hidden ${index === 0 ? "md:col-span-2" : ""}`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 animate-fade-in">
                    <h2 className="text-2xl font-bold">The Challenge</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="space-y-4 animate-fade-in">
                    <h2 className="text-2xl font-bold">Our Solution</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div className="space-y-4 animate-fade-in">
                    <h2 className="text-2xl font-bold">The Results</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-2xl shadow-card border border-border sticky top-24 space-y-6">
                    <div>
                      <h3 className="font-semibold mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {project.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted text-sm rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
                      asChild
                    >
                      <Link to="/#contact">
                        Start Your Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
