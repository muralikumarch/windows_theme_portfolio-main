// ─── Centralized Portfolio Data — Single Source of Truth ─────────────────────
// All UI components and AI retrieval consume this data.
// Sourced from Venkata Murali Kumar Chintala's resume and profile

export interface Profile {
  name: string;
  headline: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    affiliation: string;
    cgpa: string;
    graduation: string;
  };
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  duration?: string;
  mode: string;
  points: string[];
  project?: string;
  projectStatus?: string;
  team?: string;
  logo: string;
  certificate?: string;
}

export interface Project {
  id: string;
  name: string;
  status: string;
  category: string;
  purpose: string;
  github?: string;
  demo?: string;
  stack: string[];
  facts: string[];
  limitations?: string;
  screenshots: { label: string; src: string }[];
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export interface Achievement {
  title: string;
  organization?: string;
  track?: string;
  location?: string;
  team?: string;
  scale?: string;
  type?: string;
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  image?: string;
}

// ─── PROFILE ────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Venkata Murali Kumar Chintala",
  headline:
    "Technical Lead | Solution Architect | Full-Stack & AI Engineer",
  summary:
    "Highly accomplished Solution Architect and Technical Lead with 16+ years of software engineering experience, including 7+ years architecting enterprise-grade platforms across Banking, Payments, Fintech, and Healthcare domains. Deep polyglot expertise combining advanced proficiency in Python ecosystems with a robust foundation in enterprise Java/Spring Boot architecture.",
  education: {
    degree: "Master of Computer Applications (MCA)",
    institution: "Andhra University",
    affiliation: "Visakhapatnam, Andhra Pradesh, India",
    cgpa: "Completed",
    graduation: "March 2006",
  },
  email: "muralikumar.ch@gmail.com",
  linkedin: "https://www.linkedin.com/in/chvmuralikumar/",
  github: "https://github.com/muralikumarch",
  location: "Hyderabad, India",
};

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    role: "Technical Lead",
    organization: "RCG Global Services (Myridius)",
    period: "July 2025 – July 2026",
    mode: "Chennai, remote, India",
    points: [
      "Served as the primary design authority for cross-functional engineering pods, architecting mission-critical financial platforms using Java, Spring Boot, and multi-cloud (Azure/AWS) microservices, while ensuring secure, high-availability transaction processing fully compliant with stringent regulatory and data privacy constraints.",
      "Architected and deployed an advanced Generative AI agentic ecosystem across Amazon Bedrock and Azure AI, integrating core LLM patterns such as prompt engineering, chain-of-thought reasoning, vector databases, tool calling, and semantic search.",
      "Spearheaded the backend architecture for AI initiatives through hands-on Python development, utilizing FastAPI and async programming to deploy highly scalable, inference-ready microservices.",
      "Engineered highly responsive Angular/TypeScript SPAs, unifying complex AI workflows and RESTful APIs into streamlined user experiences.",
      "Championed engineering excellence and accelerated Agile delivery by institutionalizing AI-assisted coding methodologies, leveraging advanced code generation tools like GitHub Copilot and Claude Code.",
      "Elevated overall software quality and team velocity by enforcing Test-Driven Development (TDD), conducting rigorous architecture reviews, and modernizing CI/CD pipelines using Azure DevOps.",
      "Mentored and guided diverse engineering teams, bridging the gap between traditional enterprise architecture and emerging AI technologies to foster a culture of continuous innovation and technical ownership.",
    ],
    logo: "/assets/experience/logos/myridius_logo.jpg",
  },
  {
    role: "Principal Software Engineer",
    organization: "Parexel International",
    period: "Nov 2017 – June 2025",
    mode: "Hyderabad, India",
    points: [
      "Operated as a dual-track Architect and Lead IC, steering engineering pods (10+ engineers) to deliver large-scale, highly regulated enterprise Java cloud transformations across AWS and Azure alongside innovative AI products.",
      "Served as the primary design authority for the end-to-end modernization of critical legacy monoliths, architecting highly scalable, resilient microservices ecosystems utilizing Java and Spring Boot.",
      "Engineered secure, high-throughput RESTful APIs and robust backends, utilizing Hibernate/JPA for complex data modeling and Spring Security (OAuth 2.0/JWT) to enforce strict healthcare compliance.",
      "Orchestrated the end-to-end development of dynamic front-end architectures using Angular, creating secure and highly interactive enterprise dashboards for complex data visualization.",
      "Directed an innovation pod to architect autonomous, Python-based agentic workflows using LangChain, CrewAI, and Azure OpenAI, driving the automation of complex predictive modeling and strategic decision-making.",
      "Mentored diverse engineering pods across the tech stack, while accelerating internal business operations by delivering custom low-code solutions via Microsoft Power Platform.",
    ],
    logo: "/assets/experience/logos/parexel_logo.jpg",
  },
  {
    role: "Senior Software Engineer",
    organization: "Parexel International",
    period: "Sep 2014 – Nov 2017",
    mode: "Hyderabad, India",
    points: [
      "Spearheaded the design and development of scalable enterprise applications utilizing Java 8, Spring Boot, and Spring MVC, transitioning legacy monolithic architectures to decoupled microservices hosted on AWS EC2.",
      "Architected robust and scalable RESTful APIs using Spring REST, leveraging AWS API Gateway to enable secure, rate-limited, and seamless data integration across distributed healthcare systems.",
      "Implemented efficient data access layers using Spring Data JPA and Hibernate ORM, improving transaction management and reducing database query latency.",
      "Governed technical quality by instituting rigorous architecture reviews, code inspections, and comprehensive unit testing frameworks using JUnit and Mockito.",
    ],
    logo: "/assets/experience/logos/parexel_logo.jpg",
  },
  {
    role: "Senior Software Engineer",
    organization: "Kony IT Services",
    period: "Oct 2013 – Sep 2014",
    mode: "Hyderabad, India",
    points: [
      "Directed the architectural strategy for secure, high-performance mobile and Single Page Applications (SPAs) tailored for the banking and financial sector, integrating the Kony Platform with Java/J2EE backends.",
      "Engineered highly available, asynchronous financial data exchange and scalable event-driven cloud workflows to ensure strict regulatory compliance and real-time transaction processing for banking users.",
      "Architected scalable, event-driven cloud workflows utilizing AWS S3 for secure object storage, AWS Lambda for serverless execution, and Amazon SNS for real-time push notifications.",
    ],
    logo: "/assets/experience/logos/kony_inc_logo.jpg",
  },
  {
    role: "Software Engineer",
    organization: "Wipro Technologies",
    period: "Mar 2010 – Oct 2013",
    mode: "Hyderabad, India",
    points: [
      "Engineered robust server-side business logic and dynamic, component-rich front-end interfaces for enterprise banking and financial web applications utilizing Core Java, JavaServer Faces (JSF), PrimeFaces, HTML, and CSS.",
      "Implemented efficient data access layers and complex SQL queries using Hibernate ORM and JDBC for seamless integration with Oracle 10g.",
      "Configured and deployed scalable Java/J2EE applications across JBOSS, WebLogic and Tomcat server environments, ensuring high availability.",
      "Streamlined the software build and release lifecycle utilizing Maven for build automation and SVN.",
    ],
    logo: "/assets/experience/logos/wipro_logo.jpg",
  },
];

