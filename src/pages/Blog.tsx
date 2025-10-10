import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Development", "Design", "DevOps", "Cloud", "Best Practices"];

  const posts = [
    {
      id: 1,
      title: "How to Choose the Right Software Development Partner for Your Startup (2025 Guide)",
      category: "Business Strategy",
      excerpt: "Selecting the right development partner can make or break your startup. Here's everything you need to know.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      author: "Alex Thompson",
      date: "Mar 15, 2024",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "End-to-End Web App Development: From Idea to Scalable Product",
      category: "Development",
      excerpt: "A complete guide to building production-ready web applications from scratch with best practices.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      author: "Jessica Martinez",
      date: "Mar 12, 2024",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Why Scalable Backend Architecture is the Key to Startup Growth",
      category: "Backend",
      excerpt: "Your backend architecture determines how far your startup can scale. Learn why it matters from the start.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
      author: "Ryan Park",
      date: "Mar 10, 2024",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Cloud Migration Strategies",
      category: "Cloud",
      excerpt: "A comprehensive guide to planning and executing a successful cloud migration for your applications.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      author: "Sophie Anderson",
      date: "Mar 8, 2024",
      readTime: "12 min read",
    },
    {
      id: 5,
      title: "React Performance Optimization",
      category: "Development",
      excerpt: "Advanced techniques to optimize React applications for better performance and user experience.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      author: "Alex Thompson",
      date: "Mar 5, 2024",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Security Best Practices for Web Apps",
      category: "Best Practices",
      excerpt: "Essential security measures every developer should implement to protect web applications from threats.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      author: "Ryan Park",
      date: "Mar 3, 2024",
      readTime: "9 min read",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold">
                Our <span className="bg-gradient-primary bg-clip-text text-transparent">Blog</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Insights, tutorials, and best practices from our team of expert developers.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => setActiveCategory(category)}
                    className={activeCategory === category ? "bg-gradient-primary text-primary-foreground" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="text-primary font-medium">{post.category}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.author}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg">
                    No articles found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
