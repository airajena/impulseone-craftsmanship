import { Rocket, TrendingUp, DollarSign, Users } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Rocket,
      title: "End-to-End Development",
      description: "From design and development to deployment and maintenance, we handle every aspect of your project.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description: "Built to grow with your business, our solutions are designed for performance at any scale.",
    },
    {
      icon: DollarSign,
      title: "Startup-Friendly Pricing",
      description: "Flexible pricing models and payment plans that work for businesses of all sizes.",
    },
    {
      icon: Users,
      title: "Agile & Transparent",
      description: "Regular updates, clear communication, and collaborative approach throughout the project lifecycle.",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Your Success Is Our Mission
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine technical expertise with business understanding to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex-shrink-0">
                    <div className="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
