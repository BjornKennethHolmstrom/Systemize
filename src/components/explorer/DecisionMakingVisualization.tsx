import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  size: number;
  description: string;
  influences: string[];  // IDs of nodes this influences
  strength: number;      // 0-1, influences connection opacity
}

interface Connection {
  from: string;
  to: string;
  strength: number;
}

interface DecisionMakingVisualizationProps {
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const DecisionMakingVisualization = ({
  zoomLevel,
  onZoomIn,
  onZoomOut
}: DecisionMakingVisualizationProps) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes: Node[] = [
    {
      id: 'rational',
      label: 'Rational Analysis',
      x: 400,          // Moved to center
      y: 150,          // Higher up
      color: '#3b82f6',
      size: 50,        // Increased from 40
      description: 'Logical evaluation of facts, pros and cons, and potential outcomes',
      influences: ['emotional', 'intuitive', 'social'],
      strength: 0.8
    },
    {
      id: 'emotional',
      label: 'Emotional Intelligence',
      x: 600,          // Further right
      y: 200,          // Adjusted Y
      color: '#ec4899',
      size: 50,        // Increased
      description: 'Understanding and managing emotions in decision making',
      influences: ['intuitive', 'social', 'flow'],
      strength: 0.7
    },
    {
      id: 'intuitive',
      label: 'Intuitive Judgment',
      x: 250,          // Further left
      y: 300,          // Middle height
      color: '#8b5cf6',
      size: 50,        // Increased
      description: 'Quick, unconscious processing based on experience',
      influences: ['instinct', 'flow'],
      strength: 0.9
    },
    {
      id: 'social',
      label: 'Social Context',
      x: 550,          // Spread right
      y: 450,          // Lower
      color: '#22c55e',
      size: 50,        // Increased
      description: 'Influence of social norms, relationships, and cultural factors',
      influences: ['emotional', 'experience'],
      strength: 0.6
    },
    {
      id: 'experience',
      label: 'Past Experience',
      x: 150,          // Further left
      y: 200,          // Upper area
      color: '#f97316',
      size: 50,        // Increased
      description: 'Learning from previous decisions and their outcomes',
      influences: ['intuitive', 'rational'],
      strength: 0.8
    },
    {
      id: 'future',
      label: 'Future Implications',
      x: 700,          // Far right
      y: 350,          // Middle-lower
      color: '#06b6d4',
      size: 50,        // Increased
      description: 'Consideration of long-term consequences and possibilities',
      influences: ['rational', 'social'],
      strength: 0.7
    },
    {
      id: 'instinct',
      label: 'Basic Instinct',
      x: 200,          // Left side
      y: 450,          // Lower
      color: '#eab308',
      size: 50,        // Increased
      description: 'Primal responses and survival-oriented decision making',
      influences: ['emotional', 'intuitive'],
      strength: 0.9
    },
    {
      id: 'flow',
      label: 'Effortless Flow',
      x: 450,          // Center-right
      y: 300,          // Middle
      color: '#a855f7',
      size: 50,        // Increased
      description: 'State of optimal decision making with natural ease',
      influences: ['intuitive', 'experience'],
      strength: 0.6
    }
  ];

  const getConnections = (): Connection[] => {
    const connections: Connection[] = [];
    nodes.forEach(node => {
      node.influences.forEach(targetId => {
        connections.push({
          from: node.id,
          to: targetId,
          strength: node.strength
        });
      });
    });
    return connections;
  };

  const getConnectionPath = (start: Node, end: Node) => {
    // Create a curved path between nodes
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const dr = Math.sqrt(dx * dx + dy * dy);
    return `M ${start.x} ${start.y} A ${dr} ${dr} 0 0 1 ${end.x} ${end.y}`;
  };

  return (
    <Card className="col-span-2">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Decision Making Dynamics</CardTitle>
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
            <rect width="800" height="600" fill="#f8fafc"/>
            
            {/* Connections */}
            {getConnections().map((conn) => {
              const startNode = nodes.find(n => n.id === conn.from)!;
              const endNode = nodes.find(n => n.id === conn.to)!;
              const isHighlighted = hoveredNode === conn.from || hoveredNode === conn.to;
              
              return (
                <path
                  key={`${conn.from}-${conn.to}`}
                  d={getConnectionPath(startNode, endNode)}
                  stroke={isHighlighted ? startNode.color : '#94a3b8'}
                  strokeWidth={isHighlighted ? 2 : 1}
                  fill="none"
                  opacity={isHighlighted ? conn.strength : 0.3}
                  className="transition-all duration-300"
                />
              );
            })}
            
            {/* Nodes */}
            {nodes.map((node) => {
              const isSelected = selectedNode === node.id;
              const isHovered = hoveredNode === node.id;
              
              return (
                <g
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setSelectedNode(isSelected ? null : node.id)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.size}
                    fill={node.color}
                    opacity={isSelected || isHovered ? 1 : 0.7}
                    className="transition-all duration-300"
                  />
                  <text
                    x={node.x}
                    y={node.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="14"  // Increased from 12
                    className="pointer-events-none"
                  >
                    {node.label.split(' ').map((word, _, arr) => (
                      <tspan
                        key={_}
                        x={node.x}
                        dy={_ === 0 ? -((arr.length - 1) * 12) / 2 : 12}
                      >
                        {word}
                      </tspan>
                    ))}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Description Panel */}
        {selectedNode && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">
              {nodes.find(n => n.id === selectedNode)?.label}
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

export default DecisionMakingVisualization;
