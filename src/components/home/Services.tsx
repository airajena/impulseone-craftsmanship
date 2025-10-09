import { Globe, Server, Cloud, Palette, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web & Mobile App Development",
      description: "Custom web and mobile applications built with modern frameworks and best practices for optimal performance.",
    },
    {
      icon: Server,
      title: "Backend & Infrastructure Solutions",
      description: "Robust backend architectures with scalable APIs, databases, and microservices designed for growth.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Services",
      description: "Cloud migration, containerization, CI/CD pipelines, and infrastructure automation for seamless deployments.",
    },
    {
      icon: Palette,
      title: "UI/UX & Frontend Engineering",
      description: "Beautiful, responsive interfaces with exceptional user experiences that drive engagement and conversions.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security implementations, vulnerability assessments, and compliance consulting.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed optimization, code refactoring, and performance audits to ensure lightning-fast applications.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Comprehensive Software Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From initial concept to final deployment, we provide end-to-end services to bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border bg-card"
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