// ─── PROJECTS ───────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "genai-agentic-ecosystem",
    name: "Generative AI Agentic Ecosystem",
    status: "Live",
    category: "AI / Multi-Cloud",
    purpose:
      "Advanced Generative AI agentic platform across Amazon Bedrock and Azure AI integrating prompt engineering, chain-of-thought, vector databases, tool calling, and semantic search.",
    github: "https://github.com/chvmuralikumar",
    stack: [
      "Python",
      "FastAPI",
      "Amazon Bedrock",
      "Azure AI",
      "LangChain",
      "Vector DBs",
    ],
    facts: [
      "Multi-cloud AI agent architecture across AWS Bedrock and Azure AI",
      "FastAPI async microservices for inference-ready execution",
      "Chain-of-thought reasoning and vector database search",
      "Enterprise LLM integration with tool calling capabilities",
    ],
    screenshots: [],
  },
  {
    id: "fintech-microservices-platform",
    name: "Mission-Critical Financial Transaction Platform",
    status: "Live",
    category: "Fintech / Cloud Microservices",
    purpose:
      "High-availability, regulatory-compliant transaction processing microservices platform built for cross-functional financial pods.",
    github: "https://github.com/chvmuralikumar",
    stack: [
      "Java",
      "Spring Boot",
      "Azure",
      "AWS",
      "Microservices",
      "Docker",
    ],
    facts: [
      "High-throughput financial transaction processing engine",
      "Regulatory and data privacy compliance enforcement",
      "Multi-cloud microservices deployment on Azure and AWS",
      "Test-Driven Development (TDD) with Azure DevOps CI/CD",
    ],
    screenshots: [],
  },
  {
    id: "enterprise-monolith-modernization",
    name: "Legacy Monolith Modernization Engine",
    status: "Live",
    category: "Enterprise Java / Cloud Transformation",
    purpose:
      "End-to-end modernization of legacy healthcare monoliths into decoupled, resilient Spring Boot microservices hosted on AWS and Azure.",
    github: "https://github.com/chvmuralikumar",
    stack: [
      "Java",
      "Spring Boot",
      "AWS EC2",
      "Hibernate/JPA",
      "Spring Security",
      "OAuth 2.0/JWT",
    ],
    facts: [
      "Decoupled legacy monolithic healthcare systems into microservices",
      "Strict healthcare regulatory compliance with OAuth 2.0 & JWT",
      "High-throughput RESTful API backends",
      "Dynamic Angular dashboard interfaces",
    ],
    screenshots: [],
  },
  {
    id: "autonomous-predictive-modeling",
    name: "Autonomous Agentic Predictive Modeling Engine",
    status: "Live",
    category: "AI / Healthcare Analytics",
    purpose:
      "Autonomous Python agentic workflows using LangChain, CrewAI, and Azure OpenAI to automate complex predictive modeling and strategic decision-making.",
    github: "https://github.com/chvmuralikumar",
    stack: [
      "Python",
      "LangChain",
      "CrewAI",
      "Azure OpenAI",
      "FastAPI",
    ],
    facts: [
      "Autonomous multi-agent workflows built with LangChain and CrewAI",
      "Automated predictive modeling pipeline for decision-making",
      "Azure OpenAI LLM integration",
      "Inference-ready Python microservice architecture",
    ],
    screenshots: [],
  },
  {
    id: "banking-spa-mobile",
    name: "Banking & Financial Mobile SPA System",
    status: "Live",
    category: "Mobile / Fintech",
    purpose:
      "High-performance mobile and Single Page Applications (SPAs) integrating Kony Mobile Platform with Java/J2EE backends.",
    github: "https://github.com/chvmuralikumar",
    stack: [
      "Kony Mobile Platform",
      "Java/J2EE",
      "AWS Lambda",
      "AWS S3",
      "Amazon SNS",
    ],
    facts: [
      "Real-time financial transaction processing for banking users",
      "Asynchronous financial data exchange workflows",
      "Serverless cloud push notification engine using Amazon SNS",
      "Strict regulatory compliance for banking security",
    ],
    screenshots: [],
  },
  {
    id: "healthcare-api-gateway",
    name: "Healthcare High-Throughput RESTful API Gateway",
    status: "Live",
    category: "Backend / Cloud Integration",
    purpose:
      "Distributed healthcare RESTful API integration system with rate-limiting, secure auth, and low latency ORM data layers.",
    github: "https://github.com/chvmuralikumar",
    stack: [
      "Java 8",
      "Spring Boot",
      "Spring REST",
      "AWS API Gateway",
      "Hibernate ORM",
      "JUnit",
      "Mockito",
    ],
    facts: [
      "AWS API Gateway rate-limiting and security enforcement",
      "Decoupled distributed healthcare system integration",
      "Spring Data JPA query optimization and low latency",
      "Comprehensive unit testing framework with Mockito",
    ],
    screenshots: [],
  },
  {
    id: "lowcode-power-platform",
    name: "Enterprise Power Platform Automation Suite",
    status: "Live",
    category: "AI Tools & Low-Code",
    purpose:
      "Internal business operations acceleration suite delivering custom workflow automation, Copilot Studio assistants, and Power Apps.",
    github: "https://github.com/chvmuralikumar",
    stack: [
      "Microsoft Power Platform",
      "Power Apps",
      "Power Automate",
      "Copilot Studio",
      "AI Builder",
    ],
    facts: [
      "Accelerated internal operational workflows across engineering pods",
      "Custom low-code business dashboards and app modules",
      "Copilot Studio AI assistant integration",
      "Automated data workflows and business logic triggers",
    ],
    screenshots: [],
  },
  {
    id: "banking-enterprise-web",
    name: "Banking & Financial Core Web Services",
    status: "Live",
    category: "Enterprise Java / Web",
    purpose:
      "Server-side business logic and dynamic front-end web interfaces for enterprise banking deployed across JBOSS and WebLogic.",
    github: "https://github.com/chvmuralikumar",
    stack: [
      "Core Java",
      "JSF",
      "PrimeFaces",
      "Oracle 10g",
      "JDBC",
      "Hibernate",
      "Maven",
    ],
    facts: [
      "Enterprise banking UI and backend integration",
      "Oracle 10g optimized SQL data access layer",
      "Multi-server deployment across JBOSS, WebLogic, and Tomcat",
      "Maven automated build and release lifecycle",
    ],
    screenshots: [],
  },
];

