import React from 'react'
import { Brain, Database, Bot, BarChart3, Shield, Cog } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models tailored to your business needs, from predictive analytics to computer vision.',
      features: ['Predictive Analytics', 'Computer Vision', 'Natural Language Processing', 'Deep Learning']
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Streamline operations with intelligent automation that learns and adapts to your workflows.',
      features: ['Process Automation', 'Intelligent Chatbots', 'Document Processing', 'Workflow Optimization']
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
      features: ['Data Mining', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization']
    },
    {
      icon: BarChart3,
      title: 'AI Strategy Consulting',
      description: 'Strategic guidance to help you identify AI opportunities and create implementation roadmaps.',
      features: ['AI Readiness Assessment', 'Strategy Development', 'ROI Analysis', 'Implementation Planning']
    },
    {
      icon: Shield,
      title: 'AI Ethics & Governance',
      description: 'Ensure responsible AI deployment with comprehensive ethics frameworks and governance.',
      features: ['Bias Detection', 'Ethical AI Framework', 'Compliance Management', 'Risk Assessment']
    },
    {
      icon: Cog,
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems and infrastructure.',
      features: ['API Development', 'System Integration', 'Cloud Deployment', 'Performance Optimization']
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our AI Services
            </span>
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive innovation across every aspect of your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-text mb-4">{service.title}</h3>
              <p className="text-textSecondary mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-textSecondary">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 inline-block"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
