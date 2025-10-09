import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      content: "ImpulseOne transformed our vision into reality. Their technical expertise and commitment to excellence exceeded all expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, FinanceFlow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      content: "Working with ImpulseOne was a game-changer. They delivered a scalable solution that has significantly improved our operational efficiency.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      content: "The team's attention to detail and proactive communication made the entire development process smooth and stress-free. Outstanding work!",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Founder, E-Shop Pro",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      content: "From design to deployment, ImpulseOne handled everything professionally. Our platform now handles 10x more traffic with ease.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full animate-fade-in-up"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-card border-border hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