// ─── SKILLS ─────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  {
    category: "Domain Expertise",
    icon: "briefcase",
    items: [
      "Clinical & Life Sciences",
      "GxP-Regulated Environments",
      "Banking & Payments",
      "Fintech",
      "Media & CRM",
      "E-Commerce & Manufacturing",
    ],
  },
  {
    category: "Backend & AI Engineering",
    icon: "server",
    items: [
      "Java/J2EE",
      "Spring Boot",
      "Microservices",
      "RESTful APIs",
      "Python",
      "FastAPI",
      "LangChain",
      "AWS Bedrock",
      "OpenAI",
      "Azure AI Foundry",
    ],
  },
  {
    category: "Frontend Technologies",
    icon: "layout",
    items: [
      "Angular",
      "JavaScript",
      "TypeScript",
      "JSP",
      "Thymeleaf",
      "JSF",
      "PrimeFaces",
      "Kony Mobile Platform",
      "Flutter",
    ],
  },
  {
    category: "Cloud Architecture",
    icon: "cloud",
    items: [
      "Azure (AKS, APIM, Container Apps, Functions, Key Vault)",
      "AWS (ECS, Fargate, EKS, Lambda, API Gateway, S3, RDS)",
      "Multi-Cloud Microservices",
      "Serverless & Containerization",
    ],
  },
  {
    category: "Databases & Storage",
    icon: "database",
    items: [
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "MS SQL",
      "Redis",
      "Azure Managed Redis",
    ],
  },
  {
    category: "DevOps & Automation",
    icon: "wrench",
    items: [
      "Azure DevOps",
      "Jenkins",
      "Docker",
      "Git",
      "SVN",
      "Maven",
      "CI/CD Pipelines",
    ],
  },
  {
    category: "AI Tools & Low-Code",
    icon: "sparkles",
    items: [
      "GitHub Copilot",
      "Claude Code",
      "Microsoft Power Platform",
      "Power Apps",
      "Power Automate",
      "Copilot Studio",
      "AI Builder",
    ],
  },
  {
    category: "Testing & Security",
    icon: "shield",
    items: [
      "JUnit",
      "Mockito",
      "TDD",
      "SonarQube",
      "Spring Security",
      "OAuth 2.0",
      "JWT",
      "OpenID Connect (OIDC)",
      "RBAC",
    ],
  },
  {
    category: "Leadership & Management",
    icon: "user",
    items: [
      "Solution Architecture",
      "Engineering Management",
      "Technical Leadership",
      "Agile/Scrum",
      "Cross-Functional Collaboration",
      "Performance Engineering",
      "Risk Mitigation",
      "Mentoring",
    ],
  },
];

