import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Team() {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former VP of Engineering at Google with 15+ years in AI and machine learning.',
      expertise: ['AI Strategy', 'Product Vision', 'Team Leadership'],
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Principal Engineer at Microsoft, specialized in scalable cloud architectures.',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design'],
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Data Science',
      bio: 'PhD in Computer Science from MIT, published researcher in deep learning.',
      expertise: ['Machine Learning', 'Research', 'Algorithm Development'],
    },
    {
      name: 'James Kim',
      role: 'VP of Engineering',
      bio: 'Previously led engineering teams at Uber and Airbnb for 10+ years.',
      expertise: ['Engineering Management', 'Agile Development', 'Product Engineering'],
    },
    {
      name: 'Alexandra Thompson',
      role: 'Head of Customer Success',
      bio: 'Former consultant at McKinsey with expertise in digital transformation.',
      expertise: ['Client Relations', 'Business Strategy', 'Change Management'],
    },
    {
      name: 'David Park',
      role: 'Head of Security',
      bio: 'Cybersecurity expert with 12+ years protecting enterprise systems.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management'],
    },
  ];

  return (
    <section id="team" className="py-16 sm:py-24 bg-[var(--muted-50)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            World-class experts from leading technology companies, united by a passion 
            for solving complex business challenges with innovative solutions.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwdGVhbXxlbnwxfHx8fDE3NTg2MTczMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt={member.name}
                      className="h-24 w-24 rounded-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-1 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4 flex space-x-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-foreground">Join Our Growing Team</h3>
          <p className="mt-4 text-muted-foreground">
            We're always looking for talented individuals who share our passion for 
            innovation and excellence. Explore exciting career opportunities with us.
          </p>
          <Button className="mt-6" size="lg">
            View Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
}