import { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { navigate } from '../components/Router';
import { 
  Brain, 
  Zap, 
  FileText, 
  Clock,
  Cpu,
  ClipboardCheck,
  BarChart3,
  Shield,
  Cloud,
  Smartphone,
  Settings,
  Globe,
  Upload,
  Network,
  Sparkles,
  Calendar,
  Target,
  TrendingUp,
  GitBranch,
  ChevronRight,
  Rocket,
  CheckCircle
} from 'lucide-react';

export function Features() {
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const keyMetrics = [
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Intelligent content analysis and rebuilding',
      metric: '99.7%',
      subtext: 'Accuracy',
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]',
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Streamlined lesson planning and preparation',
      metric: '80%',
      subtext: 'Time Saved',
      color: 'from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]',
    },
    {
      icon: FileText,
      title: 'Smart Generation',
      description: 'AI-powered questions and assessments',
      metric: '10x',
      subtext: 'Faster Creation',
      color: 'from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]',
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Comprehensive analytics and insights',
      metric: '24/7',
      subtext: 'Real-time',
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-purple)]',
    },
  ];

  const detailedFeatures = [
    {
      category: 'AI-Powered Content',
      icon: Cpu,
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]',
      features: [
        'Intelligent content analysis and optimization',
        'Automated weak point identification',
        'Smart content restructuring',
        'Multi-format content export (PDF, DOCX, PPTX)',
        'Language processing and enhancement',
        'Content personalization based on learning styles',
      ],
    },
    {
      category: 'Assessment & Testing',
      icon: ClipboardCheck,
      color: 'from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]',
      features: [
        'Multi-level question generation',
        'Various question formats (MCQ, fill-in, essay, code)',
        'Adaptive difficulty adjustment',
        'Automated grading and feedback',
        'Performance analytics and insights',
        'Custom assessment creation tools',
      ],
    },
    {
      category: 'Management & Analytics',
      icon: BarChart3,
      color: 'from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]',
      features: [
        'Comprehensive student progress tracking',
        'Teacher performance analytics',
        'Institution-wide dashboard',
        'Real-time learning insights',
        'Custom reporting tools',
        'Data export and integration capabilities',
      ],
    },
    {
      category: 'Integration & Security',
      icon: Shield,
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-purple)]',
      features: [
        'API integration for existing systems',
        'Single sign-on (SSO) support',
        'GDPR and educational data privacy compliance',
        'Role-based access control',
        'Secure data encryption',
        'Regular security audits and updates',
      ],
    },
  ];

  const technicalSpecs = [
    {
      title: 'Cloud Infrastructure',
      icon: Cloud,
      description: 'Scalable, reliable cloud-based platform with 99.9% uptime guarantee.',
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]',
    },
    {
      title: 'Mobile Responsive',
      icon: Smartphone,
      description: 'Fully responsive design optimized for all devices and screen sizes.',
      color: 'from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]',
    },
    {
      title: 'API Integration',
      icon: Settings,
      description: 'RESTful APIs for seamless integration with existing educational systems.',
      color: 'from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]',
    },
    {
      title: 'Global Accessibility',
      icon: Globe,
      description: 'Multi-language support and accessibility features for inclusive education.',
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-purple)]',
    },
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Content Upload',
      description: 'Upload your educational materials in any supported format',
      icon: Upload,
    },
    {
      step: '2',
      title: 'AI Analysis',
      description: 'Our AI analyzes content structure, identifies improvements',
      icon: Network,
    },
    {
      step: '3',
      title: 'Content Enhancement',
      description: 'AI rebuilds content with optimized structure and clarity',
      icon: Sparkles,
    },
    {
      step: '4',
      title: 'Lesson Planning',
      description: 'Generate comprehensive lesson plans with time allocation',
      icon: Calendar,
    },
    {
      step: '5',
      title: 'Assessment Creation',
      description: 'Create diverse questions and tests automatically',
      icon: Target,
    },
    {
      step: '6',
      title: 'Progress Tracking',
      description: 'Monitor student progress and learning outcomes',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-[var(--cognerax-teal)]/5 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(32,178,170,0.05)_25%,rgba(32,178,170,0.05)_26%,transparent_27%,transparent_74%,rgba(32,178,170,0.05)_75%,rgba(32,178,170,0.05)_76%,transparent_77%,transparent),linear-gradient(rgba(32,178,170,0.05)_24%,transparent_25%,transparent_26%,rgba(32,178,170,0.05)_27%,rgba(32,178,170,0.05)_74%,transparent_75%,transparent_76%,rgba(32,178,170,0.05)_77%)] bg-[size:75px_75px]" />
      </div>

      <div className="relative z-20 space-y-24 py-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-teal)]/20 mb-8">
              <Zap size={16} className="text-[var(--cognerax-teal)]" />
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                Advanced AI Features
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8">
              <span className="text-foreground">Powerful Features for </span>
              <span className="bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                Modern Education
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Discover how CogneraX Learn's advanced AI capabilities transform every aspect 
              of the educational experience. Currently in private beta.
            </p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-[var(--cognerax-teal)]/30 transition-all duration-500 overflow-hidden text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--cognerax-teal)]/5 via-transparent to-[var(--cognerax-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${metric.color} mb-6 items-center justify-center hover:scale-110 hover:rotate-6 transition-transform duration-300`}>
                      <metric.icon size={32} className="text-white" />
                    </div>

                    <div className="text-4xl font-bold bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent mb-2">
                      {metric.metric}
                    </div>
                    <div className="text-sm text-muted-foreground mb-3">{metric.subtext}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                      {metric.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {metric.description}
                    </p>
                  </CardContent>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Features */}
        <section className="relative py-24 bg-gradient-to-b from-[var(--cognerax-teal)]/5 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-teal)]/20 mb-6">
                <Cpu size={16} className="text-[var(--cognerax-teal)]" />
                <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                  Comprehensive Features
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Complete
                <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                  Feature Ecosystem
                </span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Every feature is designed to enhance the educational experience with AI-powered 
                tools currently available in our private beta program.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {detailedFeatures.map((category, index) => (
                <div
                  key={index}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-[var(--cognerax-teal)]/30 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--cognerax-teal)]/5 via-transparent to-[var(--cognerax-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} items-center justify-center hover:scale-110 hover:rotate-6 transition-transform duration-300`}>
                          <category.icon size={24} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                          {category.category}
                        </h3>
                      </div>

                      <div className="space-y-4">
                        {category.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-[var(--cognerax-teal)]" />
                            <span className="text-muted-foreground leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-teal)]/20 mb-6">
              <GitBranch size={16} className="text-[var(--cognerax-teal)]" />
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                Workflow Process
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              How CogneraX Learn
              <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                Transforms Education
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              A simple, streamlined workflow that transforms your educational content 
              into intelligent learning experiences.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workflowSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-500 ${
                    activeStep === index ? 'border-[var(--cognerax-teal)]/50 shadow-lg' : 'hover:border-[var(--cognerax-teal)]/30'
                  }`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] text-white font-bold text-lg transition-transform duration-500 ${
                          activeStep === index ? 'scale-110' : ''
                        }`}>
                          {step.step}
                        </div>
                        <div className={`absolute -inset-1 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] blur-md transition-opacity duration-500 ${
                          activeStep === index ? 'opacity-30' : 'opacity-0'
                        }`}/>
                      </div>
                      
                      <div className={`p-2 rounded-lg bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-blue)]/10 transition-transform duration-300 ${
                        activeStep === index ? 'scale-110' : ''
                      }`}>
                        <step.icon size={24} className="text-[var(--cognerax-teal)]" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="relative py-24 bg-gradient-to-b from-background to-[var(--cognerax-teal)]/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-teal)]/20 mb-6">
                <Shield size={16} className="text-[var(--cognerax-teal)]" />
                <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                  Technical Excellence
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Enterprise-Grade
                <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                  Infrastructure
                </span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Built on modern, scalable infrastructure with enterprise-grade security and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalSpecs.map((spec, index) => (
                <div
                  key={index}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-[var(--cognerax-teal)]/30 transition-all duration-500 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--cognerax-teal)]/5 via-transparent to-[var(--cognerax-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-8 relative z-10">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${spec.color} mb-6 items-center justify-center hover:scale-110 hover:rotate-6 transition-transform duration-300`}>
                        <spec.icon size={32} className="text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                        {spec.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {spec.description}
                      </p>
                    </CardContent>

                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${spec.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Highlights with Image */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-teal)]/20">
                  <Brain size={16} className="text-[var(--cognerax-teal)]" />
                  <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                    Advanced Capabilities
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-foreground">
                  Cutting-Edge AI
                  <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                    Technology Stack
                  </span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our platform leverages cutting-edge artificial intelligence to deliver 
                  personalized learning experiences that adapt to individual needs and learning styles.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  'Real-time content analysis and optimization',
                  'Adaptive learning path generation', 
                  'Intelligent assessment creation',
                  'Automated progress tracking and analytics'
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-[var(--cognerax-teal)]" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: BarChart3, label: 'Analytics' },
                  { icon: Zap, label: 'AI-Powered' },
                  { icon: Globe, label: 'Cloud-Based' }
                ].map((badge, index) => (
                  <Badge key={index} className="bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] text-white border-0 px-4 py-2">
                    <badge.icon size={16} className="mr-2" />
                    {badge.label}
                  </Badge>
                ))}
              </div>

              <div className="hover:scale-105 transition-transform duration-300">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] hover:shadow-lg hover:shadow-[var(--cognerax-teal)]/25 text-white font-semibold group" 
                  onClick={() => navigate('/contact')}
                >
                  Request Beta Access
                  <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--cognerax-teal)]/20 via-[var(--cognerax-blue)]/20 to-[var(--cognerax-purple)]/20 backdrop-blur-3xl border border-white/10 shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGZlYXR1cmVzJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTg2NDI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="AI Features Technology"
                    className="w-full h-full object-cover rounded-3xl mix-blend-overlay"
                  />
                </div>

                {/* Floating Feature Icons */}
                {[Brain, ClipboardCheck, BarChart3, Shield].map((IconComponent, i) => (
                  <div
                    key={i}
                    className="absolute w-16 h-16 rounded-2xl bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] backdrop-blur-sm border border-white/20 flex items-center justify-center animate-float"
                    style={{
                      top: i === 0 ? '10%' : i === 1 ? '70%' : i === 2 ? '20%' : '80%',
                      left: i === 0 ? '80%' : i === 1 ? '85%' : i === 2 ? '10%' : '5%',
                      animationDelay: `${i * 0.5}s`
                    }}
                  >
                    <IconComponent size={24} className="text-white" />
                  </div>
                ))}

                {/* Abstract decorative elements */}
                <div className="absolute -inset-6 bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] rounded-full opacity-10 blur-3xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-24 bg-gradient-to-br from-[var(--cognerax-teal)]/10 via-[var(--cognerax-blue)]/10 to-[var(--cognerax-purple)]/10">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--cognerax-teal)]/5 via-transparent to-[var(--cognerax-purple)]/5"></div>
          
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/20 to-[var(--cognerax-purple)]/20 border border-[var(--cognerax-teal)]/30 mb-6">
                <Rocket size={16} className="text-[var(--cognerax-teal)]" />
                <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                  Join the Beta Program
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Ready to Transform
                <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                  Your Educational Experience?
                </span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Get early access to CogneraX Learn and be among the first to experience 
                the future of AI-powered education.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="hover:scale-105 transition-transform duration-300">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] hover:shadow-lg hover:shadow-[var(--cognerax-teal)]/25 text-white font-semibold px-8 group" 
                    onClick={() => navigate('/contact')}
                  >
                    Join Beta Program
                    <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                <div className="hover:scale-105 transition-transform duration-300">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-[var(--cognerax-teal)] text-[var(--cognerax-teal)] hover:bg-[var(--cognerax-teal)] hover:text-white font-semibold px-8 group" 
                    onClick={() => navigate('/about')}
                  >
                    Learn More
                    <FileText size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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