import { useState, useEffect } from "react";
import { Building2, Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`bg-primary text-primary-foreground py-4 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Building2 className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Brisbane Rendering Co</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-lg hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-primary-foreground/10 transition-colors" onClick={toggleTheme}>
            {theme === "light" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
          </button>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-primary"
          >
            <ul className="flex flex-col items-center py-4">
              {menuItems.map((item) => (
                <li key={item.href} className="py-2">
                  <a
                    href={item.href}
                    className="text-lg hover:text-accent transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
