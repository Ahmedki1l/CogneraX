import { useState, useEffect } from 'react';
import { SimpleButton } from './ui/simple-button';
import { SimpleDialog, SimpleDialogContent, SimpleDialogHeader, SimpleDialogTitle, SimpleDialogTrigger } from './ui/simple-dialog';
import { EarlyAccessForm } from './EarlyAccessForm';
import { navigate } from './Router';
import cogneraXLogo from 'figma:asset/1a0665958bd51afeafab073a021c9a5023632f55.png';
import { X, Menu } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Features', path: '/features' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="bg-white sticky top-0 z-50 shadow-lg border-b border-border/20">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <button onClick={() => handleNavigation('/')} className="flex items-center space-x-3 group">
              <img 
                src={cogneraXLogo} 
                alt="CogneraX Logo" 
                className="h-12 w-12 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
                CogneraX
              </span>
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`relative px-6 py-3 rounded-xl transition-all duration-300 ${
                  isActive(item.path)
                    ? 'glass-card text-[var(--cognerax-teal)] shadow-lg transform scale-105'
                    : 'glass-button text-foreground hover:text-[var(--cognerax-teal)] hover:scale-105'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--cognerax-teal)]/10 via-[var(--cognerax-blue)]/10 to-[var(--cognerax-purple)]/10 rounded-xl animate-pulse" />
                )}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center">
            <SimpleDialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <SimpleDialogTrigger asChild>
                <SimpleButton className="bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] hover:from-[var(--cognerax-blue)] hover:to-[var(--cognerax-purple)] text-white hover:scale-105 transition-all duration-300">
                  Request Early Access
                </SimpleButton>
              </SimpleDialogTrigger>
              <SimpleDialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card">
                <SimpleDialogHeader>
                  <SimpleDialogTitle>Join CogneraX Learn Private Beta</SimpleDialogTitle>
                </SimpleDialogHeader>
                <EarlyAccessForm onSubmit={() => setDialogOpen(false)} />
              </SimpleDialogContent>
            </SimpleDialog>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <SimpleButton
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="glass-button"
            >
              {mobileMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </SimpleButton>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="glass-card mx-4 mt-4 p-4 space-y-2 pb-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'glass-card text-[var(--cognerax-teal)] shadow-lg bg-gradient-to-r from-[var(--cognerax-teal)]/10 via-[var(--cognerax-blue)]/10 to-[var(--cognerax-purple)]/10'
                      : 'glass-button text-foreground hover:text-[var(--cognerax-teal)]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <SimpleDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <SimpleDialogTrigger asChild>
                    <SimpleButton className="w-full bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] hover:from-[var(--cognerax-blue)] hover:to-[var(--cognerax-purple)] text-white hover:scale-105 transition-all duration-300">
                      Request Early Access
                    </SimpleButton>
                  </SimpleDialogTrigger>
                  <SimpleDialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card">
                    <SimpleDialogHeader>
                      <SimpleDialogTitle>Join CogneraX Learn Private Beta</SimpleDialogTitle>
                    </SimpleDialogHeader>
                    <EarlyAccessForm onSubmit={() => {
                      setDialogOpen(false);
                      setMobileMenuOpen(false);
                    }} />
                  </SimpleDialogContent>
                </SimpleDialog>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}