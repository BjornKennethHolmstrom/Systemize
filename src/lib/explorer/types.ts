export interface ConceptPoint {
  id: string;
  x: number;
  y: number;
  label: string;
  reflectionPrompts: string[];
  examples: string[];
  insights: string;
}

export interface StreamData {
  title: string;
  stream1: {
    name: string;
    color: string;
    concepts: ConceptPoint[];
  };
  stream2: {
    name: string;
    color: string;
    concepts: ConceptPoint[];
  };
  transcendence: string;
  description: string;
}
