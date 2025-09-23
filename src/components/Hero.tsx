import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { EarlyAccessForm } from './EarlyAccessForm';
import cogneraXLogo from 'figma:asset/1a0665958bd51afeafab073a021c9a5023632f55.png';
import { Brain, Sparkles, Zap, Monitor, Plug } from 'lucide-react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const floatingElements = [
    { icon: Brain, delay: 0, duration: 6 },
    { icon: Sparkles, delay: 1, duration: 8 },
    { icon: Zap, delay: 2, duration: 7 },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-[var(--cognerax-teal)]/5 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(32,178,170,0.05)_25%,rgba(32,178,170,0.05)_26%,transparent_27%,transparent_74%,rgba(32,178,170,0.05)_75%,rgba(32,178,170,0.05)_76%,transparent_77%,transparent),linear-gradient(rgba(32,178,170,0.05)_24%,transparent_25%,transparent_26%,rgba(32,178,170,0.05)_27%,rgba(32,178,170,0.05)_74%,transparent_75%,transparent_76%,rgba(32,178,170,0.05)_77%)] bg-[size:75px_75px]" />
      </div>

      {/* Floating AI Icons */}
      {floatingElements.map(({ icon: IconComponent, delay, duration }, index) => (
        <div
          key={index}
          className="absolute opacity-20 glass p-4 animate-bounce"
          style={{
            left: `${20 + index * 25}%`,
            top: `${20 + index * 15}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          <IconComponent size={24} className="text-[var(--cognerax-blue)]" />
        </div>
      ))}

      {/* Interactive Cursor Glow */}
      <div
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-5 animate-pulse"
        style={{
          background: `radial-gradient(circle, var(--cognerax-teal) 0%, transparent 70%)`,
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-20">
        <div className="relative py-20 sm:py-32 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <div className="space-y-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 glass border-[var(--cognerax-teal)]/30">
                  <Sparkles size={16} className="text-[var(--cognerax-teal)]" />
                  <span className="text-sm bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent font-medium">
                    Now in Private Beta
                  </span>
                </div>

                <h1 className="text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none">
                  <span className="block text-foreground font-bold">
                    The Future
                  </span>
                  <span className="block text-foreground font-bold">
                    of{' '}
                    <span className="bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent animate-gradient">
                      AI Learning
                    </span>
                  </span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  CogneraX Learn harnesses advanced neural networks to create personalized education experiences 
                  that adapt, evolve, and accelerate your path to mastery like never before.
                </p>

                <div className="max-w-2xl">
                  <EarlyAccessForm />
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8">
                  {[
                    { value: "99.7%", label: "Learning Efficiency", gradient: "from-[var(--cognerax-teal)] to-[var(--cognerax-blue)]" },
                    { value: "10x", label: "Faster Mastery", gradient: "from-[var(--cognerax-blue)] to-[var(--cognerax-purple)]" },
                    { value: "24/7", label: "AI Tutoring", gradient: "from-[var(--cognerax-teal)] to-[var(--cognerax-purple)]" }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="glass-card p-4 text-center group hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent animate-gradient`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1 group-hover:text-[var(--cognerax-teal)] transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mx-auto mt-16 lg:col-span-5 lg:mx-0 lg:mt-0 xl:col-span-6">
              <div className="relative animate-float">
                {/* Featured CogneraX Logo */}
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 glass-card flex items-center justify-center">
                    <img
                      src={cogneraXLogo}
                      alt="CogneraX Logo"
                      className="w-80 h-80 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Orbiting Circuit Elements */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] shadow-lg animate-spin"
                      style={{
                        left: "50%",
                        top: "50%",
                        transformOrigin: `0 ${120 + i * 15}px`,
                        animationDuration: `${12 + i * 2}s`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}

                  {/* Floating Tech Icons */}
                  {[
                    { icon: Monitor, position: { top: "10%", left: "15%" } },
                    { icon: Plug, position: { top: "20%", right: "10%" } },
                    { icon: Brain, position: { bottom: "15%", left: "10%" } },
                    { icon: Zap, position: { bottom: "10%", right: "20%" } },
                  ].map(({ icon: IconComponent, position }, i) => (
                    <div
                      key={i}
                      className="absolute p-3 glass animate-bounce"
                      style={{
                        ...position,
                        animationDelay: `${i * 0.8}s`,
                        animationDuration: `${4 + i}s`,
                      }}
                    >
                      <IconComponent size={24} className="text-[var(--cognerax-blue)]" />
                    </div>
                  ))}

                  {/* Connecting Neural Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="heroLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--cognerax-teal)" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="var(--cognerax-blue)" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="var(--cognerax-purple)" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    {Array.from({ length: 6 }).map((_, i) => (
                      <line
                        key={i}
                        x1={`${20 + i * 15}%`}
                        y1={`${15 + i * 20}%`}
                        x2={`${60 + i * 10}%`}
                        y2={`${70 - i * 15}%`}
                        stroke="url(#heroLineGradient)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        className="animate-pulse"
                        style={{ animationDelay: `${1 + i * 0.3}s` }}
                      />
                    ))}
                  </svg>
                </div>

                {/* Multi-layered Glow Effects */}
                <div className="absolute -inset-6 bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] rounded-3xl opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] rounded-3xl opacity-30 blur-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}