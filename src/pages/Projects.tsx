import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Healthcare & MedTech", "FinTech / Banking", "E-Commerce & Retail", "SaaS & B2B Platforms", "EdTech & E-Learning", "Real Estate & PropTech"];

  const projects = [
    {
      id: 1,
      title: "AI-Powered Patient Management System",
      category: "Healthcare & MedTech",
      description: "Comprehensive AI-powered patient management system streamlining healthcare operations with intelligent automation.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      tech: ["React", "Spring Boot", "AWS", "Docker"],
    },
    {
      id: 2,
      title: "Real-Time Banking Platform",
      category: "FinTech / Banking",
      description: "Enterprise-grade financial analytics platform with real-time portfolio monitoring and automated trading.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tech: ["React", "GraphQL", "AWS", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Omnichannel E-Commerce Platform",
      category: "E-Commerce & Retail",
      description: "High-performance e-commerce platform with AI recommendations and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    },
    {
      id: 4,
      title: "Enterprise SaaS Analytics Platform",
      category: "SaaS & B2B Platforms",
      description: "Data-driven analytics platform with 100+ integrations and AI-powered insights for enterprise clients.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tech: ["React", "Python", "PostgreSQL", "Kubernetes"],
    },
    {
      id: 5,
      title: "Interactive Learning Management System",
      category: "EdTech & E-Learning",
      description: "Comprehensive LMS combining live classes, self-paced courses, and AI-powered personalized learning paths.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      tech: ["React", "Node.js", "MongoDB", "WebRTC"],
    },
    {
      id: 6,
      title: "Smart Property Management Platform",
      category: "Real Estate & PropTech",
      description: "All-in-one property management platform with virtual tours, automated rent collection, and maintenance tracking.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of successful projects across various industries and technologies.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => setActiveCategory(category)}
                    className={activeCategory === category ? "bg-gradient-primary text-primary-foreground" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
                {filteredProjects.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.id}`}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-primary text-sm font-medium">{project.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted text-xs rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg">
                    No projects found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
