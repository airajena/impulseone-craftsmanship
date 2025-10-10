import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

export const ProjectDetail = () => {
  const { id } = useParams();

  const projectData: { [key: string]: any } = {
    "1": {
      title: "AI-Powered Patient Management System",
      category: "Healthcare & MedTech",
      tagline: "Revolutionizing healthcare delivery",
      client: "HealthTech Solutions",
      date: "January 2024",
      coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
      description: "A comprehensive AI-powered patient management system streamlining healthcare operations.",
      problem: "Healthcare providers struggled with fragmented systems and inefficient care coordination.",
      solution: "Built a modern platform using React, Spring Boot, AWS with HIPAA compliance.",
      result: "Reduced no-shows by 45%, improved satisfaction by 60%, 2,000+ monthly consultations.",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=80",
        "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&q=80",
      ],
      tech: ["React", "Spring Boot", "AWS", "Docker", "PostgreSQL"],
      features: [
        "AI-powered scheduling",
        "Secure patient records",
        "Video telemedicine",
        "HIPAA compliance",
      ],
    },
    "2": {
      title: "Real-Time Banking Platform",
      category: "FinTech / Banking",
      tagline: "Next-gen financial analytics",
      client: "FinanceFlow Ltd.",
      date: "November 2023",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      description: "Real-time financial analytics platform for institutional investors.",
      problem: "Investment managers needed unified real-time portfolio monitoring.",
      solution: "Built with React, GraphQL, AWS infrastructure.",
      result: "Managing $750M+ assets, 100K+ daily transactions, 99.99% uptime.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      ],
      tech: ["React", "GraphQL", "AWS", "PostgreSQL"],
      features: ["Real-time analytics", "Automated trading", "Custom reports"],
    },
    "3": {
      title: "Omnichannel E-Commerce",
      category: "E-Commerce & Retail",
      tagline: "Scalable commerce solution",
      client: "RetailCo Inc.",
      date: "September 2023",
      coverImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
      description: "High-performance e-commerce platform handling massive traffic.",
      problem: "Legacy system crashed during peak sales.",
      solution: "Headless commerce with React, Node.js, AWS.",
      result: "15,000+ daily orders, 70% faster, 3x revenue growth.",
      images: ["https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80"],
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      features: ["AI recommendations", "Real-time inventory", "One-click checkout"],
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
