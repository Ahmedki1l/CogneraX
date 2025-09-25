import { useState } from 'react';
import { SimpleButton } from './ui/simple-button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Zap, Mail, User } from 'lucide-react';

interface EarlyAccessFormProps {
  onSubmit?: () => void;
  className?: string;
}

export function EarlyAccessForm({ onSubmit, className }: EarlyAccessFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    usage: '',
    features: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const aiFeatures = [
    { id: 'personalized-learning', label: 'Personalized Learning Paths', description: 'AI-driven custom learning experiences' },
    { id: 'ai-tutoring', label: 'AI Tutoring & Assistance', description: '24/7 intelligent learning support' },
    { id: 'content-generation', label: 'Automated Content Generation', description: 'AI-powered educational content creation' },
    { id: 'performance-analytics', label: 'Performance Analytics', description: 'Deep insights into learning progress' },
    { id: 'real-time-feedback', label: 'Real-time Feedback', description: 'Instant AI-powered learning feedback' },
    { id: 'adaptive-assessments', label: 'Adaptive Assessments', description: 'Smart testing that adapts to skill level' },
    { id: 'multi-language', label: 'Multi-language Support', description: 'Learn in your preferred language' },
    { id: 'collaborative-tools', label: 'Collaborative Learning Tools', description: 'AI-enhanced group learning features' }
  ];

  const handleFeatureToggle = (featureId: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.username || !formData.usage || formData.features.length === 0) {
      alert('Please fill in all required fields and select at least one AI feature.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email content
      const selectedFeatures = formData.features.map(id => 
        aiFeatures.find(feature => feature.id === id)?.label
      ).join(', ');

      const emailBody = `New Early Access Request:

Name: ${formData.username}
Email: ${formData.email}

How they plan to use CogneraX Learn:
${formData.usage}

Required AI Features:
${selectedFeatures}

Submitted: ${new Date().toLocaleString()}`;

      // Create mailto link
      const subject = encodeURIComponent('CogneraX Learn - Early Access Request');
      const body = encodeURIComponent(emailBody);
      const mailtoLink = `mailto:info@cognerax.com?subject=${subject}&body=${body}`;

      // Open default email client
      window.location.href = mailtoLink;
      
      alert('Early access request created! Please send the email to complete your request.');
      
      // Reset form
      setFormData({
        email: '',
        username: '',
        usage: '',
        features: []
      });

      onSubmit?.();
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <div className="relative glass-card overflow-hidden group">
        {/* Animated background gradient */}
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 p-6">
          <div className="flex items-center gap-3 text-2xl font-semibold mb-2">
            <div className="p-2 rounded-xl bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-blue)] hover:scale-110 hover:rotate-3 transition-transform duration-300">
              <Zap size={24} className="text-white" />
            </div>
            <span className="bg-gradient-to-r from-[var(--cognerax-teal)] to-[var(--cognerax-purple)] bg-clip-text text-transparent">
              Join the AI Revolution
            </span>
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Be among the first to experience the future of education with CogneraX Learn's private beta.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail size={16} className="text-[var(--cognerax-teal)]" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="glass border-[var(--glass-border)]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username" className="flex items-center gap-2">
                  <User size={16} className="text-[var(--cognerax-teal)]" />
                  Full Name *
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Your full name"
                  value={formData.username}
                  onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))}
                  required
                  className="glass border-[var(--glass-border)]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="usage">How will you use CogneraX Learn? *</Label>
              <Textarea
                id="usage"
                placeholder="Describe your educational goals, what subjects you want to learn, or how you plan to integrate AI-powered learning into your routine..."
                value={formData.usage}
                onChange={(e) => setFormData(prev => ({ ...prev, usage: e.target.value }))}
                className="min-h-[100px] glass border-[var(--glass-border)]"
                required
              />
            </div>

            <div className="space-y-4">
              <Label>Which AI features do you need most? *</Label>
              <div className="grid gap-3 sm:grid-cols-2">
                {aiFeatures.map((feature) => (
                  <div key={feature.id} className="flex items-start space-x-3 p-3 glass hover:bg-[var(--glass-hover-bg)] transition-colors">
                    <input
                      type="checkbox"
                      id={feature.id}
                      checked={formData.features.includes(feature.id)}
                      onChange={() => handleFeatureToggle(feature.id)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor={feature.id}
                        className="text-sm font-medium leading-none cursor-pointer"
                      >
                        {feature.label}
                      </label>
                      <p className="text-xs text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
              <SimpleButton 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] hover:shadow-lg hover:shadow-[var(--cognerax-teal-50)] text-white font-semibold relative overflow-hidden group"
                disabled={isSubmitting}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? 'Submitting...' : 'Request Early Access'}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--cognerax-blue)] via-[var(--cognerax-purple)] to-[var(--cognerax-teal)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </SimpleButton>
            </div>
          </form>
        </div>
        
        {/* Glow effect */}
        {/* <div className="absolute -inset-1 bg-gradient-to-r from-[var(--cognerax-teal)] via-[var(--cognerax-blue)] to-[var(--cognerax-purple)] rounded-lg opacity-20 blur-lg -z-10"></div> */}
      </div>
    </div>
  );
}