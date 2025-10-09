import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  const links = {
    company: [
      { name: "About", path: "/#about" },
      { name: "Services", path: "/#services" },
      { name: "Projects", path: "/projects" },
      { name: "Team", path: "/#team" },
    ],
    resources: [
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/#contact" },
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
    ],
    services: [
      { name: "Web Development", path: "/#services" },
      { name: "Mobile Apps", path: "/#services" },
      { name: "Cloud Services", path: "/#services" },
      { name: "DevOps", path: "/#services" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ImpulseOne
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building digital excellence through innovative software solutions. Your trusted partner in web development and infrastructure.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@impulseone.com"
                className="h-10 w-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} ImpulseOne. All rights reserved.</p>
            <p>Made with ❤️ by the ImpulseOne team</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
