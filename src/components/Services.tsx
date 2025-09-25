import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  Brain, 
  BarChart3, 
  Cog, 
  Shield, 
  Cloud, 
  Smartphone,
  ArrowRight
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions including predictive analytics, natural language processing, and computer vision.',
      features: ['Predictive Analytics', 'NLP Solutions', 'Computer Vision', 'Deep Learning Models'],
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization tools.',
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Custom Dashboards'],
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions that reduce costs and improve efficiency.',
      features: ['RPA Implementation', 'Workflow Optimization', 'Integration Services', 'API Development'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern, flexible business operations.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Services', 'Security & Compliance'],
    },
    {
      icon: Smartphone,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes and technology.',
      features: ['Strategy Consulting', 'Technology Assessment', 'Implementation', 'Change Management'],
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your data and systems from evolving threats.',
      features: ['Security Assessment', 'Threat Detection', 'Compliance Solutions', '24/7 Monitoring'],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[var(--muted-50)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Comprehensive technology solutions designed to accelerate your business growth 
            and digital transformation journey.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--primary-10)] group-hover:bg-[var(--primary-10)] transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="mt-4">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="mt-6 w-full group/button">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}