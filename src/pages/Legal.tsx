import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { navigate } from '../components/Router';

export function Legal() {
  const legalPages = [
    {
      icon: '🛡️',
      title: 'Privacy Policy',
      description: 'How we collect, use, and protect your personal information and data.',
      link: '/privacy',
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]',
    },
    {
      icon: '⚖️',
      title: 'Terms of Service',
      description: 'Legal terms and conditions governing your use of CogneraX services.',
      link: '/terms',
      color: 'from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]',
    },
    {
      icon: '🍪',
      title: 'Cookie Policy',
      description: 'Information about cookies and similar technologies we use.',
      link: '/cookies',
      color: 'from-[var(--cognerax-purple)] to-[var(--cognerax-teal)]',
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'Our security measures and data protection standards.',
      link: '/security',
      color: 'from-[var(--cognerax-teal)] to-[var(--cognerax-purple)]',
    },
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
              <span className="text-sm">⚖️</span>
              <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                Legal Information
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-8">
              <span className="text-foreground">Legal </span>
              <span className="bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                Center
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Access our comprehensive legal documentation including privacy policies, 
              terms of service, and security information.
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <span className="text-lg">📅</span>
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg text-[var(--cognerax-teal)]">✅</span>
                <span>Compliant & Current</span>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Pages Grid */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {legalPages.map((page, index) => (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-[var(--cognerax-teal)]/30 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--cognerax-teal)]/5 via-transparent to-[var(--cognerax-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${page.color} text-3xl items-center justify-center flex transition-transform duration-300 hover:scale-110 hover:rotate-6`}>
                        {page.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                          {page.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {page.description}
                    </p>

                    <div className="transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                      <Button 
                        className="w-full bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] hover:opacity-90 text-white font-semibold group" 
                        onClick={() => navigate(page.link)}
                      >
                        Read Full Document
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Button>
                    </div>
                  </CardContent>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${page.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}></div>
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
                <span className="text-sm">📧</span>
                <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                  Need Help?
                </span>
              </div>

              <h2 className="text-4xl font-bold text-foreground mb-6">
                Legal
                <span className="block bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                  Questions?
                </span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our legal team is available to provide clarification and answer any questions 
                about our policies and terms.
              </p>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-lg mx-auto">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <div className="p-2 rounded-lg bg-[var(--cognerax-teal)]/10 text-xl">
                        📧
                      </div>
                      <span>legal@cognerax.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <div className="p-2 rounded-lg bg-[var(--cognerax-blue)]/10 text-xl">
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
          </div>
        </section>
      </div>
    </div>
  );
}