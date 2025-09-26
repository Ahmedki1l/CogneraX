import { useState } from 'react';
import { Brain, Cloud, Shield, Monitor, Globe, Database, Earth, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const techCategories = [
  {
    title: "Neural Networks",
    icon: Brain,
    color: "from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]",
    technologies: [
      { name: "Transformer Architecture", level: 95 },
      { name: "Deep Learning Models", level: 92 },
      { name: "Natural Language Processing", level: 88 },
      { name: "Computer Vision", level: 85 }
    ]
  },
  {
    title: "Cloud Infrastructure",
    icon: Cloud,
    color: "from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]",
    technologies: [
      { name: "Distributed Computing", level: 98 },
      { name: "Auto-scaling Systems", level: 94 },
      { name: "Edge Computing", level: 90 },
      { name: "Real-time Processing", level: 87 }
    ]
  },
  {
    title: "Security & Privacy",
    icon: Shield,
    color: "from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]",
    technologies: [
      { name: "End-to-End Encryption", level: 99 },
      { name: "Zero-Knowledge Proofs", level: 92 },
      { name: "Federated Learning", level: 89 },
      { name: "Homomorphic Encryption", level: 85 }
    ]
  }
];

export function TechStack() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-[var(--cognerax-teal)]/5 to-background overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(30,64,175,0.1)_36%,rgba(30,64,175,0.1)_45%,transparent_46%)] bg-[size:20px_20px] animate-pulse opacity-20"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal-10)] to-[var(--cognerax-purple-10)] border border-[var(--cognerax-teal-20)] mb-6">
            <Monitor size={16} className="text-[var(--cognerax-teal)]" />
            <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
              Advanced Technology Stack
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Built on
            <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
              Cutting-Edge AI
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our platform leverages the latest advances in artificial intelligence, 
            distributed computing, and security to deliver unparalleled learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Card className="relative h-full">
                <CardContent className="p-8 relative z-10">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-6 items-center justify-center transition-all duration-300 ${
                      hoveredCategory === index ? 'scale-110 rotate-12' : ''
                    }`}
                  >
                    <category.icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                    {category.title}
                  </h3>

                  <div className="space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">{tech.name}</span>
                          <span className="text-xs text-muted-foreground">{tech.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: `${tech.level}%`,
                              animationDelay: `${index * 0.2 + techIndex * 0.1}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>

                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[var(--cognerax-teal-20)] transition-all duration-500"></div>
                
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Performance Metrics */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          {[
            { value: "99.9%", label: "System Uptime", icon: Zap },
            { value: "<50ms", label: "Response Time", icon: Globe },
            { value: "10B+", label: "Data Points", icon: Database },
            { value: "Global", label: "Scale", icon: Earth }
          ].map((metric, index) => (
            <div
              key={index}
              className="group relative h-full flex flex-col justify-center text-center p-6 rounded-2xl backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-3">
                <metric.icon size={32} className="text-[var(--cognerax-teal)]" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[var(--cognerax-teal-20)] transition-all duration-500"></div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
            
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}