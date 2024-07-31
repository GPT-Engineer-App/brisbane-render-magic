import React from "react";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeService, setActiveService] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const { data: heroImage, isLoading: heroImageLoading } = useQuery({
    queryKey: ['heroImage'],
    queryFn: () => fetchGeneratedImage('Modern rendered house exterior'),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulating fetching testimonials from an API
    const fetchTestimonials = async () => {
      // In a real application, this would be an API call
      const mockTestimonials = [
        { id: 1, name: "John Doe", content: "Brisbane Rendering Co did an amazing job on our house. The finish is perfect!", rating: 5 },
        { id: 2, name: "Jane Smith", content: "Professional service from start to finish. Highly recommended!", rating: 5 },
        { id: 3, name: "Mike Johnson", content: "The team was punctual, clean, and the results exceeded our expectations.", rating: 4 },
      ];
      setTestimonials(mockTestimonials);
    };
    fetchTestimonials();
  }, []);

  const services = [
    {
      title: "Cement Rendering",
      description: "Professional cement rendering services for a smooth, durable finish on your walls.",
      benefits: ["Long-lasting", "Weather-resistant", "Improves insulation"],
    },
    {
      title: "Acrylic Rendering",
      description: "High-quality acrylic rendering for a modern, flexible, and crack-resistant surface.",
      benefits: ["Quick-drying", "Color-integrated", "Low maintenance"],
    },
    {
      title: "Texture Coating",
      description: "Add depth and character to your walls with our expert texture coating services.",
      benefits: ["Customizable patterns", "Hides imperfections", "Enhances curb appeal"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-24">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Home with Brisbane Rendering Co
            </h1>
            <p className="text-2xl mb-10">
              Expert rendering services for a stunning and durable finish
            </p>
            <div>
              <Button asChild size="lg" className="mr-4">
                <a href="#contact">Get a Free Quote</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-background">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const { data: serviceImage } = useQuery({
                  queryKey: ['serviceImage', service.title],
                  queryFn: () => fetchGeneratedImage(`${service.title} rendering service`),
                });

                return (
                  <Card 
                    key={index} 
                    className={`transition-all duration-300 ${activeService === index ? "ring-4 ring-primary" : ""}`}
                  >
                    <img 
                      src={serviceImage} 
                      alt={service.title} 
                      className="w-full h-48 object-cover rounded-t-lg" 
                    />
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-primary mr-2" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Learn More</Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => {
                  const { data: testimonialImage } = useQuery({
                    queryKey: ['testimonialImage', testimonial.id],
                    queryFn: () => fetchGeneratedImage(`House rendering project for ${testimonial.name}`),
                  });

                  return (
                    <CarouselItem key={testimonial.id}>
                      <Card>
                        <img src={testimonialImage} alt={`${testimonial.name}'s project`} className="w-full h-48 object-cover rounded-t-lg" />
                        <CardHeader>
                          <CardTitle>{testimonial.name}</CardTitle>
                        <CardDescription>{"★".repeat(testimonial.rating)}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{testimonial.content}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section id="gallery" className="bg-background py-24">
          <Gallery />
        </section>

        <section id="contact" className="bg-secondary py-24">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="h-6 w-6 mr-2" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">07 1234 5678</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Mail className="h-6 w-6 mr-2" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">info@brisbanerendering.co</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-6 w-6 mr-2" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">123 Render Street, Brisbane, QLD 4000</p>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>We'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md border border-input bg-background" />
                    <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md border border-input bg-background" />
                    <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-md border border-input bg-background"></textarea>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="services" className="py-24 bg-background">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
            {/* Add service content here */}
          </div>
        </section>

        <section id="contact" className="bg-secondary py-24">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
            {/* Add contact form or contact information here */}
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Brisbane Rendering Co. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
