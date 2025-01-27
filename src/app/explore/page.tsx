// src/app/explore/page.tsx
'use client';  // Add this since we're using state

import React, { useState } from 'react';
import ExplorerNavigation from '@/components/explorer/ExplorerNavigation';
import TopicVisualization from '@/components/explorer/TopicVisualization';
import { explorerData } from '@/lib/explorer/data';

export default function ExplorePage() {
  const [selectedTopic, setSelectedTopic] = useState<string>('science-spirituality');
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        <ExplorerNavigation
          topics={explorerData}
          selectedTopic={selectedTopic}
          onSelectTopic={setSelectedTopic}
        />
        <TopicVisualization
          topicId={selectedTopic}
          data={explorerData[selectedTopic]}
          zoomLevel={zoomLevel}
          onZoomIn={() => setZoomLevel(Math.min(2, zoomLevel + 0.1))}
          onZoomOut={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.1))}
        />
      </div>
    </div>
  );
}
