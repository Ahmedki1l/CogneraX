import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Brain, Target, MessageSquare, TrendingUp, BookOpen, Users, Sparkles } from 'lucide-react';

const aiFeatures = [
  {
    icon: Brain,
    title: "Neural Learning Engine",
    description:
      "Advanced AI that understands your learning patterns and optimizes content delivery",
    color: "from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]",
    stats: "98% accuracy in learning prediction",
  },
  {
    icon: Target,
    title: "Adaptive Pathways",
    description:
      "Dynamically adjusts curriculum based on your progress and learning style",
    color: "from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]",
    stats: "Personalized for 10M+ learning patterns",
  },
  {
    icon: MessageSquare,
    title: "AI Tutor Assistant",
    description:
      "24/7 intelligent tutoring with natural language understanding",
    color: "from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]",
    stats: "Available in 50+ languages",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description:
      "Deep insights into your learning progress with predictive analytics",
    color: "from-[var(--cognerax-teal)] to-[var(--cognerax-purple)]",
    stats: "Track 100+ learning metrics",
  },
  {
    icon: BookOpen,
    title: "Content Generation",
    description:
      "AI-powered creation of custom exercises, quizzes, and learning materials",
    color: "from-[var(--cognerax-blue)] to-[var(--cognerax-teal)]",
    stats: "Generate unlimited practice content",
  },
  {
    icon: Users,
    title: "Collaborative AI",
    description:
      "Smart group learning with AI-facilitated discussions and peer matching",
    color: "from-[var(--cognerax-purple)] to-[var(--cognerax-blue)]",
    stats: "Connect with optimal study partners",
  },
];

export function AIShowcase() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-[var(--cognerax-teal-10)] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-[var(--cognerax-teal)] to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-br from-[var(--cognerax-purple)] to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal-10)] to-[var(--cognerax-purple-10)] border border-[var(--cognerax-teal-20)] mb-6">
            <Sparkles size={16} className="text-[var(--cognerax-teal)]" />
            <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
              AI-Powered Features
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Intelligence That
            <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
              Transforms Learning
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the cutting-edge of educational technology with AI
            systems that understand, adapt, and evolve with every learner's
            unique journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <Card className="relative h-full ">

                <CardContent className="p-8 relative z-10">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${
                      feature.color
                    } mb-6 items-center justify-center transition-transform duration-300 ${
                      hoveredFeature === index ? "scale-110 rotate-6" : ""
                    }`}
                  >
                    <feature.icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                      {feature.stats}
                    </span>

                    <div
                      className={`opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                        hoveredFeature === index ? "translate-x-1" : ""
                      }`}
                    >
                      <span className="text-[var(--cognerax-teal)] text-lg">
                        →
                      </span>
                    </div>
                  </div>
                </CardContent>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[var(--cognerax-teal-20)] transition-all duration-500"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-20 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-3xl bg-gradient-to-r from-[var(--cognerax-teal-10)] via-[var(--cognerax-blue-10)] to-[var(--cognerax-purple-10)] border border-[var(--cognerax-teal-20)] backdrop-blur-sm">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Ready to Experience AI-Powered Learning?
              </h3>
              <p className="text-muted-foreground">
                Join thousands of learners already transforming their education
                with CogneraX Learn
              </p>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] hover:from-[var(--cognerax-blue)] hover:to-[var(--cognerax-purple)] text-white shadow-lg hover:shadow-xl transition-all duration-300 group whitespace-nowrap"
            >
              Get Early Access
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
