import { LearningModule } from '../types';

export const appliedAnalysisModules: LearningModule[] = [
  {
    id: 'system-mapping',
    title: 'System Properties and Mapping',
    description: 'Learn to identify and map key components, relationships, and boundaries of systems',
    challenges: [
      {
        situation: 'A local food system needs to be analyzed to improve sustainability',
        reflection: 'What are the key components, inputs, outputs, and relationships in this system?',
        systemicApproach: 'Create a visual map showing: food producers, distributors, consumers, resource flows, waste streams, and feedback loops'
      },
      {
        situation: 'An online community is experiencing unexpected behavior patterns',
        reflection: 'How can we map the visible and invisible factors influencing community dynamics?',
        systemicApproach: 'Document: user interactions, incentive structures, feedback mechanisms, information flows, and emergent behaviors'
      }
    ],
    insights: [
      'Visual mapping helps reveal hidden system properties',
      'Understanding inputs and outputs shows leverage points',
      'System boundaries are often fuzzy and need careful consideration'
    ]
  },
  {
    id: 'modeling-experimentation',
    title: 'System Modeling and Experimentation',
    description: 'Techniques for modeling systems and safely experimenting with changes',
    challenges: [
      {
        situation: 'A team wants to understand how different policy changes might affect traffic flow',
        reflection: 'How can we model the system to test different scenarios safely?',
        systemicApproach: 'Create a simulation model capturing key variables: road capacity, peak times, driver behavior, alternative routes'
      },
      {
        situation: 'An ecosystem restoration project needs to predict long-term outcomes',
        reflection: 'What key relationships need to be modeled to understand potential impacts?',
        systemicApproach: 'Build models showing species interactions, resource flows, and environmental factors over time'
      }
    ],
    insights: [
      'Models help us understand system behavior without real-world risks',
      'Experimentation reveals unexpected system responses',
      'Even simple models can provide valuable insights'
    ]
  },
  {
    id: 'feedback-analysis',
    title: 'Analyzing Feedback Loops',
    description: 'Identify and work with system feedback mechanisms',
    challenges: [
      {
        situation: 'A startup\'s growth initiatives are having diminishing returns',
        reflection: 'What feedback loops are affecting the system\'s behavior?',
        systemicApproach: 'Map both reinforcing loops (viral growth) and balancing loops (market saturation, resource constraints)'
      },
      {
        situation: 'A public health campaign isn\'t achieving expected results',
        reflection: 'How are feedback loops affecting program effectiveness?',
        systemicApproach: 'Analyze: behavior change loops, social influence, resistance factors, and unintended consequences'
      }
    ],
    insights: [
      'Feedback loops often drive system behavior',
      'Delayed feedback can cause unexpected outcomes',
      'Understanding feedback helps predict system changes'
    ]
  },
  {
    id: 'practical-intervention',
    title: 'Designing System Interventions',
    description: 'Learn to design and implement effective system changes',
    challenges: [
      {
        situation: 'A company wants to shift toward more sustainable practices',
        reflection: 'Where are the most effective points for intervention in the system?',
        systemicApproach: 'Identify leverage points: policy changes, resource flows, incentive structures, and feedback mechanisms'
      },
      {
        situation: 'A community needs to improve its mental health support system',
        reflection: 'How can we design interventions that address root causes rather than symptoms?',
        systemicApproach: 'Map intervention points across prevention, early intervention, treatment, and support systems'
      }
    ],
    insights: [
      'Small changes at leverage points can have large effects',
      'System interventions often have unexpected consequences',
      'Effective intervention requires understanding system dynamics'
    ]
  },
  {
    id: 'root-cause',
    title: 'Root Cause Analysis',
    description: 'Learn to trace problems to their systemic origins',
    challenges: [
      {
        situation: 'A manufacturing process has recurring quality issues despite multiple fix attempts',
        reflection: 'How can we trace beyond the obvious symptoms to find root causes?',
        systemicApproach: 'Apply techniques like "5 Whys" and cause-effect mapping to trace quality issues through the entire production system'
      },
      {
        situation: 'A city faces recurring flooding issues that worsen despite infrastructure updates',
        reflection: 'What deeper systemic causes might be contributing to the flooding problem?',
        systemicApproach: 'Create a root cause tree examining: urban development patterns, watershed changes, climate factors, and infrastructure decisions over time'
      },
      {
        situation: 'Employee turnover remains high despite improved compensation and benefits',
        reflection: 'What underlying system conditions might be driving turnover?',
        systemicApproach: 'Map interconnected factors: organizational culture, work processes, communication patterns, career development, and systemic stressors'
      }
    ],
    insights: [
      'Surface problems often stem from deeper system conditions',
      'Multiple root causes often combine to create persistent problems',
      'Addressing root causes is more effective than fixing symptoms',
      'Root cause analysis often reveals unexpected system connections'
    ]
  },
  {
    id: 'tools-resources',
    title: 'Tools & Resources for Systems Analysis',
    description: 'Practical tools, frameworks, and resources for applying systems thinking',
    challenges: [
      {
        situation: 'A team needs to analyze a complex quality management issue',
        reflection: 'Which visualization tool would best help understand the multiple causes?',
        systemicApproach: 'Apply Ishikawa (fishbone) diagrams to categorize and visualize potential causes in categories like Methods, Machines, Materials, Measurements, Environment, and People'
      },
      {
        situation: 'An organization wants to understand its development stage and potential growth paths',
        reflection: 'How can we assess current developmental stages and identify growth opportunities?',
        systemicApproach: 'Use tools like Spiralize.org to assess developmental stages and understand potential evolution paths'
      },
      {
        situation: 'A project team needs to map complex system relationships',
        reflection: 'What tools could help visualize and analyze system relationships?',
        systemicApproach: 'Explore tools like Kumu.io for systems mapping, or Miro/Figma for collaborative system visualization'
      }
    ],
    insights: [
      'Different tools serve different analysis needs',
      'Visual tools help communicate complex system relationships',
      'Assessment tools provide valuable systemic insights',
      'The right tool can reveal patterns not obvious otherwise'
    ]
  }
];
