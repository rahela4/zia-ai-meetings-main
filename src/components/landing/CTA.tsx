import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const benefits = [
  "15-30 qualified meetings guaranteed per month",
  "Complete setup and optimization included",
  "No hiring, training, or management overhead",
  "Real-time analytics and performance tracking",
  "Full compliance with GDPR and CAN-SPAM"
];

const CTA = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-10 right-20 w-64 h-64 gradient-feature rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 left-20 w-80 h-80 gradient-feature rounded-full blur-3xl opacity-15 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-strong">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="mb-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Ready to Scale Your Pipeline?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Join 100+ B2B SaaS companies already using our AI SDR to book more meetings, 
                  close more deals, and grow faster than ever before.
                </p>
              </div>

              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Calendly Widget */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Book Your 30-Minute Discovery Call</h3>
                <div className="bg-white rounded-lg p-4">
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/ziasolutions/30min" 
                    style={{ minWidth: '320px', height: '700px' }}
                  />
                </div>
              </div>


              {/* Trust indicators */}
              <div className="text-white/80 text-sm">
                <p>✓ No long-term contracts  ✓ 30-day money-back guarantee</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company branding */}
        <div className="text-center mt-12">
          <div className="text-white/60 text-sm mb-2">Powered by</div>
          <div className="text-2xl font-bold text-white">Zia Solutions</div>
          <div className="text-white/80 text-sm">solutionsbyzia.com</div>
        </div>
      </div>
    </section>
  );
};

export default CTA;