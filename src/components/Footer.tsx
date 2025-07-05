import React from 'react'
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-xl">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NeuralEdge
              </span>
            </div>
            <p className="text-textSecondary mb-6 max-w-md leading-relaxed">
              Transforming businesses through cutting-edge AI solutions. We help companies leverage 
              artificial intelligence to drive growth, innovation, and competitive advantage.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-6">Quick Links</h3>
            <nav>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#services" 
                    className="text-textSecondary hover:text-primary transition-colors duration-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-textSecondary hover:text-primary transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#case-studies" 
                    className="text-textSecondary hover:text-primary transition-colors duration-300"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a 
                    href="#team" 
                    className="text-textSecondary hover:text-primary transition-colors duration-300"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-textSecondary hover:text-primary transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-text mb-6">Contact Info</h3>
            <address className="not-italic">
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:hello@neuraledge.ai"
                    className="text-textSecondary hover:text-primary transition-colors duration-300"
                  >
                    hello@neuraledge.ai
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+15551234567"
                    className="text-textSecondary hover:text-primary transition-colors duration-300"
                  >
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-textSecondary">San Francisco, CA</span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-textSecondary text-sm">
              © {currentYear} NeuralEdge AI Consultancy. All rights reserved.
            </p>
            <nav>
              <div className="flex items-center space-x-6">
                <a 
                  href="/privacy" 
                  className="text-textSecondary hover:text-primary transition-colors duration-300 text-sm"
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="text-textSecondary hover:text-primary transition-colors duration-300 text-sm"
                >
                  Terms of Service
                </a>
                <a 
                  href="/cookies" 
                  className="text-textSecondary hover:text-primary transition-colors duration-300 text-sm"
                >
                  Cookie Policy
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
