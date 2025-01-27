import { Target, Users, Layers, Activity } from 'lucide-react';
import { LearningPath } from './types';
import { systemsThinkingModules } from './modules/systems-thinking';
import { commonGroundModules } from  './modules/common-ground';
import { integrationTechniquesModules } from './modules/integration-techniques';
import { appliedAnalysisModules } from './modules/applied-analysis';

export const learningPaths: LearningPath[] = [
  {
    id: 'systems-thinking',
    title: 'Systems Thinking',
    description: 'Discover how systems thinking emerges naturally from complex challenges',
    icon: Target,
    modules: systemsThinkingModules
  },
  {
    id: 'common-ground',
    title: 'Finding Common Ground',
    description: 'Learn to bridge different perspectives and find shared understanding',
    icon: Users,
    modules: commonGroundModules
  },
  {
    id: 'integration',
    title: 'Integration Techniques',
    description: 'Master practical methods for integrating different viewpoints and approaches',
    icon: Layers,
    modules: integrationTechniquesModules
  },
  {
    id: 'applied-analysis',
    title: 'Applied Systems Analysis',
    description: 'Apply systems thinking to real-world challenges through practical analysis methods',
    icon: Activity,
    modules: appliedAnalysisModules
  }
];
