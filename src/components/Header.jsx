import { Building2 } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Brisbane Rendering Co</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
