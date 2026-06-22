export const profile = {
  name: 'Jeshiko J',
  firstName: 'Jeshiko',
  watermark: 'JESHIKO',
  role: 'FULL-STACK DEVELOPER',
  tagline: 'CODE IT. SHIP IT. SCALE IT.',
  blurb:
    'Designing, building, and deploying full-stack web applications — from Django backends to cloud-ready infrastructure.',
  email: 'jeshikochandran@gmail.com',
  phone: '+91 73958 81571',
  location: 'Kanyakumari, Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/JeshikoJ',
  github: '#',
  resume: '/assets/Jeshiko_J_Resume.pdf',
  photo: '/assets/jeshiko.jpg',
};

export const specializations = [
  { id: '01', label: 'Full-Stack Development' },
  { id: '02', label: 'REST API Design' },
  { id: '03', label: 'Cloud Infrastructure (AWS)' },
  { id: '04', label: 'CI/CD & DevOps' },
];

export const experiences = [
  {
    id: 'crescent',
    title: 'Software Development Intern',
    org: 'Crescent Infotech',
    type: 'Internship',
    tag: 'Current',
    description: [
      'Developed 3+ intelligent software prototypes by applying machine learning and data processing concepts, reducing manual data handling time by approximately 30%.',
      'Completed end-to-end software development workflows across 2 project cycles, improving delivery speed and code quality.',
      'Collaborated with a team of 5 developers to build and test data-driven solutions, strengthening Python programming and analytical skills.',
    ],
  },
  {
    id: 'srishti',
    title: 'Industrial Visit Participant',
    org: 'Srishti Campus',
    type: 'Industrial Exposure',
    tag: 'Completed',
    description: [
      'Observed agile project management workflows used across 4+ enterprise software teams, gaining insight into real-world DevOps and deployment practices.',
      'Identified 3 key areas for personal skill development in cloud infrastructure and CI/CD automation based on enterprise technology exposure.',
    ],
  },
];

export const techStacks = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript'],
  },
  {
    title: 'Web & Frameworks',
    items: ['HTML5', 'CSS3', 'Django', 'REST APIs'],
  },
  {
    title: 'Database',
    items: ['MongoDB'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS EC2', 'AWS S3', 'CI/CD Pipelines', 'Infrastructure as Code'],
  },
  {
    title: 'Tools & Version Control',
    items: ['Git', 'GitHub', 'VS Code'],
  },
];

export const certifications = [
  { name: 'Web Development', issuer: 'NoviTech' },
  { name: 'Data Science using Python', issuer: 'VEI' },
  { name: 'Python Full Stack', issuer: 'E-MAX' },
  { name: 'Interaction Design & Prototyping', issuer: 'Feather' },
  { name: 'Cloud DevOps', issuer: 'SLA' },
];

export const projects = [
  {
    year: '2026',
    title: 'E-Commerce Web Application',
    subtitle: 'Full-stack online storefront with Django + MongoDB',
    description:
      'A fully functional e-commerce platform built end-to-end — from responsive front-end pages to a structured Django backend. Designed for clean architecture and maintainability, with a focus on shipping a working product rather than a tech demo.',
    features: [
      'Product listing & catalog browsing',
      'Shopping cart & checkout flow',
      'User authentication & accounts',
      'Order management',
      '10+ responsive front-end pages',
    ],
    architecture:
      'Django + MongoDB backend handling 3 core data models (products, orders, users), following MVC architecture for maintainable, scalable code.',
    metrics: [
      { value: '5+', label: 'Core modules' },
      { value: '10+', label: 'Responsive pages' },
      { value: '3', label: 'Data models' },
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Django', 'MongoDB'],
    links: {
      demo: '#',
      code: '#',
    },
  },
  {
    year: '2025',
    title: 'AI Data Processing Pipeline',
    subtitle: 'Automated data extraction and insights',
    description:
      'Developed an intelligent data processing pipeline using Python and Machine Learning concepts to automate the extraction, transformation, and loading (ETL) of large datasets, significantly reducing manual data handling.',
    features: [
      'Automated data ingestion from multiple sources',
      'Data cleaning and normalization',
      'Machine learning model integration for insights',
      'Real-time processing dashboard',
    ],
    architecture:
      'Python backend utilizing Pandas and scikit-learn for processing, with a lightweight React dashboard for visualizing pipeline status and insights.',
    metrics: [
      { value: '30%', label: 'Time saved' },
      { value: '2', label: 'ML Models' },
      { value: '1M+', label: 'Rows processed' },
    ],
    stack: ['Python', 'Pandas', 'React', 'Machine Learning'],
    links: {
      demo: '#',
      code: '#',
    },
  },
  {
    year: '2024',
    title: 'Cloud Infrastructure Dashboard',
    subtitle: 'AWS resource monitoring and management',
    description:
      'A comprehensive dashboard for monitoring AWS infrastructure usage and costs. Built with a focus on clear visualizations and actionable insights for DevOps teams to manage resources effectively.',
    features: [
      'Real-time resource utilization metrics',
      'Cost tracking and alerting',
      'EC2 and S3 management interface',
      'Customizable dashboard views',
    ],
    architecture:
      'React frontend communicating with AWS via SDK. Utilizes CloudWatch metrics and Cost Explorer APIs to aggregate data into a unified dashboard.',
    metrics: [
      { value: '15+', label: 'AWS Services' },
      { value: '50ms', label: 'Avg Latency' },
      { value: '100%', label: 'Uptime' },
    ],
    stack: ['React', 'AWS SDK', 'Tailwind CSS', 'Node.js'],
    links: {
      demo: '#',
      code: '#',
    },
  }
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
