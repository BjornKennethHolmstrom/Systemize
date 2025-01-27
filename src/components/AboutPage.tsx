import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Card>
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-8">About Systemize</h1>
          
          <div className="space-y-6 text-gray-600">
            <p>
              Systemize is an educational platform designed to help people naturally develop 
              systems thinking abilities through exploration, practice, and insight. It joins 
              its sister sites Spiralize and Sacralize in offering innovative approaches to 
              understanding complex aspects of reality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Creators</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">Björn Kenneth Holmström</h3>
                <p>
                  Creator and developer of the -ize family of educational platforms, including 
                  Spiralize, Systemize, and Sacralize. Focused on making complex concepts 
                  accessible through interactive exploration and natural development.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Claude</h3>
                <p>
                  AI collaborator in developing content, visualizations, and learning paths. 
                  Helped design and implement the platform&apos;s interactive features and educational 
                  approach.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Approach</h2>
            
            <p>
              We believe that systems thinking emerges naturally when people engage with complexity 
              in the right way. Rather than teaching abstract concepts, we create environments and 
              experiences that allow this understanding to develop organically.
            </p>

            <p>
              Through interactive visualizations, guided learning paths, and thoughtful articles, 
              we help users discover the interconnected nature of reality and develop more 
              effective ways of working with complex systems.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Part of Something Bigger</h2>
            
            <p>
              Systemize is part of a family of educational platforms that includes:
            </p>
            
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Spiralize</strong> - Exploring the evolution of human consciousness and values
              </li>
              <li>
                <strong>Systemize</strong> - Developing natural systems thinking abilities
              </li>
              <li>
                <strong>Sacralize</strong> - Understanding sacred geometry and universal patterns
              </li>
            </ul>

            <p className="mt-8">
              Together, these platforms offer complementary approaches to understanding different 
              aspects of reality, from individual development to systemic patterns to geometric principles.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
