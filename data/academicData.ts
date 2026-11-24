export interface Course {
  id: string;
  title: string;
  category: 'cs-it' | 'math-science' | 'mgmt-commerce' | 'competitive' | 'languages' | 'skill-dev';
  categoryLabel: string;
  level: 'Foundation' | 'Intermediate' | 'Advanced' | 'Professional';
  duration: string;
  mode: 'Hybrid (Classroom + Online)' | 'On-Campus Classroom' | 'Live Interactive Online';
  rating: number;
  studentsEnrolled: number;
  shortDesc: string;
  fullDesc: string;
  curriculum: string[];
  eligibility: string;
  image: string;
  certification: string;
  feeEstimate: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  department: string;
  specialization: string;
  experience: string;
  bio: string;
  areasOfExpertise: string[];
  image: string;
}

export interface CampusFacility {
  id: string;
  name: string;
  category: string;
  capacity: string;
  description: string;
  keyFeatures: string[];
  image: string;
}

export interface AcademicProgramme {
  id: string;
  title: string;
  category: string;
  duration: string;
  eligibility: string;
  overview: string;
  coreHighlights: string[];
  careerPaths: string[];
  image: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'notes' | 'papers' | 'guides' | 'calendar';
  categoryLabel: string;
  type: string;
  fileSize: string;
  semester: string;
  subject: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  studentName: string;
  programme: string;
  achievement: string;
  rankOrScore: string;
  year: string;
  quote: string;
  image: string;
}

