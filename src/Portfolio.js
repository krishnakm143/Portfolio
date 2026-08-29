import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import '@fortawesome/fontawesome-free/css/all.min.css';

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Udit Mishra",
  title: "Hi all, I'm Udit",
  subTitle: emoji(
    "Generative AI Engineer 🤖 with 3 years of experience shipping production LLM systems — multi-agent pipelines with LangGraph and LangChain, RAG over vector databases, and voice-enabled conversational AI — all on Python/FastAPI backends."
  ),
  resumeLink: "/Udit_Mishra_Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/krishnakm143",
  linkedin: "https://www.linkedin.com/in/udit-mishra-89714818a/",
  gmail: "krshnac818@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "GENERATIVE AI ENGINEER WHO OWNS LLM SYSTEMS END TO END — FROM EMBEDDINGS TO DEPLOYMENT",
  skills: [
    emoji(
      "⚡ Design and deploy multi-agent LLM pipelines with LangGraph and LangChain, orchestrating 7+ model providers (OpenAI, Anthropic, Gemini, Mistral, Cohere, Ollama, HuggingFace)"
    ),
    emoji(
      "⚡ Build RAG architectures with Qdrant and FAISS — embeddings, vector similarity search, and semantic retrieval tuned for production accuracy"
    ),
    emoji(
      "⚡ Ship voice-enabled conversational AI with real-time STT/TTS streaming pipelines"
    ),
    emoji(
      "⚡ Own the backend end to end: FastAPI, PostgreSQL, Redis, Neo4j, Docker, and CI/CD"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "LLM Agents",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Voice AI",
      fontAwesomeClassname: "fas fa-microphone"
    },
    {
      skillName: "Vector / SQL DBs",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fa-brands fa-angular"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SVIT, Vasad",
      logo: require("./assets/images/svit_logo.png"),
      subHeader: "Master of Computer Applications (MCA), Information Technology",
      duration: "August 2025 - April 2027 (Pursuing)",
      desc: "Deepening expertise in artificial intelligence, machine learning, and advanced software engineering alongside full-time AI engineering work.",
      descBullets: [
        "Focus areas: artificial intelligence, machine learning, and scalable system design."
      ]
    },
    {
      schoolName: "Parul University",
      logo: require("./assets/images/Parul.jpg"),
      subHeader: "Bachelor of Computer Applications (BCA), Information Technology",
      duration: "August 2022 - April 2025 | CGPA 7.66",
      desc: "Participated in an ICMR task-force study developing a high-quality patient-centric integrated model for emergency care systems in selected districts of India.",
      descBullets: [
        "Collaborated with a multidisciplinary team from the Faculty of Engineering & Technology.",
        "Contributed to data collection, analysis, and the development of technology solutions for emergency care."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI/ML & LLM Engineering", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend — Python / FastAPI",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend — React / Next.js",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Artificial Intelligence Engineer",
      company: "WebbyButter Technologies",
      companylogo: require("./assets/images/webbybutter_logo.jpeg"),
      date: "February 2024 – Present",
      desc: "Building production LLM and machine learning systems for enterprise clients — from multi-agent pipelines to cloud deployment.",
      descBullets: [
        "Architected multi-agent LLM/ML pipelines with LangGraph and LangChain, integrating 7+ model providers (OpenAI, Anthropic, Gemini, Mistral, Cohere, Ollama, HuggingFace).",
        "Delivered enterprise AI for production clients including Evenuefy and PharmaSuper.ai — RAG pipelines, backend APIs, cloud deployments, and production support.",
        "Published the open-source Python SDK Ai_Gateway on PyPI — fallback routing, latency tracking, and response quality scoring for multi-provider LLM deployments."
      ]
    },
    {
      role: "Software Engineer",
      company: "WebbyButter Technologies",
      companylogo: require("./assets/images/webbybutter_logo.jpeg"),
      date: "August 2023 – February 2024",
      desc: "Backend engineering for production services before moving into the AI team.",
      descBullets: [
        "Built and maintained JWT-secured REST APIs with Alembic migrations on PostgreSQL.",
        "Maintained CI/CD workflows on GitHub and deployed to Docker/VM environments across testing, staging, and production."
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "TopNotch IT Consultant",
      companylogo: require("./assets/images/topnotchsolutions_logo.jpeg"),
      date: "May 2023 – June 2023",
      desc: "Built responsive single-page applications with React.js — reusable component architecture, API integration, and performance optimization via Hooks and lazy loading."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Things I've Built",
  subtitle: "PRODUCTION AI SYSTEMS AND ENGINEERING PROJECTS",
  projects: [
    {
      projectName: "PharmaSuper.ai",
      projectDesc: "AI assistant for the pharmaceutical industry. Built enterprise ML and RAG features — backend APIs, vector search pipelines, and semantic document retrieval over pharmaceutical knowledge — with multi-model integration and production monitoring."
    },
    {
      projectName: "Evenuefy",
      projectDesc: "AI-powered event management platform for virtual, hybrid, and in-person events. Built LLM conversational assistants for attendee support, RAG-based knowledge search, and managed production deployments and cloud infrastructure."
    },
    {
      projectName: "LoopMind Memory",
      projectDesc: "Production AI memory backend. Hierarchical memory with ANN/HNSW retrieval at sub-100ms lookup, tamper-evident append-only storage with a signed audit ledger — containerized with PostgreSQL, Redis, Qdrant, Neo4j, and FastAPI."
    },
    {
      projectName: "Ai_Gateway — Open Source",
      projectDesc: "Python SDK published on PyPI for LLM observability: fallback routing, latency tracking, and response quality evaluation across OpenAI, Anthropic, Gemini, and open-source models.",
      footerLink: [
        {
          name: "View on PyPI",
          url: "https://pypi.org/project/ai-gateway/"
        }
      ]
    },
    {
      projectName: "SQL Conversational Agent",
      projectDesc: "Natural language to SQL agent with query validation, sandboxed execution, and a feedback/rating loop — powered by OpenAI GPT-4o with Qdrant-based schema retrieval."
    },
    {
      projectName: "Conversational AI Voice Assistant",
      projectDesc: "Real-time voice and text AI interface with streaming responses, transcript export, and a browser STT/TTS pipeline — built with Next.js, TypeScript, and Browser Audio APIs."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications and milestones from along the way.",

  achievementsCards: [
    {
      title: "Python Programming — IIT Bombay",
      subtitle:
        "Completed the IIT Bombay Spoken Tutorial Python training with a score of 91%, earning 4 credits from the Faculty of IT & Computer Science.",
      image: require("./assets/images/maxresdefault.jpg"),
      imageAlt: "IIT Bombay Spoken Tutorial",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1On1hBAEgKdDoNejVFyLo8hXPoAM4JTdu/view?usp=sharing"
        }
      ]
    },
    {
      title: "Frontend Internship — TopNotch",
      subtitle:
        "Completed a Front-End Developer internship at TopNotch IT Consultant, contributing to dynamic and responsive web applications.",
      image: require("./assets/images/Untitled design (1).png"),
      imageAlt: "TopNotch Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1hJXo2SNOc75ulbPttnBIM5-d_yo2jAUT/view?usp=sharing"
        }
      ]
    },
    {
      title: "Software Engineering — MindLuster",
      subtitle:
        "Certification in Software Engineering covering full-stack development and agile methodologies.",
      image: require("./assets/images/main_logo.webp"),
      imageAlt: "MindLuster Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1HZXhb8_C6CxvLYctBoS9CjLFRL4btm26/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8866226854",
  email_address: "krshnac818@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