// ─── ACHIEVEMENTS ───────────────────────────────────────────────────────────

export const achievements: Achievement[] = [
  {
    title: "16+ Years Software Engineering & Solution Architecture",
    organization: "Enterprise Tech",
    track: "Solution Architecture & Technical Leadership",
    scale: "Enterprise Grade",
    image: "/assets/certifications/google-python-certificate.jpg",
  },
  {
    title: "AWS Solutions Architect Associate (2026)",
    organization: "Amazon Web Services",
    track: "Cloud Architecture & Design",
    scale: "Verified Professional Certification",
    image: "/assets/certifications/ibm-python-ds-ai-certificate.jpg",
  },
  {
    title: "Azure Solutions Architect Expert (2022)",
    organization: "Microsoft",
    track: "Enterprise Cloud Architecture",
    scale: "Expert Certification",
    image: "/assets/certifications/coursera-python-certificate.jpg",
  },
  {
    title: "GitHub Copilot Certification (2026)",
    organization: "GitHub",
    track: "AI-Assisted Software Development",
    scale: "Verified Certification",
    image: "/assets/certifications/inheritance-ds-java-certificate.jpg",
  },
  {
    title: "Azure AI Engineer Associate (2024)",
    organization: "Microsoft",
    track: "AI & Cognitive Services",
    scale: "Verified Certification",
    image: "/assets/certifications/hack2skill-certificate.png",
  },
  {
    title: "Master of Computer Applications (MCA)",
    organization: "Andhra University",
    track: "Computer Applications",
    scale: "Graduated March 2006",
    image: "/assets/certifications/aiml-university-certificate.jpg",
  },
];

