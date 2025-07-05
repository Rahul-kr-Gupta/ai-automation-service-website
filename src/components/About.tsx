import React from 'react'
import { Award, Users, Lightbulb, Target } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Award, label: 'Years of Experience', value: '10+' },
    { icon: Users, label: 'Expert Team Members', value: '50+' },
    { icon: Lightbulb, label: 'AI Projects Completed', value: '500+' },
    { icon: Target, label: 'Industries Served', value: '25+' }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-surface/30 to-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Leading the AI Revolution
              </span>
            </h2>
            <p className="text-xl text-textSecondary mb-8 leading-relaxed">
              At NeuralEdge, we're not just consultants – we're AI pioneers dedicated to transforming businesses 
              through intelligent technology solutions. Our team of world-class experts combines deep technical 
              knowledge with strategic business acumen.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 p-2 rounded-lg mt-1">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">Mission-Driven Approach</h3>
                  <p className="text-textSecondary">
                    We believe AI should augment human capabilities, not replace them. Our solutions are designed 
                    to empower your team and enhance decision-making.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-2 rounded-lg mt-1">
                  <Lightbulb className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-2">Innovation First</h3>
                  <p className="text-textSecondary">
                    We stay at the forefront of AI research and development, ensuring our clients benefit 
                    from the latest breakthroughs and methodologies.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#team"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 inline-block"
            >
              Meet Our Team
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 rounded-xl w-fit mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-text mb-2">{stat.value}</h3>
                <p className="text-textSecondary text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-2xl mb-6">
                <h4 className="text-xl font-bold text-text mb-3">Excellence</h4>
                <p className="text-textSecondary">
                  We deliver nothing short of exceptional results, ensuring every solution exceeds expectations.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-secondary/20 to-accent/20 p-6 rounded-2xl mb-6">
                <h4 className="text-xl font-bold text-text mb-3">Transparency</h4>
                <p className="text-textSecondary">
                  Clear communication and honest partnerships form the foundation of our client relationships.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-accent/20 to-primary/20 p-6 rounded-2xl mb-6">
                <h4 className="text-xl font-bold text-text mb-3">Innovation</h4>
                <p className="text-textSecondary">
                  We continuously push boundaries to deliver cutting-edge solutions that drive real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
