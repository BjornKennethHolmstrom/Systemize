import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface ValueNode {
  id: string;
  label: string;
  type: 'core' | 'principle' | 'application' | 'expression';
  x: number;
  y: number;
  color: string;
  description: string;
  examples: string[];
  connectedTo: string[];
}

interface ValueSystemsVisualizationProps {
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const ValueSystemsVisualization = ({
  zoomLevel,
  onZoomIn,
  onZoomOut
}: ValueSystemsVisualizationProps) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes: ValueNode[] = [
    // Core Values
    {
      id: 'love',
      label: 'Love',
      type: 'core',
      x: 300,
      y: 150,
      color: '#ec4899',
      description: 'The fundamental force of connection and compassion',
      examples: [
        'Unconditional acceptance',
        'Deep empathy',
        'Care for others'
      ],
      connectedTo: ['compassion', 'community', 'nurturing']
    },
    {
      id: 'truth',
      label: 'Truth',
      type: 'core',
      x: 500,
      y: 150,
      color: '#3b82f6',
      description: 'The pursuit and embrace of what is real and authentic',
      examples: [
        'Intellectual honesty',
        'Scientific inquiry',
        'Personal authenticity'
      ],
      connectedTo: ['honesty', 'wisdom', 'learning']
    },

    // Derived Principles
    {
      id: 'compassion',
      label: 'Compassion',
      type: 'principle',
      x: 270,
      y: 250,
      color: '#f472b6',
      description: 'Active expression of care for others\' wellbeing',
      examples: [
        'Emotional support',
        'Charitable actions',
        'Understanding others\' perspectives'
      ],
      connectedTo: ['healing', 'support']
    },
    {
      id: 'honesty',
      label: 'Honesty',
      type: 'principle',
      x: 450,
      y: 250,
      color: '#60a5fa',
      description: 'Commitment to truthful expression and action',
      examples: [
        'Open communication',
        'Ethical behavior',
        'Self-reflection'
      ],
      connectedTo: ['integrity', 'transparency']
    },
    {
      id: 'wisdom',
      label: 'Wisdom',
      type: 'principle',
      x: 550,
      y: 250,
      color: '#818cf8',
      description: 'Integration of knowledge and understanding',
      examples: [
        'Discernment',
        'Good judgment',
        'Life experience'
      ],
      connectedTo: ['guidance', 'teaching']
    },

    // Practical Applications
    {
      id: 'healing',
      label: 'Healing',
      type: 'application',
      x: 260,
      y: 350,
      color: '#fb7185',
      description: 'Practices that restore and nurture wellbeing',
      examples: [
        'Healthcare',
        'Counseling',
        'Conflict resolution'
      ],
      connectedTo: ['healthcare', 'therapy']
    },
    {
      id: 'integrity',
      label: 'Integrity',
      type: 'application',
      x: 400,
      y: 350,
      color: '#93c5fd',
      description: 'Alignment of values and actions',
      examples: [
        'Ethical business practices',
        'Personal accountability',
        'Moral courage'
      ],
      connectedTo: ['ethics', 'leadership']
    },
    {
      id: 'learning',
      label: 'Learning',
      type: 'application',
      x: 600,
      y: 350,
      color: '#a5b4fc',
      description: 'Continuous growth and development',
      examples: [
        'Education systems',
        'Personal development',
        'Skill acquisition'
      ],
      connectedTo: ['education', 'research']
    },

    // Cultural Expressions
    {
      id: 'healthcare',
      label: 'Healthcare',
      type: 'expression',
      x: 245,
      y: 450,
      color: '#fda4af',
      description: 'Systems of care and healing',
      examples: [
        'Medical institutions',
        'Preventive care',
        'Community health'
      ],
      connectedTo: []
    },
    {
      id: 'ethics',
      label: 'Ethics',
      type: 'expression',
      x: 350,
      y: 450,
      color: '#bfdbfe',
      description: 'Moral frameworks and guidelines',
      examples: [
        'Professional codes',
        'Social norms',
        'Legal systems'
      ],
      connectedTo: []
    },
    {
      id: 'education',
      label: 'Education',
      type: 'expression',
      x: 550,
      y: 450,
      color: '#c7d2fe',
      description: 'Knowledge transfer systems',
      examples: [
        'Schools',
        'Mentorship',
        'Public education'
      ],
      connectedTo: []
    }
  ];

