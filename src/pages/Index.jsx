import React from "react";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-24">
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