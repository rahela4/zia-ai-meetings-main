import { Button } from "@/components/ui/button";
import { Calendar, Briefcase, TrendingUp } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo placeholder - can be added later */}
            <div className="text-white font-bold text-xl">
              Zia Solutions
            </div>
            
            {/* Navigation buttons */}
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10 hover:text-white"
                onClick={() => scrollToSection('book-call')}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Call
              </Button>
              
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10 hover:text-white"
                onClick={() => scrollToSection('services')}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Services
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Trust indicator below nav */}
      <div className="absolute top-16 left-0 right-0 z-40 flex justify-center pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium shadow-soft">
          <TrendingUp className="w-4 h-4" />
          Trusted by 100+ B2B SaaS Companies
        </div>
      </div>
    </>
  );
};

export default Navigation;