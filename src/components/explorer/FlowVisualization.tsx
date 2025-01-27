import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ZoomIn, ZoomOut, X } from 'lucide-react';

interface ConceptPoint {
  id: string;
  x: number;
  y: number;
  label: string;
  reflectionPrompts: string[];
  examples: string[];
  insights: string;
}

interface StreamData {
  title: string;
  stream1: {
    name: string;
    color: string;
    concepts: ConceptPoint[];
  };
  stream2: {
    name: string;
    color: string;
    concepts: ConceptPoint[];
  };
  transcendence: string;
}

interface FlowVisualizationProps {
  data: StreamData;
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const FlowVisualization = ({
  data,
  zoomLevel,
  onZoomIn,
  onZoomOut
}: FlowVisualizationProps) => {
  const [selectedConcept, setSelectedConcept] = useState<ConceptPoint | null>(null);

  const handleConceptClick = (concept: ConceptPoint) => {
    setSelectedConcept(selectedConcept?.id === concept.id ? null : concept);
  };

  return (
    <div className="relative col-span-2">
      <Card>
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle>{data.title}</CardTitle>
            <div className="flex gap-2">
              <button 
                onClick={onZoomOut}
                className="p-2 hover:bg-gray-100 rounded-full"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button 
                onClick={onZoomIn}
                className="p-2 hover:bg-gray-100 rounded-full"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div 
            style={{ transform: `scale(${zoomLevel})` }}
            className="transition-transform"
          >
            <svg viewBox="0 0 800 400" className="w-full">
              {/* Background */}
              <rect width="800" height="400" fill="#f8fafc" />
              
              {/* Stream 1 */}
              <path
                d="M 100,150 C 200,150 300,100 400,150 C 480,190 496,200 551,176"
                fill="none"
                stroke={data.stream1.color}
                strokeWidth="20"
                opacity="0.6"
                strokeLinecap="round"
              />
              <text x="120" y="105" fill={data.stream1.color} fontSize="14">
                {data.stream1.name}
              </text>
              
              {/* Stream 2 */}
              <path
                d="M 100,200 C 200,200 300,250 400,200 C 480,160 496,152 551,176"
                fill="none"
                stroke={data.stream2.color}
                strokeWidth="20"
                opacity="0.6"
                strokeLinecap="round"
              />
              <text x="120" y="255" fill={data.stream2.color} fontSize="14">
                {data.stream2.name}
              </text>
              
              {/* Concept Points */}
              {[...data.stream1.concepts, ...data.stream2.concepts].map((concept) => (
                <g key={concept.id} onClick={() => handleConceptClick(concept)} className="cursor-pointer">
                  <circle
                    cx={concept.x}
                    cy={concept.y}
                    r="10"
                    fill={selectedConcept?.id === concept.id ? '#2563eb' : '#1e3a8a'}
                    className="transition-colors"
                  />
                  <text
                    x={concept.x}
                    y={concept.y + 24}
                    textAnchor="middle"
                    fontSize="12"
                    fill={selectedConcept?.id === concept.id ? '#2563eb' : '#1e3a8a'}
                    className="transition-colors"
                  >
                    {concept.label}
                  </text>
                </g>
              ))}
              
              {/* Transcendence */}
              <text x="660" y="180" textAnchor="middle" fontSize="12">
                {data.transcendence}
              </text>
            </svg>
          </div>
        </CardContent>
      </Card>

      {/* Reflection Panel */}
      {selectedConcept && (
        <Card className="absolute top-4 right-4 w-80 bg-white shadow-lg">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{selectedConcept.label}</CardTitle>
              <button
                onClick={() => setSelectedConcept(null)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Reflection Prompts</h4>
                <ul className="space-y-2">
                  {selectedConcept.reflectionPrompts.map((prompt, index) => (
                    <li key={index} className="text-sm">
                      • {prompt}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Examples</h4>
                <ul className="space-y-2">
                  {selectedConcept.examples.map((example, index) => (
                    <li key={index} className="text-sm">
                      • {example}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Key Insight</h4>
                <p className="text-sm">{selectedConcept.insights}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FlowVisualization;
