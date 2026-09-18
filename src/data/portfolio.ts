export const personal = {
  fullName: 'Eethamukkala Ramadas Pavan',
  shortName: 'Pavan E R',
  role: 'Aspiring Full Stack Developer & Machine Learning Engineer',
  location: 'India',
  phone: '+91 6381612458',
  email: 'pavaner2007@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pavan-e-r-969616327/',
  github: 'https://github.com/pavaner2007',
  resume: '/Pavan_Resume_removed.pdf',
  objective:
    "Aspiring Full Stack Developer and Machine Learning Engineer pursuing a Bachelor's degree in Engineering, with a strong foundation in software development, data structures, and AI/ML technologies. Passionate about designing scalable web applications and intelligent systems that solve real-world problems.",
  summary:
    'Engineering student specializing in CSE with AI & ML, focused on building full-stack products, AI-powered assistants, code intelligence tools, and data-driven applications. Strong interest in software development, machine learning engineering, and practical AI systems.'
}

export const roles = [
  'Full Stack Developer',
  'Machine Learning Engineer',
  'AI Engineering Enthusiast',
  'Software Developer',
  'Problem Solver'
]

export const socials = [
  { label: 'GitHub', url: personal.github, value: 'github.com/pavaner2007' },
  { label: 'LinkedIn', url: personal.linkedin, value: 'linkedin.com/in/pavan-e-r-969616327' },
  { label: 'Email', url: `mailto:${personal.email}`, value: personal.email }
]

export const education = [
  {
    institution: 'Sri Eshwar College of Engineering',
    degree: 'B.E. Computer Science and Engineering (Artificial Intelligence & Machine Learning)',
    duration: '2024 - 2028',
    score: 'CGPA: 7.8 (IV Semester)',
    coursework: ['Data Structures', 'Database Management Systems', 'Object-Oriented Programming', 'AI/ML Fundamentals', 'Software Development']
  },
  {
    institution: 'Narayana Junior College',
    degree: 'BIEAP - Intermediate',
    duration: '2022 - 2024',
    score: '93.3%',
    coursework: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science Foundations']
  },
  {
    institution: 'S V C High School',
    degree: 'BSEAP - Secondary Education',
    duration: '2021 - 2022',
    score: '96.5%',
    coursework: ['Core Academics', 'Analytical Thinking', 'Communication']
  }
]

export const skillCategories = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 86 },
      { name: 'Java', level: 82 },
      { name: 'C', level: 80 },
      { name: 'C++', level: 78 },
      { name: 'JavaScript', level: 76 },
      { name: 'TypeScript', level: 70 }
    ]
  },
  {
    title: 'Web Development',
    icon: 'Globe2',
    skills: [
      { name: 'React', level: 82 },
      { name: 'Node.js', level: 76 },
      { name: 'Express.js', level: 74 },
      { name: 'Tailwind CSS', level: 84 },
      { name: 'HTML', level: 88 },
      { name: 'CSS', level: 84 }
    ]
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'MongoDB', level: 78 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MySQL', level: 72 }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: 'BrainCircuit',
    skills: [
      { name: 'Machine Learning', level: 76 },
      { name: 'LangChain', level: 70 },
      { name: 'LLM Applications', level: 74 },
      { name: 'RAG Systems', level: 70 },
      { name: 'Deep Learning Basics', level: 64 }
    ]
  },
  {
    title: 'Core Concepts',
    icon: 'Network',
    skills: [
      { name: 'Data Structures', level: 82 },
      { name: 'OOPs', level: 84 },
      { name: 'DBMS', level: 76 },
      { name: 'Problem Solving', level: 82 }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: 'Wrench',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 84 },
      { name: 'VS Code', level: 88 },
      { name: 'Docker', level: 62 },
      { name: 'Postman', level: 72 },
      { name: 'Render', level: 74 },
      { name: 'Vercel', level: 76 },
      { name: 'AWS', level: 58 },
      { name: 'Jupyter Notebook', level: 78 }
    ]
  }
]

