export function About() {
  const values = [
    {
      title: 'Innovation First',
      description: 'We stay at the forefront of AI technology, constantly exploring new ways to revolutionize education.',
      icon: '🧠'
    },
    {
      title: 'Results Driven',
      description: 'Every solution we create is designed with measurable learning outcomes and proven educational value.',
      icon: '🎯'
    },
    {
      title: 'Learner Focused',
      description: 'Your success is our success. We work to create personalized experiences that adapt to every learner.',
      icon: '👥'
    },
    {
      title: 'Fast & Efficient',
      description: 'We deliver cutting-edge learning solutions that accelerate knowledge acquisition and retention.',
      icon: '⚡'
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(32,178,170,0.1)_25%,rgba(32,178,170,0.1)_26%,transparent_27%,transparent_74%,rgba(32,178,170,0.1)_75%,rgba(32,178,170,0.1)_76%,transparent_77%,transparent),linear-gradient(rgba(32,178,170,0.1)_24%,transparent_25%,transparent_26%,rgba(32,178,170,0.1)_27%,rgba(32,178,170,0.1)_74%,transparent_75%,transparent_76%,rgba(32,178,170,0.1)_77%)] bg-[size:50px_50px]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About CogneraX
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We are a team of innovative AI researchers, educational technologists, and learning scientists 
            dedicated to transforming how the world learns through intelligent, adaptive educational platforms.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-4">
                To democratize access to world-class education through AI-powered learning platforms that 
                adapt to each individual's unique learning style, pace, and goals.
              </p>
              <p className="text-muted-foreground">
                Founded in September 2025, CogneraX is pioneering the next generation of educational technology 
                with CogneraX Learn, our flagship AI-powered learning platform currently in private beta.
              </p>
            </div>
            <div className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Approach</h3>
              <p className="text-muted-foreground mb-4">
                We believe in combining cutting-edge artificial intelligence with proven pedagogical principles 
                to create learning experiences that are not just personalized, but truly transformative.
              </p>
              <p className="text-muted-foreground">
                Every feature we develop is grounded in educational research and powered by advanced neural 
                networks that understand how humans learn best.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <h3 className="text-center text-2xl font-bold text-foreground mb-12">Our Values</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] mb-6 group-hover:scale-110 transition-transform duration-300 text-2xl">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3 bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="glass-card p-12 text-center relative overflow-hidden group">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--cognerax-teal)]/5 via-[var(--cognerax-blue)]/5 to-[var(--cognerax-purple)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Experience the Future of Learning?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of learners who are already transforming their education with AI-powered personalized learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#hero" 
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--cognerax-teal)]/25"
                >
                  Request Early Access
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-8 py-3 glass-button text-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}