import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Linkedin, 
  Twitter, 
  MessageCircle,
  Copy,
  Check,
  Menu,
  X,
  Github,
  Globe
} from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export const BlogPost = () => {
  const { id } = useParams();
  const [readProgress, setReadProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState("");
  const [tocOpen, setTocOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setReadProgress(Math.min(progress, 100));

      // Update active heading for TOC
      const headings = document.querySelectorAll('h2, h3');
      let current = '';
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top < windowHeight / 3) {
          current = heading.textContent || '';
        }
      });
      setActiveHeading(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const postData: { [key: string]: any } = {
    "1": {
      title: "How to Choose the Right Software Development Partner for Your Startup (2025 Guide)",
      category: "Business Strategy",
      author: {
        name: "Alex Thompson",
        role: "CEO & Tech Strategist",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
        bio: "Tech entrepreneur with 15+ years building scalable startups. Passionate about helping founders make the right technology decisions.",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#"
        }
      },
      date: "Mar 15, 2024",
      readTime: "8 min read",
      excerpt: "Selecting the right development partner can make or break your startup. Here's everything you need to know.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
      tags: ["Startup", "Development", "Partnership"],
      content: `
        <h2>Why Your Development Partner Choice Matters</h2>
        <p>Choosing the right software development partner is one of the most critical decisions you'll make as a startup founder. The wrong choice can lead to delays, cost overruns, and technical debt that haunts your business for years. The right partner, however, becomes an extension of your team—accelerating your growth and helping you build a product that truly scales.</p>

        <h2>Key Factors to Consider</h2>
        
        <h3>1. Technical Expertise & Tech Stack Alignment</h3>
        <p>Your development partner should have deep expertise in the technologies your product requires. Look for:</p>
        <ul>
          <li><strong>Modern frameworks:</strong> React, Vue, Angular for frontend; Node.js, Python, Java for backend</li>
          <li><strong>Cloud infrastructure:</strong> AWS, Google Cloud, or Azure experience</li>
          <li><strong>Database expertise:</strong> PostgreSQL, MongoDB, Redis</li>
          <li><strong>DevOps capabilities:</strong> CI/CD, containerization, infrastructure as code</li>
        </ul>

        <h3>2. Portfolio & Case Studies</h3>
        <p>Review their previous work extensively. Don't just look at pretty designs—dig into:</p>
        <ul>
          <li>Similar projects in your industry or domain</li>
          <li>Scalability achievements (e.g., "scaled to 1M+ users")</li>
          <li>Problem-solving examples and challenges overcome</li>
          <li>Client testimonials and long-term partnerships</li>
        </ul>

        <h3>3. Communication & Collaboration Style</h3>
        <p>A technically brilliant team that can't communicate effectively is a recipe for disaster. Evaluate:</p>
        <ul>
          <li>Response time and availability</li>
          <li>Project management methodology (Agile, Scrum, etc.)</li>
          <li>Transparency in pricing and timelines</li>
          <li>Tools they use for collaboration (Jira, Slack, GitHub)</li>
        </ul>

        <h2>Red Flags to Watch Out For</h2>
        <p>Be wary of partners who:</p>
        <ul>
          <li>Promise unrealistic timelines ("We can build Instagram in 2 weeks")</li>
          <li>Have no formal development process or quality assurance</li>
          <li>Can't provide references or case studies</li>
          <li>Lack experience in your industry or tech stack</li>
          <li>Have unclear pricing or hidden costs</li>
        </ul>

        <h2>Questions to Ask During Evaluation</h2>
        <ol>
          <li>How do you handle scope changes and feature requests?</li>
          <li>What's your approach to testing and quality assurance?</li>
          <li>How do you ensure code quality and maintainability?</li>
          <li>What happens after the initial launch?</li>
          <li>Can you provide ongoing support and maintenance?</li>
          <li>How do you handle intellectual property and code ownership?</li>
        </ol>

        <h2>Making the Final Decision</h2>
        <p>After evaluating multiple partners, consider running a paid pilot project before committing to a long-term engagement. A 2-4 week pilot helps you assess:</p>
        <ul>
          <li>Code quality and technical approach</li>
          <li>Communication effectiveness</li>
          <li>Ability to meet deadlines</li>
          <li>Cultural fit with your team</li>
        </ul>

        <h2>Conclusion</h2>
        <p>The right development partner is more than just a vendor—they're a strategic partner in your startup's journey. Take the time to evaluate thoroughly, ask the right questions, and trust your instincts. A great partnership can accelerate your success, while the wrong choice can set you back months or even years.</p>
      `,
    },
    "2": {
      title: "End-to-End Web App Development: From Idea to Scalable Product",
      category: "Development",
      author: {
        name: "Jessica Martinez",
        role: "Full-Stack Architect",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
        bio: "Full-stack developer specializing in scalable architectures. Built products serving millions of users.",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#"
        }
      },
      date: "Mar 12, 2024",
      readTime: "12 min read",
      excerpt: "A complete guide to building production-ready web applications from scratch with best practices.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      tags: ["Web Development", "Full-Stack", "Scalability"],
      content: `
        <h2>From Idea to MVP: The Complete Journey</h2>
        <p>Building a successful web application requires more than just coding skills. It demands a systematic approach that balances speed to market with technical excellence. In this comprehensive guide, we'll walk through every phase of web app development.</p>

        <h2>Phase 1: Planning & Architecture</h2>
        
        <h3>Defining Your MVP</h3>
        <p>Start by identifying your core value proposition. What's the one problem your app solves better than anyone else? Your MVP should focus ruthlessly on this:</p>
        <ul>
          <li>List all desired features</li>
          <li>Categorize as Must-Have, Nice-to-Have, or Future</li>
          <li>Build only the Must-Haves for v1</li>
          <li>Plan iterations for the rest</li>
        </ul>

        <h3>Choosing Your Tech Stack</h3>
        <p>Your technology choices should be driven by:</p>
        <ul>
          <li><strong>Scalability requirements:</strong> How many users do you expect?</li>
          <li><strong>Team expertise:</strong> Use what your team knows well</li>
          <li><strong>Ecosystem maturity:</strong> Choose battle-tested technologies</li>
          <li><strong>Budget constraints:</strong> Consider hosting and licensing costs</li>
        </ul>

        <h2>Phase 2: Development Best Practices</h2>
        
        <h3>Frontend Development</h3>
        <p>Modern frontend development centers around component-based architecture:</p>
        <ul>
          <li>Use React, Vue, or Angular for complex UIs</li>
          <li>Implement state management (Redux, Zustand, Pinia)</li>
          <li>Optimize for performance (lazy loading, code splitting)</li>
          <li>Ensure responsive design and mobile-first approach</li>
        </ul>

        <h3>Backend Development</h3>
        <p>Your backend needs to be robust, secure, and scalable:</p>
        <ul>
          <li>RESTful or GraphQL APIs</li>
          <li>Proper authentication and authorization</li>
          <li>Database optimization and indexing</li>
          <li>Caching strategies (Redis, CDN)</li>
          <li>Rate limiting and security headers</li>
        </ul>

        <h2>Phase 3: Quality Assurance</h2>
        <p>Testing should be integrated throughout development:</p>
        <ul>
          <li><strong>Unit tests:</strong> Test individual functions and components</li>
          <li><strong>Integration tests:</strong> Verify that systems work together</li>
          <li><strong>E2E tests:</strong> Simulate real user workflows</li>
          <li><strong>Performance testing:</strong> Load and stress testing</li>
          <li><strong>Security audits:</strong> Regular vulnerability scans</li>
        </ul>

        <h2>Phase 4: Deployment & Infrastructure</h2>
        <p>Modern deployment goes beyond just pushing code to a server:</p>
        <ul>
          <li>Set up CI/CD pipelines (GitHub Actions, GitLab CI)</li>
          <li>Use containerization (Docker, Kubernetes)</li>
          <li>Implement blue-green deployments for zero downtime</li>
          <li>Configure auto-scaling based on load</li>
          <li>Set up monitoring and alerting (DataDog, New Relic)</li>
        </ul>

        <h2>Phase 5: Post-Launch Optimization</h2>
        <p>Launch is just the beginning. Continuous improvement is key:</p>
        <ul>
          <li>Monitor user behavior with analytics</li>
          <li>Track performance metrics (Core Web Vitals)</li>
          <li>Gather user feedback systematically</li>
          <li>Iterate based on data, not assumptions</li>
          <li>Plan regular security updates and patches</li>
        </ul>

        <h2>Common Pitfalls to Avoid</h2>
        <ol>
          <li><strong>Premature optimization:</strong> Don't optimize before you have real traffic</li>
          <li><strong>Over-engineering:</strong> Build for today's needs, not imagined future ones</li>
          <li><strong>Ignoring security:</strong> Security must be built in, not bolted on</li>
          <li><strong>Skipping documentation:</strong> Document your architecture and APIs</li>
          <li><strong>No monitoring:</strong> You can't fix what you can't measure</li>
        </ol>

        <h2>Conclusion</h2>
        <p>Building a scalable web application is a marathon, not a sprint. Focus on delivering value quickly while maintaining code quality and scalability. The key is finding the right balance between speed and technical excellence.</p>
      `,
    },
    "3": {
      title: "Why Scalable Backend Architecture is the Key to Startup Growth",
      category: "Backend",
      author: {
        name: "Ryan Park",
        role: "Backend Engineering Lead",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
        bio: "Backend specialist with expertise in distributed systems and high-performance architectures.",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#"
        }
      },
      date: "Mar 10, 2024",
      readTime: "10 min read",
      excerpt: "Your backend architecture determines how far your startup can scale. Learn why it matters from the start.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80",
      tags: ["Backend", "Scalability", "Architecture"],
      content: `
        <h2>Why Backend Architecture Matters Early</h2>
        <p>Many startups focus heavily on frontend experience while treating backend as an afterthought. This is a critical mistake. Your backend architecture sets the foundation for everything: performance, security, scalability, and maintainability.</p>

        <h2>The Cost of Poor Architecture</h2>
        <p>When backend architecture is neglected, startups face painful consequences:</p>
        <ul>
          <li><strong>Performance bottlenecks:</strong> Slow response times drive users away</li>
          <li><strong>Downtime during growth:</strong> System crashes when traffic spikes</li>
          <li><strong>Technical debt:</strong> Expensive rewrites when scaling becomes necessary</li>
          <li><strong>Security vulnerabilities:</strong> Rushed architecture leads to exploits</li>
          <li><strong>Developer productivity:</strong> Poor code structure slows new features</li>
        </ul>

        <h2>Key Principles of Scalable Architecture</h2>
        
        <h3>1. Stateless Application Design</h3>
        <p>Design your application to be stateless wherever possible. This enables horizontal scaling:</p>
        <ul>
          <li>Store session data in distributed caches (Redis)</li>
          <li>Use JWT tokens for authentication</li>
          <li>Avoid storing data on application servers</li>
          <li>Design services to be independently deployable</li>
        </ul>

        <h3>2. Database Optimization</h3>
        <p>Your database is often the first bottleneck. Optimize early:</p>
        <ul>
          <li>Proper indexing strategy (but don't over-index)</li>
          <li>Query optimization and avoiding N+1 problems</li>
          <li>Read replicas for read-heavy workloads</li>
          <li>Caching frequently accessed data</li>
          <li>Database partitioning for massive datasets</li>
        </ul>

        <h3>3. Asynchronous Processing</h3>
        <p>Not everything needs to happen in real-time. Use async processing for:</p>
        <ul>
          <li>Email sending and notifications</li>
          <li>Image/video processing</li>
          <li>Report generation</li>
          <li>Data aggregation and analytics</li>
          <li>Third-party API calls</li>
        </ul>

        <h2>Microservices vs Monolith: The Right Choice</h2>
        <p>The microservices hype can be misleading for startups. Here's the reality:</p>
        
        <h3>Start with a Modular Monolith</h3>
        <p>For most startups, a well-structured monolith is the right choice:</p>
        <ul>
          <li>Faster initial development</li>
          <li>Simpler deployment and debugging</li>
          <li>Lower infrastructure costs</li>
          <li>Easier to refactor and evolve</li>
        </ul>

        <h3>When to Consider Microservices</h3>
        <p>Transition to microservices when you experience:</p>
        <ul>
          <li>Different components need independent scaling</li>
          <li>Team size exceeds 20+ developers</li>
          <li>Need to use different tech stacks for different features</li>
          <li>Specific compliance or security requirements for certain modules</li>
        </ul>

        <h2>Building for Observability</h2>
        <p>You can't improve what you don't measure. Implement from day one:</p>
        <ul>
          <li><strong>Logging:</strong> Structured logs with proper levels</li>
          <li><strong>Metrics:</strong> Track response times, error rates, throughput</li>
          <li><strong>Tracing:</strong> Distributed tracing for request flows</li>
          <li><strong>Alerts:</strong> Get notified before users complain</li>
        </ul>

        <h2>Security Architecture</h2>
        <p>Security must be architected in, not added later:</p>
        <ul>
          <li>Authentication and authorization at every layer</li>
          <li>Input validation and sanitization</li>
          <li>Rate limiting and DDoS protection</li>
          <li>Encryption at rest and in transit</li>
          <li>Regular security audits and penetration testing</li>
        </ul>

        <h2>Infrastructure as Code</h2>
        <p>Manual infrastructure management doesn't scale. Use IaC from the start:</p>
        <ul>
          <li>Terraform or CloudFormation for infrastructure</li>
          <li>Docker for containerization</li>
          <li>Kubernetes or ECS for orchestration</li>
          <li>Version control everything</li>
          <li>Automate deployments completely</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Scalable backend architecture isn't about using the newest technologies—it's about making smart, informed decisions that balance current needs with future growth. Invest in architecture early, and your startup will thank you when it's time to scale.</p>
      `,
    },
  };

  const post = postData[id || "1"] || postData["1"];

  const extractHeadings = (content: string) => {
    const div = document.createElement('div');
    div.innerHTML = content;
    const headings = div.querySelectorAll('h2, h3');
    return Array.from(headings).map((h) => ({
      level: h.tagName.toLowerCase(),
      text: h.textContent || '',
      id: (h.textContent || '').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    }));
  };

  const headings = extractHeadings(post.content);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTocOpen(false);
    }
  };

  const shareUrl = window.location.href;

  const handleShare = (platform: string) => {
    const text = post.title;
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + shareUrl)}`,
    };
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } else {
      window.open(urls[platform as keyof typeof urls], '_blank');
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! We'll send you our best insights.");
    setEmail("");
  };

  const relatedPosts = Object.entries(postData)
    .filter(([postId]) => postId !== id)
    .slice(0, 3)
    .map(([postId, post]) => ({
      id: postId,
      ...post,
    }));

  // Add IDs to headings in content for smooth scrolling
  useEffect(() => {
    const contentDiv = document.querySelector('.blog-content');
    if (contentDiv) {
      const h2s = contentDiv.querySelectorAll('h2');
      const h3s = contentDiv.querySelectorAll('h3');
      [...h2s, ...h3s].forEach((heading) => {
        const id = (heading.textContent || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        heading.id = id;
      });
    }
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted">
        <div 
          className="h-full bg-gradient-primary transition-all duration-150"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      <Header />
      
      <main className="flex-grow pt-20">
        <article>
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Button asChild variant="ghost" className="mb-6">
                  <Link to="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>
                
                <div className="space-y-6 animate-fade-in">
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.map((tag: string) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    {post.title}
                  </h1>
                  
                  <p className="text-lg md:text-xl text-muted-foreground">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{post.author.name}</p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto relative">
                <div className="flex gap-12">
                  {/* Table of Contents - Desktop */}
                  <aside className="hidden lg:block w-64 shrink-0">
                    <div className="sticky top-24 space-y-4">
                      <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                        Table of Contents
                      </h3>
                      <nav className="space-y-2">
                        {headings.map((heading) => (
                          <button
                            key={heading.id}
                            onClick={() => scrollToHeading(heading.id)}
                            className={`block text-sm text-left transition-colors ${
                              heading.level === 'h3' ? 'pl-4' : ''
                            } ${
                              activeHeading === heading.text
                                ? 'text-primary font-medium'
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            {heading.text}
                          </button>
                        ))}
                      </nav>

                      {/* Share Buttons - Desktop */}
                      <div className="pt-6 border-t">
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                          Share
                        </h3>
                        <div className="flex flex-col gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare('linkedin')}
                            className="justify-start gap-2"
                          >
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare('twitter')}
                            className="justify-start gap-2"
                          >
                            <Twitter className="h-4 w-4" />
                            Twitter
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare('whatsapp')}
                            className="justify-start gap-2"
                          >
                            <MessageCircle className="h-4 w-4" />
                            WhatsApp
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare('copy')}
                            className="justify-start gap-2"
                          >
                            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            {copied ? 'Copied!' : 'Copy Link'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </aside>

                  {/* Mobile TOC Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="fixed bottom-6 right-6 lg:hidden z-40 h-14 w-14 rounded-full shadow-lg"
                    onClick={() => setTocOpen(!tocOpen)}
                  >
                    {tocOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>

                  {/* Mobile TOC Drawer */}
                  {tocOpen && (
                    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-30 lg:hidden animate-fade-in">
                      <div className="container mx-auto px-4 py-20">
                        <nav className="space-y-3">
                          {headings.map((heading) => (
                            <button
                              key={heading.id}
                              onClick={() => scrollToHeading(heading.id)}
                              className={`block text-left w-full px-4 py-2 rounded-lg transition-colors ${
                                heading.level === 'h3' ? 'pl-8' : ''
                              } ${
                                activeHeading === heading.text
                                  ? 'bg-primary text-primary-foreground font-medium'
                                  : 'text-muted-foreground hover:bg-accent'
                              }`}
                            >
                              {heading.text}
                            </button>
                          ))}
                        </nav>
                      </div>
                    </div>
                  )}

                  {/* Main Content */}
                  <div className="flex-1 min-w-0">
                    <div className="space-y-8">
                      {/* Featured Image */}
                      <div className="rounded-2xl overflow-hidden animate-fade-in">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-auto"
                        />
                      </div>

                      {/* Article Content */}
                      <div 
                        className="blog-content prose prose-lg max-w-none animate-fade-in-up
                          prose-headings:font-bold prose-headings:text-foreground prose-headings:scroll-mt-24
                          prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
                          prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
                          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                          prose-ul:text-muted-foreground prose-ul:mb-6 prose-ul:text-base
                          prose-ol:text-muted-foreground prose-ol:mb-6 prose-ol:text-base
                          prose-li:mb-2 prose-li:leading-relaxed
                          prose-strong:text-foreground prose-strong:font-semibold
                          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic
                          prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      />

                      {/* Share Section - Mobile */}
                      <div className="lg:hidden border-t border-border pt-8">
                        <h3 className="font-semibold mb-4">Share this article</h3>
                        <div className="flex flex-wrap gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare('linkedin')}
                            className="gap-2"
                          >
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare('twitter')}
                            className="gap-2"
                          >
                            <Twitter className="h-4 w-4" />
                            Twitter
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare('whatsapp')}
                            className="gap-2"
                          >
                            <MessageCircle className="h-4 w-4" />
                            WhatsApp
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare('copy')}
                            className="gap-2"
                          >
                            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                            {copied ? 'Copied!' : 'Copy'}
                          </Button>
                        </div>
                      </div>

                      {/* Author Bio */}
                      <div className="border-t border-border pt-8 mt-12">
                        <div className="flex gap-6 items-start bg-muted/30 p-6 rounded-2xl">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            className="w-20 h-20 rounded-full object-cover shrink-0"
                          />
                          <div className="space-y-3">
                            <div>
                              <h3 className="font-bold text-xl">{post.author.name}</h3>
                              <p className="text-sm text-muted-foreground">{post.author.role}</p>
                            </div>
                            <p className="text-muted-foreground">{post.author.bio}</p>
                            <div className="flex gap-3">
                              <Button variant="ghost" size="sm" asChild>
                                <a href={post.author.social.linkedin} target="_blank" rel="noopener noreferrer">
                                  <Linkedin className="h-4 w-4" />
                                </a>
                              </Button>
                              <Button variant="ghost" size="sm" asChild>
                                <a href={post.author.social.twitter} target="_blank" rel="noopener noreferrer">
                                  <Twitter className="h-4 w-4" />
                                </a>
                              </Button>
                              <Button variant="ghost" size="sm" asChild>
                                <a href={post.author.social.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Newsletter CTA */}
                      <div className="bg-gradient-primary text-primary-foreground p-8 md:p-12 rounded-2xl text-center space-y-6">
                        <h2 className="text-3xl font-bold">Enjoyed this article?</h2>
                        <p className="text-lg opacity-90 max-w-2xl mx-auto">
                          Subscribe to our newsletter for more insights on web development, scalable architecture, and startup growth strategies.
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-2">
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/60"
                          />
                          <Button type="submit" variant="secondary">
                            Subscribe
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="py-16 bg-muted/30">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto space-y-8">
                  <h2 className="text-3xl font-bold text-center">Related Articles</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.id}`}
                        className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6 space-y-3">
                          <span className="text-primary font-medium text-sm">{relatedPost.category}</span>
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Final CTA */}
          <section className="py-20 bg-gradient-hero">
            <div className="container mx-auto px-4 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Like what you see?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's build something amazing together. Get in touch to discuss your project.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                <Link to="/#contact">Start Your Project</Link>
              </Button>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;