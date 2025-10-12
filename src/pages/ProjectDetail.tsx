import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, CheckCircle2, Github, Globe, TrendingUp, Users, Clock, Award, ArrowRight, Code2, Layers, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

export const ProjectDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectData: { [key: string]: any } = {
    "1": {
      title: "AI-Powered Patient Management System",
      category: "Healthcare & MedTech",
      tagline: "Revolutionizing healthcare delivery with intelligent automation",
      client: "HealthTech Solutions",
      date: "January 2025",
      duration: "6 months",
      role: "Full-Stack Development & Infrastructure",
      coverImage: "https://images.unsplash.com/photo-1576091160399-112e8d25bd10?w=1920&q=90",
      description: "A comprehensive AI-powered patient management system that streamlines healthcare operations, improves patient outcomes, and reduces administrative overhead through intelligent automation and data-driven insights.",
      problem: "Healthcare providers were struggling with fragmented systems, inefficient appointment scheduling, and poor patient coordination. Patient no-shows reached 40% during peak times, and medical staff spent over 50% of their time on administrative tasks instead of patient care. The existing legacy systems couldn't scale, had no mobile access, and lacked any form of intelligent automation.",
      solution: "We built a unified, cloud-native platform using React for the frontend, Spring Boot for microservices architecture, and AWS infrastructure with full HIPAA compliance. The system features AI-powered scheduling that predicts no-shows using machine learning, automated patient reminders via SMS/email, integrated telemedicine capabilities with HD video, and a centralized electronic health records system with role-based access control. We implemented real-time data synchronization, offline-first mobile apps, and automated insurance verification.",
      result: "Within 3 months of deployment, the platform reduced patient no-shows by 45%, improved patient satisfaction scores by 60%, and enabled over 2,000 monthly virtual consultations. Administrative time was reduced by 35%, allowing medical staff to focus on patient care. The system now handles 50,000+ patient records across 15+ clinics with 99.9% uptime.",
      liveUrl: "https://healthtech-demo.com",
      githubUrl: null,
      images: [
        "https://images.unsplash.com/photo-1576091160399-112e8d25bd10?w=1920&q=90",
        "https://images.unsplash.com/photo-1584820927498-cfe8d1e5fd25?w=1200&q=80",
        "https://images.unsplash.com/photo-1631815588000-b6c8f10ebad6?w=1200&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80",
      ],
      tech: ["React", "TypeScript", "Spring Boot", "AWS", "Docker", "PostgreSQL", "Redis", "Kubernetes", "TensorFlow"],
      features: [
        { 
          title: "AI-Powered Scheduling", 
          description: "Machine learning algorithms predict no-shows and optimize appointment slots based on historical data and patient behavior patterns",
          icon: Cpu
        },
        { 
          title: "Secure Patient Records", 
          description: "HIPAA-compliant electronic health records with end-to-end encryption and role-based access control",
          icon: Code2
        },
        { 
          title: "Video Telemedicine", 
          description: "Integrated HD video consultation platform with real-time health monitoring and digital prescriptions",
          icon: Layers
        },
        { 
          title: "Automated Reminders", 
          description: "Multi-channel patient reminders via SMS, email, and push notifications with smart delivery timing",
          icon: CheckCircle2
        },
      ],
      metrics: [
        { label: "No-Show Reduction", value: "45%", icon: TrendingUp, color: "text-green-500" },
        { label: "Patient Satisfaction", value: "60%", icon: Users, color: "text-blue-500" },
        { label: "Time Saved", value: "35%", icon: Clock, color: "text-purple-500" },
        { label: "Monthly Consultations", value: "2,000+", icon: Award, color: "text-orange-500" },
      ],
      testimonial: {
        quote: "This platform transformed how we deliver care. Our patients are happier, our staff is more efficient, and we can now focus on what truly matters - providing excellent healthcare. The AI-powered scheduling alone has saved us countless hours.",
        author: "Dr. Sarah Mitchell",
        role: "Chief Medical Officer, HealthTech Solutions",
        avatar: "https://images.unsplash.com/photo-1559839734-2b71ea8b3fc5?w=150&q=80"
      }
    },
    "2": {
      title: "Real-Time Banking Platform",
      category: "FinTech / Banking",
      tagline: "Next-generation financial intelligence for institutional investors",
      client: "FinanceFlow Ltd.",
      date: "January 2025",
      duration: "8 months",
      role: "Full-Stack Development & Infrastructure",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f23?w=1920&q=90",
      description: "A sophisticated real-time financial analytics platform designed for institutional investors, featuring advanced risk modeling, portfolio optimization, and automated trading capabilities.",
      problem: "Investment firms were struggling with fragmented data sources, delayed market insights, and manual portfolio rebalancing. Their legacy systems couldn't handle real-time data processing, leading to missed opportunities and increased risk exposure. Trading decisions were based on outdated information, and risk analysis took hours instead of seconds.",
      solution: "We built a high-performance platform using React for the frontend, GraphQL for efficient data queries, and AWS infrastructure for scalability. The system features real-time market data streaming, advanced analytics dashboards with customizable widgets, automated portfolio rebalancing algorithms, and sophisticated risk modeling using machine learning. We implemented WebSocket connections for live updates and optimized database queries for sub-second response times.",
      result: "The platform now manages over $750M in assets across multiple asset classes with 99.99% uptime. It processes 100,000+ daily transactions and provides institutional investors with real-time risk analysis and automated trading recommendations. Portfolio rebalancing time was reduced from hours to minutes, and risk detection improved by 60%.",
      liveUrl: "https://financetech-demo.com",
      githubUrl: null,
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f25?w=1920&q=90",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52e?w=1200&q=80",
      ],
      tech: ["React", "TypeScript", "GraphQL", "AWS", "PostgreSQL", "Redis", "Docker", "Python", "TensorFlow"],
      features: [
        { title: "Real-Time Analytics", description: "Live market data with millisecond latency and customizable dashboards", icon: TrendingUp },
        { title: "Automated Trading", description: "AI-powered trading algorithms with risk management and compliance checks", icon: Cpu },
        { title: "Portfolio Optimization", description: "Machine learning-based portfolio rebalancing and asset allocation", icon: Layers },
        { title: "Risk Modeling", description: "Advanced risk analysis with stress testing and scenario planning", icon: Code2 },
      ],
      metrics: [
        { label: "Assets Managed", value: "$750M+", icon: TrendingUp, color: "text-green-500" },
        { label: "Daily Transactions", value: "100K+", icon: Users, color: "text-blue-500" },
        { label: "System Uptime", value: "99.99%", icon: Award, color: "text-purple-500" },
        { label: "Risk Detection", value: "+60%", icon: Clock, color: "text-orange-500" },
      ],
      testimonial: {
        quote: "This platform has revolutionized our investment strategy. We can now monitor our entire portfolio in real-time, identify emerging risks instantly, and make data-driven decisions that were previously impossible.",
        author: "Michael Chen",
        role: "Head of Portfolio Management, FinanceFlow Ltd.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1bd7228f2d?w=150&q=80"
      }
    },
    "3": {
      title: "AI-Powered E-Commerce Platform",
      category: "E-Commerce & Retail",
      tagline: "Intelligent commerce with personalized shopping experiences",
      client: "RetailCo Inc.",
      date: "January 2025",
      duration: "5 months",
      role: "Full-Stack Development & Infrastructure",
      coverImage: "https://images.unsplash.com/photo-1557821552-17a5e45c?w=1920&q=90",
      description: "A high-performance omnichannel e-commerce platform with AI-driven personalization, real-time inventory management, and seamless checkout experience.",
      problem: "The client's legacy e-commerce system crashed during peak sales events, couldn't handle traffic spikes, and provided a generic shopping experience. Cart abandonment rates were at 70%, mobile conversion was poor, and the backend couldn't synchronize inventory across channels. Customer support was overwhelmed with order tracking inquiries.",
      solution: "We built a headless commerce architecture using React for the frontend, Node.js microservices for the backend, and AWS for scalability. The system features AI-powered product recommendations using collaborative filtering, personalized marketing campaigns, real-time inventory synchronization across all channels, one-click checkout with multiple payment options, and an intelligent order tracking system.",
      result: "The platform now handles 15,000+ daily orders with 99.9% uptime. Checkout time reduced by 70%, cart abandonment dropped to 35%, and revenue increased by 3x within 6 months. The AI recommendation engine contributed to a 40% increase in average order value, and customer satisfaction scores improved by 55%.",
      liveUrl: "https://retailtech-demo.com",
      githubUrl: null,
      images: [
        "https://images.unsplash.com/photo-1557821552-17a3e2ba9c05?w=1920&q=90",
        "https://images.unsplash.com/photo-1472851413f5-b4d3b5b2a4e8?w=1200&q=80",
      ],
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker", "AWS", "TensorFlow"],
      features: [
        { title: "AI Recommendations", description: "Personalized product suggestions based on browsing behavior and purchase history", icon: Cpu },
        { title: "Real-Time Inventory", description: "Synchronized stock levels across all sales channels with instant updates", icon: Layers },
        { title: "One-Click Checkout", description: "Streamlined payment flow with saved payment methods and auto-fill", icon: CheckCircle2 },
        { title: "Omnichannel Integration", description: "Seamless shopping experience across web, mobile, and physical stores", icon: Code2 },
      ],
      metrics: [
        { label: "Daily Orders", value: "15K+", icon: Users, color: "text-blue-500" },
        { label: "Checkout Speed", value: "70% Faster", icon: Clock, color: "text-purple-500" },
        { label: "Revenue Growth", value: "3x", icon: TrendingUp, color: "text-green-500" },
        { label: "AOV Increase", value: "+40%", icon: Award, color: "text-orange-500" },
      ],
      testimonial: {
        quote: "The AI-powered personalization has transformed our business. Our customers are more engaged, conversion rates have skyrocketed, and we've seen unprecedented growth in revenue. The platform handles our biggest sales events without breaking a sweat.",
        author: "Lisa Park",
        role: "CEO, RetailCo Inc.",
        avatar: "https://images.unsplash.com/photo-1438761245-08d5b6cd89a6?w=150&q=80"
      }
    },
    "4": {
      title: "Enterprise SaaS Platform",
      category: "SaaS & B2B Platforms",
      tagline: "Scalable enterprise solutions for modern businesses",
      client: "TechCorp Solutions",
      date: "January 2025",
      duration: "10 months",
      role: "Full-Stack Development & Infrastructure",
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52e?w=1920&q=90",
      description: "An enterprise-grade SaaS platform with advanced analytics, team collaboration tools, and seamless integrations for modern businesses.",
      problem: "Enterprise clients faced fragmented systems, data silos, and inefficient workflows. Their legacy tools couldn't scale, lacked modern collaboration features, and required extensive IT resources to maintain. Teams spent hours on manual tasks that could be automated, and there was no single source of truth for business data.",
      solution: "We built a multi-tenant SaaS platform using React for the frontend, Spring Boot microservices for the backend, and AWS infrastructure for scalability. The system features role-based access control, real-time analytics dashboards, third-party integrations via REST APIs, automated workflow builder, team collaboration tools, and enterprise-grade security with SSO support.",
      result: "The platform now serves 500+ enterprise clients, processing 50M+ API requests daily with 99.95% uptime. Clients report 50% improvement in operational efficiency, 40% reduction in manual tasks, and 60% faster time-to-insight. The platform has processed $2B+ in transaction value.",
      liveUrl: "https://techcorp-demo.com",
      githubUrl: null,
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52e?w=1920&q=90",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f25?w=1200&q=80",
      ],
      tech: ["React", "TypeScript", "Spring Boot", "AWS", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      features: [
        { title: "Real-Time Analytics", description: "Customizable dashboards with live data visualization and advanced reporting", icon: TrendingUp },
        { title: "Team Collaboration", description: "Built-in chat, video calls, and project management tools", icon: Users },
        { title: "API Integrations", description: "Connect with 100+ third-party tools and services via REST/GraphQL", icon: Code2 },
        { title: "Workflow Automation", description: "No-code workflow builder with conditional logic and triggers", icon: Cpu },
      ],
      metrics: [
        { label: "Enterprise Clients", value: "500+", icon: Users, color: "text-blue-500" },
        { label: "Daily API Requests", value: "50M+", icon: TrendingUp, color: "text-green-500" },
        { label: "System Uptime", value: "99.95%", icon: Award, color: "text-purple-500" },
        { label: "Efficiency Gain", value: "+50%", icon: Clock, color: "text-orange-500" },
      ],
      testimonial: {
        quote: "This platform has revolutionized how we work. Everything we need is in one place, the automation features have saved us countless hours, and our team collaboration has never been better. It's the backbone of our operations.",
        author: "James Rodriguez",
        role: "CTO, TechCorp Solutions",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80"
      }
    },
    "5": {
      title: "Interactive Learning Platform",
      category: "EdTech & E-Learning",
      tagline: "Personalized education powered by AI and gamification",
      client: "EduTech Global",
      date: "January 2025",
      duration: "7 months",
      role: "Full-Stack Development & Infrastructure",
      coverImage: "https://images.unsplash.com/photo-1501-c82-1efd65-d42e5f?w=1920&q=90",
      description: "A comprehensive e-learning platform with AI-powered personalized learning paths, interactive content, and real-time student analytics.",
      problem: "Traditional online learning platforms had poor engagement rates, lacked personalization, and couldn't effectively track student progress. Teachers spent countless hours on manual grading, had limited insights into student performance, and couldn't identify struggling students early enough to intervene.",
      solution: "We built an adaptive learning platform using React for the frontend, Node.js for the backend, and AWS infrastructure. The system features AI-powered personalized learning paths that adapt to each student's pace and style, interactive video lessons with embedded quizzes, gamification with points and badges, real-time progress tracking, automated assessments with instant feedback, and comprehensive teacher analytics dashboards.",
      result: "The platform now serves 50,000+ active students across 100+ courses with an 85% completion rate (vs 30% industry average). Student engagement increased by 70%, teacher grading time reduced by 60%, and student performance scores improved by 45% on average.",
      liveUrl: "https://edutech-demo.com",
      githubUrl: null,
      images: [
        "https://images.unsplash.com/photo-1501-c82-1efd65-d42e5f?w=1920&q=90",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
      ],
      tech: ["React", "TypeScript", "Node.js", "AWS", "MongoDB", "Redis", "Docker", "TensorFlow"],
      features: [
        { title: "AI Learning Paths", description: "Personalized course recommendations based on learning style and progress", icon: Cpu },
        { title: "Interactive Content", description: "Video lessons with quizzes, coding challenges, and simulations", icon: Layers },
        { title: "Gamification", description: "Points, badges, and leaderboards to boost student engagement", icon: Award },
        { title: "Real-Time Analytics", description: "Track student progress and identify learning gaps instantly", icon: TrendingUp },
      ],
      metrics: [
        { label: "Active Students", value: "50K+", icon: Users, color: "text-blue-500" },
        { label: "Course Completion", value: "85%", icon: Award, color: "text-green-500" },
        { label: "Engagement Boost", value: "+70%", icon: TrendingUp, color: "text-purple-500" },
        { label: "Teacher Time Saved", value: "60%", icon: Clock, color: "text-orange-500" },
      ],
      testimonial: {
        quote: "This platform has transformed online education. Students are more engaged, teachers have better insights, and learning outcomes have improved dramatically. The AI-powered personalization makes every student feel like they have a private tutor.",
        author: "Dr. Emily Watson",
        role: "Head of Curriculum, EduTech Global",
        avatar: "https://images.unsplash.com/photo-1494790632-8a8553f6-150&q=80"
      }
    },
    "6": {
      title: "Smart Property Management",
      category: "Real Estate & PropTech",
      tagline: "Modern property management with AI-powered insights",
      client: "PropTech Solutions",
      date: "January 2025",
      duration: "6 months",
      role: "Full-Stack Development & Infrastructure",
      coverImage: "https://images.unsplash.com/photo-1560518883-ce09f5ba0e1e?w=1920&q=90",
      description: "A comprehensive property management platform with AI-powered property valuation, virtual tours, tenant screening, and maintenance automation.",
      problem: "Property managers struggled with manual processes, inefficient tenant screening, delayed maintenance requests, and lack of market insights. Their legacy systems couldn't handle the complexity of managing multiple properties, and they had no way to predict market trends or optimize pricing strategies.",
      solution: "We built a cloud-native platform using React for the frontend, Node.js for the backend, and AWS infrastructure. The system features AI-powered property valuation using market data, 3D virtual tours with VR support, automated tenant screening with credit and background checks, smart maintenance scheduling with vendor management, and real-time market analytics for pricing optimization.",
      result: "The platform now manages 5,000+ properties across 20+ cities with 99.9% uptime. Property managers report 50% reduction in vacancy rates, 40% faster tenant placement, 60% improvement in maintenance response time, and 30% increase in rental income through optimized pricing.",
      liveUrl: "https://proptech-demo.com",
      githubUrl: null,
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09f5ba0e1e?w=1920&q=90",
        "https://images.unsplash.com/photo-1582416-c-ba8b-bd83e?w=1200&q=80",
      ],
      tech: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL", "Redis", "Docker", "Python", "TensorFlow"],
      features: [
        { title: "AI Property Valuation", description: "Machine learning-based price predictions using market data and trends", icon: TrendingUp },
        { title: "Virtual Tours", description: "360° property tours with VR support and interactive floor plans", icon: Layers },
        { title: "Smart Screening", description: "Automated tenant background and credit checks with risk scoring", icon: CheckCircle2 },
        { title: "Maintenance Automation", description: "Smart scheduling, vendor management, and predictive maintenance", icon: Cpu },
      ],
      metrics: [
        { label: "Properties Managed", value: "5K+", icon: Users, color: "text-blue-500" },
        { label: "Vacancy Reduction", value: "50%", icon: TrendingUp, color: "text-green-500" },
        { label: "Faster Placement", value: "40%", icon: Clock, color: "text-purple-500" },
        { label: "Maintenance Speed", value: "+60%", icon: Award, color: "text-orange-500" },
      ],
      testimonial: {
        quote: "This platform has completely transformed how we manage properties. Everything is automated, tenants are happier, maintenance is faster, and our vacancy rates have never been lower. The AI-powered pricing has significantly increased our revenue.",
        author: "David Martinez",
        role: "CEO, PropTech Solutions",
        avatar: "https://images.unsplash.com/photo-1507003211271-08dec5a1f5e7?w=150&q=80"
      }
    },
  };

  const project = projectData[id || "1"];

  const relatedProjects = Object.keys(projectData)
    .filter(key => key !== id)
    .slice(0, 3)
    .map(key => ({
      id: key,
      ...projectData[key]
    }));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center space-y-4 p-8">
            <h1 className="text-4xl font-bold">Project Not Found</h1>
            <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
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
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
        <div 
          className="h-full bg-gradient-primary transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section - Full Screen */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.coverImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center space-y-6 animate-fade-in">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium transition-all mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
            
            <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm font-semibold border border-primary/30">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              {project.tagline}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm">
              <span>Client: {project.client}</span>
              <span>•</span>
              <span>Duration: {project.duration}</span>
              <span>•</span>
              <span>{project.date}</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              {project.liveUrl && (
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  <Globe className="mr-2 h-5 w-5" />
                  View Live Project
                </Button>
              )}
              {project.githubUrl && (
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Github className="mr-2 h-5 w-5" />
                  View Code
                </Button>
              )}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Project Overview</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {project.metrics.map((metric: any, index: number) => (
                  <div 
                    key={index}
                    className="text-center space-y-3 p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <metric.icon className={`w-10 h-10 mx-auto ${metric.color}`} />
                    <div className="text-4xl font-bold">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Our Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Key Features</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Powerful capabilities that drive real results
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {project.features.map((feature: any, index: number) => (
                  <div 
                    key={index}
                    className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Technology Stack</h2>
                <p className="text-lg text-muted-foreground">
                  Built with industry-leading technologies
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {project.tech.map((tech: string) => (
                  <div
                    key={tech}
                    className="px-6 py-3 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Project Gallery</h2>
                <p className="text-lg text-muted-foreground">
                  A glimpse into the final product
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.map((image: string, index: number) => (
                  <div 
                    key={index}
                    className={`relative overflow-hidden rounded-2xl ${index === 0 ? 'md:col-span-2' : ''} group cursor-pointer`}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">The Results</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {project.testimonial && (
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="relative p-12 bg-card rounded-3xl border border-border shadow-xl">
                  <div className="absolute top-8 left-8 text-6xl text-primary/20">"</div>
                  <div className="relative space-y-6">
                    <p className="text-xl md:text-2xl leading-relaxed text-foreground italic">
                      {project.testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                      <img 
                        src={project.testimonial.avatar}
                        alt={project.testimonial.author}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                      />
                      <div>
                        <div className="font-semibold text-lg">{project.testimonial.author}</div>
                        <div className="text-muted-foreground">{project.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Related Projects</h2>
                <p className="text-lg text-muted-foreground">
                  Explore more of our work
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedProjects.map((relProject: any) => (
                  <Link
                    key={relProject.id}
                    to={`/projects/${relProject.id}`}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={relProject.coverImage}
                        alt={relProject.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full font-medium">
                          {relProject.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {relProject.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relProject.tagline}
                      </p>
                      <div className="flex items-center text-primary text-sm font-medium pt-2">
                        View Project
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 bg-gradient-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHBedmNpPjxzdmdnbPjxzdH0Rnc3ZnPjxlG==NG')] opacity-10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Like What You See?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Let's build something amazing together. Transform your vision into reality with our expert team.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-2xl"
                  asChild
                >
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/projects">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    View All Projects
                  </Link>
                </Button>
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