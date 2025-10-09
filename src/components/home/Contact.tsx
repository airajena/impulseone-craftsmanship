import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Let's Build Your App Together
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start your project? Get in touch with us today and let's discuss how we can help bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 animate-fade-in-up">
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone (Optional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-2xl shadow-card border border-border flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:hello@impulseone.com" className="text-muted-foreground hover:text-primary transition-colors">
                    hello@impulseone.com
                  </a>
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-card border border-border flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+15555551234" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (555) 555-1234
                  </a>
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl shadow-card border border-border flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    San Francisco, CA<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground">
                <h3 className="text-2xl font-bold mb-3">
                  Book a Free Consultation
                </h3>
                <p className="mb-6 opacity-90">
                  Schedule a 30-minute call to discuss your project requirements and how we can help.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full"
                >
                  Schedule Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
