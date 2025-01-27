import { LucideIcon } from 'lucide-react';

export interface Challenge {
  situation: string;
  reflection: string;
  systemicApproach: string;
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  challenges: Challenge[];
  insights: string[];
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  modules: LearningModule[];
  icon: LucideIcon;
}
