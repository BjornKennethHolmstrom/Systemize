"use client"

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Book, ChevronRight, ChevronLeft, Lightbulb, Users, Target, ScrollText } from 'lucide-react';
import { learningPaths } from '@/lib/learn/paths';
import ArticlesSection from './ArticlesSection';

const LearningSection = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [activeChallenges, setActiveChallenges] = useState<Record<string, number>>({});
  const [activeView, setActiveView] = useState<'paths' | 'articles'>('paths');

  const getCurrentChallenge = (moduleId: string) => activeChallenges[moduleId] || 0;
  const setModuleChallenge = (moduleId: string, challengeIndex: number) => {
    setActiveChallenges(prev => ({
      ...prev,
      [moduleId]: challengeIndex
    }));
  };

  const currentPath = selectedPath ? learningPaths.find(p => p.id === selectedPath) : null;
  const currentModule = selectedModule && currentPath 
    ? currentPath.modules.find(m => m.id === selectedModule)
    : null;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="space-y-4">
        {/* View Selection */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => {
              setActiveView('paths');
              setSelectedPath(null);
              setSelectedModule(null);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              activeView === 'paths' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white border'
            }`}
          >
            <Book className="w-4 h-4" />
            Learning Paths
          </button>
          <button
            onClick={() => {
              setActiveView('articles');
              setSelectedPath(null);
              setSelectedModule(null);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              activeView === 'articles' 
                ? 'bg-blue-500 text-white' 
                : 'bg-white border'
            }`}
          >
            <ScrollText className="w-4 h-4" />
            Articles
          </button>
        </div>

        {/* Learning Paths View */}
        {activeView === 'paths' && (
          <div className="space-y-4">
            {/* Path Selection */}
            {!selectedPath && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {learningPaths.map((path) => (
                  <Card 
                    key={path.id}
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setSelectedPath(path.id)}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <path.icon className="w-5 h-5" />
                        {path.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{path.description}</p>
                      {path.modules.length > 0 && (
                        <div className="mt-4 text-sm text-blue-600">
                          {path.modules.length} modules available
                        </div>
                      )}
                      {path.modules.length === 0 && (
                        <div className="mt-4 text-sm text-gray-400">
                          Coming soon
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Module Selection and Content */}
            {selectedPath && currentPath && (
              <div>
                <button
                  onClick={() => {
                    setSelectedPath(null);
                    setSelectedModule(null);
                  }}
                  className="mb-4 text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to Learning Paths
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Modules List */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Book className="w-5 h-5" />
                        {currentPath.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {currentPath.modules.map((module) => (
                          <div
                            key={module.id}
                            className={`p-4 border rounded-lg transition-colors cursor-pointer ${
                              selectedModule === module.id
                                ? 'bg-blue-50 border-blue-200'
                                : 'hover:bg-gray-50'
                            }`}
                            onClick={() => setSelectedModule(module.id)}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{module.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                              </div>
                              <ChevronRight className="w-4 h-4 mt-1" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Module Content */}
                  {selectedModule && currentModule && (
                    <Card>
                      <CardHeader>
                        <CardTitle>{currentModule.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {/* Current Challenge */}
                          <div className="space-y-4">
                            <h3 className="font-medium flex items-center gap-2">
                              <Target className="w-4 h-4" />
                              Challenge {getCurrentChallenge(selectedModule) + 1}
                            </h3>
                            <div className="p-4 bg-gray-50 rounded-lg">
                              <p className="text-gray-800">
                                {currentModule.challenges[getCurrentChallenge(selectedModule)].situation}
                              </p>
                            </div>
                            <div className="p-4 border-l-2 border-blue-200">
                              <h4 className="font-medium text-sm mb-2">Reflection</h4>
                              <p className="text-gray-600">
                                {currentModule.challenges[getCurrentChallenge(selectedModule)].reflection}
                              </p>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h4 className="font-medium text-sm mb-2 flex items-center gap-2">
                                <Lightbulb className="w-4 h-4" />
                                Systemic Approach
                              </h4>
                              <p className="text-gray-800">
                                {currentModule.challenges[getCurrentChallenge(selectedModule)].systemicApproach}
                              </p>
                            </div>
                          </div>

                          {/* Navigation */}
                          <div className="flex justify-between">
                            <button
                              onClick={() => setModuleChallenge(
                                selectedModule,
                                Math.max(0, getCurrentChallenge(selectedModule) - 1)
                              )}
                              className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                              disabled={getCurrentChallenge(selectedModule) === 0}
                            >
                              Previous
                            </button>
                            <button
                              onClick={() => setModuleChallenge(
                                selectedModule,
                                Math.min(
                                  currentModule.challenges.length - 1,
                                  getCurrentChallenge(selectedModule) + 1
                                )
                              )}
                              className="px-4 py-2 text-sm bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
                              disabled={getCurrentChallenge(selectedModule) === (currentModule.challenges.length - 1)}
                            >
                              Next Challenge
                            </button>
                          </div>

                          {/* Key Insights */}
                          <div className="mt-6">
                            <h3 className="font-medium flex items-center gap-2 mb-3">
                              <Users className="w-4 h-4" />
                              Key Insights
                            </h3>
                            <ul className="space-y-2">
                              {currentModule.insights.map((insight, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                                  <span className="text-blue-500">•</span>
                                  {insight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Articles View */}
        {activeView === 'articles' && (
          <ArticlesSection />
        )}
      </div>
    </div>
  );
};

export default LearningSection;
