import Header from "../components/Header";
import { Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-secondary py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to Brisbane Rendering Co</h2>
            <p className="text-xl mb-8">Your trusted partner for high-quality rendering services in Brisbane</p>
            <a href="#contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Get a Quote
            </a>
          </div>
        </section>

        <section id="services" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Cement Rendering", "Acrylic Rendering", "Texture Coating"].map((service, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">{service}</h3>
                  <p className="text-muted-foreground">Professional {service.toLowerCase()} services for residential and commercial properties.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-secondary py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>07 1234 5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>info@brisbanerendering.co</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>123 Render Street, Brisbane, QLD 4000</span>
                </div>
              </div>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-2 rounded-md border border-input" />
                <input type="email" placeholder="Your Email" className="w-full p-2 rounded-md border border-input" />
                <textarea placeholder="Your Message" rows="4" className="w-full p-2 rounded-md border border-input"></textarea>
                <button type="submit" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 text-center">
        <p>&copy; 2024 Brisbane Rendering Co. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
