import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

export function CookiePolicy() {
  const cookieTypes = [
    {
      icon: '🛡️',
      title: 'Essential Cookies',
      description: 'Required for basic website functionality',
      purposes: [
        'User authentication and account security',
        'Form submission and data persistence',
        'Shopping cart and session management',
        'Security and fraud prevention',
        'Load balancing and performance optimization'
      ],
      duration: 'Session or up to 1 year',
      canDisable: false,
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]'
    },
    {
      icon: '📊',
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors use our website',
      purposes: [
        'Website traffic and usage statistics',
        'Popular content and feature identification',
        'User journey and behavior analysis',
        'Performance monitoring and optimization',
        'A/B testing and feature improvement'
      ],
      duration: 'Up to 2 years',
      canDisable: true,
      color: 'from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]'
    },
    {
      icon: '🎯',
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements',
      purposes: [
        'Personalized content recommendations',
        'Targeted advertising campaigns',
        'Social media integration',
        'Cross-platform user identification',
        'Marketing effectiveness measurement'
      ],
      duration: 'Up to 1 year',
      canDisable: true,
      color: 'from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]'
    },
    {
      icon: '⚙️',
      title: 'Preference Cookies',
      description: 'Remember your settings and preferences',
      purposes: [
        'Language and region preferences',
        'Theme and display settings',
        'Accessibility configurations',
        'Feature toggles and customizations',
        'Notification preferences'
      ],
      duration: 'Up to 1 year',
      canDisable: true,
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-purple)]'
    }
  ];

  const thirdPartyServices = [
    { name: 'Google Analytics', purpose: 'Website analytics and performance monitoring' },
    { name: 'Microsoft Clarity', purpose: 'User behavior analysis and heatmaps' },
    { name: 'Intercom', purpose: 'Customer support and messaging' },
    { name: 'Stripe', purpose: 'Payment processing and billing' },
    { name: 'SendGrid', purpose: 'Email delivery and communication' }
  ];

  const lastUpdated = 'December 2024';

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-[var(--cognerax-purple)]/5 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(139,92,246,0.05)_25%,rgba(139,92,246,0.05)_26%,transparent_27%,transparent_74%,rgba(139,92,246,0.05)_75%,rgba(139,92,246,0.05)_76%,transparent_77%,transparent),linear-gradient(rgba(139,92,246,0.05)_24%,transparent_25%,transparent_26%,rgba(139,92,246,0.05)_27%,rgba(139,92,246,0.05)_74%,transparent_75%,transparent_76%,rgba(139,92,246,0.05)_77%)] bg-[size:75px_75px]" />
      </div>

      <div className="relative z-20 space-y-24 py-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-purple)]/10 to-[var(--cognerax-teal)]/10 border border-[var(--cognerax-purple)]/20 mb-8">
              <span className="text-sm">🍪</span>
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-purple)] to-[var(--cognerax-teal)] bg-clip-text text-transparent font-medium">
                Cookie Management
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8">
              <span className="text-foreground">Cookie </span>
              <span className="bg-gradient-to-r from-[var(--cognerax-purple)] via-[var(--cognerax-blue)] to-[var(--cognerax-teal)] bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              We use cookies and similar technologies to enhance your experience, analyze usage, 
              and provide personalized content. Learn about our cookie practices and manage your preferences.
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="text-lg">📅</span>
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg text-[var(--cognerax-purple)]">✅</span>
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-purple)]/10 to-[var(--cognerax-teal)]/10 border border-[var(--cognerax-purple)]/20 mb-6">
              <span className="text-sm">👁️</span>
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-purple)] to-[var(--cognerax-teal)] bg-clip-text text-transparent font-medium">
                Cookie Categories
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Types of
              <span className="block bg-gradient-to-r from-[var(--cognerax-purple)] via-[var(--cognerax-blue)] to-[var(--cognerax-teal)] bg-clip-text text-transparent">
                Cookies We Use
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Understanding different cookie types helps you make informed decisions about your privacy preferences.
            </p>
          </div>

          <div className="space-y-8">
            {cookieTypes.map((type, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-[var(--cognerax-purple)]/30 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--cognerax-purple)]/5 via-transparent to-[var(--cognerax-teal)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${type.color} text-2xl items-center justify-center flex transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
                          {type.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-[var(--cognerax-purple)] transition-colors duration-300">
                            {type.title}
                          </h3>
                          <p className="text-muted-foreground">{type.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Duration</p>
                          <p className="text-sm font-medium text-foreground">{type.duration}</p>
                        </div>
                        {type.canDisable ? (
                          <div className="flex items-center space-x-2 text-sm">
                            <span className="text-lg text-green-500">✅</span>
                            <span className="text-green-600">Optional</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2 text-sm">
                            <span className="text-lg text-orange-500">❌</span>
                            <span className="text-orange-600">Required</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {type.purposes.map((purpose, purposeIndex) => (
                        <div key={purposeIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--cognerax-purple)] mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">{purpose}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${type.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Third Party Services */}
        <section className="relative py-24 bg-gradient-to-b from-[var(--cognerax-purple)]/5 to-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-purple)]/10 to-[var(--cognerax-teal)]/10 border border-[var(--cognerax-purple)]/20 mb-6">
                <span className="text-sm">👥</span>
                <span className="text-sm bg-gradient-to-r from-[var(--cognerax-purple)] to-[var(--cognerax-teal)] bg-clip-text text-transparent font-medium">
                  Third-Party Services
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                External
                <span className="block bg-gradient-to-r from-[var(--cognerax-purple)] via-[var(--cognerax-blue)] to-[var(--cognerax-teal)] bg-clip-text text-transparent">
                  Service Providers
                </span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                We work with trusted third-party services that may also set cookies to provide functionality.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {thirdPartyServices.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-[var(--cognerax-purple)]/5 to-[var(--cognerax-teal)]/5 border border-[var(--cognerax-purple)]/10 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div>
                          <h4 className="font-semibold text-foreground">{service.name}</h4>
                          <p className="text-sm text-muted-foreground">{service.purpose}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg text-[var(--cognerax-purple)]">⚡</span>
                          <span className="text-sm text-[var(--cognerax-purple)]">Active</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-purple)]/10 to-[var(--cognerax-teal)]/10 border border-[var(--cognerax-purple)]/20">
                  <span className="text-sm">⚙️</span>
                  <span className="text-sm bg-gradient-to-r from-[var(--cognerax-purple)] to-[var(--cognerax-teal)] bg-clip-text text-transparent font-medium">
                    Your Control
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-foreground">
                  Manage Your
                  <span className="block bg-gradient-to-r from-[var(--cognerax-purple)] to-[var(--cognerax-teal)] bg-clip-text text-transparent">
                    Cookie Preferences
                  </span>
                </h2>

                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    You have full control over your cookie preferences. You can accept all, 
                    reject non-essential, or customize your settings at any time.
                  </p>
                  <p>
                    Note that disabling certain cookies may affect website functionality 
                    and your user experience.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-[var(--cognerax-purple)] to-[var(--cognerax-teal)] hover:opacity-90 text-white font-semibold" 
                  size="lg"
                >
                  <span className="mr-2">⚙️</span>
                  Manage Cookie Preferences
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-[var(--cognerax-purple)] text-[var(--cognerax-purple)] hover:bg-[var(--cognerax-purple)]/10" 
                  size="lg"
                >
                  <span className="mr-2">👁️</span>
                  View Current Settings
                </Button>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-[var(--cognerax-purple)]/10 to-[var(--cognerax-teal)]/10 text-xl">
                      🛡️
                    </div>
                    <span>Browser Controls</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Most browsers allow you to control cookies through their settings. 
                      You can also:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="text-[var(--cognerax-teal)] mt-0.5 flex-shrink-0">✅</span>
                        <span>Block all cookies from specific websites</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[var(--cognerax-teal)] mt-0.5 flex-shrink-0">✅</span>
                        <span>Delete existing cookies from your device</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[var(--cognerax-teal)] mt-0.5 flex-shrink-0">✅</span>
                        <span>Set browser to ask before accepting cookies</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-[var(--cognerax-purple)]/10 to-[var(--cognerax-teal)]/10 border-[var(--cognerax-purple)]/20">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-[var(--cognerax-purple)] to-[var(--cognerax-teal)] text-xl">
                      ⚠️
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Impact Notice</h4>
                      <p className="text-sm text-muted-foreground">
                        Disabling essential cookies may prevent core features from working properly, 
                        including account login and platform functionality.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--cognerax-purple)]/10 to-[var(--cognerax-teal)]/10 border border-[var(--cognerax-purple)]/20 mb-6">
              <span className="text-sm">📧</span>
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-purple)] to-[var(--cognerax-teal)] bg-clip-text text-transparent font-medium">
                Cookie Questions?
              </span>
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-6">
              Need Help with
              <span className="block bg-gradient-to-r from-[var(--cognerax-purple)] to-[var(--cognerax-teal)] bg-clip-text text-transparent">
                Cookie Settings?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our team is available to help you understand and manage your cookie preferences.
            </p>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-lg mx-auto">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-[var(--cognerax-purple)]/10 text-xl">
                      📧
                    </div>
                    <span>cookies@cognerax.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-[var(--cognerax-blue)]/10 text-xl">
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
      </div>
    </div>
  );
}