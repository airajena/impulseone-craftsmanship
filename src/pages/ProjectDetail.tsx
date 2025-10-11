import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, CheckCircle2, Github, Globe, TrendingUp, Users, Clock, Award } from "lucide-react";
import { useState } from "react";

export const ProjectDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  const projectData: { [key: string]: any } = {
    "1": {
      title: "AI-Powered Patient Management System",
      category: "Healthcare & MedTech",
      tagline: "Revolutionizing healthcare delivery with intelligent patient care",
      client: "HealthTech Solutions",
      date: "January 2024",
      duration: "6 months",
      role: "Full-Stack Development & Infrastructure",
      coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
      description: "A comprehensive AI-powered patient management system that streamlines healthcare operations, improves patient outcomes, and reduces administrative overhead through intelligent automation and data-driven insights.",
      problem: "Healthcare providers were struggling with fragmented systems, inefficient appointment scheduling, and poor care coordination. Patient no-show rates were at 30%, and staff spent 40% of their time on administrative tasks instead of patient care.",
      solution: "We built a unified, cloud-native platform using React for the frontend, Spring Boot for microservices architecture, and AWS infrastructure with HIPAA compliance. The system features AI-powered scheduling that predicts no-shows, automated patient reminders, integrated telemedicine capabilities, and a centralized electronic health records system.",
      result: "Within 3 months of deployment, the platform reduced patient no-shows by 45%, improved patient satisfaction scores by 60%, and enabled over 2,000 monthly virtual consultations. Administrative time was reduced by 35%, allowing staff to focus more on patient care.",
      liveUrl: "https://healthtech-demo.com",
      githubUrl: null,
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=80",
        "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80",
      ],
      tech: ["React", "TypeScript", "Spring Boot", "AWS", "Docker", "PostgreSQL", "Redis", "Kubernetes"],
      features: [
        { title: "AI-Powered Scheduling", description: "Machine learning algorithms predict no-shows and optimize appointment slots" },
        { title: "Secure Patient Records", description: "HIPAA-compliant electronic health records with role-based access control" },
        { title: "Video Telemedicine", description: "Integrated video consultation platform with real-time health monitoring" },
        { title: "Automated Reminders", description: "Multi-channel patient reminders via SMS, email, and push notifications" },
      ],
      metrics: [
        { label: "No-Show Reduction", value: "45%", icon: TrendingUp },
        { label: "Patient Satisfaction", value: "60%", icon: Users },
        { label: "Time Saved", value: "35%", icon: Clock },
        { label: "Monthly Consultations", value: "2,000+", icon: Award },
      ],
      testimonial: {
        quote: "This platform transformed how we deliver care. Our patients are happier, our staff is more efficient, and we can now focus on what truly matters - providing excellent healthcare.",
        author: "Dr. Sarah Mitchell",
        role: "Chief Medical Officer, HealthTech Solutions",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&q=80"
      }
    },
    "2": {
      title: "Real-Time Banking Platform",
      category: "FinTech / Banking",
      tagline: "Next-gen financial analytics for institutional investors",
      client: "FinanceFlow Ltd.",
      date: "November 2023",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      description: "Real-time financial analytics platform for institutional investors with advanced risk modeling and portfolio optimization capabilities.",
      problem: "Investment managers needed a unified, real-time system to monitor complex portfolios across multiple asset classes with sophisticated risk analysis.",
      solution: "Built with React, GraphQL, and AWS infrastructure, featuring real-time data streaming, advanced analytics dashboards, and automated portfolio rebalancing algorithms.",
      result: "Managing $750M+ assets with 99.99% uptime, processing 100K+ daily transactions, and providing institutional investors with real-time risk insights and automated trading recommendations.",
      liveUrl: "https://financetech-demo.com",
      githubUrl: null,
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      ],
      tech: ["React", "GraphQL", "AWS", "PostgreSQL", "Redis", "Docker"],
      features: ["Real-time analytics", "Automated trading", "Custom reports", "Risk modeling", "Portfolio optimization"],
      metrics: [
        { label: "Assets Managed", value: "$750M+", icon: Globe },
        { label: "Daily Transactions", value: "100K+", icon: Users },
        { label: "Uptime", value: "99.99%", icon: Award },
        { label: "Risk Analysis", value: "Real-time", icon: TrendingUp },
      ],
      testimonial: {
        quote: "This platform has revolutionized our investment strategy. We can now monitor our entire portfolio in real-time, identify emerging risks instantly, and make data-driven decisions that were previously impossible.",
        author: "Michael Chen",
        role: "Head of Portfolio Management, FinanceFlow Ltd.",
        avatar: "https://images.unsplash.com/photo-1581411250752-113311111111?w=150&q=80"
      }
    },
    "3": {
      title: "Omnichannel E-Commerce",
      category: "E-Commerce & Retail",
      tagline: "Scalable commerce solution with AI-powered personalization",
      client: "RetailCo Inc.",
      date: "September 2023",
      coverImage: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
      description: "High-performance e-commerce platform handling massive traffic with AI-driven personalization and omnichannel integration.",
      problem: "Legacy system crashed during peak sales events, and customer experience was inconsistent across channels.",
      solution: "Headless commerce architecture with React, Node.js, and AWS, featuring AI-powered product recommendations, personalized marketing, and seamless omnichannel experiences.",
      result: "15,000+ daily orders, 70% faster checkout, 3x revenue growth, and 40% increase in average order value through personalized recommendations.",
      liveUrl: "https://retailtech-demo.com",
      githubUrl: null,
      images: ["https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80"],
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
      features: ["AI recommendations", "Real-time inventory", "One-click checkout", "Personalized marketing", "Omnichannel integration"],
      metrics: [
        { label: "Daily Orders", value: "15,000+", icon: Users },
        { label: "Checkout Speed", value: "70% faster", icon: Clock },
        { label: "Revenue Growth", value: "3x", icon: TrendingUp },
        { label: "AOV", value: "40% increase", icon: Award },
      ],
      testimonial: {
        quote: "The AI-powered personalization has transformed our business. Our customers are more engaged, our conversion rates have skyrocketed, and we've seen unprecedented growth in revenue.",
        author: "Lisa Park",
        role: "CEO, RetailCo Inc.",
        avatar: "https://images.unsplash.com/photo-1581411250752-113311111111?w=150&q=80"
      }
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
                  {project.duration && (
                    <div>
                      <span className="font-medium">Duration:</span> {project.duration}
                    </div>
                  )}
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
                        {project.features.map((feature: any, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature.title}</span>
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
