import { Github, Linkedin, Twitter } from "lucide-react";

export const Team = () => {
  const team = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      bio: "Full-stack enthusiast with 10+ years of experience",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Jessica Martinez",
      role: "Lead Frontend Developer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      bio: "UI/UX expert passionate about creating beautiful experiences",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Ryan Park",
      role: "Backend Architect",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      bio: "Scalability wizard with expertise in cloud infrastructure",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Sophie Anderson",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      bio: "Automation advocate ensuring smooth deployments",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Meet The Experts
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate team of developers, designers, and engineers dedicated to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary text-sm">{member.role}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex gap-3 pt-2">
                    <a
                      href={member.social.linkedin}
                      className="h-9 w-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="h-9 w-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.github}
                      className="h-9 w-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
