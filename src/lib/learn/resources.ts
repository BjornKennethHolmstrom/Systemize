interface Resource {
  id: string;
  title: string;
  description: string;
  url?: string;
  category: 'assessment' | 'visualization' | 'analysis' | 'learning';
  type: 'tool' | 'website' | 'framework' | 'book';
}

export const systemsResources: Resource[] = [
  {
    id: 'spiralize',
    title: 'Spiralize.org',
    description: 'Assessment tool and resource for understanding developmental stages in Spiral Dynamics, including history, insights, and practical applications.',
    url: 'https://spiralize.org',
    category: 'assessment',
    type: 'website'
  },
  {
    id: 'ishikawa',
    title: 'Ishikawa (Fishbone) Diagram',
    description: 'Visual cause-and-effect analysis tool for identifying potential causes of a specific problem or effect.',
    url: 'https://en.wikipedia.org/wiki/Ishikawa_diagram',
    category: 'analysis',
    type: 'framework'
  },
  {
    id: 'kumu',
    title: 'Kumu.io',
    description: 'Web-based platform for creating interactive relationship maps and system visualizations.',
    url: 'https://kumu.io',
    category: 'visualization',
    type: 'tool'
  },
  {
    id: 'systems-primer',
    title: 'Thinking in Systems: A Primer',
    description: 'Classic book by Donella Meadows introducing fundamental concepts of systems thinking.',
    category: 'learning',
    type: 'book'
  }
  // We can add more resources as needed
];
