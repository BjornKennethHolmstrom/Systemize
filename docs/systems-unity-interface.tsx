import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Layers, Map, Book, Users, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

const SystemsUnityInterface = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  
  return (
    <div className="w-full h-screen max-w-6xl mx-auto p-4 bg-gray-50">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Systems Unity</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
            <Map className="w-4 h-4" />
            Explore
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg">
            <Book className="w-4 h-4" />
            Learn
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg">
            <Users className="w-4 h-4" />
            Community
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-3 gap-4 h-[calc(100vh-8rem)]">
        {/* Left Panel - Navigation */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Explore Systems</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {['Belief Systems', 'Ethics', 'Knowledge', 'Society'].map((system) => (
                <div key={system} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <span>{system}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Center Panel - Visualization */}
        <Card className="col-span-2 relative">
          <CardHeader className="border-b">
            <CardTitle className="flex items-center justify-between">
              <span>Systems View</span>
              <div className="flex gap-2">
                <button 
                  onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.1))}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setZoomLevel(Math.min(2, zoomLevel + 0.1))}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <div className="bg-white rounded-lg p-4 h-full flex items-center justify-center">
              <div style={{ transform: `scale(${zoomLevel})` }} className="transition-transform">
                {/* Placeholder for SVG visualization */}
                <div className="text-gray-400">Interactive Visualization Area</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SystemsUnityInterface;
