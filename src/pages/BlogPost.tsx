import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

export const BlogPost = () => {
  const { id } = useParams();

  const postData: { [key: string]: any } = {
    "1": {
      title: "Building Scalable Microservices Architecture",
      category: "Development",
      author: "Alex Thompson",
      date: "Mar 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
      content: `
        <h2>Introduction</h2>
        <p>Microservices architecture has become the standard for building modern, scalable applications. In this comprehensive guide, we'll explore the key principles and best practices for designing and implementing microservices that can grow with your business.</p>

        <h2>What are Microservices?</h2>
        <p>Microservices are an architectural style that structures an application as a collection of loosely coupled services. Each service is:</p>
        <ul>
          <li>Highly maintainable and testable</li>
          <li>Loosely coupled with other services</li>
          <li>Independently deployable</li>
          <li>Organized around business capabilities</li>
        </ul>

        <h2>Key Benefits</h2>
        <p>Adopting a microservices architecture provides several advantages:</p>
        <ul>
          <li><strong>Scalability:</strong> Scale individual services based on demand</li>
          <li><strong>Flexibility:</strong> Use different technologies for different services</li>
          <li><strong>Resilience:</strong> Failures in one service don't bring down the entire system</li>
          <li><strong>Faster Development:</strong> Teams can work independently on different services</li>
        </ul>

        <h2>Design Principles</h2>
        <p>When designing microservices, follow these essential principles:</p>
        <ol>
          <li><strong>Single Responsibility:</strong> Each service should do one thing well</li>
          <li><strong>API-First Design:</strong> Define clear contracts between services</li>
          <li><strong>Data Isolation:</strong> Each service owns its data</li>
          <li><strong>Decentralization:</strong> Avoid creating bottlenecks</li>
        </ol>

        <h2>Implementation Strategy</h2>
        <p>Here's a step-by-step approach to implementing microservices:</p>
        <ol>
          <li>Start with a monolith and identify bounded contexts</li>
          <li>Extract services gradually, starting with the most independent components</li>
          <li>Implement proper service discovery and communication</li>
          <li>Set up monitoring and logging infrastructure</li>
          <li>Implement circuit breakers and fallback mechanisms</li>
        </ol>

        <h2>Conclusion</h2>
        <p>Building scalable microservices requires careful planning and adherence to best practices. By following the principles outlined in this guide, you can create a robust, maintainable architecture that grows with your business needs.</p>
      `,
    },
    "2": {
      title: "Modern UI/UX Design Principles",
      category: "Design",
      author: "Jessica Martinez",
      date: "Mar 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
      content: `
        <h2>Introduction</h2>
        <p>Creating exceptional user experiences requires a deep understanding of design principles and user psychology. In this article, we'll explore the fundamental principles that guide modern UI/UX design.</p>

        <h2>User-Centered Design</h2>
        <p>Always put the user first. Every design decision should be made with the user's needs, goals, and context in mind.</p>

        <h2>Consistency is Key</h2>
        <p>Maintain consistency across your application in terms of:</p>
        <ul>
          <li>Visual design elements</li>
          <li>Interaction patterns</li>
          <li>Terminology and language</li>
          <li>Layout and navigation</li>
        </ul>

        <h2>Visual Hierarchy</h2>
        <p>Guide users' attention through proper use of size, color, contrast, and spacing. The most important elements should be the most prominent.</p>

        <h2>Accessibility Matters</h2>
        <p>Design for everyone by ensuring your application is accessible to users with disabilities. Follow WCAG guidelines and test with assistive technologies.</p>

        <h2>Conclusion</h2>
        <p>Great UI/UX design is about creating intuitive, accessible, and delightful experiences that help users achieve their goals efficiently.</p>
      `,
    },
  };

  const post = postData[id || "1"] || postData["1"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <article>
          <section className="py-12 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <Button asChild variant="ghost" className="mb-6">
                  <Link to="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Link>
                </Button>
                
                <div className="space-y-6 animate-fade-in">
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {post.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share Article
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="rounded-2xl overflow-hidden animate-fade-in">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto"
                  />
                </div>

                <div 
                  className="prose prose-lg max-w-none animate-fade-in-up
                    prose-headings:font-bold prose-headings:text-foreground
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                    prose-ul:text-muted-foreground prose-ul:mb-6
                    prose-ol:text-muted-foreground prose-ol:mb-6
                    prose-li:mb-2
                    prose-strong:text-foreground prose-strong:font-semibold"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="border-t border-border pt-8 mt-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Written by</p>
                      <p className="font-semibold">{post.author}</p>
                    </div>
                    <Button
                      asChild
                      className="bg-gradient-primary text-primary-foreground hover:opacity-90"
                    >
                      <Link to="/#contact">
                        Get In Touch
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