// ─── CERTIFICATIONS ─────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    title: "GitHub Copilot Certification",
    issuer: "GitHub",
    issued: "2026",
    credentialId: "GitHub Certified Specialist",
    image: "/assets/certifications/google-python-certificate.jpg",
  },
  {
    title: "AWS AI Practitioner",
    issuer: "Amazon Web Services",
    issued: "2025",
    credentialId: "AWS Certified AI Practitioner",
    image: "/assets/certifications/ibm-python-ds-ai-certificate.jpg",
  },
  {
    title: "Azure AI Engineer Associate",
    issuer: "Microsoft Azure",
    issued: "2024",
    credentialId: "Microsoft Certified AI Engineer",
    image: "/assets/certifications/coursera-python-certificate.jpg",
  },
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    issued: "2026",
    credentialId: "AWS Certified Solutions Architect",
    image: "/assets/certifications/inheritance-ds-java-certificate.jpg",
  },
  {
    title: "AWS Developer Associate",
    issuer: "Amazon Web Services",
    issued: "2024",
    credentialId: "AWS Certified Developer",
    image: "/assets/certifications/hack2skill-certificate.png",
  },
  {
    title: "Azure Solutions Architect Expert",
    issuer: "Microsoft Azure",
    issued: "2022",
    credentialId: "Microsoft Certified Solutions Architect Expert",
    image: "/assets/certifications/aiml-university-certificate.jpg",
  },
  {
    title: "Azure Developer Associate",
    issuer: "Microsoft Azure",
    issued: "2021",
    credentialId: "Microsoft Certified Azure Developer",
    image: "/assets/certifications/coursera-python-certificate.jpg",
  },
  {
    title: "Power Platform App Maker",
    issuer: "Microsoft",
    issued: "2022",
    credentialId: "Microsoft Certified Power Platform App Maker",
    image: "/assets/certifications/google-python-certificate.jpg",
  },
  {
    title: "Oracle Certified Programmer",
    issuer: "Oracle",
    issued: "2019",
    credentialId: "Oracle Certified Professional Java Programmer",
    image: "/assets/certifications/inheritance-ds-java-certificate.jpg",
  },
];

