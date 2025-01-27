import { LearningModule } from '../types';

export const commonGroundModules: LearningModule[] = [
  {
    id: 'perspective-awareness',
    title: 'Perspective Awareness',
    description: 'Understanding how different viewpoints arise and shape our understanding',
    challenges: [
      {
        situation: 'Two groups have opposing views on environmental policy, each believing they have the complete truth',
        reflection: 'How might each group\'s background, experiences, and values shape their perspective?',
        systemicApproach: 'Map out how different life experiences and contexts lead to different yet valid perspectives on environmental issues'
      },
      {
        situation: 'A team disagrees on project priorities, with each member convinced their focus is most important',
        reflection: 'What unique insights might each team member\'s position offer?',
        systemicApproach: 'Recognize how different roles and responsibilities create different valid priorities that all contribute to project success'
      }
    ],
    insights: [
      'Every perspective offers a unique window into reality',
      'Our backgrounds and experiences shape how we see truth',
      'Understanding context helps us appreciate different viewpoints'
    ]
  },
  {
    id: 'shared-foundations',
    title: 'Finding Shared Foundations',
    description: 'Discovering common values and needs beneath surface disagreements',
    challenges: [
      {
        situation: 'Communities disagree on urban development, with some prioritizing growth and others preservation',
        reflection: 'What underlying needs and values might both groups share?',
        systemicApproach: 'Identify shared desires for community wellbeing, just expressed through different approaches'
      },
      {
        situation: 'Scientific and spiritual communities seem to hold opposing worldviews',
        reflection: 'What common human aspirations might drive both approaches?',
        systemicApproach: 'Recognize how both seek to understand reality and improve human flourishing through different methods'
      }
    ],
    insights: [
      'Surface conflicts often mask deeper shared values',
      'Finding common ground starts with identifying shared needs',
      'Different approaches often serve similar fundamental goals'
    ]
  },
  {
    id: 'integrative-solutions',
    title: 'Creating Integrative Solutions',
    description: 'Moving beyond either/or thinking to both/and solutions',
    challenges: [
      {
        situation: 'A debate between economic growth and environmental protection seems deadlocked',
        reflection: 'How might we create solutions that serve both prosperity and sustainability?',
        systemicApproach: 'Design approaches that recognize how healthy ecosystems and economies can mutually reinforce each other'
      },
      {
        situation: 'Traditional and modern approaches to healthcare appear to conflict',
        reflection: 'What would an integrated healthcare system that values both look like?',
        systemicApproach: 'Develop frameworks that combine evidence-based medicine with traditional wisdom and holistic approaches'
      }
    ],
    insights: [
      'Most either/or conflicts can be reframed as both/and opportunities',
      'Integration often creates better solutions than compromise',
      'Systems thinking reveals how apparent opposites can complement each other'
    ]
  },
  {
    id: 'practical-dialogue',
    title: 'Practical Dialogue Skills',
    description: 'Tools and techniques for finding common ground in practice',
    challenges: [
      {
        situation: 'A heated discussion about social policy devolves into opposing camps',
        reflection: 'What dialogue techniques could help participants find shared understanding?',
        systemicApproach: 'Practice methods like active listening, appreciative inquiry, and identifying shared values'
      },
      {
        situation: 'Different departments in an organization struggle to collaborate due to different priorities',
        reflection: 'How can we structure conversations to highlight mutual benefits?',
        systemicApproach: 'Create dialogue formats that map interdependencies and reveal how different priorities support each other'
      }
    ],
    insights: [
      'Structured dialogue techniques can bridge seemingly unbridgeable gaps',
      'Finding common ground is a skill that can be practiced and improved',
      'Good process design helps surface shared understanding naturally'
    ]
  },
  {
    id: 'win-win-win',
    title: 'Beyond Compromise: Win-Win-Win Solutions',
    description: 'Discovering how finding common ground can benefit all parties and the larger system',
    challenges: [
      {
        situation: 'A city faces conflict between developers wanting to build and environmentalists protecting urban green spaces',
        reflection: 'How might we create a solution where both development and green space thrive, while making the city better overall?',
        systemicApproach: 'Design green buildings and parks that increase property values, improve quality of life, and enhance biodiversity - benefiting developers, environmentalists, and the whole community'
      },
      {
        situation: 'Traditional farmers and tech-focused agricultural companies seem to be in opposition',
        reflection: 'What opportunities exist for traditional wisdom and modern technology to enhance each other?',
        systemicApproach: 'Combine traditional farming knowledge with precision agriculture to improve yields, soil health, and farmer wellbeing while advancing agricultural technology'
      },
      {
        situation: 'Remote and office workers have different preferences for workplace policy',
        reflection: 'How can we create a solution that benefits both groups while strengthening the organization?',
        systemicApproach: 'Develop hybrid models that improve work-life balance for all, increase productivity, and build stronger organizational culture through intentional collaboration'
      }
    ],
    insights: [
      'True common ground creates benefits beyond what either side initially sought',
      'System-level thinking reveals opportunities for mutual enhancement',
      'Win-win-win solutions tend to be more stable and sustainable',
      'Finding synergies often leads to unexpected innovations'
    ]
  }
];