// 1. ALL COURSES (Comprehensive 12 Courses across 6 Disciplines)
export const coursesData: Course[] = [
  {
    id: 'cs-fullstack-cloud',
    title: 'Full-Stack Software Engineering & Cloud Architecture',
    category: 'cs-it',
    categoryLabel: 'Computer Science & IT',
    level: 'Professional',
    duration: '9 Months (420 Hours)',
    mode: 'Hybrid (Classroom + Online)',
    rating: 4.9,
    studentsEnrolled: 840,
    shortDesc: 'Master modern full-stack development, cloud microservices, Docker, Kubernetes, and enterprise system design.',
    fullDesc: 'An intensive, industry-aligned diploma curriculum developed in collaboration with premier technology leaders. Students build scalable distributed web applications with TypeScript, Next.js, Go/Node.js, PostgreSQL, and AWS Cloud Native infrastructure.',
    curriculum: [
      'Advanced TypeScript, Modern React & Next.js Architecture',
      'Backend Microservices, REST & gRPC API Design',
      'PostgreSQL, Redis Caching & Database Sharding',
      'Docker Containerization, CI/CD Pipelines & Kubernetes',
      'System Architecture, Cloud Security & Capstone Deployment'
    ],
    eligibility: 'B.Sc / B.Tech / BCA or relevant programming foundation',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    certification: 'EDVANCE Advanced Professional Certificate in Cloud Software Engineering',
    feeEstimate: 'Flexible Semester Instalments • Merit Scholarships Up to 40%'
  },
  {
    id: 'data-science-ai',
    title: 'Artificial Intelligence, Machine Learning & Data Engineering',
    category: 'cs-it',
    categoryLabel: 'Computer Science & IT',
    level: 'Advanced',
    duration: '10 Months (480 Hours)',
    mode: 'Hybrid (Classroom + Online)',
    rating: 4.9,
    studentsEnrolled: 690,
    shortDesc: 'From mathematical foundations and statistical modeling to deep neural networks, LLMs, and real-time MLOps.',
    fullDesc: 'Comprehensive graduate-level preparation covering Python data stack (NumPy, Pandas, SciPy), classical supervised and unsupervised ML, PyTorch deep learning, Generative AI integration, and scalable deployment with FastAPI and Docker.',
    curriculum: [
      'Probability, Linear Algebra & Statistical Inference',
      'Feature Engineering, Scikit-Learn & Classical Algorithms',
      'Deep Learning with PyTorch & Computer Vision (CNNs)',
      'Natural Language Processing, Transformers & Fine-Tuning LLMs',
      'MLOps, Model Serving, Monitoring & Production Deployment'
    ],
    eligibility: 'Mathematics/Statistics foundation at undergraduate level',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
    certification: 'EDVANCE Master Practitioner Credential in Applied AI & ML',
    feeEstimate: 'Merit-Based Fellowship • Corporate Sponsorships Accepted'
  },
  {
    id: 'competitive-iit-jee',
    title: 'Integrated Physics, Chemistry & Mathematics (IIT-JEE Masterclass)',
    category: 'competitive',
    categoryLabel: 'Competitive Examinations',
    level: 'Advanced',
    duration: '2 Years (24 Months)',
    mode: 'On-Campus Classroom',
    rating: 4.95,
    studentsEnrolled: 1250,
    shortDesc: 'Rigorous conceptual mastery, adaptive testing, and individual mentorship for national engineering entrance exams.',
    fullDesc: 'Our signature pre-university curriculum combining deep pedagogical theory with over 20,000 solved problem frameworks. Features personalized doubt elimination sessions, weekly computerized benchmark tests, and state-of-the-art physics and chemistry lab practicals.',
    curriculum: [
      'Mechanics, Electromagnetism, Optics & Modern Physics',
      'Physical, Organic & Inorganic Chemical Principles',
      'Calculus, Vectors, Coordinate Geometry & Algebra',
      'Time-Management Protocols & Negative-Marking Optimization',
      'All-India Test Series (AITS) with Predictive Analytics'
    ],
    eligibility: 'Grade 10 completed with minimum 75% in Science & Math',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85',
    certification: 'EDVANCE National Scholastic Achievement Diploma',
    feeEstimate: 'Tiered Scholarship Tests Conducted Every Quarter'
  },
  {
    id: 'competitive-neet-medical',
    title: 'Integrated Biology, Organic Chemistry & Physics (NEET Medical)',
    category: 'competitive',
    categoryLabel: 'Competitive Examinations',
    level: 'Advanced',
    duration: '2 Years (24 Months)',
    mode: 'On-Campus Classroom',
    rating: 4.92,
    studentsEnrolled: 980,
    shortDesc: 'Complete NCERT mastery, histology diagrams, botanical concepts, and diagnostic testing for top medical colleges.',
    fullDesc: 'Designed specifically for future medical aspirants. Combines thorough textbook breakdown with clinical application case studies, 3D anatomical simulations, and 300+ topic-wise diagnostic mock examinations.',
    curriculum: [
      'Human Physiology, Genetics, Evolution & Plant Diversity',
      'Biochemistry, Reaction Mechanisms & Chemical Equilibrium',
      'Thermodynamics, Waves, Fluid Dynamics & Atomic Structure',
      'High-Yield Memory Maps & Diagrammatic Mnemonics',
      'Full-Length Timed Simulative Mock Examination Suites'
    ],
    eligibility: 'Grade 10 completed with minimum 75% in Science',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85',
    certification: 'EDVANCE Medical Scholars Foundation Certificate',
    feeEstimate: 'Dr. A.P.J. Abdul Kalam Merit Scholarship Available'
  },
  {
    id: 'cybersecurity-ethical-hacking',
    title: 'Enterprise Cybersecurity & Ethical Penetration Testing',
    category: 'cs-it',
    categoryLabel: 'Computer Science & IT',
    level: 'Intermediate',
    duration: '6 Months (280 Hours)',
    mode: 'Live Interactive Online',
    rating: 4.85,
    studentsEnrolled: 420,
    shortDesc: 'Hands-on network vulnerability assessments, security operations center (SOC) protocols, and malware defense.',
    fullDesc: 'Learn the defensive and offensive tools used by top security teams worldwide. Includes a 24/7 cloud sandbox cyber-range where students solve real-world CTF challenges, analyze packet payloads, and harden cloud network boundaries.',
    curriculum: [
      'TCP/IP Protocols, Packet Sniffing & Network Security',
      'Kali Linux, Metasploit, Nmap & Vulnerability Scanning',
      'Web Application Vulnerabilities (OWASP Top 10)',
      'Cryptography, PKI Infrastructure & Threat Modeling',
      'Incident Response, Digital Forensics & SOC Operations'
    ],
    eligibility: 'Basic networking and operating system fundamentals',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=85',
    certification: 'Certified Cybersecurity Practitioner (CCP – EDVANCE)',
    feeEstimate: 'Installment Plans Available with Lab Sandbox Access'
  },
  {
    id: 'financial-accounting-ca',
    title: 'Financial Analysis, Corporate Accounting & Taxation',
    category: 'mgmt-commerce',
    categoryLabel: 'Commerce & Management',
    level: 'Intermediate',
    duration: '8 Months (320 Hours)',
    mode: 'Hybrid (Classroom + Online)',
    rating: 4.88,
    studentsEnrolled: 610,
    shortDesc: 'Corporate balance sheet analysis, GST filing, corporate law, auditing standards, and financial modeling in Excel.',
    fullDesc: 'Tailored for commerce undergraduates and early-career accountants. Gain hands-on competence in TallyPrime, SAP ERP financial modules, Indian Accounting Standards (Ind AS), and 3-statement financial forecasting.',
    curriculum: [
      'Advanced Corporate Financial Reporting & Ind AS',
      'Direct & Indirect Taxes, GST Compliance & Return Filing',
      'Auditing Standards, Internal Controls & Statutory Audit',
      'Discounted Cash Flow (DCF) & Financial Modeling in Excel',
      'Corporate Governance, Business Ethics & Financial Law'
    ],
    eligibility: 'Commerce/Business background or 10+2 with Accountancy',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85',
    certification: 'EDVANCE Executive Diploma in Corporate Accounting & Finance',
    feeEstimate: 'Corporate Group Discounts Available'
  },
  {
    id: 'spoken-english-ielts',
    title: 'Executive English Fluency, IELTS & Global Communication',
    category: 'languages',
    categoryLabel: 'Languages & Communication',
    level: 'Foundation',
    duration: '4 Months (160 Hours)',
    mode: 'Hybrid (Classroom + Online)',
    rating: 4.93,
    studentsEnrolled: 1450,
    shortDesc: 'Accent neutralisation, public speaking, academic writing, and band 8.0+ preparation for IELTS/TOEFL.',
    fullDesc: 'Interactive language immersion combining small conversational pods with Cambridge-certified linguistics coaches. Students master structured debate, executive boardroom presentations, and formal academic dissertation writing.',
    curriculum: [
      'Phonetics, Pronunciation & Accent Neutralisation',
      'Lexical Resource Expansion & Advanced Idiomatic Usage',
      'IELTS Speaking & Listening Band Optimization Drills',
      'Academic Essay Structure, Argumentation & Coherence',
      'Debating, Extempore Speaking & Corporate Presentation'
    ],
    eligibility: 'Open to all students and working professionals',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85',
    certification: 'EDVANCE Certificate of Advanced English Proficiency (C1 CEFR)',
    feeEstimate: 'Weekend and Evening Batches for Working Adults'
  },
  {
    id: 'digital-marketing-growth',
    title: 'Performance Digital Marketing, SEO & Brand Strategy',
    category: 'skill-dev',
    categoryLabel: 'Skill Development & Vocations',
    level: 'Intermediate',
    duration: '5 Months (200 Hours)',
    mode: 'Live Interactive Online',
    rating: 4.87,
    studentsEnrolled: 720,
    shortDesc: 'Google Ads, Meta Ads Manager, programmatic marketing, technical SEO, and conversion rate optimization (CRO).',
    fullDesc: 'Real-world growth marketing training where each student manages a live demonstration ad budget. Covers search engine ranking algorithms, copy experimentation, tracking pixels, Google Analytics 4, and automated email nurturing funnels.',
    curriculum: [
      'Technical SEO, Schema Markup & Search Architecture',
      'Paid Search (PPC), Google Performance Max & Display',
      'Meta Ad Campaigns, Creative Strategy & Retargeting',
      'Google Analytics 4 (GA4), Tag Manager & Attribution',
      'Conversion Rate Optimization, Copywriting & Email Automation'
    ],
    eligibility: 'Any graduate or creative marketing enthusiast',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=85',
    certification: 'EDVANCE Certified Performance Growth Marketer',
    feeEstimate: 'Live Ad Spend Allowance Included in Tuition'
  },
  {
    id: 'ui-ux-design-product',
    title: 'Product Design, UI/UX & Design Systems with Figma',
    category: 'skill-dev',
    categoryLabel: 'Skill Development & Vocations',
    level: 'Intermediate',
    duration: '6 Months (240 Hours)',
    mode: 'Hybrid (Classroom + Online)',
    rating: 4.91,
    studentsEnrolled: 530,
    shortDesc: 'User research, wireframing, high-fidelity prototypes, interactive micro-animations, and production design tokens.',
    fullDesc: 'Go from human-centered user empathy maps to polished design systems. Students build three industry-grade portfolio case studies solving real e-commerce, fintech, and healthcare digital product bottlenecks.',
    curriculum: [
      'User Research Methodologies, Personas & Journey Mapping',
      'Information Architecture, Lo-Fi Wireframing & User Flows',
      'Visual Design Hierarchy, Typography, Color & Spacing',
      'Component Libraries, Auto Layout & Design Systems in Figma',
      'Usability Testing, Micro-Interactions & Developer Handoff'
    ],
    eligibility: 'Curiosity for visual design and digital interfaces',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85',
    certification: 'EDVANCE Diploma in User Experience & Product Architecture',
    feeEstimate: 'Includes Figma Professional Student License'
  },
  {
    id: 'business-analytics-bi',
    title: 'Business Intelligence, Power BI & SQL Analytics',
    category: 'mgmt-commerce',
    categoryLabel: 'Commerce & Management',
    level: 'Intermediate',
    duration: '5 Months (220 Hours)',
    mode: 'Hybrid (Classroom + Online)',
    rating: 4.86,
    studentsEnrolled: 810,
    shortDesc: 'Relational database querying, data warehousing, interactive dashboards, and executive KPI reporting.',
    fullDesc: 'Bridge the gap between raw corporate data and C-suite strategic decision making. Hands-on experience with Microsoft Power BI, DAX formulas, SQL window functions, and business storyboarding.',
    curriculum: [
      'Advanced SQL: Joins, Subqueries, Window Functions & CTEs',
      'Relational Database Modeling & Star-Schema Data Warehouses',
      'Microsoft Power BI: Data Ingestion, Power Query & M-Code',
      'DAX Measures, Calculated Columns & Time Intelligence',
      'Interactive Dashboard Storytelling & Executive Presentation'
    ],
    eligibility: 'Undergraduate degree in any analytical discipline',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85',
    certification: 'EDVANCE Certified Business Intelligence Specialist',
    feeEstimate: 'Corporate Capstone Evaluation by Industry Panels'
  },
  {
    id: 'stem-robotics-iot',
    title: 'Applied Robotics, Embedded Systems & IoT Engineering',
    category: 'math-science',
    categoryLabel: 'Mathematics & Science',
    level: 'Intermediate',
    duration: '6 Months (250 Hours)',
    mode: 'On-Campus Classroom',
    rating: 4.94,
    studentsEnrolled: 390,
    shortDesc: 'Microcontroller programming, sensor fusion, PCB prototyping, and autonomous mobile robot kinematics.',
    fullDesc: 'Conducted inside our specialized Robotics Innovation Laboratory. Students build working autonomous drones, sensor-driven telemetry rigs, and IoT environmental monitors using Arduino, Raspberry Pi, ESP32, and C++.',
    curriculum: [
      'Analog & Digital Circuit Theory, Schematic Capture & PCB Design',
      'Embedded C/C++ Programming for ARM Microcontrollers',
      'Sensor Fusion: IMU, LiDAR, Ultrasonic & Optical Encoders',
      'Actuator Control, PID Loops & Motor Driver Circuits',
      'Wireless Telemetry: MQTT, BLE, LoRaWAN & Cloud Dashboards'
    ],
    eligibility: 'Science/Engineering students with basic physics interest',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
    certification: 'EDVANCE Certificate in Embedded Systems & Robotics Prototyping',
    feeEstimate: 'Hardware Prototyping Component Kit Included'
  },
  {
    id: 'civil-services-upsc',
    title: 'Public Administration & Civil Services Foundation (UPSC CSE)',
    category: 'competitive',
    categoryLabel: 'Competitive Examinations',
    level: 'Advanced',
    duration: '18 Months (600 Hours)',
    mode: 'Hybrid (Classroom + Online)',
    rating: 4.91,
    studentsEnrolled: 1100,
    shortDesc: 'Comprehensive coverage of Indian Polity, Economy, History, International Relations, and Ethics (GS I–IV).',
    fullDesc: 'Rigorous intellectual grounding led by retired senior administrators and academic domain authorities. Focuses on daily analytical answer-writing, current affairs synthesis, and comprehensive essay composition.',
    curriculum: [
      'Constitutional Law, Governance & Indian Political Systems',
      'Macroeconomics, Budgetary Policies & Developmental Issues',
      'World History, Indian Heritage, Geography & Environment',
      'Ethics, Integrity, Aptitude & Case Study Resolution (GS IV)',
      'Daily Editorial Analysis, Answer-Writing & Mains Evaluator Pods'
    ],
    eligibility: 'Graduation in any stream or final year university student',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=85',
    certification: 'EDVANCE National Leadership & Administrative Fellowship',
    feeEstimate: 'Special Meritorious Concessions Available'
  }
];

