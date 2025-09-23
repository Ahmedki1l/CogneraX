import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Users, 
  Lock, 
  Zap,
  BarChart,
  Globe
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Increased ROI',
      description: 'Average 300% ROI within 12 months',
      metric: '300%',
    },
    {
      icon: Clock,
      title: 'Faster Deployment',
      description: 'Rapid implementation and go-live',
      metric: '90% Faster',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated specialists for your project',
      metric: '50+ Experts',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance',
      metric: '99.9% Secure',
    },
  ];

  const capabilities = [
    'Real-time data processing and analytics',
    'Scalable cloud infrastructure',
    'Advanced AI and machine learning models',
    'Custom dashboard and reporting tools',
    'Automated workflow optimization',
    'Integration with existing systems',
    '24/7 monitoring and support',
    'Compliance with industry standards',
  ];

  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose CogneraX?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We deliver measurable results with cutting-edge technology and proven methodologies 
            that transform how businesses operate and compete.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-primary">{feature.metric}</p>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Features */}
        <div className="mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-0">
          <div className="lg:pr-8">
            <h3 className="text-2xl font-bold text-foreground">
              Comprehensive Platform Capabilities
            </h3>
            <p className="mt-4 text-muted-foreground">
              Our integrated platform combines the latest in AI, analytics, and automation 
              to deliver solutions that grow with your business needs.
            </p>
            
            <div className="mt-8 space-y-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{capability}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Badge variant="secondary">
                <BarChart className="mr-1 h-3 w-3" />
                Analytics
              </Badge>
              <Badge variant="secondary">
                <Zap className="mr-1 h-3 w-3" />
                Automation
              </Badge>
              <Badge variant="secondary">
                <Globe className="mr-1 h-3 w-3" />
                Cloud-Native
              </Badge>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODUzMjU3NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Data Analytics Dashboard"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}