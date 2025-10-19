import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Globe,
  ChevronUp,
  AlertCircle,
  Info,
  Lightbulb
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogPost = () => {
  const { id } = useParams();
  const [readProgress, setReadProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState("");
  const [tocOpen, setTocOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const [selectionPosition, setSelectionPosition] = useState({ x: 0, y: 0 });
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setReadProgress(Math.min(progress, 100));
      setShowScrollTop(scrolled > 400);

      // Update active heading for TOC
      const headings = document.querySelectorAll('h2[id], h3[id]');
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

  // Highlight to share functionality
  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      const text = selection?.toString().trim();
      
      if (text && text.length > 10 && text.length < 280) {
        const range = selection?.getRangeAt(0);
        const rect = range?.getBoundingClientRect();
        
        if (rect && contentRef.current?.contains(range?.commonAncestorContainer as Node)) {
          setSelectedText(text);
          setSelectionPosition({
            x: rect.left + rect.width / 2,
            y: rect.top - 50
          });
        }
      } else {
        setSelectedText("");
      }
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('touchend', handleSelection);
    
    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('touchend', handleSelection);
    };
  }, []);

  const postData: { [key: string]: any } = {
    "1": {
      title: "Building Scalable Web Applications: A Complete Guide for 2025",
      category: "Web Development",
      author: {
        name: "Alex Thompson",
        role: "Senior Full-Stack Engineer",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
        bio: "Full-stack engineer with 10+ years building scalable web applications. Passionate about modern architecture and developer experience.",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#"
        }
      },
      date: "Mar 18, 2025",
      readTime: "12 min read",
      excerpt: "Learn how to build web applications that scale from zero to millions of users with modern architecture patterns, best practices, and real-world examples.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
      tags: ["Web Development", "Architecture", "Scalability"],
    },
    "2": {
      title: "Modern Frontend Architecture: React, TypeScript & Beyond",
      category: "Frontend",
      author: {
        name: "Sarah Chen",
        role: "Frontend Architect",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
        bio: "Frontend architect specializing in React ecosystems and component design systems.",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#"
        }
      },
      date: "Mar 15, 2025",
      readTime: "10 min read",
      excerpt: "Deep dive into modern frontend architecture patterns, component design, and state management strategies.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
      tags: ["React", "TypeScript", "Frontend"],
    },
    "3": {
      title: "Microservices vs Monoliths: Making the Right Choice",
      category: "Backend",
      author: {
        name: "David Kumar",
        role: "Backend Engineering Lead",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
        bio: "Backend specialist with expertise in distributed systems and cloud architecture.",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#"
        }
      },
      date: "Mar 12, 2025",
      readTime: "15 min read",
      excerpt: "A practical guide to choosing the right architecture for your project based on real-world requirements.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&q=80",
      tags: ["Backend", "Architecture", "Microservices"],
    },
  };

  const post = postData[id || "1"] || postData["1"];

  // Blog content components
  const BlogContent = () => (
    <div className="space-y-8" ref={contentRef}>
      {/* Introduction */}
      <div className="animate-fade-in">
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
          In today's digital landscape, building web applications that can scale from a handful of users to millions is both an art and a science. This comprehensive guide will walk you through the essential patterns, technologies, and practices that power the world's most successful web platforms.
        </p>
      </div>

      {/* Callout Box */}
      <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg flex gap-4 animate-fade-in">
        <Lightbulb className="h-6 w-6 text-accent shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold text-foreground mb-2">Key Takeaway</h4>
          <p className="text-muted-foreground">
            Scalability isn't just about handling more users—it's about building systems that can adapt, evolve, and maintain performance as your product grows.
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="space-y-6 animate-fade-in">
        <h2 id="understanding-scalability" className="text-3xl md:text-4xl font-bold text-foreground scroll-mt-24">
          Understanding Scalability
        </h2>
        
        <p className="text-lg leading-relaxed text-muted-foreground">
          Before diving into implementation details, it's crucial to understand what scalability actually means. <strong className="text-foreground">Scalability is the ability of a system to handle increased load</strong> by adding resources, without requiring fundamental changes to the architecture.
        </p>

        <div className="bg-muted/50 p-6 rounded-xl space-y-4">
          <h3 className="font-semibold text-xl text-foreground">Types of Scaling</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Vertical Scaling (Scale Up)
              </h4>
              <p className="text-sm text-muted-foreground">Adding more power to existing servers (CPU, RAM, storage)</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Horizontal Scaling (Scale Out)
              </h4>
              <p className="text-sm text-muted-foreground">Adding more servers to distribute the load</p>
            </div>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="space-y-4 animate-fade-in">
        <h3 id="architecture-patterns" className="text-2xl md:text-3xl font-bold text-foreground scroll-mt-24">
          Modern Architecture Patterns
        </h3>
        
        <p className="text-lg leading-relaxed text-muted-foreground">
          Let's look at a practical example of implementing a scalable API endpoint using Node.js and Express:
        </p>

        <div className="rounded-xl overflow-hidden border border-border">
          <div className="bg-muted px-4 py-2 border-b border-border flex items-center justify-between">
            <span className="text-sm font-mono text-muted-foreground">server.ts</span>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(codeExample1);
                toast.success("Code copied!");
              }}
              className="text-xs text-primary hover:text-primary/80 transition-colors"
            >
              Copy
            </button>
          </div>
          <SyntaxHighlighter 
            language="typescript" 
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.5',
            }}
          >
            {codeExample1}
          </SyntaxHighlighter>
        </div>

        <p className="text-muted-foreground">
          This example demonstrates <em className="text-foreground">rate limiting</em>, <em className="text-foreground">caching</em>, and <em className="text-foreground">database connection pooling</em>—three critical components for scalability.
        </p>
      </div>

      {/* Image with Caption */}
      <figure className="space-y-3 animate-fade-in">
        <div className="rounded-xl overflow-hidden border border-border">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" 
            alt="System architecture diagram"
            className="w-full h-auto"
          />
        </div>
        <figcaption className="text-sm text-muted-foreground text-center italic">
          Figure 1: Typical microservices architecture with load balancing and caching layers
        </figcaption>
      </figure>

      {/* Video Embed */}
      <div className="space-y-4 animate-fade-in">
        <h3 id="database-optimization" className="text-2xl md:text-3xl font-bold text-foreground scroll-mt-24">
          Database Optimization Strategies
        </h3>
        
        <div className="aspect-video rounded-xl overflow-hidden border border-border bg-muted">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Database Optimization Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <p className="text-sm text-muted-foreground italic">Watch: Advanced database optimization techniques (5:30)</p>
      </div>

      {/* Warning Callout */}
      <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-lg flex gap-4 animate-fade-in">
        <AlertCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold text-foreground mb-2">Common Pitfall</h4>
          <p className="text-muted-foreground">
            Don't optimize prematurely. Measure first, then optimize. Many developers waste time optimizing parts of the system that aren't actually bottlenecks.
          </p>
        </div>
      </div>

      {/* Blockquote */}
      <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-lg text-muted-foreground animate-fade-in">
        "Premature optimization is the root of all evil." — Donald Knuth
      </blockquote>

      {/* Lists and More Content */}
      <div className="space-y-6 animate-fade-in">
        <h3 id="best-practices" className="text-2xl md:text-3xl font-bold text-foreground scroll-mt-24">
          Essential Best Practices
        </h3>
        
        <p className="text-lg leading-relaxed text-muted-foreground">
          Here are the key practices that separate scalable applications from those that crumble under load:
        </p>

        <div className="space-y-4">
          <div className="space-y-3">
            <h4 className="font-semibold text-xl text-foreground">1. Implement Proper Caching</h4>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>Use Redis or Memcached for session storage and frequently accessed data</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>Implement CDN caching for static assets (images, CSS, JavaScript)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span>Cache API responses with appropriate TTL (Time To Live) values</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-xl text-foreground">2. Database Query Optimization</h4>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">•</span>
                <span>Create indexes on frequently queried columns</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">•</span>
                <span>Use database connection pooling to reuse connections</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5">•</span>
                <span>Implement read replicas for read-heavy workloads</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Another Code Example */}
      <div className="space-y-4 animate-fade-in">
        <h3 id="caching-implementation" className="text-2xl md:text-3xl font-bold text-foreground scroll-mt-24">
          Implementing Redis Caching
        </h3>

        <div className="rounded-xl overflow-hidden border border-border">
          <div className="bg-muted px-4 py-2 border-b border-border flex items-center justify-between">
            <span className="text-sm font-mono text-muted-foreground">cache.service.ts</span>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(codeExample2);
                toast.success("Code copied!");
              }}
              className="text-xs text-primary hover:text-primary/80 transition-colors"
            >
              Copy
            </button>
          </div>
          <SyntaxHighlighter 
            language="typescript" 
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              fontSize: '0.875rem',
              lineHeight: '1.5',
            }}
          >
            {codeExample2}
          </SyntaxHighlighter>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg flex gap-4 animate-fade-in">
        <Info className="h-6 w-6 text-primary shrink-0 mt-1" />
        <div>
          <h4 className="font-semibold text-foreground mb-2">Pro Tip</h4>
          <p className="text-muted-foreground">
            Always set a TTL (Time To Live) on your cache entries. Stale cache data can be worse than no cache at all. A good starting point is 5-15 minutes for most API responses.
          </p>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="space-y-6 animate-fade-in">
        <h3 id="monitoring-metrics" className="text-2xl md:text-3xl font-bold text-foreground scroll-mt-24">
          Key Performance Metrics to Monitor
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-6 space-y-2">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              &lt;200ms
            </div>
            <div className="text-sm font-semibold text-foreground">API Response Time</div>
            <div className="text-xs text-muted-foreground">Target for 95th percentile</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 space-y-2">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              99.9%
            </div>
            <div className="text-sm font-semibold text-foreground">Uptime SLA</div>
            <div className="text-xs text-muted-foreground">Industry standard target</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 space-y-2">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              &lt;1s
            </div>
            <div className="text-sm font-semibold text-foreground">Time to First Byte</div>
            <div className="text-xs text-muted-foreground">Critical for user experience</div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="space-y-6 animate-fade-in pt-8 border-t border-border">
        <h2 id="conclusion" className="text-3xl md:text-4xl font-bold text-foreground scroll-mt-24">
          Conclusion
        </h2>
        
        <p className="text-lg leading-relaxed text-muted-foreground">
          Building scalable web applications is a journey, not a destination. Start with solid fundamentals, measure everything, and optimize based on real data. Remember that <strong className="text-foreground">scalability is as much about your team's processes as it is about technology</strong>.
        </p>

        <p className="text-lg leading-relaxed text-muted-foreground">
          Focus on delivering value to users first, then scale when needed. The patterns and practices outlined in this guide will help you build applications that can grow from thousands to millions of users without major rewrites.
        </p>
      </div>
    </div>
  );

  const headings = [
    { level: 'h2', text: 'Understanding Scalability', id: 'understanding-scalability' },
    { level: 'h3', text: 'Architecture Patterns', id: 'architecture-patterns' },
    { level: 'h3', text: 'Database Optimization', id: 'database-optimization' },
    { level: 'h3', text: 'Best Practices', id: 'best-practices' },
    { level: 'h3', text: 'Caching Implementation', id: 'caching-implementation' },
    { level: 'h3', text: 'Monitoring Metrics', id: 'monitoring-metrics' },
    { level: 'h2', text: 'Conclusion', id: 'conclusion' },
  ];

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTocOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const shareUrl = window.location.href;

  const handleShare = (platform: string, text?: string) => {
    const shareText = text || post.title;
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
    };
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(text || shareUrl);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
      setSelectedText("");
    } else {
      window.open(urls[platform as keyof typeof urls], '_blank');
      setSelectedText("");
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! Check your email for confirmation.");
    setEmail("");
  };

  const relatedPosts = Object.entries(postData)
    .filter(([postId]) => postId !== id)
    .slice(0, 3)
    .map(([postId, post]) => ({
      id: postId,
      ...post,
    }));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted">
        <div 
          className="h-full bg-gradient-primary transition-all duration-150"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Highlight to Share Popup */}
      {selectedText && (
        <div
          className="fixed z-50 animate-scale-in"
          style={{
            left: `${selectionPosition.x}px`,
            top: `${selectionPosition.y}px`,
            transform: 'translateX(-50%)',
          }}
        >
          <div className="bg-card border border-border rounded-full shadow-glow p-2 flex items-center gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 rounded-full hover:bg-primary/10"
              onClick={() => handleShare('twitter', selectedText)}
              title="Share on Twitter"
            >
              <Twitter className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 rounded-full hover:bg-primary/10"
              onClick={() => handleShare('linkedin', selectedText)}
              title="Share on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0 rounded-full hover:bg-primary/10"
              onClick={() => handleShare('copy', selectedText)}
              title="Copy to clipboard"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          size="icon"
          className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full shadow-glow animate-scale-in"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}

      <Header />
      
      <main className="flex-grow pt-16">
        <article>
          {/* Hero Section */}
          <section className="py-12 md:py-20 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Button asChild variant="ghost" className="mb-6 group">
                  <Link to="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
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
                  
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                    {post.title}
                  </h1>
                  
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-border"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{post.author.name}</p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{post.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
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
              <div className="max-w-7xl mx-auto">
                <div className="flex gap-12">
                  {/* Table of Contents - Desktop */}
                  <aside className="hidden lg:block w-64 shrink-0">
                    <div className="sticky top-24 space-y-6">
                      <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                          On This Page
                        </h3>
                        <nav className="space-y-2.5">
                          {headings.map((heading) => (
                            <button
                              key={heading.id}
                              onClick={() => scrollToHeading(heading.id)}
                              className={`block text-sm text-left w-full transition-all ${
                                heading.level === 'h3' ? 'pl-4' : ''
                              } ${
                                activeHeading === heading.text
                                  ? 'text-primary font-medium border-l-2 border-primary pl-3'
                                  : 'text-muted-foreground hover:text-foreground hover:border-l-2 hover:border-border hover:pl-3'
                              }`}
                            >
                              {heading.text}
                            </button>
                          ))}
                        </nav>
                      </div>

                      {/* Share Buttons - Desktop */}
                      <div className="pt-6 border-t border-border">
                        <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                          Share Article
                        </h3>
                        <div className="flex flex-col gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare('linkedin')}
                            className="justify-start gap-2 hover:bg-primary/10"
                          >
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare('twitter')}
                            className="justify-start gap-2 hover:bg-primary/10"
                          >
                            <Twitter className="h-4 w-4" />
                            Twitter
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare('copy')}
                            className="justify-start gap-2 hover:bg-primary/10"
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
                    className="fixed bottom-20 right-6 lg:hidden z-40 h-14 w-14 rounded-full shadow-glow"
                    onClick={() => setTocOpen(!tocOpen)}
                  >
                    {tocOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>

                  {/* Mobile TOC Drawer */}
                  {tocOpen && (
                    <div className="fixed inset-0 bg-background/98 backdrop-blur-sm z-30 lg:hidden animate-fade-in overflow-y-auto">
                      <div className="container mx-auto px-4 py-24">
                        <h3 className="font-bold text-xl mb-6">Table of Contents</h3>
                        <nav className="space-y-3 mb-8">
                          {headings.map((heading) => (
                            <button
                              key={heading.id}
                              onClick={() => scrollToHeading(heading.id)}
                              className={`block text-left w-full px-4 py-3 rounded-lg transition-all ${
                                heading.level === 'h3' ? 'pl-8' : ''
                              } ${
                                activeHeading === heading.text
                                  ? 'bg-primary text-primary-foreground font-medium'
                                  : 'text-muted-foreground hover:bg-muted'
                              }`}
                            >
                              {heading.text}
                            </button>
                          ))}
                        </nav>
                        <div className="border-t border-border pt-6">
                          <h3 className="font-semibold mb-4">Share this article</h3>
                          <div className="flex flex-wrap gap-2">
                            <Button
                              variant="outline"
                              onClick={() => handleShare('linkedin')}
                              className="gap-2"
                            >
                              <Linkedin className="h-4 w-4" />
                              LinkedIn
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => handleShare('twitter')}
                              className="gap-2"
                            >
                              <Twitter className="h-4 w-4" />
                              Twitter
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => handleShare('copy')}
                              className="gap-2"
                            >
                              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                              {copied ? 'Copied!' : 'Copy'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Main Content */}
                  <div className="flex-1 min-w-0">
                    <div className="max-w-3xl mx-auto space-y-8">
                      {/* Featured Image */}
                      <div className="rounded-2xl overflow-hidden border border-border animate-fade-in">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-auto"
                        />
                      </div>

                      {/* Article Content */}
                      <BlogContent />

                      {/* Author Bio */}
                      <div className="border-t border-border pt-12 mt-16 animate-fade-in">
                        <div className="flex gap-6 items-start bg-gradient-hero p-8 rounded-2xl border border-border">
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            className="w-20 h-20 rounded-full object-cover shrink-0 border-2 border-border"
                          />
                          <div className="space-y-4">
                            <div>
                              <h3 className="font-bold text-xl text-foreground">{post.author.name}</h3>
                              <p className="text-sm text-muted-foreground">{post.author.role}</p>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{post.author.bio}</p>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" asChild>
                                <a href={post.author.social.linkedin} target="_blank" rel="noopener noreferrer">
                                  <Linkedin className="h-4 w-4" />
                                </a>
                              </Button>
                              <Button variant="outline" size="sm" asChild>
                                <a href={post.author.social.twitter} target="_blank" rel="noopener noreferrer">
                                  <Twitter className="h-4 w-4" />
                                </a>
                              </Button>
                              <Button variant="outline" size="sm" asChild>
                                <a href={post.author.social.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Newsletter CTA */}
                      <div className="bg-gradient-primary text-primary-foreground p-8 md:p-12 rounded-2xl text-center space-y-6 animate-fade-in">
                        <div className="space-y-2">
                          <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
                          <p className="text-lg opacity-90 max-w-2xl mx-auto">
                            Get the latest insights on web development, scalable architecture, and best practices delivered to your inbox.
                          </p>
                        </div>
                        <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-2">
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-background/20"
                          />
                          <Button type="submit" variant="secondary" className="shrink-0">
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
                <div className="max-w-6xl mx-auto space-y-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-center">Continue Reading</h2>
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
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6 space-y-3">
                          <span className="text-xs font-medium text-primary">{relatedPost.category}</span>
                          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

// Code examples
const codeExample1 = `import express from 'express';
import rateLimit from 'express-rate-limit';
import { createClient } from 'redis';

const app = express();
const redisClient = createClient();

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);

// Example endpoint with caching
app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const cacheKey = \`user:\${id}\`;
  
  // Check cache first
  const cached = await redisClient.get(cacheKey);
  if (cached) {
    return res.json(JSON.parse(cached));
  }
  
  // Fetch from database
  const user = await db.users.findById(id);
  
  // Cache for 5 minutes
  await redisClient.setEx(cacheKey, 300, JSON.stringify(user));
  
  res.json(user);
});`;

const codeExample2 = `import { createClient, RedisClientType } from 'redis';

class CacheService {
  private client: RedisClientType;
  
  constructor() {
    this.client = createClient({
      url: process.env.REDIS_URL
    });
    this.client.connect();
  }
  
  async get<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key);
    return data ? JSON.parse(data) : null;
  }
  
  async set(key: string, value: any, ttl: number = 300): Promise<void> {
    await this.client.setEx(
      key, 
      ttl, 
      JSON.stringify(value)
    );
  }
  
  async delete(key: string): Promise<void> {
    await this.client.del(key);
  }
  
  async invalidatePattern(pattern: string): Promise<void> {
    const keys = await this.client.keys(pattern);
    if (keys.length > 0) {
      await this.client.del(keys);
    }
  }
}

export const cacheService = new CacheService();`;

export default BlogPost;