// 2. ACADEMIC PROGRAMMES (7 Pathways)
export const academicProgrammes: AcademicProgramme[] = [
  {
    id: 'school-education',
    title: 'Foundational & Secondary School Education',
    category: 'Grades 6 to 10',
    duration: 'Annual Academic Sessions',
    eligibility: 'Previous grade pass certificate with foundational screening',
    overview: 'Nurturing intellectual curiosity, scientific temperament, and foundational mathematical logic during crucial developmental years. Features experiential lab sessions and bilingual literacy.',
    coreHighlights: [
      'Activity-based STEAM learning integrated into daily schedules',
      'Small class ratios (1:20) for personalized learning pace',
      'Language labs for accent-free English and second languages',
      'Early coding and digital literacy workshops'
    ],
    careerPaths: ['Senior Secondary Sciences', 'Commerce & Economics', 'Humanities & Fine Arts'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'higher-secondary',
    title: 'Senior Secondary Education (+2 Junior College)',
    category: 'Grades 11 & 12 (Science / Commerce / Arts)',
    duration: '2 Years (Four Semesters)',
    eligibility: 'Successful Grade 10 board completion with minimum 65%',
    overview: 'Dual-integrated preparation allowing students to master state/central board curricula while concurrently targeting top national entrance examinations without excessive evening tuition burn-out.',
    coreHighlights: [
      'Stream-dedicated faculties with published academic papers',
      'Fully equipped biotechnology, optics, and computer science laboratories',
      'Career counselling cell with psychometric mapping',
      'Competitive exam practice sessions embedded in weekly routine'
    ],
    careerPaths: ['Engineering (B.Tech)', 'Medicine (MBBS)', 'Chartered Accountancy', 'Economics & Law'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'undergraduate-streams',
    title: 'Undergraduate Degree Programmes (Affiliated Demonstration)',
    category: 'B.Tech, BCA, B.Sc, BBA, B.Com Pathways',
    duration: '3 to 4 Academic Years',
    eligibility: '10+2 with minimum 55% aggregate in chosen domain',
    overview: 'Modern university-level bachelor curricula infused with real-world industry internships, practical lab credits, and international student exchange opportunities.',
    coreHighlights: [
      'Credit-based choice curriculum (CBCS) with interdisciplinary electives',
      'Mandatory 6-month industry internship in penultimate semester',
      'Innovation incubator support for student startups',
      'Placement training on aptitude, coding rounds, and behavioral interviews'
    ],
    careerPaths: ['Software Engineering', 'Corporate Management', 'Data Analytics', 'Higher Research'],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'postgraduate-research',
    title: 'Postgraduate & Research Fellowship Programmes',
    category: 'M.Sc, MCA, MBA & Executive Diplomas',
    duration: '2 Academic Years',
    eligibility: 'Recognized Bachelor Degree with minimum 50% marks',
    overview: 'Advanced specialized graduate education emphasizing primary research, scholarly publication, patent drafting, and corporate leadership.',
    coreHighlights: [
      'Mentorship by doctorate-holding research scholars',
      'Access to high-performance computing clusters and journal databases',
      'Case-study method inspired by premier global business academies',
      'Executive networking conclaves with Fortune 500 leadership'
    ],
    careerPaths: ['Senior R&D Scientist', 'Product Management', 'Doctoral Studies (Ph.D.)', 'Consulting'],
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'competitive-entrance',
    title: 'Premier Competitive Examination Coaching Division',
    category: 'IIT-JEE, NEET, UPSC, Banking & SSC',
    duration: '1 to 2 Years Targeted Cohorts',
    eligibility: 'Screening aptitude evaluation conducted by EDVANCE',
    overview: 'Our flagship test preparation ecosystem that has mentored thousands of students to top percentiles through rigorous problem-solving architecture, diagnostic tests, and psychological resilience coaching.',
    coreHighlights: [
      'Daily practice problem sheets (DPPs) with video breakdown',
      'Computer-based test (CBT) engine replicating actual national exam UI',
      'One-on-one micro-mentorship for conceptual bottlenecks',
      'Time-tested revision schedules and high-yield study modules'
    ],
    careerPaths: ['National Institutes of Technology (NITs)', 'All India Institutes of Medical Sciences (AIIMS)', 'Indian Administrative Service (IAS)'],
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'vocational-skills',
    title: 'Vocational Training & Skill Development Academy',
    category: 'Full-Stack, UI/UX, Cloud, Digital Growth',
    duration: '3 to 6 Months Fast-Track Modules',
    eligibility: 'Open enrollment for students, graduates, and working professionals',
    overview: 'Intensive career-transition bootcamps focused strictly on demonstrable portfolio projects, coding velocity, and practical commercial tools.',
    coreHighlights: [
      '100% project-based evaluation (zero theoretical rote exams)',
      'Mentored by active senior software architects and directors',
      'Resume reviews, GitHub audit, and mock technical whiteboarding',
      'Exclusive hiring partner network of 120+ enterprises'
    ],
    careerPaths: ['Frontend Developer', 'Cloud Associate', 'UX Designer', 'Growth Marketer'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85'
  }
];

// 3. FACULTY PROFILES (6 Detailed Demonstration Profiles)
export const facultyData: FacultyMember[] = [
  {
    id: 'prof-rajesh-sharma',
    name: 'Dr. Rajesh Sharma, Ph.D.',
    title: 'Dean of Computing & Artificial Intelligence',
    department: 'Computer Science & IT',
    specialization: 'Distributed Systems & Cloud Computing',
    experience: '18 Years Academic & Industry Leadership',
    bio: 'Former senior research scientist at top tech laboratories. Author of 24 peer-reviewed IEEE papers on distributed fault-tolerant systems and microservice architectures.',
    areasOfExpertise: ['Distributed Consensus', 'Cloud Native Systems', 'Enterprise Software Design', 'Kubernetes Architecture'],
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'prof-priya-nambiar',
    name: 'Dr. Priya Nambiar',
    title: 'Head of Mathematics & Competitive Examination Sciences',
    department: 'Competitive Examinations',
    specialization: 'Advanced Calculus & Analytical Geometry',
    experience: '14 Years Mentoring National Rankers',
    bio: 'Gold medalist in Applied Mathematics from Delhi University. Celebrated for transforming abstract mathematical concepts into intuitive mental visual frameworks.',
    areasOfExpertise: ['Differential Equations', 'Complex Analysis', 'Combinatorics', 'Olympiad Problem Solving'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'prof-aravind-swaminathan',
    name: 'Dr. Aravind Swaminathan',
    title: 'Director of Physics & Engineering Sciences',
    department: 'Science & Engineering',
    specialization: 'Quantum Mechanics & Modern Optics',
    experience: '16 Years in Advanced Pedagogical Research',
    bio: 'Passionate experimentalist who designed EDVANCE’s signature photonics laboratory. Known for hands-on classroom demonstrations that demystify quantum physics.',
    areasOfExpertise: ['Quantum Optics', 'Electrodynamics', 'Fluid Mechanics', 'Lab Instrumentation'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'prof-meera-banerjee',
    name: 'Meera Banerjee, M.Phil',
    title: 'Lead Mentor – Linguistics & Global Communications',
    department: 'Languages & Communication',
    specialization: 'Applied Linguistics & Executive Rhetoric',
    experience: '12 Years Cambridge CELTA Certified Educator',
    bio: 'Has trained over 4,500 students for academic writing, debate championships, and international IELTS band 8.5+ qualifications.',
    areasOfExpertise: ['Phonetics & Accent Training', 'Academic Writing', 'Public Speaking', 'IELTS/TOEFL Strategy'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'prof-vikram-oberoi',
    name: 'Vikram Oberoi, M.Tech, PMP',
    title: 'Senior Faculty – Robotics & Cyber-Physical Systems',
    department: 'Skill Development & Vocations',
    specialization: 'Autonomous Vehicles & Embedded Systems',
    experience: '11 Years in Automotive Electronics & IoT',
    bio: 'Patent holder in wireless telemetry sensor networks. Leads student delegations to international FIRST Robotics and Hackathon championships.',
    areasOfExpertise: ['Embedded C/C++', 'Microcontroller Kinematics', 'IoT Telemetry', 'PCB Prototyping'],
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'prof-ananya-sen',
    name: 'Ananya Sen, CFA, MBA',
    title: 'Associate Professor – Corporate Finance & Commerce',
    department: 'Commerce & Management',
    specialization: 'Corporate Valuation & Financial Analytics',
    experience: '13 Years in Investment Banking & Education',
    bio: 'Former equity research strategist at global investment banks. Brings real balance sheets and financial models into the classroom for applied learning.',
    areasOfExpertise: ['Financial Statement Analysis', 'Portfolio Management', 'Corporate Taxation', 'Business Forecasting'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85'
  }
];

// 4. CAMPUS FACILITIES (6 Key Infrastructure Pillars)
export const campusFacilities: CampusFacility[] = [
  {
    id: 'adv-comp-lab',
    name: 'Turing Advanced Computing & AI Data Center',
    category: 'Computer Science & Information Technology',
    capacity: '120 Dual-Monitor Workstations',
    description: 'Equipped with high-performance GPU workstations (NVIDIA RTX), gigabit optical intranet, and dedicated cloud sandboxes for software compilation and neural network training.',
    keyFeatures: ['Dedicated Linux/Unix Terminals', '24/7 Cloud Dev Sandbox Access', 'Ergonomic Herman Miller Seating', 'Interactive Smart Presentation Walls'],
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'central-library',
    name: 'The Central Academic Knowledge Library',
    category: 'Research & Scholarly Resources',
    capacity: '250 Silent Study Seats • 45,000 Volumes',
    description: 'A serene three-floor architectural sanctum housing physical textbook reserves, rare scholarly archives, and digital terminals connected to JSTOR, IEEE, and Springer databases.',
    keyFeatures: ['Quiet Soundproof Carrels', 'RFID Automated Checkout Kiosks', 'High-Speed Wi-Fi & Kindle Terminals', 'Climate-Controlled Heritage Archive'],
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'robotics-iot-lab',
    name: 'Tesla Robotics & Hardware Prototyping Lab',
    category: 'Engineering & Maker Spaces',
    capacity: '60 Rapid Prototyping Benches',
    description: 'A state-of-the-art makerspace featuring 3D printers, laser cutters, oscilloscope stations, and CNC mills where engineering concepts turn into working physical prototypes.',
    keyFeatures: ['Industrial 3D Printers & Laser Cutters', 'Digital Rigol Oscilloscopes & Power Supplies', 'Component Storage Vaults with 10k+ ICs', 'Anti-Static ESD Flooring throughout'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'lecture-theatres',
    name: 'Acoustic Collaborative Lecture Theatres',
    category: 'Classroom & Auditoriums',
    capacity: '3 Auditoriums (150–350 Seats each)',
    description: 'Tiered stadium-style classrooms engineered with acoustic dampening panels, dual high-lumen 4K laser projectors, and wireless lapel microphones for crystal-clear discourse.',
    keyFeatures: ['Dual 4K Laser Projection Surfaces', 'Automated Session Lecture Capture', 'Under-Desk Power Sockets for Every Student', 'Air-Conditioned HEPA Filtered Air'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'science-bio-lab',
    name: 'Curie Biotechnology & Analytical Chemistry Lab',
    category: 'Science & Medical Research',
    capacity: '40 Research Stations',
    description: 'NABL-benchmark wet laboratories equipped with binocular digital microscopes, spectrophotometers, fume hoods, and sterile laminar airflow benches for medical students.',
    keyFeatures: ['Class-100 Laminar Airflow Units', 'Digital Olympus Oil-Immersion Microscopes', 'Full Emergency Eye-Wash & Safety Showers', 'Chemical Waste Neutralisation System'],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=85'
  },
  {
    id: 'student-hub',
    name: 'Student Innovation Commons & Wellness Hub',
    category: 'Recreation, Cafeteria & Co-Working',
    capacity: '300 Seating Capacity',
    description: 'A dynamic social hub featuring organic health food cafeteria, amphitheater steps for student debates, table tennis, indoor sports, and private student council meeting pods.',
    keyFeatures: ['Artisanal Espresso & Healthy Meal Bar', 'Indoor Badminton & Table Tennis Arena', 'Breakout Discussion Booths', 'Lush Green Outdoor Garden Terraces'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85'
  }
];

// 5. DOWNLOADABLE LEARNING RESOURCES (8 Real Files / Sample Documents)
export const resourcesData: ResourceItem[] = [
  {
    id: 'res-calc-formula',
    title: 'Comprehensive Differential & Integral Calculus Formula Guide',
    category: 'notes',
    categoryLabel: 'Study Notes & Cheatsheets',
    type: 'PDF Document (Printable)',
    fileSize: '3.4 MB',
    semester: 'Pre-University & Engineering Year 1',
    subject: 'Mathematics',
    description: 'Standardized derivations, substitution rules, double integral coordinates, and differential equation shortcuts.'
  },
  {
    id: 'res-jee-mock-2026',
    title: 'IIT-JEE Advanced Full-Length Model Paper & Solutions',
    category: 'papers',
    categoryLabel: 'Sample Examination Papers',
    type: 'Question Paper + Video Key',
    fileSize: '5.8 MB',
    semester: 'Grade 12 / Repeaters',
    subject: 'Physics, Chemistry, Math',
    description: 'Comprehensive 3-hour examination paper crafted by senior faculty with detailed step-by-step marking schemes.'
  },
  {
    id: 'res-data-struct-python',
    title: 'Data Structures & Algorithms in Python – Complete Code Handbook',
    category: 'guides',
    categoryLabel: 'Learning Guides & Handbooks',
    type: 'Jupyter Notebook & PDF',
    fileSize: '4.2 MB',
    semester: 'Computer Science Semester 2/3',
    subject: 'Computer Science',
    description: 'Tree traversals, dynamic programming paradigms, graph algorithms, and Big-O runtime analysis cheat-sheets.'
  },
  {
    id: 'res-neet-botany-mnemonics',
    title: 'NEET Medical Biology: High-Yield Botanical Mnemonics & Diagrams',
    category: 'notes',
    categoryLabel: 'Study Notes & Cheatsheets',
    type: 'Color PDF Illustrated',
    fileSize: '6.1 MB',
    semester: 'Medical Entrance Preparation',
    subject: 'Biology & Botany',
    description: 'Full-color histology drawings, plant morphology tables, and memory maps for quick recall under exam conditions.'
  },
  {
    id: 'res-academic-calendar',
    title: 'EDVANCE Annual Academic Calendar & Examination Schedule (2026–27)',
    category: 'calendar',
    categoryLabel: 'Academic Calendars & Circulars',
    type: 'Official Circular PDF',
    fileSize: '1.2 MB',
    semester: 'All Programmes',
    subject: 'Institution Administration',
    description: 'Semester commencement dates, internal assessments, vacation periods, and national competition calendars.'
  },
  {
    id: 'res-organic-rxn-mechanisms',
    title: 'Organic Chemistry Reaction Mechanisms & Synthesis Pathways',
    category: 'guides',
    categoryLabel: 'Learning Guides & Handbooks',
    type: 'PDF Illustrated Guide',
    fileSize: '4.9 MB',
    semester: 'Senior Secondary Grade 12',
    subject: 'Chemistry',
    description: 'Electrophilic addition, nucleophilic aromatic substitutions, and retrosynthetic analysis frameworks.'
  },
  {
    id: 'res-ielts-writing-band8',
    title: 'IELTS Academic Writing Task 1 & 2 Band 8.5 Strategy Compendium',
    category: 'guides',
    categoryLabel: 'Learning Guides & Handbooks',
    type: 'PDF Guide + Model Essays',
    fileSize: '2.8 MB',
    semester: 'Language Development',
    subject: 'English Linguistics',
    description: 'Graph analysis vocabulary, cohesive linkers, argumentation structures, and 20 graded sample band-9 responses.'
  },
  {
    id: 'res-business-fin-ratios',
    title: 'Corporate Financial Ratio Analysis & Balance Sheet Benchmarks',
    category: 'notes',
    categoryLabel: 'Study Notes & Cheatsheets',
    type: 'Excel Template + PDF',
    fileSize: '3.1 MB',
    semester: 'Commerce & Management',
    subject: 'Financial Management',
    description: 'Liquidity, solvency, and profitability ratios with live corporate case studies and template formulas.'
  }
];

export const downloadableResources = resourcesData;

// 6. STUDENT ACHIEVEMENTS (Demonstration Content Clearly Labelled)
export const achievementsData: AchievementItem[] = [
  {
    id: 'achieve-1',
    studentName: 'Aaditya Verma (Fictional Demonstration)',
    programme: 'IIT-JEE Masterclass Cohort',
    achievement: 'All-India Rank 24 • JEE Advanced',
    rankOrScore: 'AIR 24 (99.98 Percentile)',
    year: 'Class of 2026',
    quote: '“The faculty at EDVANCE broke down the toughest physics concepts into foundational truths. Their daily doubt labs made all the difference.”',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85'
  },
  {
    id: 'achieve-2',
    studentName: 'Sneha Kulkarni (Fictional Demonstration)',
    programme: 'NEET Medical Scholars Division',
    achievement: 'Score 710/720 • Top Medical College Selection',
    rankOrScore: 'State Rank 03 (Score 710/720)',
    year: 'Class of 2026',
    quote: '“Diagrammatic recall methods and simulated testing at EDVANCE eliminated examination anxiety completely.”',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=85'
  },
  {
    id: 'achieve-3',
    studentName: 'Rohan Mehra (Fictional Demonstration)',
    programme: 'Full-Stack Software Engineering',
    achievement: 'Placed as Cloud Platform Engineer ($42k Package)',
    rankOrScore: 'Top Tier Placement',
    year: 'Class of 2026',
    quote: '“The hands-on cloud sandbox projects gave me more practical engineering confidence than four years of theoretical college.”',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85'
  },
  {
    id: 'achieve-4',
    studentName: 'Ananya Pillai (Fictional Demonstration)',
    programme: 'Public Administration & Civil Services Foundation',
    achievement: 'UPSC CSE Demonstration Top 50 Qualifier',
    rankOrScore: 'Rank 38 (Fictional)',
    year: 'Class of 2025',
    quote: '“The daily editorial synthesis and answer-writing critiques guided my analytical discipline throughout the year.”',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=85'
  }
];

// 7. NAVIGATION SECTIONS (The Interactive Learning Index)
export const academicNavigation = [
  { num: '01', code: 'SEC-1.0', title: 'Home', path: '/', desc: 'Institutional Portal & Overview', icon: 'Home' },
  { num: '02', code: 'SEC-2.0', title: 'About Us', path: '/about', desc: 'Heritage, Vision & Governance', icon: 'ShieldCheck' },
  { num: '03', code: 'SEC-3.0', title: 'Academics', path: '/academics', desc: 'Degrees, Curricula & Pathways', icon: 'GraduationCap' },
  { num: '04', code: 'SEC-4.0', title: 'Courses', path: '/courses', desc: 'Complete 12-Course Catalogue', icon: 'BookOpen' },
  { num: '05', code: 'SEC-5.0', title: 'Admissions', path: '/admissions', desc: 'Eligibility, Fees & Application', icon: 'FileText' },
  { num: '06', code: 'SEC-6.0', title: 'Faculty', path: '/faculty', desc: 'Professors & Domain Mentors', icon: 'Users' },
  { num: '07', code: 'SEC-7.0', title: 'Campus & Facilities', path: '/campus', desc: 'Laboratories, Library & Tech', icon: 'Compass' },
  { num: '08', code: 'SEC-8.0', title: 'Student Life', path: '/student-life', desc: 'Clubs, Hackathons & Activities', icon: 'Sparkles' },
  { num: '09', code: 'SEC-9.0', title: 'Results & Achievements', path: '/results', desc: 'Scholastic Demonstration Metrics', icon: 'Award' },
  { num: '10', code: 'SEC-10.0', title: 'Resources', path: '/resources', desc: 'Notes, Sample Papers & Guides', icon: 'Download' },
  { num: '11', code: 'SEC-11.0', title: 'Contact Us', path: '/contact', desc: 'Campus Desk & WhatsApp Enquiries', icon: 'Phone' },
];
