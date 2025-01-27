import React from 'react';
import { Card } from '@/components/ui/card';
import { Brain, BookOpen, Network, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo SVG */}
          <svg className="w-64 h-16 mx-auto mb-8" viewBox="0 0 200 50">
            <g transform="translate(10, 25)">
              <path d="M 0,0 C 10,-10 20,-5 30,0 C 40,5 50,10 60,0" 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="3"
                    strokeLinecap="round"/>
              <path d="M 0,0 C 10,10 20,5 30,0 C 40,-5 50,-10 60,0" 
                    fill="none" 
                    stroke="#8b5cf6" 
                    strokeWidth="3"
                    strokeLinecap="round"/>
              <circle cx="30" cy="0" r="4" fill="#1e3a8a"/>
            </g>
            <text x="80" y="32" 
                  fontFamily="Arial" 
                  fontSize="24" 
                  fontWeight="bold" 
                  fill="#1e3a8a">
              Systemize
            </text>
          </svg>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Develop Natural Systems Thinking
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Journey through interactive explorations, guided learning paths, and deep insights 
            to discover how systems thinking emerges naturally from engaging with complexity.
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors">
            Start Exploring
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Interactive Visualizations */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Network className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Visualizations</h3>
              <p className="text-gray-600">
                Explore interconnected systems through dynamic, interactive visualizations.
              </p>
            </Card>

            {/* Learning Paths */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Brain className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Learning Paths</h3>
              <p className="text-gray-600">
                Follow guided journeys that naturally develop systems thinking abilities.
              </p>
            </Card>

            {/* Educational Articles */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deep Insights</h3>
              <p className="text-gray-600">
                Explore comprehensive articles on systems thinking and integration.
              </p>
            </Card>

            {/* Community */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Connect with others on the journey of systems understanding.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Part of a Larger Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-16 mb-4 flex items-center justify-center">
                <img 
                  src="/spiralize-logo.svg" 
                  alt="Spiralize Logo" 
                  className="h-full w-auto"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Explore the natural evolution of human consciousness and values.
              </p>
              <a 
                href="https://spiralize.org" 
                className="text-blue-500 hover:text-blue-600 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Spiralize →
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-16 mb-4 flex items-center justify-center">
                <img 
                  src="/systemize-logo.svg" 
                  alt="Systemize Logo" 
                  className="h-full w-auto"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Develop natural systems thinking through exploration and practice.
              </p>
              <span className="text-blue-500">
                You are here
              </span>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-16 mb-4 flex items-center justify-center">
                <img 
                  src="/sacralize-logo.svg" 
                  alt="Sacralize Logo" 
                  className="h-full w-auto"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Discover the patterns and principles of sacred geometry.
              </p>
              <a 
                href="https://sacralize.org" 
                className="text-blue-500 hover:text-blue-600 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Sacralize →
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your Journey</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start exploring the interconnected nature of reality and develop your systems thinking naturally.
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© 2024 Systemize. Part of the -ize family of educational platforms.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
