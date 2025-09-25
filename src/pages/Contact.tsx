import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { EarlyAccessForm } from '../components/EarlyAccessForm';
import { Mail, Phone, MapPin, Calendar, GraduationCap, Building, Users, MessageSquare, Sparkles, Shield, Clock, Globe, Zap, CheckCircle } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['ceo@cognerax.com', 'info@cognerax.com'],
      description: 'Get in touch for general inquiries and early access',
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      details: ['+20 155 661 7918', 'Available for inquiries'],
      description: 'Speak directly with our team',
      color: 'from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Cairo, Egypt', 'Founded September 2025'],
      description: 'Our headquarters and founding location',
      color: 'from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]',
    },
    {
      icon: Calendar,
      title: 'Schedule Demo',
      details: ['Private beta access', 'Personalized walkthrough'],
      description: 'Book a demo to see CogneraX Learn in action',
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-purple)]',
    },
  ];

  const inquiryTypes = [
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Schools, universities, and educational organizations',
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]',
    },
    {
      icon: Building,
      title: 'Corporate Training',
      description: 'Companies looking for employee training solutions',
      color: 'from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]',
    },
    {
      icon: Users,
      title: 'Individual Educators',
      description: 'Teachers and independent educators',
      color: 'from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]',
    },
  ];

  const faqs = [
    {
      question: 'How does the AI content analysis work?',
      answer: 'Our AI analyzes educational content to identify weak points, unclear explanations, and structural issues, then rebuilds the content for optimal learning outcomes.',
    },
    {
      question: 'Can I integrate with existing systems?',
      answer: 'Yes, CogneraX Learn offers comprehensive API integration and supports most educational management systems and LMS platforms.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'We offer a 14-day free trial with full access to all features. No credit card required to get started.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide 24/7 chat support, email support, phone support during business hours, and dedicated account management for enterprise customers.',
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
              <MessageSquare size={16} className="text-[var(--cognerax-teal)]" />
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                Connect with CogneraX
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8">
              <span className="text-foreground">Get in </span>
              <span className="bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Interested in CogneraX Learn's private beta? Let's discuss how our AI-powered 
              educational platform can transform your teaching and learning experience.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="relative h-full text-center">
                  
                  <CardContent className="p-8 relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${info.color} mb-6 items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
                      <info.icon size={32} className="text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                      {info.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {info.description}
                    </p>
                    
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm font-medium text-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Early Access Form Section */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-teal)]/20 mb-6">
              <Sparkles size={16} className="text-[var(--cognerax-teal)]" />
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                Join the Future of Learning
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Request
              <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                Early Access
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Be among the first to experience the power of AI-driven education with CogneraX Learn.
            </p>
          </div>

          <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <EarlyAccessForm className="group" />
          </div>
        </section>

        {/* Who We Serve */}
        <section className="relative py-24 bg-gradient-to-b from-[var(--cognerax-teal)]/5 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-teal)]/20 mb-6">
                <Users size={16} className="text-[var(--cognerax-teal)]" />
                <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                  Who We Serve
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Built for
                <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                  Every Educator
                </span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                CogneraX Learn is designed to meet the diverse needs of educational professionals and organizations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {inquiryTypes.map((type, index) => (
                <div
                  key={index}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card className="relative h-full ">
                    
                    <CardContent className="p-8 relative z-10 text-center">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${type.color} mb-6 items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
                        <type.icon size={32} className="text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                        {type.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {type.description}
                      </p>
                    </CardContent>

                    {/* Glow effect */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${type.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Information */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-teal)]/20">
                  <Shield size={16} className="text-[var(--cognerax-teal)]" />
                  <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                    Premium Support
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-foreground">
                  Expert Support
                  <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                    When You Need It
                  </span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our dedicated support team is here to help you maximize the value of CogneraX Learn 
                  with comprehensive assistance and guidance.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Clock, label: '24/7 Support', desc: 'Round-the-clock assistance via chat and email' },
                  { icon: Phone, label: 'Priority Phone Support', desc: 'Direct access to our expert team' },
                  { icon: Globe, label: 'Global Coverage', desc: 'Support in multiple languages and time zones' },
                  { icon: Zap, label: 'Fast Response', desc: 'Average response time under 2 hours' }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-blue)]/10">
                      <feature.icon size={20} className="text-[var(--cognerax-teal)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.label}</h4>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Quick Demo Card */}
              <Card className="relative bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,0.1)_36%,rgba(255,255,255,0.1)_45%,transparent_46%)] bg-[size:20px_20px] animate-pulse"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-[var(--white-10)] backdrop-blur-sm text-2xl">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">Schedule a Demo</h3>
                      <p className="text-white/90 mb-6 leading-relaxed">
                        Book a personalized 30-minute demo to see CogneraX Learn in action and 
                        discover how it can transform your educational approach.
                      </p>
                      <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
                        <Button 
                          className="bg-white text-[var(--cognerax-blue)] hover:bg-gray-100 font-semibold"
                          size="lg"
                        >
                          Book Demo Now
                          <span className="ml-2">→</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Hours Card */}
              <Card className="bg-[var(--card-50)] backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--cognerax-purple)]/10 to-[var(--cognerax-teal)]/10 text-2xl">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-4">Support Hours</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>9AM - 6PM PST</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Saturday:</span>
                          <span>10AM - 4PM PST</span>
                        </p>
                        <p className="flex justify-between">
                          <span>Sunday:</span>
                          <span>Emergency only</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-24 bg-gradient-to-b from-background to-[var(--cognerax-teal)]/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-teal)]/20 mb-6">
                <MessageSquare size={16} className="text-[var(--cognerax-teal)]" />
                <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                  Frequently Asked Questions
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Quick
                <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                  Answers
                </span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Common questions about CogneraX Learn and our AI-powered educational platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="relative h-full ">
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start space-x-3 mb-4">
                        <CheckCircle size={16} className="text-[var(--cognerax-teal)] mt-0.5 flex-shrink-0" />
                        <h3 className="text-xl font-bold text-foreground group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                          {faq.question}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pl-8">
                        {faq.answer}
                      </p>
                    </CardContent>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}