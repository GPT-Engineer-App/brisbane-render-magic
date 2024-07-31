import React from "react";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import AuthForms from "../components/AuthForms";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="home" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-24">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to Brisbane Rendering Co
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

        <section id="services" className="py-16 bg-background">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Exterior Rendering", "Interior Rendering", "Decorative Finishes"].map((service, index) => (
                <div key={index} className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Gallery />

        <section id="auth" className="py-16 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">User Authentication</h2>
            <div className="flex justify-center">
              <AuthForms />
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;