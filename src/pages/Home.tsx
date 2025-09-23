import { Hero } from '../components/Hero';
import { AIShowcase } from '../components/AIShowcase';
import { TechStack } from '../components/TechStack';

export function Home() {
  return (
    <div>
      <Hero />
      <AIShowcase />
      <TechStack />
    </div>
  );
}