import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollText, CircuitBoard, Workflow } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  author?: string;
  readingTime: string;
}

const articles: Article[] = [
  {
    id: 'spiral-dynamics',
    title: 'The Evolution of Values and Consciousness',
    icon: <Workflow className="w-5 h-5" />,
    description: 'Explore how human consciousness and value systems naturally evolve in response to life conditions, forming patterns that mirror evolution itself.',
    readingTime: '12 min read'
  },
  {
    id: 'systems-thinking',
    title: 'Systems Thinking: A Natural Response to Complexity',
    icon: <CircuitBoard className="w-5 h-5" />,
    description: 'Discover how systems thinking emerges naturally when we face challenges too complex for linear approaches.',
    readingTime: '10 min read'
  },
  {
    id: 'non-duality',
    title: 'Non-Duality and Duality: Complementary Views of Reality',
    icon: <ScrollText className="w-5 h-5" />,
    description: 'Understanding how absolute and relative perspectives work together to provide a complete picture of reality.',
    readingTime: '8 min read'
  }
];

const ArticlesSection = () => {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const renderArticleContent = (articleId: string) => {
    // This would contain the actual article content
    // We'll create separate components for each article's content
    switch (articleId) {
      case 'spiral-dynamics':
        return <SpiralDynamicsArticle />;
      case 'systems-thinking':
        return <SystemsThinkingArticle />;
      case 'non-duality':
        return <NonDualityArticle />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {!selectedArticle ? (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Featured Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card 
                key={article.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedArticle(article.id)}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {article.icon}
                    <span className="text-sm text-gray-500">{article.readingTime}</span>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{article.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <button
            onClick={() => setSelectedArticle(null)}
            className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
          >
            ← Back to Articles
          </button>
          {renderArticleContent(selectedArticle)}
        </div>
      )}
    </div>
  );
};

export default ArticlesSection;
