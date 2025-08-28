import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Target, Calendar, BarChart3, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered SDR",
    description: "Advanced AI that understands your ICP and crafts personalized outreach at scale with human-like conversations."
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Identify and reach decision-makers at your ideal B2B SaaS prospects with 90%+ accuracy rates."
  },
  {
    icon: Calendar,
    title: "Meeting Qualification",
    description: "Pre-qualify leads and book high-intent meetings directly into your calendar. No time wasters."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time insights into your pipeline with detailed reporting on outreach performance and ROI."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Get your AI SDR up and running quickly. No lengthy setup or technical integration required."
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Built-in GDPR and CAN-SPAM compliance ensures your outreach stays within legal boundaries."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose Our AI SDR?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop burning budget on underperforming SDR teams. Our AI delivers consistent, 
            measurable results without the overhead, training costs, or management headaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="gradient-card border-none shadow-soft hover:shadow-medium transition-smooth group cursor-pointer"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full gradient-feature group-hover:scale-110 transition-bounce">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 p-8 rounded-2xl gradient-hero text-white text-center shadow-strong">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">15-30</div>
              <div className="text-white/80">Qualified Meetings/Month</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">45%</div>
              <div className="text-white/80">Average Response Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="text-white/80">Faster Than Human SDRs</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$0</div>
              <div className="text-white/80">Hiring & Training Costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;