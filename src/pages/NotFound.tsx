import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-feature rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-feature rounded-full blur-3xl opacity-15 animate-pulse delay-1000" />
      </div>

      <div className="text-center relative z-10 px-6">
        <h1 className="text-8xl font-bold mb-4 text-white">404</h1>
        <h2 className="text-3xl font-semibold mb-4 text-white">Page Not Found</h2>
        <p className="text-xl text-white/80 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off. 
          Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="/">
              <Home className="w-5 h-5" />
              Go Home
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
