import { LearningModule } from '../types';

export const integrationTechniquesModules: LearningModule[] = [
  {
    id: 'mapping-relationships',
    title: 'Mapping Relationships',
    description: 'Learn to map how different ideas, perspectives, and systems interact',
    challenges: [
      {
        situation: 'A healthcare team wants to integrate traditional and modern medicine approaches',
        reflection: 'How might we map the strengths, overlaps, and complementary aspects of each approach?',
        systemicApproach: 'Create visual maps showing how different healing approaches can complement each other at different stages of care'
      },
      {
        situation: 'Different departments have conflicting ideas about improving customer experience',
        reflection: 'How can we map these perspectives to see their interconnections?',
        systemicApproach: 'Develop relationship maps showing how each department\'s view contributes to the complete customer journey'
      }
    ],
    insights: [
      'Visual mapping reveals hidden connections and opportunities',
      'Understanding relationships helps identify integration points',
      'Different perspectives often form a complete picture when mapped together'
    ]
  },
  {
    id: 'polarity-management',
    title: 'Polarity Management',
    description: 'Handle seeming opposites as complementary forces',
    challenges: [
      {
        situation: 'A team struggles between maintaining stability and driving innovation',
        reflection: 'How can we see stability and innovation as complementary rather than opposing?',
        systemicApproach: 'Map how stability enables safe innovation, and how innovation strengthens long-term stability'
      },
      {
        situation: 'Leaders debate between centralized and decentralized decision-making',
        reflection: 'What benefits of both approaches could we maintain simultaneously?',
        systemicApproach: 'Design frameworks that combine clear central guidance with local autonomy and adaptation'
      }
    ],
    insights: [
      'Many opposites are actually interdependent polarities',
      'Managing polarities is about "both/and" rather than "either/or"',
      'Healthy systems maintain dynamic balance between polarities'
    ]
  },
  {
    id: 'synthesis-methods',
    title: 'Synthesis Methods',
    description: 'Techniques for combining different perspectives into new wholes',
    challenges: [
      {
        situation: 'Different cultural approaches to education need to be integrated in a global school',
        reflection: 'How can we create an educational approach that honors and synthesizes multiple traditions?',
        systemicApproach: 'Identify core principles from each approach and create new frameworks that preserve their essential wisdom'
      },
      {
        situation: 'A design team needs to merge competing product visions',
        reflection: 'What methods could help us create something better than either original vision?',
        systemicApproach: 'Use techniques like morphological analysis to combine the best elements of different approaches'
      }
    ],
    insights: [
      'Synthesis creates new possibilities beyond original perspectives',
      'Good integration preserves the essence of what\'s being combined',
      'Creative synthesis often leads to innovation'
    ]
  },
  {
    id: 'integration-frameworks',
    title: 'Integration Frameworks',
    description: 'Models and frameworks for systematic integration',
    challenges: [
      {
        situation: 'A community needs to integrate economic, environmental, and social goals',
        reflection: 'What framework could help balance and integrate these different priorities?',
        systemicApproach: 'Apply frameworks like the Triple Bottom Line while adding ways to identify synergies'
      },
      {
        situation: 'An organization wants to integrate multiple change management approaches',
        reflection: 'How might we create a framework that captures the best of each approach?',
        systemicApproach: 'Develop meta-frameworks that show when and how to apply different approaches'
      }
    ],
    insights: [
      'Good frameworks make integration systematic and repeatable',
      'Integration frameworks should be flexible and context-aware',
      'The best frameworks reveal new possibilities rather than just combining old ones'
    ]
  }
];
