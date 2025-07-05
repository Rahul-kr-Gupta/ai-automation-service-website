import React from 'react'
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react'

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'E-commerce Personalization Engine',
      client: 'Global Retail Giant',
      industry: 'Retail',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      challenge: 'Increase customer engagement and conversion rates through personalized shopping experiences.',
      solution: 'Implemented ML-powered recommendation system with real-time personalization.',
      results: [
        { metric: 'Conversion Rate', improvement: '+45%', icon: TrendingUp },
        { metric: 'Customer Engagement', improvement: '+60%', icon: Users },
        { metric: 'Revenue Growth', improvement: '+35%', icon: Zap }
      ],
      tags: ['Machine Learning', 'Recommendation Systems', 'Real-time Analytics']
    },
    {
      title: 'Predictive Maintenance Platform',
      client: 'Manufacturing Leader',
      industry: 'Manufacturing',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      challenge: 'Reduce equipment downtime and maintenance costs through predictive analytics.',
      solution: 'Deployed IoT sensors and ML models to predict equipment failures before they occur.',
      results: [
        { metric: 'Downtime Reduction', improvement: '-70%', icon: TrendingUp },
        { metric: 'Maintenance Costs', improvement: '-40%', icon: Users },
        { metric: 'Equipment Efficiency', improvement: '+25%', icon: Zap }
      ],
      tags: ['Predictive Analytics', 'IoT Integration', 'Time Series Forecasting']
    },
    {
      title: 'Intelligent Document Processing',
      client: 'Financial Services Firm',
      industry: 'Finance',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      challenge: 'Automate document processing and reduce manual review time for loan applications.',
      solution: 'Built NLP and computer vision system for automated document extraction and analysis.',
      results: [
        { metric: 'Processing Speed', improvement: '+80%', icon: TrendingUp },
        { metric: 'Accuracy Rate', improvement: '+95%', icon: Users },
        { metric: 'Cost Savings', improvement: '-50%', icon: Zap }
      ],
      tags: ['Natural Language Processing', 'Computer Vision', 'Document AI']
    }
  ]

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-background to-surface/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-text">Success</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Discover how we've helped leading organizations transform their operations with AI
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {study.industry}
                </div>
                
                <h3 className="text-3xl font-bold text-text mb-4">{study.title}</h3>
                <p className="text-lg text-textSecondary mb-6">{study.client}</p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-text mb-2">Challenge</h4>
                    <p className="text-textSecondary">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-text mb-2">Solution</h4>
                    <p className="text-textSecondary">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-4 text-center">
                      <result.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-text mb-1">{result.improvement}</div>
                      <div className="text-sm text-textSecondary">{result.metric}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="group flex items-center space-x-2 text-primary hover:text-secondary font-semibold transition-colors duration-300">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden group">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
