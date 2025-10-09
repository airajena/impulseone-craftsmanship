import { Search, Palette, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We analyze your requirements, goals, and target audience to create a solid foundation.",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating intuitive interfaces and user experiences that align with your brand.",
    },
    {
      icon: Code,
      title: "Development",
      description: "Building robust, scalable solutions using cutting-edge technologies and best practices.",
    },
    {
      icon: TestTube,
      title: "Quality Assurance",
      description: "Rigorous testing to ensure flawless performance across all devices and scenarios.",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Smooth deployment and go-live process with minimal disruption to your operations.",
    },
    {
      icon: HeadphonesIcon,
      title: "Support",
      description: "Ongoing maintenance, updates, and support to keep your application running perfectly.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that ensures quality delivery, transparent communication, and successful outcomes.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-20" />

            <div className="space-y-8 md:space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`flex items-center gap-8 animate-fade-in-up ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                      <div className="bg-card p-6 rounded-2xl shadow-card border border-border hover:shadow-glow transition-all duration-300">
                        <div className={`flex items-center gap-4 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                          <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground font-bold text-lg flex-shrink-0 shadow-glow">
                      {index + 1}
                    </div>

                    <div className="flex-1 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
