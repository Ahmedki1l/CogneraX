import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export function TermsOfService() {
  const sections = [
    {
      icon: '📖',
      title: 'Service Description',
      content: [
        'CogneraX Learn provides AI-powered educational platform services',
        'Content analysis, lesson planning, and assessment generation tools',
        'Analytics and progress tracking for educational outcomes',
        'API access for institutional integration',
        'Customer support and technical assistance'
      ]
    },
    {
      icon: '👥',
      title: 'User Accounts',
      content: [
        'Users must provide accurate and current information',
        'Account holders are responsible for maintaining password security',
        'Sharing account credentials is prohibited',
        'Users must notify us immediately of unauthorized access',
        'We reserve the right to suspend accounts for policy violations'
      ]
    },
    {
      icon: '🛡️',
      title: 'Acceptable Use',
      content: [
        'Use services only for lawful educational purposes',
        'Do not upload harmful, illegal, or inappropriate content',
        'Respect intellectual property rights of others',
        'Maintain confidentiality of student and institutional data',
        'Follow your institution\'s policies and guidelines'
      ]
    },
    {
      icon: '🚫',
      title: 'Prohibited Activities',
      content: [
        'Attempting to gain unauthorized access to our systems',
        'Reverse engineering or copying our AI algorithms',
        'Using the platform to discriminate or harass others',
        'Transmitting malware, viruses, or malicious code',
        'Commercial use outside of educational purposes without permission'
      ]
    },
    {
      icon: '⚖️',
      title: 'Intellectual Property',
      content: [
        'CogneraX retains ownership of the platform and AI technology',
        'Users retain rights to their original educational content',
        'AI-generated content is governed by specific licensing terms',
        'Feedback and suggestions may be incorporated into our services',
        'Respect for third-party intellectual property is required'
      ]
    },
    {
      icon: '⚖️',
      title: 'Limitation of Liability',
      content: [
        'Services are provided "as is" without warranties',
        'We are not liable for educational outcomes or decisions',
        'Maximum liability limited to amounts paid for services',
        'Users are responsible for backup of their content',
        'Force majeure events may temporarily interrupt services'
      ]
    }
  ];

  const lastUpdated = 'December 2024';

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-[var(--cognerax-blue)]/5 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(30,64,175,0.05)_25%,rgba(30,64,175,0.05)_26%,transparent_27%,transparent_74%,rgba(30,64,175,0.05)_75%,rgba(30,64,175,0.05)_76%,transparent_77%,transparent),linear-gradient(rgba(30,64,175,0.05)_24%,transparent_25%,transparent_26%,rgba(30,64,175,0.05)_27%,rgba(30,64,175,0.05)_74%,transparent_75%,transparent_76%,rgba(30,64,175,0.05)_77%)] bg-[size:75px_75px]" />
      </div>

      <div className="relative z-20 space-y-24 py-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-blue)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-blue)]/20 mb-8">
              <span className="text-sm">⚖️</span>
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                Legal Framework
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8">
              <span className="text-foreground">Terms of </span>
              <span className="bg-gradient-to-r from-[var(--cognerax-blue)] via-[var(--cognerax-purple)] to-[var(--cognerax-teal)] bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              These terms govern your use of CogneraX Learn and related services. 
              By using our platform, you agree to these terms and conditions.
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="text-lg">📅</span>
                <span>Effective Date: {lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg text-[var(--cognerax-blue)]">✅</span>
                <span>Legally Binding</span>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-[var(--cognerax-blue)]/30 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--cognerax-blue)]/5 via-transparent to-[var(--cognerax-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center space-x-3">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-purple)] text-2xl items-center justify-center flex transition-transform duration-300 hover:scale-110 hover:rotate-6">
                        {section.icon}
                      </div>
                      <span className="text-xl group-hover:text-[var(--cognerax-blue)] transition-colors duration-300">
                        {section.title}
                      </span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--cognerax-blue)] mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-purple)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Termination and Changes */}
        <section className="relative py-24 bg-gradient-to-b from-[var(--cognerax-blue)]/5 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-blue)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-blue)]/20">
                    <span className="text-sm">⚙️</span>
                    <span className="text-sm bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                      Terms Management
                    </span>
                  </div>

                  <h2 className="text-4xl font-bold text-foreground">
                    Modifications &
                    <span className="block bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                      Termination
                    </span>
                  </h2>

                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                      We reserve the right to modify these terms at any time. Significant changes 
                      will be communicated to users with at least 30 days notice.
                    </p>
                    <p>
                      Either party may terminate the agreement with written notice. Upon termination, 
                      users retain access to export their data for 90 days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-purple)] text-2xl">
                          ⚖️
                        </div>
                        <h3 className="text-xl font-bold text-foreground">Governing Law</h3>
                      </div>
                      
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          These terms are governed by the laws of Egypt. Any disputes will be 
                          resolved through binding arbitration in Cairo, Egypt.
                        </p>
                        
                        <div className="p-4 rounded-lg bg-[var(--cognerax-blue)]/10 border border-[var(--cognerax-blue)]/20">
                          <p className="text-sm">
                            For institutional clients, specific terms may be negotiated through 
                            separate service agreements that supersede these general terms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-blue)]/10 to-[var(--cognerax-purple)]/10 border border-[var(--cognerax-blue)]/20 mb-6">
              <span className="text-sm">📧</span>
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                Legal Questions?
              </span>
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-6">
              Contact Our
              <span className="block bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                Legal Team
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Questions about these terms? Our legal team is available to provide clarification 
              and assistance.
            </p>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-lg mx-auto">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-[var(--cognerax-blue)]/10 text-xl">
                      📧
                    </div>
                    <span>legal@cognerax.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-[var(--cognerax-purple)]/10 text-xl">
                      📞
                    </div>
                    <span>+20 155 661 7918</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-[var(--cognerax-teal)]/10 text-xl">
                      🌍
                    </div>
                    <span>Cairo, Egypt</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Acceptance Notice */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <Card className="bg-gradient-to-r from-[var(--cognerax-blue)]/10 via-[var(--cognerax-purple)]/10 to-[var(--cognerax-teal)]/10 border-[var(--cognerax-blue)]/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-purple)] text-2xl">
                    ⚠️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Agreement Acceptance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      By creating an account or using CogneraX Learn services, you acknowledge that you have read, 
                      understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, 
                      please do not use our services.
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