export const projects = [
  {
    title: 'Study Mate',
    category: 'Full Stack + AI',
    description:
      'Full-stack AI-powered educational platform combining collaborative note sharing with an intelligent study assistant for PDFs, websites, and YouTube transcripts.',
    longDescription:
      "Students can upload, search, bookmark, and download academic resources while using a context-aware AI chatbot powered by Groq's LLaMA 3.3 model to create efficient learning experiences.",
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Groq API', 'Tailwind CSS'],
    features: ['Note sharing system', 'PDF Q&A assistant', 'Website content analysis', 'YouTube transcript summarization', 'Bookmark and download resources'],
    github: 'https://github.com/pavaner2007/studymate_FSD',
    live: 'https://study-mate-frontend-1ld9.onrender.com/',
    status: 'Live Project',
    type: 'Full Stack'
  },
  {
    title: 'AutoQA Agent',
    category: 'AI Code Intelligence',
    description:
      'AI-powered repository analysis platform that scans GitHub repositories, detects technology stacks, discovers API endpoints, and generates structured reports.',
    longDescription:
      'Designed as a modular agent-based system for automated codebase intelligence, software project auditing, technology profiling, and repository inventory generation.',
    tech: ['FastAPI', 'PostgreSQL', 'React', 'GitPython', 'Docker'],
    features: ['GitHub repository ingestion', 'Technology stack detection', 'API endpoint discovery', 'Structured report generation', 'Agent-based architecture'],
    github: 'https://github.com/pavaner2007/UnitTestingAgent',
    live: '',
    status: 'Repository Available',
    type: 'AI'
  },
  {
    title: 'Medical Chatbot',
    category: 'AI Assistant',
    description:
      'AI-powered medical assistant concept built using LangChain, Pinecone, HuggingFace embeddings, and LLMs for medical information retrieval workflows.',
    longDescription:
      'Designed to explore retrieval-augmented generation, vector search, document embeddings, and conversational AI patterns for healthcare-related question answering.',
    tech: ['LangChain', 'Pinecone', 'HuggingFace Embeddings', 'LLMs', 'Python'],
    features: ['RAG-based answers', 'Vector database retrieval', 'Medical document search', 'Conversational interface', 'LLM integration'],
    github: '',
    live: '',
    status: 'Add Project Link',
    type: 'AI'
  },
  {
    title: 'Credit Card Fraud Detection',
    category: 'Machine Learning',
    description:
      'Machine learning project for detecting fraudulent transactions using predictive models, data preprocessing, and analytical evaluation.',
    longDescription:
      'Focuses on classification workflows, model training, feature analysis, and evaluation metrics for identifying suspicious financial transactions.',
    tech: ['Python', 'Machine Learning', 'Data Analysis', 'Classification Models', 'Jupyter Notebook'],
    features: ['Fraud classification', 'Data preprocessing', 'Model evaluation', 'Predictive analytics', 'Transaction risk detection'],
    github: '',
    live: '',
    status: 'Add Project Link',
    type: 'ML'
  }
]

export const achievements = [
  {
    title: 'Top 6 Finalist - Hackathon 2026',
    organizer: 'District Collectorate of Chittoor',
    year: '2026',
    description: 'Recognized as a Top 6 finalist for developing an innovative technology solution during Hackathon 2026.'
  },
  {
    title: 'Top 10 of 386 Teams - Learnify GenAI Challenge',
    organizer: 'Unsaid Talks',
    year: '2025',
    description: 'Secured Top 10 rank among 386 competing teams in the Unsaid Talks Learnify GenAI Challenge.'
  }
]

export const certifications = [
  {
    title: 'Data Structures and Algorithms',
    issuer: 'Udemy',
    year: '2025',
    url: 'https://www.udemy.com/certificate/UC-2e038abf-03e6-452d-9833-e8dd49f3168b/'
  },
  {
    title: 'Programming in Java',
    issuer: 'NPTEL',
    year: '2025',
    url: ''
  },
  {
    title: 'Design Thinking - A Primer',
    issuer: 'NPTEL',
    year: '2026',
    url: ''
  }
]

export const codingProfiles = [
  {
    platform: 'LeetCode',
    stats: 'Solved 100+ Problems | Global Rank - 2,311,804',
    url: 'https://leetcode.com/u/Pavan_E_R/'
  },
  {
    platform: 'CodeChef',
    stats: 'Solved 55+ Problems',
    url: 'https://www.codechef.com/users/spry_willow_86'
  },
  {
    platform: 'Skill Rack',
    stats: 'Solved 620+ Problems | 2 Certificates | 178 Bronze',
    url: 'http://www.skillrack.com/profile/514621/90e6db848f83ffece6e9da7005322678c90da907'
  }
]

export const activities = [
  {
    title: 'Hackathons',
    description: 'Builds innovative technology solutions under time constraints and validates ideas through rapid prototyping.'
  },
  {
    title: 'Technical Projects',
    description: 'Develops full-stack, AI-powered, and machine learning projects focused on practical real-world use cases.'
  },
  {
    title: 'Open Source Learning',
    description: 'Explores GitHub-based workflows, codebase analysis, version control, and modern developer tools.'
  },
  {
    title: 'AI & ML Exploration',
    description: 'Learns LLM applications, RAG systems, LangChain workflows, and predictive machine learning models.'
  }
]

export const stats = [
  { label: 'Skill Rack Problems', value: 620, suffix: '+' },
  { label: 'LeetCode Problems', value: 100, suffix: '+' },
  { label: 'CodeChef Problems', value: 55, suffix: '+' }
]