  const levelLabels = [
    { level: 'Core Values', y: 150 },
    { level: 'Derived Principles', y: 250 },
    { level: 'Practical Applications', y: 350 },
    { level: 'Cultural Expressions', y: 450 }
  ];

  // Function to draw crystal-like connections
  const getConnection = (start: ValueNode, end: ValueNode) => {
    // Create slightly curved lines for crystal effect
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2 - 20;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Function to get polygon points for crystal shapes
  const getCrystalShape = (node: ValueNode) => {
    const size = 50;
    switch (node.type) {
      case 'core':
        return `
          M ${node.x} ${node.y - size}
          L ${node.x + size} ${node.y}
          L ${node.x} ${node.y + size}
          L ${node.x - size} ${node.y}
          Z
        `;
      case 'principle':
        return `
          M ${node.x} ${node.y - size}
          L ${node.x + size*0.8} ${node.y}
          L ${node.x} ${node.y + size}
          L ${node.x - size*0.8} ${node.y}
          Z
        `;
      default:
        return `
          M ${node.x} ${node.y - size*0.7}
          L ${node.x + size*0.7} ${node.y}
          L ${node.x} ${node.y + size*0.7}
          L ${node.x - size*0.7} ${node.y}
          Z
        `;
    }
  };

  return (
    <Card className="col-span-2">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle>Value Systems: Crystal Structure</CardTitle>
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
            {/* Level Labels */}
            {levelLabels.map((label, index) => (
              <g key={index}>
                <text
                  x="50"
                  y={label.y}
                  textAnchor="start"
                  fill="#64748b"
                  fontSize="14"
                  fontWeight="500"
                  className="select-none"
                >
                  {label.level}
                </text>
                {/* Optional: add a subtle line to connect label to level */}
                <line
                  x1="180"
                  y1={label.y}
                  x2="220"
                  y2={label.y}
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  strokeDasharray="4"
                />
              </g>
            ))}

            {/* Draw connections */}
            {nodes.map(node =>
              node.connectedTo.map(targetId => {
                const target = nodes.find(n => n.id === targetId);
                if (!target) return null;
                
                const isHighlighted = hoveredNode === node.id || 
                                    hoveredNode === targetId;
                
                return (
                  <path
                    key={`${node.id}-${targetId}`}
                    d={getConnection(node, target)}
                    stroke={isHighlighted ? node.color : '#94a3b8'}
                    strokeWidth={isHighlighted ? 2 : 1}
                    fill="none"
                    opacity={isHighlighted ? 0.8 : 0.3}
                    className="transition-all duration-300"
                  />
                );
              })
            )}

            {/* Draw nodes */}
            {nodes.map(node => (
              <g
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setSelectedNode(
                  selectedNode === node.id ? null : node.id
                )}
                className="cursor-pointer"
              >
                <path
                  d={getCrystalShape(node)}
                  fill={node.color}
                  opacity={selectedNode === node.id ? 1 : 0.7}
                  className="transition-opacity"
                />
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="white"
                  fontSize="14"
                  className="pointer-events-none"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Description Panel */}
        {selectedNode && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">
              {nodes.find(n => n.id === selectedNode)?.label}
            </h3>
            <p className="text-gray-600 mb-3">
              {nodes.find(n => n.id === selectedNode)?.description}
            </p>
            <div>
              <h4 className="font-medium text-sm mb-2">Examples:</h4>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                {nodes.find(n => n.id === selectedNode)?.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ValueSystemsVisualization;
