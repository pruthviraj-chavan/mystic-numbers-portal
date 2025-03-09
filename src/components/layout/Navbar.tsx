
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Appointment", path: "/appointment" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md border-b"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-bold text-gradient"
        >
          Mystic Numerology
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:origin-left",
                  "after:transition-transform after:duration-300",
                  isActive
                    ? "text-primary font-medium after:bg-primary after:scale-x-100"
                    : "text-foreground/80 hover:text-foreground after:bg-foreground/30 after:scale-x-0 hover:after:scale-x-100"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="ml-2">
            <ModeToggle />
          </div>
          <Button asChild size="sm" className="ml-2 rounded-full">
            <NavLink to="/appointment">Book Now</NavLink>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="ml-1"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <nav className="container py-4 flex flex-col border-t bg-background/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "py-3 px-4 rounded-md transition-colors",
                    isActive
                      ? "text-primary font-medium bg-primary/10"
                      : "text-foreground/80 hover:text-foreground hover:bg-accent/10"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button asChild className="mt-2 rounded-full mx-4">
              <NavLink to="/appointment">Book Now</NavLink>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
