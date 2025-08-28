import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/ai-sdr-dashboard.jpg";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Navigation />
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-feature rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-feature rounded-full blur-3xl opacity-15 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up pt-20">
            
            <div className="mb-4">
              <span className="text-lg md:text-xl text-white/80 font-medium">Introducing</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                The Pipeline Accelerator🚀
              </h2>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Scale Your Outbound Pipeline with{" "}
              <span className="bg-white/20 px-2 py-1 rounded-lg">AI SDR</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Book 15-30 qualified meetings per month for your B2B SaaS. 
              <strong className="text-white"> No hiring, no overhead.</strong>
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-8 max-w-md">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15-30</div>
                <div className="text-white/80 text-sm">Meetings/Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">0</div>
                <div className="text-white/80 text-sm">Hiring Needed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/80 text-sm">AI Automated</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                <Calendar className="w-5 h-5" />
                Book Your Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
                <Users className="w-5 h-5" />
                View Case Studies
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last animate-fade-in-up delay-300">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI SDR dashboard showing automated sales pipeline, lead scoring, and meeting booking interface for B2B SaaS companies"
                className="w-full h-auto rounded-2xl shadow-strong transform hover:scale-105 transition-smooth"
              />
              {/* Floating stat cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-medium animate-bounce">
                <div className="text-2xl font-bold text-primary">127%</div>
                <div className="text-sm text-muted-foreground">Pipeline Growth</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-medium animate-bounce delay-500">
                <div className="text-2xl font-bold text-accent">23</div>
                <div className="text-sm text-muted-foreground">Meetings This Week</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;