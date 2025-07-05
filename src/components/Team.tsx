import React from 'react'
import { Linkedin, Twitter, Github } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former Google AI researcher with 15+ years in machine learning and neural networks.',
      expertise: ['Deep Learning', 'Computer Vision', 'NLP'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Data Science',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Data science leader who has built ML platforms for Fortune 500 companies.',
      expertise: ['MLOps', 'Big Data', 'Analytics'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'AI Ethics Director',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading expert in responsible AI development and algorithmic fairness.',
      expertise: ['AI Ethics', 'Bias Detection', 'Governance'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      name: 'James Thompson',
      role: 'Solutions Architect',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Enterprise architect specializing in scalable AI infrastructure and cloud solutions.',
      expertise: ['Cloud AI', 'Architecture', 'DevOps'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ]

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-surface/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-text">Meet Our</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AI Experts
            </span>
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Our world-class team of AI researchers, data scientists, and engineers are here to guide your transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:bg-surface/70 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-text mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-textSecondary text-sm leading-relaxed mb-4">{member.bio}</p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {member.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.linkedin}
                  className="p-2 text-textSecondary hover:text-primary transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="p-2 text-textSecondary hover:text-primary transition-colors duration-300"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href={member.social.github}
                  className="p-2 text-textSecondary hover:text-primary transition-colors duration-300"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
