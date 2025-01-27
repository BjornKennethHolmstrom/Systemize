import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface Node {
  id: string;
  title: string;
  subtitle?: string;
  x: number;
  y: number;
  color: string;
  description?: string;
}

interface BeliefSystemsVisualizationProps {
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const BeliefSystemsVisualization = ({
  zoomLevel,
  onZoomIn,
  onZoomOut
}: BeliefSystemsVisualizationProps) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const nodes: Node[] = [
    {
      id: 'central',
      title: 'Origins of',
      subtitle: 'Existence',
      x: 400,
      y: 300,
      color: '#3b82f6',
      description: 'Different approaches to understanding the fundamental nature of existence'
    },
    {
      id: 'scientific',
      title: 'Scientific',
      subtitle: 'Big Bang',
      x: 550,
      y: 200,
      color: '#22c55e',
      description: 'Scientific explanations based on empirical observation and mathematical models'
    },
    {
      id: 'religious',
      title: 'Divine',
      subtitle: 'Creation',
      x: 650,
      y: 300,
      color: '#eab308',
      description: 'Religious perspectives on divine creation and cosmic purpose'
    },
    {
      id: 'indigenous',
      title: 'Indigenous',
      subtitle: 'Mythology',
      x: 550,
      y: 400,
      color: '#ec4899',
      description: 'Traditional indigenous understanding of origins and cosmic relationships'
    },
    {
      id: 'philosophical',
      title: 'Philosophical',
      subtitle: 'First Cause',
      x: 250,
      y: 200,
      color: '#8b5cf6',
      description: 'Philosophical inquiry into causation and existence'
    },
    {
      id: 'mystical',
      title: 'Mystical',
      subtitle: 'Experience',
      x: 150,
      y: 300,
      color: '#f97316',
      description: 'Direct mystical experiences of ultimate reality'
    },
    {
      id: 'psychological',
      title: 'Psychological',
      subtitle: 'Meaning',
      x: 250,
      y: 400,
      color: '#06b6d4',
      description: 'Psychological perspectives on meaning-making and existence'
    }
  ];

  // Connection points for intersection insights
  const intersectionPoints = [
    { x: 400, y: 200 },
    { x: 400, y: 400 },
    { x: 300, y: 300 },
    { x: 500, y: 300 }
  ];

  const getConnections = () => {
    const centralNode = nodes.find(n => n.id === 'central');
    if (!centralNode) return [];
    
    return nodes
      .filter(n => n.id !== 'central')
      .map(node => ({
        x1: centralNode.x,
        y1: centralNode.y,
        x2: node.x,
        y2: node.y
      }));
  };

  return (
    <Card className="col-span-2">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Belief Systems: Origins of Existence</CardTitle>
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
            
            {/* Connection Lines */}
            {getConnections().map((conn, i) => (
              <path
                key={i}
                d={`M ${conn.x1} ${conn.y1} L ${conn.x2} ${conn.y2}`}
                stroke="#94a3b8"
                strokeWidth="2"
              />
            ))}
            
            {/* Intersection Points */}
            {intersectionPoints.map((point, i) => (
              <circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="15"
                fill="#64748b"
                opacity="0.6"
                className="cursor-pointer hover:opacity-80"
              />
            ))}
            
            {/* Nodes */}
            {nodes.map((node) => (
              <g
                key={node.id}
                className="cursor-pointer"
                onClick={() => setSelectedNode(node.id === selectedNode ? null : node.id)}
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.id === 'central' ? 50 : 40}
                  fill={node.color}
                  opacity={selectedNode === node.id ? 1 : 0.8}
                  className="transition-opacity"
                />
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  fill="white"
                  fontSize={node.id === 'central' ? 14 : 12}
                >
                  {node.title}
                  {node.subtitle && (
                    <tspan x={node.x} y={node.y + 15}>
                      {node.subtitle}
                    </tspan>
                  )}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Description Panel */}
        {selectedNode && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">
              {nodes.find(n => n.id === selectedNode)?.title}
              {nodes.find(n => n.id === selectedNode)?.subtitle && 
                ` ${nodes.find(n => n.id === selectedNode)?.subtitle}`}
            </h3>
            <p className="text-gray-600">
              {nodes.find(n => n.id === selectedNode)?.description}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BeliefSystemsVisualization;