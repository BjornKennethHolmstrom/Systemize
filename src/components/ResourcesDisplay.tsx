import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ExternalLink, BookOpen, Hammer, Globe } from 'lucide-react';
import { systemsResources } from '@/lib/learn/resources';

const ResourcesDisplay = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'book': return <BookOpen className="w-4 h-4" />;
      case 'tool': return <Hammer className="w-4 h-4" />;
      case 'website': return <Globe className="w-4 h-4" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {systemsResources.map((resource) => (
        <Card key={resource.id}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {getIcon(resource.type)}
              {resource.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
            {resource.url && (
              <a 
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1"
              >
                Visit Resource <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <div className="mt-2">
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {resource.category}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ResourcesDisplay;
