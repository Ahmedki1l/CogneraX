import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { navigate } from '../components/Router';
import { 
  Brain, 
  BookOpen, 
  FileText, 
  Users, 
  GraduationCap, 
  User, 
  Building, 
  Rocket,
  Zap,
  Target,
  BarChart3,
  CheckCircle,
  Star
} from 'lucide-react';

export function Products() {
  const features = [
    {
      icon: Brain,
      title: 'Content Analysis & Rebuilding',
      description: 'AI analyzes weak points in educational content and rebuilds lessons with improved structure and clarity.',
      details: ['PDF/DOCX/PPTX export', 'Content optimization', 'Structure enhancement'],
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Lesson Planning',
      description: 'Generate complete lesson plans with organized sections and precise time allocation for each segment.',
      details: ['Structured lesson flow', 'Time management', 'Activity planning'],
      color: 'from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]',
    },
    {
      icon: FileText,
      title: 'Smart Question Generation',
      description: 'Create diverse questions and assessments with multiple difficulty levels and various formats.',
      details: ['Multiple choice questions', 'Fill-in-the-blank', 'Essay questions', 'Code assessments'],
      color: 'from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]',
    },
    {
      icon: Users,
      title: 'Institution Management',
      description: 'Complete management system for adding teachers and students, tracking progress, and API integration.',
      details: ['User management', 'Progress tracking', 'API integration', 'Analytics dashboard'],
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-purple)]',
    },
  ];

  const targetAudiences = [
    {
      icon: GraduationCap,
      title: 'High School Students',
      description: 'Specialized tools and content for secondary education and exam preparation.',
      features: ['Exam preparation', 'Subject-specific content', 'Progress tracking'],
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]',
    },
    {
      icon: User,
      title: 'Self Learners',
      description: 'Personalized learning paths for independent study and skill development.',
      features: ['Self-paced learning', 'Adaptive content', 'Personal progress'],
      color: 'from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]',
    },
    {
      icon: Building,
      title: 'Corporate Training',
      description: 'Intelligent employee training and development programs for companies.',
      features: ['Skills training', 'Company integration', 'Performance analytics'],
      color: 'from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]',
    },
  ];

  const valueProps = [
    {
      audience: 'Teachers',
      benefit: 'Save time and effort in content preparation',
      icon: BookOpen,
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]',
    },
    {
      audience: 'Students',
      benefit: 'Deeper understanding through personalized learning',
      icon: Brain,
      color: 'from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]',
    },
    {
      audience: 'Institutions',
      benefit: 'Comprehensive tracking of student and teacher progress',
      icon: BarChart3,
      color: 'from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]',
    },
    {
      audience: 'Companies',
      benefit: 'Intelligent and rapid employee training',
      icon: Target,
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-purple)]',
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-[var(--cognerax-teal-10)] overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(32,178,170,0.05)_25%,rgba(32,178,170,0.05)_26%,transparent_27%,transparent_74%,rgba(32,178,170,0.05)_75%,rgba(32,178,170,0.05)_76%,transparent_77%,transparent),linear-gradient(rgba(32,178,170,0.05)_24%,transparent_25%,transparent_26%,rgba(32,178,170,0.05)_27%,rgba(32,178,170,0.05)_74%,transparent_75%,transparent_76%,rgba(32,178,170,0.05)_77%)] bg-[size:75px_75px]" />
      </div>

      <div className="relative z-20 space-y-24 py-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--cognerax-teal-10)] to-[var(--cognerax-purple-10)] border border-[var(--cognerax-teal-20)] mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Rocket size={18} className="text-[var(--cognerax-teal)]" />
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                Private Beta • AI-Powered Education Platform
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8">
              <span className="bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                CogneraX Learn
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              Currently in private beta, CogneraX Learn revolutionizes how teachers and students 
              engage with educational content through AI-powered analysis and content generation 
              that adapts to student needs.
            </p>

            <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] hover:shadow-lg hover:shadow-[var(--cognerax-teal-50)] text-white font-semibold px-8 py-6 text-lg group" 
                  onClick={() => navigate('/contact')}
                >
                  Request Early Access
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Button>
              </div>
              
              <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-[var(--cognerax-teal)] text-[var(--cognerax-teal)] hover:bg-[var(--cognerax-teal-10)] px-8 py-6 text-lg backdrop-blur-sm" 
                  onClick={() => navigate('/contact')}
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-video max-w-5xl mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--cognerax-teal)]/20 via-[var(--cognerax-blue)]/20 to-[var(--cognerax-purple)]/20 backdrop-blur-3xl border border-white/10 shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHBvd2VyZWQlMjBlZHVjYXRpb24lMjB0ZWNobm9sb2d5JTIwcGxhdGZvcm18ZW58MXx8fHwxNzU4NjQyNTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="CogneraX Learn Platform"
                  className="w-full h-full object-cover rounded-3xl mix-blend-overlay"
                />
              </div>

              {/* Floating UI Elements */}
              {[Brain, BookOpen, Users].map((IconComponent, i) => (
                <div
                  key={i}
                  className="absolute w-16 h-16 rounded-2xl bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] backdrop-blur-sm border border-white/20 flex items-center justify-center animate-float"
                  style={{
                    left: `${15 + i * 30}%`,
                    top: `${20 + i * 25}%`,
                    animationDelay: `${i * 0.7}s`,
                    animationDuration: `${4 + i}s`,
                  }}
                >
                  <IconComponent size={24} className="text-white" />
                </div>
              ))}

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] rounded-3xl opacity-20 blur-xl"></div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal-10)] to-[var(--cognerax-purple-10)] border border-[var(--cognerax-teal-20)] mb-6">
              <Zap size={16} className="text-[var(--cognerax-teal)]" />
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                Core Features
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Powerful
              <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                AI-Driven Tools
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Transform every aspect of the educational experience with intelligent automation and insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="relative h-full ">
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
                        <feature.icon size={32} className="text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="space-y-3">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-muted-foreground">
                          <CheckCircle size={16} className="mr-3 text-[var(--cognerax-teal)] flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Target Audiences */}
        <section className="relative py-24 bg-gradient-to-b from-[var(--cognerax-teal)]/5 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal-10)] to-[var(--cognerax-purple-10)] border border-[var(--cognerax-teal-20)] mb-6">
                <Users size={16} className="text-[var(--cognerax-teal)]" />
                <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                  Specialized Sections
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Tailored for
                <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                  Every Learner
                </span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Customized experiences for different learning contexts and educational needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {targetAudiences.map((audience, index) => (
                <div
                  key={index}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card className="relative h-full  text-center">
                    
                    <CardContent className="p-8 relative z-10">
                      <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${audience.color} mb-6 items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
                        <audience.icon size={40} className="text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                        {audience.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {audience.description}
                      </p>

                      <div className="space-y-3">
                        {audience.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center justify-center text-muted-foreground">
                            <Star size={16} className="mr-2 text-[var(--cognerax-purple)]" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${audience.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal-10)] to-[var(--cognerax-purple-10)] border border-[var(--cognerax-teal-20)] mb-6">
              <Target size={16} className="text-[var(--cognerax-teal)]" />
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                Value for Everyone
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Measurable
              <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                Impact & Benefits
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              CogneraX Learn delivers quantifiable benefits to every stakeholder in the educational ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="relative h-full ">
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${prop.color} items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
                        <prop.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                          For {prop.audience}
                        </h3>
                        <p className="mt-2 text-muted-foreground leading-relaxed">
                          {prop.benefit}
                        </p>
                      </div>
                    </div>
                  </CardContent>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${prop.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-24 bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,0.1)_36%,rgba(255,255,255,0.1)_45%,transparent_46%)] bg-[size:20px_20px] animate-pulse"></div>
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
            <div className="mx-auto max-w-3xl text-center text-white animate-fade-in-up">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Transform Your Educational Experience?
              </h2>

              <p className="text-xl text-white/90 leading-relaxed mb-12">
                Be among the first to experience the future of learning with CogneraX Learn's 
                private beta program.
              </p>

              <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
                  <Button 
                    size="lg" 
                    className="bg-white text-[var(--cognerax-blue)] hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-lg" 
                    onClick={() => navigate('/contact')}
                  >
                    Request Early Access
                  </Button>
                </div>
                
                <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-[var(--cognerax-blue)] backdrop-blur-sm px-8 py-6 text-lg" 
                    onClick={() => navigate('/contact')}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}