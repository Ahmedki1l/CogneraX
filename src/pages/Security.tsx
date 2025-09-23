import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function Security() {
  const securityMeasures = [
    {
      icon: '🔒',
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data in transit and at rest',
      features: [
        'AES-256 encryption for stored data',
        'TLS 1.3 for data transmission',
        'Perfect Forward Secrecy (PFS)',
        'Hardware Security Module (HSM) key management',
        'Zero-knowledge architecture for sensitive content'
      ],
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]'
    },
    {
      icon: '🔑',
      title: 'Access Control',
      description: 'Multi-factor authentication and role-based permissions',
      features: [
        'Multi-factor authentication (MFA) required',
        'Single Sign-On (SSO) integration',
        'Role-based access control (RBAC)',
        'Regular access reviews and audits',
        'Automated session management and timeouts'
      ],
      color: 'from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]'
    },
    {
      icon: '🖥️',
      title: 'Infrastructure Security',
      description: 'Enterprise-grade cloud infrastructure with redundancy',
      features: [
        'AWS/Azure certified data centers',
        'DDoS protection and mitigation',
        'Network segmentation and firewalls',
        'Continuous monitoring and alerting',
        'Automated backup and disaster recovery'
      ],
      color: 'from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]'
    },
    {
      icon: '👁️',
      title: 'Monitoring & Detection',
      description: 'Real-time threat detection and security monitoring',
      features: [
        'Security Information and Event Management (SIEM)',
        'Behavioral analytics and anomaly detection',
        'Real-time threat intelligence feeds',
        'Automated incident response workflows',
        '24/7 security operations center (SOC)'
      ],
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-purple)]'
    }
  ];

  const compliance = [
    {
      standard: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      color: 'bg-green-100 text-green-800'
    },
    {
      standard: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      standard: 'FERPA',
      description: 'Family Educational Rights and Privacy Act',
      status: 'Compliant',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      standard: 'ISO 27001',
      description: 'Information security management system',
      status: 'In Progress',
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  const securityFeatures = [
    { icon: '💾', title: 'Data Residency', description: 'Choose where your data is stored and processed' },
    { icon: '👥', title: 'User Privacy', description: 'Granular privacy controls for all user data' },
    { icon: '📋', title: 'Audit Trails', description: 'Complete audit logs for all system activities' },
    { icon: '☁️', title: 'Secure Backups', description: 'Encrypted, geographically distributed backups' },
    { icon: '⚡', title: 'Incident Response', description: 'Rapid response to security incidents and threats' },
    { icon: '🎯', title: 'Vulnerability Management', description: 'Regular security assessments and patching' }
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-blue)]/10 to-[var(--cognerax-teal)]/10 border border-[var(--cognerax-blue)]/20 mb-8">
              <span className="text-sm">🛡️</span>
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-teal)] bg-clip-text text-transparent font-medium">
                Enterprise Security
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8">
              <span className="text-foreground">Security & </span>
              <span className="bg-gradient-to-r from-[var(--cognerax-blue)] via-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                Compliance
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Your data security is our top priority. We implement industry-leading security measures 
              and maintain compliance with educational data protection standards.
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="text-lg">📅</span>
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg text-[var(--cognerax-blue)]">✅</span>
                <span>Bank-Grade Security</span>
              </div>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-blue)]/10 to-[var(--cognerax-teal)]/10 border border-[var(--cognerax-blue)]/20 mb-6">
              <span className="text-sm">🔒</span>
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-teal)] bg-clip-text text-transparent font-medium">
                Protection Layers
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Multi-Layered
              <span className="block bg-gradient-to-r from-[var(--cognerax-blue)] via-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                Security Architecture
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Our comprehensive security framework protects your data at every level of our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityMeasures.map((measure, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-[var(--cognerax-blue)]/30 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--cognerax-blue)]/5 via-transparent to-[var(--cognerax-teal)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center space-x-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${measure.color} text-2xl items-center justify-center flex transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
                        {measure.icon}
                      </div>
                      <div>
                        <span className="text-xl group-hover:text-[var(--cognerax-blue)] transition-colors duration-300">
                          {measure.title}
                        </span>
                        <p className="text-sm text-muted-foreground font-normal mt-1">
                          {measure.description}
                        </p>
                      </div>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="space-y-3">
                      {measure.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <span className="text-[var(--cognerax-blue)] mt-0.5 flex-shrink-0">✅</span>
                          <span className="text-muted-foreground leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${measure.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="relative py-24 bg-gradient-to-b from-[var(--cognerax-blue)]/5 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-blue)]/10 to-[var(--cognerax-teal)]/10 border border-[var(--cognerax-blue)]/20 mb-6">
                <span className="text-sm">📋</span>
                <span className="text-sm bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-teal)] bg-clip-text text-transparent font-medium">
                  Industry Standards
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Compliance &
                <span className="block bg-gradient-to-r from-[var(--cognerax-blue)] via-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                  Certifications
                </span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                We maintain compliance with industry standards and educational data protection regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {compliance.map((item, index) => (
                <div
                  key={index}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-[var(--cognerax-blue)]/30 transition-all duration-500 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--cognerax-blue)]/5 via-transparent to-[var(--cognerax-teal)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardContent className="p-8 relative z-10">
                      <div className="space-y-4">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-teal)] w-fit mx-auto text-2xl">
                          📋
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground group-hover:text-[var(--cognerax-blue)] transition-colors duration-300">
                          {item.standard}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                        
                        <Badge className={`${item.color} border-0`}>
                          {item.status}
                        </Badge>
                      </div>
                    </CardContent>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-teal)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features Grid */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-blue)]/10 to-[var(--cognerax-teal)]/10 border border-[var(--cognerax-blue)]/20 mb-6">
              <span className="text-sm">⚙️</span>
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-teal)] bg-clip-text text-transparent font-medium">
                Additional Features
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Advanced
              <span className="block bg-gradient-to-r from-[var(--cognerax-blue)] via-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                Security Features
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Additional security capabilities that provide comprehensive protection for your educational data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-[var(--cognerax-blue)]/30 transition-all duration-500 overflow-hidden text-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--cognerax-blue)]/5 via-transparent to-[var(--cognerax-teal)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-teal)] w-fit mx-auto mb-6 text-3xl transition-transform duration-300 hover:scale-110 hover:rotate-6">
                      {feature.icon}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-[var(--cognerax-blue)] transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-teal)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10"></div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Security Contact */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-blue)]/10 to-[var(--cognerax-teal)]/10 border border-[var(--cognerax-blue)]/20 mb-6">
              <span className="text-sm">📧</span>
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-teal)] bg-clip-text text-transparent font-medium">
                Security Inquiries
              </span>
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-6">
              Security
              <span className="block bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-teal)] bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our security team is available to answer questions and provide additional information 
              about our security practices.
            </p>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-lg mx-auto">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-[var(--cognerax-blue)]/10 text-xl">
                      📧
                    </div>
                    <span>security@cognerax.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-[var(--cognerax-teal)]/10 text-xl">
                      📞
                    </div>
                    <span>+20 155 661 7918</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-[var(--cognerax-purple)]/10 text-xl">
                      🌍
                    </div>
                    <span>Cairo, Egypt</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Security Notice */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <Card className="bg-gradient-to-r from-[var(--cognerax-blue)]/10 via-[var(--cognerax-teal)]/10 to-[var(--cognerax-purple)]/10 border-[var(--cognerax-blue)]/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-[var(--cognerax-blue)] to-[var(--cognerax-teal)] text-2xl">
                    ⚠️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Responsible Disclosure</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      If you discover a security vulnerability, please report it responsibly to our security team. 
                      We appreciate the security research community's efforts to help us maintain the highest 
                      standards of security for our users.
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