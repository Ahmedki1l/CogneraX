import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  Brain, 
  Target, 
  Users, 
  Zap, 
  GraduationCap, 
  Globe, 
  BarChart3, 
  Calendar, 
  Building, 
  Briefcase, 
  Building2,
  Sparkles,
  TrendingUp,
  Network,
  ChartBar
} from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Brain,
      title: 'AI-First Innovation',
      description: 'We believe artificial intelligence is the key to unlocking human potential in education.',
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]',
    },
    {
      icon: Target,
      title: 'Education Focused',
      description: 'Every solution we create is designed with educational outcomes and learning effectiveness in mind.',
      color: 'from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We work closely with educators, students, and institutions to build solutions that truly matter.',
      color: 'from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]',
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'We deliver powerful educational tools quickly, ensuring immediate impact on learning outcomes.',
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-purple)]',
    },
  ];

  const products = [
    {
      name: 'CogneraX Learn',
      description: 'AI-powered educational platform that revolutionizes how teachers and students engage with content',
      status: 'Private Beta',
      icon: GraduationCap,
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]',
    },
    {
      name: 'CogneraX Reach',
      description: 'All-in-one AI-powered marketing and outreach platform for businesses and creators',
      status: 'In Development',
      icon: Globe,
      color: 'from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]',
    },
    {
      name: 'CogneraX Invest',
      description: 'AI-powered tool for real estate developers to plan, visualize, and optimize investments',
      status: 'In Development',
      icon: BarChart3,
      color: 'from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]',
    },
  ];

  const companyStats = [
    { icon: Calendar, value: 'Sept 2025', label: 'Founded' },
    { icon: Building, value: 'Cairo, Egypt', label: 'Headquarters' },
    { icon: Briefcase, value: '3 Products', label: 'AI Solutions' },
    { icon: Users, value: 'Growing', label: 'Team Size' },
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
              <Building2 size={16} className="text-[var(--cognerax-teal)]" />
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                Founded September 2025
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8">
              <span className="text-foreground">About </span>
              <span className="bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                CogneraX
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are a Cairo-based technology company building AI-powered platforms that transform 
              education, marketing, and investment into smarter, more efficient experiences.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {companyStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <stat.icon size={24} className="mb-2 text-[var(--cognerax-teal)]" />
                  <div className="text-lg font-bold bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-blue)]/10 border border-[var(--cognerax-teal)]/20">
                  <Target size={16} className="text-[var(--cognerax-teal)]" />
                  <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] bg-clip-text text-transparent font-medium">
                    Our Mission
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-foreground">
                  Transforming the Future with AI
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    To build AI-powered platforms that transform education, marketing, and investment 
                    into smarter, more efficient experiences.
                  </p>
                  <p>
                    Our vision is to become the leading hub where artificial intelligence meets 
                    real-world impact, empowering students, businesses, and investors worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-blue)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-blue)]/20">
                  <Users size={16} className="text-[var(--cognerax-blue)]" />
                  <span className="text-sm bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                    Our Team
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-foreground">
                  Small Team, Big Vision
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Currently, CogneraX is operated by a small but dedicated founding team, with our 
                    CEO & Founder responsible for core development and strategy, alongside Essam, 
                    our content creator & administrator leading brand presence and communication.
                  </p>
                  <p>
                    Although still early in our journey, we're building around a clear mission to 
                    create an integrated suite of AI-powered tools that transform how people learn, 
                    grow, and invest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Ecosystem */}
        <section className="relative py-24 bg-gradient-to-b from-[var(--cognerax-teal)]/5 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-teal)]/20 mb-6">
                <Briefcase size={16} className="text-[var(--cognerax-teal)]" />
                <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                  Product Ecosystem
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Our
                <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                  AI Solutions
                </span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Our integrated suite of AI-powered solutions, each designed to address specific 
                aspects of modern digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-[var(--cognerax-teal)]/30 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--cognerax-teal)]/5 via-transparent to-[var(--cognerax-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-8 relative z-10 text-center">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${product.color} mb-6 items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
                        <product.icon size={32} className="text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                        {product.name}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {product.description}
                      </p>

                      <div className="flex justify-center">
                        <span className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ${
                          product.status === 'Private Beta' 
                            ? 'bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] text-white' 
                            : 'bg-gradient-to-r from-[var(--cognerax-purple)]/10 to-[var(--cognerax-blue)]/10 text-[var(--cognerax-purple)] border border-[var(--cognerax-purple)]/20'
                        }`}>
                          {product.status}
                        </span>
                      </div>
                    </CardContent>

                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-teal)]/20 mb-6">
              <Sparkles size={16} className="text-[var(--cognerax-teal)]" />
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                Our Values
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              What Drives
              <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                Our Innovation
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              The principles that guide everything we do at CogneraX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-[var(--cognerax-teal)]/30 transition-all duration-500 overflow-hidden text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--cognerax-teal)]/5 via-transparent to-[var(--cognerax-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} mb-6 text-white items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
                      <value.icon size={32} className="text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                      {value.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Company Story */}
        <section className="relative py-24 bg-gradient-to-b from-background to-[var(--cognerax-teal)]/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-teal)]/20">
                    <Calendar size={16} className="text-[var(--cognerax-teal)]" />
                    <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                      Our Journey
                    </span>
                  </div>

                  <h2 className="text-4xl font-bold text-foreground">
                    Building the Future of
                    <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                      AI-Powered Solutions
                    </span>
                  </h2>

                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      Founded in September 2025 in Cairo, Egypt, CogneraX was born from the vision 
                      to transform education, marketing, and investment through artificial intelligence. 
                      We recognized that these key areas needed a technological revolution.
                    </p>
                    <p>
                      Our approach is AI-first, not just digitizing workflows, but fully rethinking 
                      them with AI at the core. We're building an end-to-end ecosystem where Learn, 
                      Reach, and Invest work together to create unprecedented value.
                    </p>
                    <p>
                      Currently, CogneraX Learn is in private beta, demonstrating strong performance 
                      in testing and showing how AI can enhance both teaching efficiency and learning outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--cognerax-teal)]/20 via-[var(--cognerax-blue)]/20 to-[var(--cognerax-purple)]/20 backdrop-blur-3xl border border-white/10 shadow-2xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg2NDI0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="AI Technology Dashboard"
                      className="w-full h-full object-cover rounded-3xl mix-blend-overlay"
                    />
                  </div>

                  {/* Floating Tech Icons */}
                  {[Brain, Globe, TrendingUp].map((IconComponent, i) => (
                    <div
                      key={i}
                      className="absolute w-16 h-16 rounded-2xl bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] backdrop-blur-sm border border-white/20 flex items-center justify-center animate-float"
                      style={{
                        left: `${20 + i * 25}%`,
                        top: `${15 + i * 30}%`,
                        animationDelay: `${i * 0.5}s`,
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}