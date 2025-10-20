import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Globe, Server, Cloud, Palette, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const services = [
  { icon: Globe, label: "Web Apps", color: "text-primary" },
  { icon: Server, label: "Backend & Infrastructure", color: "text-accent" },
  { icon: Cloud, label: "Cloud & DevOps", color: "text-primary" },
  { icon: Palette, label: "UI/UX", color: "text-accent" },
  { icon: Shield, label: "Security", color: "text-primary" },
];

const rotatingKeywords = [
  "scalable SaaS",
  "secure fintech apps",
  "global e-commerce",
  "modern web apps",
];

export const Hero = () => {
  const [currentKeyword, setCurrentKeyword] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % rotatingKeywords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Premium Gradient Background with Glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Status badge */}
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </span>
          </div>

          {/* Main headline with rotating keyword */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="block mb-4">End-to-End Software Solutions</span>
              <span className="block">for{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent inline-block">
                  Web & Infrastructure
                </span>
              </span>
            </h1>

            <div className="flex items-center justify-center gap-2 text-lg md:text-xl text-muted-foreground h-8">
              <span>We build</span>
              <span className="inline-block min-w-[280px] text-left">
                <span className="font-semibold bg-gradient-primary bg-clip-text text-transparent transition-all duration-500">
                  {rotatingKeywords[currentKeyword]}
                </span>
              </span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We design, build, and scale modern web applications with expertise in frontend, backend, and infrastructure.
            </p>
          </div>

          {/* Service icons in premium circular layout */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 py-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {services.map((service, index) => (
              <div
                key={service.label}
                className="group relative"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-glow cursor-pointer">
                  <div className={`${service.color} transition-transform duration-300 group-hover:scale-110`}>
                    <service.icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <span className="text-xs md:text-sm font-medium whitespace-nowrap">{service.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Premium CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow group text-base px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary/30 bg-background/50 backdrop-blur-sm text-base px-8 py-6 text-lg font-semibold hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Get a Free Consultation
              </Link>
            </Button>
          </div>

          {/* Trust indicators / Stats */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 md:gap-12 text-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">100+</span>
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">Projects Delivered</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
                <span className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">50+</span>
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">Happy Clients</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
                <span className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">5+</span>
              </div>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">Years Experience</span>
            </div>
          </div>

          {/* Trusted by tech stack */}
          <div className="pt-8 space-y-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Powered by modern tech</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-xl font-semibold">React</span>
              <span className="text-xl font-semibold">Node.js</span>
              <span className="text-xl font-semibold">AWS</span>
              <span className="text-xl font-semibold">Docker</span>
              <span className="text-xl font-semibold">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />
    </section>
  );
};
