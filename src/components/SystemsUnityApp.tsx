"use client"

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Map, 
  Book, 
  Users, 
  Hammer
} from 'lucide-react';
import { explorerData } from '@/lib/explorer/data';
import ExplorerNavigation from '@/components/explorer/ExplorerNavigation';
import TopicVisualization from '@/components/explorer/TopicVisualization';
import LearningSection from '@/components/LearningSection';
import ResourcesDisplay from '@/components/ResourcesDisplay';

const SystemsUnityApp = () => {
  const [activeSection, setActiveSection] = useState('explore');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState('science-spirituality');

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Systems Unity</h1>
            <div className="flex gap-4">
              <button 
                onClick={() => setActiveSection('explore')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  activeSection === 'explore' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white border'
                }`}
              >
                <Map className="w-4 h-4" />
                Explore
              </button>
              <button 
                onClick={() => setActiveSection('learn')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  activeSection === 'learn' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white border'
                }`}
              >
                <Book className="w-4 h-4" />
                Learn
              </button>
              <button 
                onClick={() => setActiveSection('community')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  activeSection === 'community' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white border'
                }`}
              >
                <Users className="w-4 h-4" />
                Community
              </button>
              <button 
                onClick={() => setActiveSection('resources')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                  activeSection === 'resources' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white border'
                }`}
              >
                <Hammer className="w-4 h-4" />
                Tools & Resources
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto p-4">
        {activeSection === 'explore' && (
          <div className="grid grid-cols-3 gap-4">
            <ExplorerNavigation 
              topics={explorerData}
              selectedTopic={selectedTopic}
              onSelectTopic={setSelectedTopic}
            />
            {selectedTopic && (
              <TopicVisualization
                topicId={selectedTopic}
                data={explorerData[selectedTopic]}
                zoomLevel={zoomLevel}
                onZoomIn={() => setZoomLevel(Math.min(2, zoomLevel + 0.1))}
                onZoomOut={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.1))}
              />
            )}
          </div>
        )}

        {activeSection === 'learn' && (
          <div className="space-y-4">
            <LearningSection />
          </div>
        )}

        {activeSection === 'community' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Community Discussions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    'Bridging Science and Spirituality',
                    'Ethics in Technology',
                    'Individual vs Collective Growth',
                    'Art and Scientific Method'
                  ].map((topic, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                      <h3 className="font-medium">{topic}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        12 participants • Last active 2h ago
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shared Maps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    'Universal Consciousness Map',
                    'Technology Ethics Framework',
                    'Personal Growth Pathways',
                    'Artistic Scientific Process'
                  ].map((map, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                      <h3 className="font-medium">{map}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Created by @username • 5 forks
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'resources' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Tools & Resources</h2>
            </div>
            <p className="text-gray-600">
              Explore these tools and resources to support your systems thinking journey.
            </p>
            <ResourcesDisplay />
          </div>
        )}
      </main>
    </div>
  );
};
export default SystemsUnityApp;
