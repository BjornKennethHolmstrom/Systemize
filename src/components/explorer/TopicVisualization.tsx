// src/components/explorer/TopicVisualization.tsx
import React, { useState } from 'react';
import { StreamData } from '@/lib/explorer/types';
import FlowVisualization from './FlowVisualization';
import BeliefSystemsVisualization from './BeliefSystemsVisualization';
import DecisionMakingVisualization from './DecisionMakingVisualization';
import ViewSwitcher from './ViewSwitcher';

interface TopicVisualizationProps {
  topicId: string;
  data: StreamData;
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const TopicVisualization = ({
  topicId,
  data,
  zoomLevel,
  onZoomIn,
  onZoomOut
}: TopicVisualizationProps) => {
  const [viewType, setViewType] = useState<'flow' | 'special'>('flow');

  // Define which topics have special visualizations
  const specialViews = {
    'belief-systems': 'Network View',
    'decision-making': 'Web View'
  } as const;

  // If topic has a special view, show the view switcher
  const hasSpecialView = topicId in specialViews;

  // Render appropriate visualization based on topic and view type
  const renderVisualization = () => {
    if (viewType === 'flow' || !hasSpecialView) {
      return (
        <FlowVisualization
          data={data}
          zoomLevel={zoomLevel}
          onZoomIn={onZoomIn}
          onZoomOut={onZoomOut}
        />
      );
    }

    switch (topicId) {
      case 'belief-systems':
        return (
          <BeliefSystemsVisualization
            zoomLevel={zoomLevel}
            onZoomIn={onZoomIn}
            onZoomOut={onZoomOut}
          />
        );
      case 'decision-making':
        return (
          <DecisionMakingVisualization
            zoomLevel={zoomLevel}
            onZoomIn={onZoomIn}
            onZoomOut={onZoomOut}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="col-span-2">
      {hasSpecialView && (
        <div className="mb-4">
          <ViewSwitcher
            currentView={viewType}
            onViewChange={setViewType}
            specialViewName={specialViews[topicId as keyof typeof specialViews]}
          />
        </div>
      )}
      {renderVisualization()}
    </div>
  );
};

export default TopicVisualization;
