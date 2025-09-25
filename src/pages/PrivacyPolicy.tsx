import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { FileText, Eye, Users, Globe, Settings, Calendar, CheckCircle, Mail, Phone, Globe as GlobeIcon, AlertTriangle, Lock } from 'lucide-react';

export function PrivacyPolicy() {
  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: [
        'Account information (name, email, educational institution)',
        'Educational content and materials uploaded to our platform',
        'Usage data and learning analytics',
        'Technical information (IP address, browser type, device information)',
        'Communication records when you contact our support team'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Provide and improve our AI-powered educational services',
        'Analyze and enhance content through machine learning algorithms',
        'Generate personalized learning recommendations',
        'Communicate with you about platform updates and support',
        'Ensure platform security and prevent misuse'
      ]
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: [
        'We do not sell personal information to third parties',
        'Educational institutions may access their users\' learning data',
        'Anonymous, aggregated data may be used for research purposes',
        'Legal compliance when required by law or regulation',
        'Service providers who assist in platform operations under strict agreements'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'Industry-standard encryption for data in transit and at rest',
        'Regular security audits and vulnerability assessments',
        'Access controls and authentication mechanisms',
        'Secure cloud infrastructure with redundancy and backup',
        'Staff training on data protection and privacy practices'
      ]
    },
    {
      icon: Globe,
      title: 'Data Retention',
      content: [
        'Account data retained while your account remains active',
        'Educational content stored as long as needed for service provision',
        'Usage analytics kept for platform improvement purposes',
        'Deleted accounts purged within 90 days unless legally required',
        'Backup data retained for disaster recovery for up to 12 months'
      ]
    },
    {
      icon: Settings,
      title: 'Your Rights',
      content: [
        'Access and review your personal information',
        'Request correction of inaccurate data',
        'Delete your account and associated data',
        'Export your data in a portable format',
        'Opt-out of non-essential communications'
      ]
    }
  ];

  const lastUpdated = 'December 2024';

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
              <Shield size={16} className="text-[var(--cognerax-teal)]" />
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                Your Privacy Matters
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8">
              <span className="text-foreground">Privacy </span>
              <span className="bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how CogneraX collects, uses, and safeguards your data.
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar size={20} className="text-[var(--cognerax-teal)]" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-[var(--cognerax-teal)]" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="relative h-full ">
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] items-center justify-center flex transition-transform duration-300 hover:scale-110 hover:rotate-6">
                        <section.icon size={24} className="text-white" />
                      </div>
                      <span className="text-xl group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                        {section.title}
                      </span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--cognerax-teal)] mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="relative py-24 bg-gradient-to-b from-[var(--cognerax-teal)]/5 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-teal)]/20 mb-6">
                <Mail size={16} className="text-[var(--cognerax-teal)]" />
                <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                  Privacy Questions?
                </span>
              </div>

              <h2 className="text-4xl font-bold text-foreground mb-6">
                Contact Our
                <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                  Privacy Team
                </span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                If you have questions about this privacy policy or how we handle your data, 
                we're here to help.
              </p>

              <Card className=" max-w-lg mx-auto">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <div className="p-2 rounded-lg bg-[var(--cognerax-teal)]/10 text-xl">
                        <Mail size={20} className="text-[var(--cognerax-teal)]" />
                      </div>
                      <span>privacy@cognerax.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <div className="p-2 rounded-lg bg-[var(--cognerax-blue)]/10 text-xl">
                        <Phone size={20} className="text-[var(--cognerax-purple)]" />
                      </div>
                      <span>+20 155 661 7918</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <div className="p-2 rounded-lg bg-[var(--cognerax-purple)]/10 text-xl">
                        <GlobeIcon size={20} className="text-[var(--cognerax-purple)]" />
                      </div>
                      <span>Cairo, Egypt</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <Card className="bg-gradient-to-r from-[var(--cognerax-teal)]/10 via-[var(--cognerax-blue)]/10 to-[var(--cognerax-purple)]/10 border-[var(--cognerax-teal)]/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] text-2xl">
                    <AlertTriangle size={24} className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Important Notice</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This privacy policy may be updated periodically to reflect changes in our practices 
                      or legal requirements. We will notify users of significant changes via email or 
                      platform notifications. Your continued use of CogneraX after policy updates 
                      constitutes acceptance of the revised terms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}