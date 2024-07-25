import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import '@fortawesome/fontawesome-free/css/all.min.css';

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Udit Mishra",
  title: "Hi all, I'm Udit",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/krishnakm143",
  linkedin: "https://www.linkedin.com/in/udit-mishra-89714818a/",
  gmail: "https://mailto:krshnac818@gmail.com",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Flutter etc."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "Bootstrap",
      fontAwesomeClassname: "fa-brands fa-bootstrap"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fa-brands fa-flutter"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      schoolName: "Parul University",
      logo: require("./assets/images/Parul.jpg"),
      subHeader: "Bachelor Of Computer Application",
      duration: "August 2022 - Present",
      desc: "Participated in the ICMR project focused on developing a high-quality patient-centric integrated model for emergency care systems. Collaborated closely with faculty from the Faculty of Engineering & Technology.",
      descBullets: [
        "Engaged in an implementation research study targeting emergency care systems in selected districts of India.",
        "Collaborated with a multidisciplinary team to develop a patient-centric integrated model for emergency care.",
        "Assisted in data collection, analysis, and reporting for the project.",
        "Contributed to the development and testing of technology solutions to enhance emergency care systems.",
        "Played a key role in project coordination and communication among team members."
      ]
    },
    {
      schoolName: "Parul University",
      logo: require("./assets/images/Parul.jpg"),
      subHeader: "Master of Computer Applications (MCA)",
      duration: "Expected Start: After completing BCA",
      desc: "Planning to pursue a Master of Computer Applications to deepen knowledge in software development, data science, and advanced computing.",
      descBullets: [
        "Aiming to specialize in areas such as artificial intelligence, machine learning, and Full-Stack Developer.",
        "Intend to work on research projects and internships to gain practical experience.",
        "Looking forward to collaborating with industry professionals and expanding technical skills."
      ]

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Angular Developer",
      company: "Webbybutter Technologies",
      companylogo: require("./assets/images/webbybutter_logo.jpeg"),
      date: "August 2024 – Present",
      desc: "As an Angular Developer 06 Months Of Internship at Webbybutter Technologies, I will be responsible for implementing visual and interactive elements in web applications using Angular 7.0 and above.",
      descBullets: [
        "Developing and maintaining Angular applications with a focus on user interface and experience",
  "Collaborating with the development team to integrate APIs and enhance application functionality",
  "Participating in code reviews and contributing to project documentation"
      ]
    },
    {
      role: "Front-End Developer",
      company: "TopNotch IT Consultant",
      companylogo: require("./assets/images/topnotchsolutions_logo.jpeg"),
      date: "May 2024 – June 2024",
      desc: "Contributed to an e-commerce project in 1 Month Internship, specifically focusing on the login/signup page, home page, and product detail page, with integration of Firebase for user data management. Received hands-on experience in Front-end technology."
    },
    {
      role: "Graphic Design",
      company: "Parul University",
      companylogo: require("./assets/images/Parul.jpg"),
      date: "Oct 2023 – Jan 2024",
      desc: "During my internship at Parul University (SRC CELL), I contributed to various graphic design projects, including creating visual content for promotional materials, social media, and internal communications. I collaborated with the design team to develop creative solutions that met the university's branding guidelines and project requirements."
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
  title: "Big Projects",
  subtitle: "PROJECTS DEVELOPED DURING ACADEMIC STUDIES",
  projects: [
    {
      image: require("./assets/images/icmrnewlogo-1024x324.png"),
      projectName: "ICMR",
      projectDesc: "An Implementation Research StudyA High-quality patient centric integrated model for emergency care systems in selected districts of India AN ICMR TASK FORCE STUDY",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://icmr-lyart.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/shopping.jpg"),
      projectName: "Online Shopping Website",
      projectDesc: "Developed a fully functional online shopping website, implementing features such as user authentication, product catalog, shopping cart, and payment gateway integration. The project utilized technologies like HTML, CSS, JavaScript, And react js, providing a seamless shopping experience for users.",
            footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/krishnakm143/Ecommerce-Website"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IIT Bombay Spoken Tutorial ",
      subtitle:
        "Successfully completed the Python 3.4.3 training with a score of 91%, earning 4 credits from the Faculty of IT & Computer Science, Parul University.",
      image: require("./assets/images/maxresdefault.jpg"),
      imageAlt: "Index Logo ",
      footerLink: [
        {
          name: " View Certification",
          url: "https://drive.google.com/file/d/1On1hBAEgKdDoNejVFyLo8hXPoAM4JTdu/view?usp=sharing"
        },
        
        
      ]
    },
    {
      title: "Internship Completion Certificate",
      subtitle:
"Completed an internship as a Front-End Developer at Top Notch, where I contributed to building dynamic and responsive web applications.",     
 image: require("./assets/images/Untitled design (1).png"),
      imageAlt: "Top-Notch Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1hJXo2SNOc75ulbPttnBIM5-d_yo2jAUT/view?usp=sharing"
        }
      ]
    },

    {
      title: "Software Engineering",
      subtitle: "Completed Certification in Software Engineering from MindLuster, gaining expertise in full-stack development, and agile methodologies.",
      image: require("./assets/images/main_logo.webp"),
      imageAlt: "Mind-luster Logo",
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
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
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
