import React from 'react'
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-surface/50 backdrop-blur-sm border border-border rounded-full px-6 py-3 mb-8">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-textSecondary font-medium">AI-Powered Business Transformation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Unlock the Power
            </span>
            <br />
            <span className="text-text">of Artificial Intelligence</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-textSecondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI solutions. We help companies leverage machine learning, 
            automation, and data intelligence to drive growth and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>Start Your AI Journey</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="border border-border text-text px-8 py-4 rounded-xl font-semibold text-lg hover:bg-surface/50 transition-all duration-300"
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-surface/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-text mb-2">500+</h3>
              <p className="text-textSecondary">AI Projects Delivered</p>
            </div>
            
            <div className="bg-surface/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-secondary/20 p-3 rounded-xl">
                  <Zap className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-text mb-2">95%</h3>
              <p className="text-textSecondary">Client Satisfaction</p>
            </div>
            
            <div className="bg-surface/30 backdrop-blur-sm border border-border rounded-2xl p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-accent/20 p-3 rounded-xl">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-text mb-2">10x</h3>
              <p className="text-textSecondary">ROI Improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
