import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface Element {
  id: string;
  label: string;
  x: number;
  y: number;
  size: number;
  color: string;
  description: string;
  connections: string[];  // IDs of connected elements
  type: 'plant' | 'root' | 'resource' | 'tech';
}

interface EcologicalVisualizationProps {
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const EcologicalVisualization = ({
  zoomLevel,
  onZoomIn,
  onZoomOut
}: EcologicalVisualizationProps) => {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  // Define garden elements
  const elements: Element[] = [
    {
      id: 'natural',
      label: 'Natural Systems',
      x: 400,
      y: 200,
      size: 70,
      color: '#22c55e',
      type: 'plant',
      description: 'Ecosystems, biodiversity, and natural cycles that sustain life',
      connections: ['resources', 'human', 'feedback']
    },
    {
      id: 'human',
      label: 'Human Systems',
      x: 600,
      y: 300,
      size: 65,
      color: '#8b5cf6',
      type: 'plant',
      description: 'Social structures, economies, and cultural practices that shape our interaction with nature',
      connections: ['tech', 'resources', 'natural']
    },
    {
      id: 'tech',
      label: 'Technology',
      x: 500,
      y: 400,
      size: 60,
      color: '#3b82f6',
      type: 'tech',
      description: 'Tools and innovations that mediate our relationship with natural systems',
      connections: ['human', 'resources']
    },
    {
      id: 'resources',
      label: 'Resource Flows',
      x: 300,
      y: 300,
      size: 55,
      color: '#f59e0b',
      type: 'resource',
      description: 'Energy, materials, and information flowing through the system',
      connections: ['natural', 'human', 'tech']
    },
    {
      id: 'feedback',
      label: 'Feedback Loops',
      x: 450,
      y: 300,
      size: 50,
      color: '#ec4899',
      type: 'root',
      description: 'Cycles of cause and effect that maintain system balance',
      connections: ['natural', 'adaptation']
    },
    {
      id: 'adaptation',
      label: 'Adaptation',
      x: 200,
      y: 400,
      size: 60,
      color: '#06b6d4',
      type: 'plant',
      description: 'System responses to change and stress',
      connections: ['feedback', 'resources']
    }
  ];

  // Generate a curved path between two elements
  const getPath = (start: Element, end: Element) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2 - Math.sqrt(dx * dx + dy * dy) / 4;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Generate plant shape for an element
  const getPlantShape = (element: Element) => {
    if (element.type === 'plant') {
      return `
        M ${element.x} ${element.y + element.size}
        C ${element.x - element.size} ${element.y + element.size/2},
          ${element.x - element.size/2} ${element.y - element.size},
          ${element.x} ${element.y - element.size}
        C ${element.x + element.size/2} ${element.y - element.size},
          ${element.x + element.size} ${element.y + element.size/2},
          ${element.x} ${element.y + element.size}
      `;
    }
    return '';
  };

  return (
    <Card className="col-span-2">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Ecological Thinking: Living Systems</CardTitle>
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
          <svg viewBox="0 0 800 600" className="w-full">
            {/* Background */}
            <rect width="800" height="600" fill="#f8fafc"/>
            
            {/* Ground */}
            <path 
              d="M 0 450 Q 400 430, 800 450 T 1600 450" 
              fill="#dcfce7"
              stroke="none"
            />

            {/* Connections */}
            {elements.map(element => 
              element.connections.map(targetId => {
                const target = elements.find(e => e.id === targetId);
                if (!target) return null;
                
                const isHighlighted = hoveredElement === element.id || 
                                    hoveredElement === targetId;
                
                return (
                  <path
                    key={`${element.id}-${targetId}`}
                    d={getPath(element, target)}
                    stroke={isHighlighted ? element.color : '#94a3b8'}
                    strokeWidth={isHighlighted ? 3 : 1}
                    fill="none"
                    opacity={isHighlighted ? 0.8 : 0.3}
                    className="transition-all duration-300"
                  />
                );
              })
            )}

            {/* Elements */}
            {elements.map(element => (
              <g
                key={element.id}
                onMouseEnter={() => setHoveredElement(element.id)}
                onMouseLeave={() => setHoveredElement(null)}
                onClick={() => setSelectedElement(
                  selectedElement === element.id ? null : element.id
                )}
                className="cursor-pointer"
              >
                {/* Plant shape for plant-type elements */}
                {element.type === 'plant' && (
                  <path
                    d={getPlantShape(element)}
                    fill={element.color}
                    opacity={selectedElement === element.id ? 1 : 0.7}
                    className="transition-opacity"
                  />
                )}
                
                {/* Circle for non-plant elements */}
                {element.type !== 'plant' && (
                  <circle
                    cx={element.x}
                    cy={element.y}
                    r={element.size}
                    fill={element.color}
                    opacity={selectedElement === element.id ? 1 : 0.7}
                    className="transition-opacity"
                  />
                )}

                {/* Label */}
                <text
                  x={element.x}
                  y={element.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="14"
                  className="pointer-events-none"
                >
                  {element.label.split(' ').map((word, i, arr) => (
                    <tspan
                      key={word}
                      x={element.x}
                      dy={i === 0 ? -((arr.length - 1) * 12) / 2 : 12}
                    >
                      {word}
                    </tspan>
                  ))}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Description Panel */}
        {selectedElement && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">
              {elements.find(e => e.id === selectedElement)?.label}
            </h3>
            <p className="text-gray-600">
              {elements.find(e => e.id === selectedElement)?.description}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EcologicalVisualization;
