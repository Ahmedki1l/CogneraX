import { SimpleButton } from './ui/simple-button';
import cogneraXLogo from 'figma:asset/1a0665958bd51afeafab073a021c9a5023632f55.png';
import { Twitter, Linkedin, Github, Mail, MapPin, Phone, Heart } from 'lucide-react';

export function Footer() {
  const navigation = {
    company: [
      { name: 'About', href: '#/about' },
      { name: 'Contact', href: '#/contact' },
      { name: 'Legal', href: '#/legal' },
      { name: 'Security', href: '#/security' },
    ],
    products: [
      { name: 'CogneraX Learn', href: '#/products' },
      { name: 'Features', href: '#/features' },
      { name: 'About CogneraX', href: '#/about' },
      { name: 'Contact Us', href: '#/contact' },
    ],
    resources: [
      { name: 'Privacy Policy', href: '#/privacy' },
      { name: 'Terms of Service', href: '#/terms' },
      { name: 'Cookie Policy', href: '#/cookies' },
      { name: 'Support', href: '#/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#/privacy' },
      { name: 'Terms of Service', href: '#/terms' },
      { name: 'Cookie Policy', href: '#/cookies' },
      { name: 'Security', href: '#/security' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Email', href: 'mailto:info@cognerax.com', icon: Mail },
  ];

  return (
    <footer className="relative glass-nav border-t-0">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(32,178,170,0.03)_25%,rgba(32,178,170,0.03)_26%,transparent_27%,transparent_74%,rgba(32,178,170,0.03)_75%,rgba(32,178,170,0.03)_76%,transparent_77%,transparent),linear-gradient(rgba(32,178,170,0.03)_24%,transparent_25%,transparent_26%,rgba(32,178,170,0.03)_27%,rgba(32,178,170,0.03)_74%,transparent_75%,transparent_76%,rgba(32,178,170,0.03)_77%)] bg-[size:50px_50px]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <a href="#/" className="flex items-center space-x-3 group">
                <img 
                  src={cogneraXLogo} 
                  alt="CogneraX Logo" 
                  className="h-10 w-10 group-hover:scale-105 transition-transform duration-300"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity duration-300">
                  CogneraX
                </span>
              </a>
              <p className="mt-4 text-sm text-muted-foreground max-w-md leading-relaxed">
                Revolutionizing education through AI-powered learning platforms that enhance 
                teaching effectiveness and improve student outcomes.
              </p>
              
              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-[var(--cognerax-teal)] transition-colors group">
                  <div className="p-1 glass group-hover:bg-[var(--glass-hover-bg)] transition-colors">
                    <MapPin size={16} className="text-[var(--cognerax-teal)]" />
                  </div>
                  <span>Cairo, Egypt</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-[var(--cognerax-blue)] transition-colors group">
                  <div className="p-1 glass group-hover:bg-[var(--glass-hover-bg)] transition-colors">
                    <Phone size={16} className="text-[var(--cognerax-blue)]" />
                  </div>
                  <span>+20 155 661 7918</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-[var(--cognerax-purple)] transition-colors group">
                  <div className="p-1 glass group-hover:bg-[var(--glass-hover-bg)] transition-colors">
                    <Mail size={16} className="text-[var(--cognerax-purple)]" />
                  </div>
                  <span>info@cognerax.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex space-x-2">
                {socialLinks.map((item, index) => (
                  <SimpleButton key={item.name} variant="ghost" size="icon" className="glass-button hover:bg-[var(--glass-hover-bg)] transition-all duration-300">
                    <a href={item.href} className="text-muted-foreground hover:text-[var(--cognerax-teal)] transition-colors flex items-center justify-center">
                      <item.icon size={18} />
                      <span className="sr-only">{item.name}</span>
                    </a>
                  </SimpleButton>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-4">
              <div>
                <h3 className="font-semibold text-foreground">Company</h3>
                <ul className="mt-4 space-y-2">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-[#20b2aa] transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Products</h3>
                <ul className="mt-4 space-y-2">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-[#1e40af] transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Resources</h3>
                <ul className="mt-4 space-y-2">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-[#8b5cf6] transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Legal</h3>
                <ul className="mt-4 space-y-2">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground hover:text-[var(--cognerax-teal)] transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="my-8 h-px bg-[var(--glass-border)]"></div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-6 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2025 CogneraX. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">Made with <Heart size={14} className="text-red-500" /> in Cairo</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <SimpleButton variant="outline" size="sm" className="glass-button border-[var(--cognerax-teal)] text-[var(--cognerax-teal)] hover:bg-[var(--glass-hover-bg)] hover:border-[var(--cognerax-teal)]/50 transition-all duration-300">
                Newsletter
              </SimpleButton>
              <a href="#/contact">
                <SimpleButton size="sm" className="bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] hover:opacity-90 hover:scale-105 transition-all duration-300 text-white font-semibold">
                  Get Started
                </SimpleButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}