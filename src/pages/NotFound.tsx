
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/common/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="container max-w-md text-center px-4 py-20">
          <div className="rounded-full w-20 h-20 bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-pulse-subtle">
            <span className="text-3xl">🔮</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">404</h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in [animation-delay:100ms]">
            The page you seek is not written in your numerology chart
          </p>
          <Button 
            onClick={() => navigate("/")} 
            className="animate-fade-in [animation-delay:200ms]"
          >
            Return to Home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
