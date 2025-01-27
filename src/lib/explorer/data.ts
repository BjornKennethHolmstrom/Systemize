import { StreamData } from './types';

export const explorerData: Record<string, StreamData> = {
  'science-spirituality': {
    title: "Science and Spirituality",
    description: "Exploring the convergence of empirical observation and inner wisdom",
    stream1: {
      name: "Scientific Method",
      color: "#3b82f6",
      concepts: [
        {
          id: "empirical",
          x: 393,
          y: 147,
          label: "Empirical Truth",
          reflectionPrompts: [
            "How does empirical observation relate to personal experience?",
            "What are the limits of measurable truth?",
            "How can we verify subjective experiences objectively?"
          ],
          examples: [
            "Meditation research measuring brain activity",
            "Double-blind studies on prayer effects",
            "Quantum observation effects"
          ],
          insights: "Scientific measurement and spiritual experience can inform each other, revealing deeper patterns in reality."
        },
        {
          id: "quantum",
          x: 300,
          y: 130,
          label: "Quantum Reality",
          reflectionPrompts: [
            "How does quantum uncertainty challenge our view of reality?",
            "What role does the observer play in quantum mechanics?",
            "How might quantum entanglement relate to spiritual interconnectedness?"
          ],
          examples: [
            "Double-slit experiment",
            "Quantum entanglement",
            "Observer effect"
          ],
          insights: "Quantum physics reveals a reality that transcends classical materialist assumptions."
        }
      ]
    },
    stream2: {
      name: "Spiritual Wisdom",
      color: "#8b5cf6",
      concepts: [
        {
          id: "consciousness",
          x: 500,
          y: 175,
          label: "Consciousness",
          reflectionPrompts: [
            "How does consciousness emerge from physical processes?",
            "What role does awareness play in quantum mechanics?",
            "Can consciousness exist beyond the brain?"
          ],
          examples: [
            "Near-death experience studies",
            "Quantum consciousness theories",
            "Mind-body healing research"
          ],
          insights: "The study of consciousness bridges objective science and subjective experience."
        }
      ]
    },
    transcendence: "Unified Understanding"
  },
  
  'ethics-technology': {
    title: "Ethics and Technology",
    description: "Examining the intersection of moral principles and technological advancement",
    stream1: {
      name: "Ethical Frameworks",
      color: "#2dd4bf",
      concepts: [
        {
          id: "moral-principles",
          x: 393,
          y: 147,
          label: "Moral Principles",
          reflectionPrompts: [
            "How do traditional ethical frameworks apply to new technologies?",
            "What new moral questions arise from technological advancement?",
            "How can we balance innovation with ethical constraints?"
          ],
          examples: [
            "AI ethics guidelines",
            "Privacy rights in digital age",
            "Bioethical considerations"
          ],
          insights: "Ethical principles must evolve while maintaining core human values."
        }
      ]
    },
    stream2: {
      name: "Technological Progress",
      color: "#f43f5e",
      concepts: [
        {
          id: "innovation",
          x: 500,
          y: 175,
          label: "Innovation",
          reflectionPrompts: [
            "How can technology enhance human flourishing?",
            "What responsibilities come with technological power?",
            "How do we ensure technology serves humanity?"
          ],
          examples: [
            "Human-centered design",
            "Responsible AI development",
            "Sustainable technology"
          ],
          insights: "Technology should be guided by ethical principles to serve human wellbeing."
        }
      ]
    },
    transcendence: "Ethical Innovation"
  },

  'individual-collective': {
    title: "Individual and Collective",
    description: "Understanding the dynamic between personal growth and social evolution",
    stream1: {
      name: "Personal Development",
      color: "#eab308",
      concepts: [
        {
          id: "self-actualization",
          x: 393,
          y: 147,
          label: "Self-Actualization",
          reflectionPrompts: [
            "How does individual growth contribute to collective evolution?",
            "What is the relationship between personal and social transformation?",
            "How can we balance individual needs with collective welfare?"
          ],
          examples: [
            "Personal growth movements",
            "Leadership development",
            "Mindfulness practices"
          ],
          insights: "Individual growth naturally leads to greater awareness of our interconnectedness."
        }
      ]
    },
    stream2: {
      name: "Social Evolution",
      color: "#ec4899",
      concepts: [
        {
          id: "collective-wisdom",
          x: 500,
          y: 175,
          label: "Collective Wisdom",
          reflectionPrompts: [
            "How does society evolve through individual contributions?",
            "What role do individuals play in cultural transformation?",
            "How can we foster collective intelligence?"
          ],
          examples: [
            "Social movements",
            "Cultural evolution",
            "Collective intelligence platforms"
          ],
          insights: "Social evolution emerges from the integration of individual perspectives."
        }
      ]
    },
    transcendence: "Integrated Development"
  },
  'order-chaos': {
    title: "Order and Chaos",
    description: "Exploring the dynamic balance between structure and emergence",
    stream1: {
      name: "Structured Systems",
      color: "#0891b2", // cyan
      concepts: [
        {
          id: "patterns",
          x: 393,
          y: 147,
          label: "Stable Patterns",
          reflectionPrompts: [
            "How do stable patterns emerge from chaos?",
            "What role does constraint play in creativity?",
            "How can structure enable rather than limit?"
          ],
          examples: [
            "Fractals in nature",
            "Social institutions",
            "Mathematical constants"
          ],
          insights: "Order provides the foundation from which complexity can emerge."
        },
        {
          id: "organization",
          x: 300,
          y: 130,
          label: "Organization",
          reflectionPrompts: [
            "How do complex systems self-organize?",
            "What makes some structures more resilient than others?",
            "When does order become rigid?"
          ],
          examples: [
            "Crystal formation",
            "Ecosystem stability",
            "Market equilibrium"
          ],
          insights: "Self-organization emerges at the edge of order and chaos."
        }
      ]
    },
    stream2: {
      name: "Dynamic Change",
      color: "#9333ea", // purple
      concepts: [
        {
          id: "emergence",
          x: 500,
          y: 175,
          label: "Creative Emergence",
          reflectionPrompts: [
            "How does novelty arise from chaos?",
            "What conditions foster creative emergence?",
            "How can we work with uncertainty?"
          ],
          examples: [
            "Evolution",
            "Creative inspiration",
            "Market disruption"
          ],
          insights: "Chaos contains the seeds of new order and possibility."
        }
      ]
    },
    transcendence: "Adaptive Complexity"
  },

  'art-science': {
    title: "Art and Science",
    description: "Bridging creative expression and systematic inquiry",
    stream1: {
      name: "Scientific Method",
      color: "#0ea5e9", // sky blue
      concepts: [
        {
          id: "empirical-method",
          x: 393,
          y: 147,
          label: "Empirical Method",
          reflectionPrompts: [
            "How can measurement reveal beauty?",
            "What role does observation play in creativity?",
            "How do patterns inform aesthetics?"
          ],
          examples: [
            "Golden ratio in design",
            "Color theory",
            "Acoustic harmonics"
          ],
          insights: "Scientific understanding can enhance artistic appreciation and creation."
        },
        {
          id: "analysis",
          x: 300,
          y: 130,
          label: "Analysis",
          reflectionPrompts: [
            "How does breaking things down help us understand beauty?",
            "What can scientific analysis reveal about art?",
            "How do frameworks enhance creativity?"
          ],
          examples: [
            "Musical theory",
            "Anatomical studies in art",
            "Digital art algorithms"
          ],
          insights: "Analysis and creativity can mutually enhance each other."
        }
      ]
    },
    stream2: {
      name: "Artistic Expression",
      color: "#f472b6", // pink
      concepts: [
        {
          id: "intuition",
          x: 500,
          y: 175,
          label: "Creative Intuition",
          reflectionPrompts: [
            "How does intuition complement analysis?",
            "What can art teach science?",
            "How does creativity inform discovery?"
          ],
          examples: [
            "Scientific visualization",
            "Biomimicry in design",
            "Artistic research methods"
          ],
          insights: "Artistic intuition can guide scientific discovery and understanding."
        }
      ]
    },
    transcendence: "Holistic Understanding"
  },
  'belief-systems': {
    title: "Belief Systems",
    description: "Exploring different approaches to understanding existence and reality",
    stream1: {
      name: "Traditional Ways of Knowing",
      color: "#8b5cf6",
      concepts: [
        {
          id: "mystical",
          x: 200,
          y: 165,
          label: "Mystical Experience",
          reflectionPrompts: [
            "How do direct experiences shape our understanding of reality?",
            "What role does personal experience play in knowledge?",
            "How can subjective experiences inform objective understanding?"
          ],
          examples: [
            "Meditation experiences",
            "Religious revelations",
            "Peak experiences"
          ],
          insights: "Direct experience offers unique insights that complement other ways of knowing."
        },
        {
          id: "traditional",
          x: 300,
          y: 130,
          label: "Traditional Knowledge",
          reflectionPrompts: [
            "How do traditional systems preserve and transmit wisdom?",
            "What can we learn from ancient understanding?",
            "How do different cultures approach similar questions?"
          ],
          examples: [
            "Indigenous knowledge systems",
            "Religious traditions",
            "Cultural practices"
          ],
          insights: "Traditional knowledge systems often contain deep wisdom about human experience and reality."
        }
      ]
    },
    stream2: {
      name: "Modern Approaches",
      color: "#22c55e",
      concepts: [
        {
          id: "scientific",
          x: 350,
          y: 200,
          label: "Scientific Method",
          reflectionPrompts: [
            "How does empirical observation help us understand reality?",
            "What are the limits of scientific knowledge?",
            "How can science and other ways of knowing complement each other?"
          ],
          examples: [
            "Physics theories",
            "Cosmological models",
            "Empirical research"
          ],
          insights: "Scientific methods provide powerful tools for understanding reality while acknowledging their own limitations."
        }
      ]
    },
    transcendence: "Integrated Understanding"
  },
  'decision-making': {
    title: "Decision Making",
    description: "Understanding how different factors influence our decisions and choices",
    stream1: {
      name: "Conscious Processing",
      color: "#3b82f6",
      concepts: [
        {
          id: "rational",
          x: 200,
          y: 150,
          label: "Rational Analysis",
          reflectionPrompts: [
            "How do we balance logic with other decision-making factors?",
            "When is rational analysis most useful?",
            "What are the limits of pure rationality?"
          ],
          examples: [
            "Cost-benefit analysis",
            "Strategic planning",
            "Risk assessment"
          ],
          insights: "Rational analysis provides structure but works best when integrated with other ways of knowing."
        }
      ]
    },
    stream2: {
      name: "Unconscious Processing",
      color: "#8b5cf6",
      concepts: [
        {
          id: "intuitive",
          x: 400,
          y: 200,
          label: "Intuitive Judgment",
          reflectionPrompts: [
            "How does intuition complement rational thinking?",
            "When should we trust our gut feelings?",
            "How can we develop better intuition?"
          ],
          examples: [
            "Expert decision-making",
            "Creative problem-solving",
            "Emergency responses"
          ],
          insights: "Intuition draws on deep experience and pattern recognition beyond conscious awareness."
        }
      ]
    },
    transcendence: "Integrated Decision Making"
  }
};
