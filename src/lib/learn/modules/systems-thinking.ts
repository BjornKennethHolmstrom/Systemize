import { LearningModule } from '../types';

export const systemsThinkingModules: LearningModule[] = [
  {
    id: 'limits',
    title: 'Recognizing the Limits',
    description: 'Explore situations where traditional linear thinking reaches its limits',
    challenges: [
      {
        situation: 'A company tries to solve environmental issues by focusing only on their direct emissions',
        reflection: 'Why might reducing emissions in one area sometimes increase them in another?',
        systemicApproach: 'Understanding supply chains as interconnected systems reveals hidden impacts and opportunities'
      },
      {
        situation: 'Social media platform attempts to combat misinformation by simply removing content',
        reflection: 'How do community dynamics and information spread patterns affect this approach?',
        systemicApproach: 'Viewing information spread as an ecosystem reveals more effective intervention points'
      }
    ],
    insights: [
      'Complex problems often resist simple, direct solutions',
      'When solutions create new problems, we need to look at the bigger picture',
      'Understanding interconnections reveals new possibilities'
    ]
  },
  {
    id: 'patterns',
    title: 'Discovering Patterns',
    description: 'Learn to recognize recurring patterns across different domains',
    challenges: [
      {
        situation: 'Similar feedback loops appear in ecology, economics, and social systems',
        reflection: 'What patterns do you notice in how systems maintain balance?',
        systemicApproach: 'Identifying common patterns helps us understand and work with system dynamics'
      },
      {
        situation: 'Growth and collapse cycles appear in various contexts',
        reflection: 'How do systems handle growth limits differently?',
        systemicApproach: 'Understanding archetypal patterns helps predict and navigate system behavior'
      }
    ],
    insights: [
      'Similar patterns emerge across different types of systems',
      'Understanding one system can provide insights into others',
      'Pattern recognition leads to deeper understanding'
    ]
  },
  {
    id: 'emergence',
    title: 'Natural Emergence',
    description: 'Experience how systems thinking naturally emerges from complex challenges',
    challenges: [
      {
        situation: 'Urban planning projects affecting multiple stakeholders and systems',
        reflection: 'How do changes ripple through communities and environments?',
        systemicApproach: 'Mapping interconnections reveals both challenges and opportunities'
      },
      {
        situation: 'Personal development affecting relationships and work',
        reflection: 'How do individual changes influence larger systems?',
        systemicApproach: 'Seeing ourselves as part of larger systems reveals more effective growth paths'
      }
    ],
    insights: [
      'Systems thinking emerges naturally when we face complex challenges',
      'Understanding interconnections leads to more effective solutions',
      'Personal and systemic development are interlinked'
    ]
  }
];
