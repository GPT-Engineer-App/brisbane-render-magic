import { useState, useEffect } from "react";
import Header from "../components/Header";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
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
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-6"
            >
              Welcome to Brisbane Rendering Co
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl mb-10"
            >
              Your trusted partner for high-quality rendering services in Brisbane
            </motion.p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent/90 transition-colors inline-block"
            >
              Get a Free Quote
            </motion.a>
          </div>
        </section>

        <section id="services" className="py-24 bg-background">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-card p-8 rounded-lg shadow-lg transition-all duration-300 ${
                    activeService === index ? "ring-4 ring-primary" : ""
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-2" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-secondary py-24">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-4 bg-background p-4 rounded-lg shadow"
                >
                  <Phone className="h-8 w-8 text-primary" />
                  <span className="text-lg">07 1234 5678</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-center space-x-4 bg-background p-4 rounded-lg shadow"
                >
                  <Mail className="h-8 w-8 text-primary" />
                  <span className="text-lg">info@brisbanerendering.co</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center space-x-4 bg-background p-4 rounded-lg shadow"
                >
                  <MapPin className="h-8 w-8 text-primary" />
                  <span className="text-lg">123 Render Street, Brisbane, QLD 4000</span>
                </motion.div>
              </div>
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 bg-background p-8 rounded-lg shadow-lg"
              >
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md border border-input bg-background" />
                <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md border border-input bg-background" />
                <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-md border border-input bg-background"></textarea>
                <button type="submit" className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-lg font-semibold">
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 text-center">
        <p>&copy; 2024 Brisbane Rendering Co. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
