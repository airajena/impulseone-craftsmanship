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

  const categories = ["All", "SaaS", "E-commerce", "FinTech", "Healthcare", "Real Estate"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "E-commerce",
      description: "Modern online shopping platform with advanced filtering, payment integration, and inventory management.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    },
    {
      id: 2,
      title: "FinTech Dashboard",
      category: "FinTech",
      description: "Real-time financial analytics dashboard with data visualization and portfolio management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tech: ["React", "TypeScript", "GraphQL", "AWS"],
    },
    {
      id: 3,
      title: "Healthcare Portal",
      category: "Healthcare",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine features.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      tech: ["Vue.js", "Spring Boot", "MySQL", "Docker"],
    },
    {
      id: 4,
      title: "SaaS Analytics Tool",
      category: "SaaS",
      description: "Comprehensive analytics platform with custom reporting, user tracking, and API integrations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tech: ["Next.js", "Node.js", "MongoDB", "Redis"],
    },
    {
      id: 5,
      title: "Real Estate Platform",
      category: "Real Estate",
      description: "Property listing and management platform with virtual tours, mortgage calculator, and CRM.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      tech: ["React", "Express", "PostgreSQL", "AWS S3"],
    },
    {
      id: 6,
      title: "CRM Solution",
      category: "SaaS",
      description: "Customer relationship management tool with sales pipeline, email automation, and reporting.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      tech: ["Angular", "Java", "Spring Boot", "Kubernetes"],
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