// ─── ALL GALLERY IMAGES ─────────────────────────────────────────────────────

export const galleryImages: { src: string; label: string }[] = [];

// ─── AI GROUNDING ───────────────────────────────────────────────────────────

export const aiGrounding = {
  allowedScope: "Questions about Venkata Murali Kumar Chintala and his verified portfolio.",
  unknownResponse: "I don't have verified information about that.",
  unrelatedResponse:
    "I'm Ask Murali, so I only answer questions about Venkata Murali Kumar Chintala and his work.",
  futureRule:
    "Never state an unverified future event as a fact. Distinguish goals/plans from guaranteed outcomes.",
  privateRule:
    "Do not expose private repository URLs or private project details as public resources.",
};

// ─── SEARCH INDEX ───────────────────────────────────────────────────────────

export interface SearchItem {
  title: string;
  category: string;
  appId: string;
  subRoute?: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  ...projects.map((p) => ({
    title: p.name,
    category: "Project",
    appId: "projects",
    subRoute: p.id,
    keywords: [p.name, p.category, ...p.stack, ...p.facts].map((k) =>
      k.toLowerCase()
    ),
  })),
  ...experience.map((e) => ({
    title: `${e.role} — ${e.organization}`,
    category: "Experience",
    appId: "experience",
    keywords: [e.role, e.organization, ...e.points].map((k) =>
      k.toLowerCase()
    ),
  })),
  ...skills.flatMap((s) =>
    s.items.map((item) => ({
      title: item,
      category: `Skill — ${s.category}`,
      appId: "skills",
      keywords: [item.toLowerCase(), s.category.toLowerCase()],
    }))
  ),
  ...achievements.map((a) => ({
    title: a.title,
    category: "Achievement",
    appId: "achievements",
    keywords: [
      a.title,
      a.organization || "",
      a.track || "",
      a.team || "",
    ].map((k) => k.toLowerCase()),
  })),
  ...certifications.map((c) => ({
    title: c.title,
    category: "Certification",
    appId: "certifications",
    keywords: [c.title, c.issuer, c.issued].map((k) => k.toLowerCase()),
  })),
  {
    title: "Venkata Murali Kumar Chintala",
    category: "Profile",
    appId: "about",
    keywords: ["venkata", "murali", "kumar", "chintala", "about", "profile", "education", "architecture", "lead"],
  },
  {
    title: "Resume",
    category: "Document",
    appId: "resume",
    keywords: ["resume", "cv", "pdf", "download"],
  },
  {
    title: "Contact",
    category: "Contact",
    appId: "contact",
    keywords: ["contact", "email", "linkedin", "github"],
  },
];

// ─── COMPATIBILITY EXPORT ───────────────────────────────────────────────────

export const portfolioData = {
  profile: {
    name: profile.name,
    headline: profile.headline,
    summary: profile.summary,
    bio: profile.summary,
    email: profile.email,
    linkedin: profile.linkedin,
    github: profile.github,
    location: profile.location,
  },
  education: [
    {
      institution: "Andhra University",
      degree: "Master of Computer Applications (MCA)",
      affiliation: "Visakhapatnam, Andhra Pradesh, India",
      cgpa: "Completed",
      duration: "March 2006",
      logo: "/assets/events/andhra_university_logo.jpg",
    },
    {
      institution: "Andhra University",
      degree: "B.Sc. Computer Science",
      affiliation: "Visakhapatnam, Andhra Pradesh, India",
      cgpa: "Completed",
      duration: "March 2003",
      logo: "/assets/events/andhra_university_logo.jpg",
    },
  ],
  links: {
    linkedin: profile.linkedin,
    github: profile.github,
    email: profile.email,
  },
  experience: experience.map((e) => ({
    ...e,
    company: e.organization,
    title: e.role,
  })),
  projects: projects.map((p) => ({
    ...p,
    title: p.name,
  })),
  skills,
  achievements,
  certifications,
  galleryImages,
};
