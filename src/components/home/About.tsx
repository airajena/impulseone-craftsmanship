import { CheckCircle2 } from "lucide-react";

export const About = () => {
  const highlights = [
    "End-to-end development from design to deployment",
    "Scalable architecture built for growth",
    "Fast delivery without compromising quality",
    "Transparent communication throughout the project",
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  About Us
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Building Digital Excellence Since{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Day One
                </span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At ImpulseOne, we're passionate about transforming ideas into powerful digital solutions. Our team of expert developers specializes in creating robust web applications that drive business growth.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We combine cutting-edge technology with proven methodologies to deliver solutions that not only meet but exceed expectations. From startups to enterprises, we're your trusted partner in digital transformation.
              </p>
            </div>

            <div className="space-y-4 animate-fade-in-up">
              <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
                <h3 className="text-xl font-semibold mb-6">What Sets Us Apart</h3>
                <ul className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-xl shadow-card border border-border text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    100+
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-card border border-border text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    98%
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
