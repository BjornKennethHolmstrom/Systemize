import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import { StreamData } from '@/types';

interface ExplorerNavigationProps {
  topics: Record<string, StreamData>;
  selectedTopic: string;
  onSelectTopic: (topicId: string) => void;
}

const ExplorerNavigation = ({
  topics,
  selectedTopic,
  onSelectTopic
}: ExplorerNavigationProps) => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Systems Explorer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {Object.entries(topics).map(([id, data]) => (
            <button
              key={id}
              onClick={() => onSelectTopic(id)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                selectedTopic === id 
                  ? 'bg-blue-100 text-blue-900'
                  : 'hover:bg-gray-100'
              }`}
            >
              <div className="text-left">
                <div className="font-medium">{data.title}</div>
                <div className="text-sm text-gray-500">{data.description}</div>
              </div>
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExplorerNavigation;
