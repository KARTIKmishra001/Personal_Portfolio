/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "KARTIKmishra's Portfolio",
  description:
    "Enthusiastic Computer Science graduate passionate about building scalable, practical, and impactful software solutions while continuously learning and solving real-world problems.",
  og: {
    title: "KARTIKmishra",
    type: "website",
    url: "https://personal-portfolio-pi-rust.vercel.app/", 
  },
};

//Home Page
const greeting = {
  title: "KARTIKmishra",
  logo_name: "KAKU",
  nickname: "Web Wizard",
  subTitle:
    "Enthusiastic Computer Science graduate passionate about building scalable, practical, and impactful software solutions while continuously learning and solving real-world problems.",
  resumeLink: "https://drive.google.com/file/d/1fojDcDVPXvm5S2kqnxpOYBJSmDqk9RWF/view?usp=sharing",
  githubProfile: "https://github.com/KARTIKmishra001",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/KARTIKmishra001",
  // linkedin: "https://www.linkedin.com/in/kartik-mishra-05916028a/",
  // gmail: "kartikmishra283@gmail.com",
  // gitlab: "",
  // facebook: "",
  // twitter: "",
  // instagram: ""

  {
    name: "Github",
    link: "https://github.com/KARTIKmishra001",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kartik-mishra-05916028a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:kartikmishra283@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Instagram",
  //   link: "",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build responsive and interactive web applications using React.js, JavaScript, HTML and CSS",
        "⚡ Develop backend services and REST APIs using Python, FastAPI and Java with SQL/NoSQL databases",
        "⚡ Integrate APIs, authentication and database functionality to build scalable end-to-end applications",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        // {
        //   skillName: "Sass",
        //   fontAwesomeClassname: "simple-icons:sass",
        //   style: {
        //     color: "#CC6699",
        //   },
        // },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "fa6-brands:node",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
       
      ],
    },
    {
      title: "Machine Learning & Artificial Intelligence",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Build basic machine learning models for classification and prediction using Python",
        "⚡ Work on Computer Vision projects using OpenCV, MediaPipe and basic deep learning concepts",
        "⚡ Explore AI applications involving image processing, data analysis and model evaluation",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Understand basic cloud computing concepts, virtual machines, storage and networking",
        "⚡ Deploy and run basic web applications on cloud platforms and configure development environments",
        "⚡ Work with databases, APIs and basic deployment workflows while learning cloud infrastructure",
      ],
      softwareSkills: [
        
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Design clean and user-friendly interfaces for web and mobile applications using Figma and Canva",
        "⚡ Create basic wireframes, layouts and user flows to improve application usability",
        "⚡ Apply fundamental UI/UX principles to create responsive and consistent designs",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "My journey in software development has been driven by curiosity, experimentation, and a passion for building things that solve real problems. Through hands-on experience across web development, backend systems, and AI-powered applications, I’ve explored the complete development process—from turning ideas into interfaces to building the logic and infrastructure behind them. Each project and professional experience has strengthened my ability to learn quickly, solve problems independently, and build software with purpose.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Your Next Developer",
          company: "Let’s Build Something Meaningful",
          logo_path: "dsa_bible.svg",
          description: [
            "I’m looking for an opportunity to contribute my skills to real-world software products, solve meaningful technical challenges, and grow alongside a collaborative engineering team.",
            "Open to: Full-Time Roles · Software Development · Full Stack · Backend · Cloud · AI/ML",
            "Let’s Work Together",
          ],
          color: "#b4a6b0",
        },
        {
          title: "Web Developer",
          company: "Prodigy InfoTect Pvt Ltd.",
          company_url: "https://prodigyinfotech.dev",
          logo_path: "Prodigylogo.svg",
          duration: "Oct 2025 - Jan 2026",
          location: "Remote",
          description: [
            "Built responsive and interactive web applications using HTML, CSS, and JavaScript, focusing on clean UI and smooth user experiences.",
            "Developed and integrated frontend functionality while working with APIs and dynamic data.",
            "Applied responsive design principles to ensure consistent experiences across different screen sizes.",
            "Debugged and optimized application functionality to improve reliability and performance.",
            "Strengthened practical skills in web development, Git/GitHub, problem-solving, and software development workflows.",
          ],
          color: "#b4a6b0",
        },
        {
          title: "Open Source Contributor",
          company: "Obsidian Excalidraw",
          company_url: "https://excalidraw-obsidian.online/Welcome",
          logo_path: "excalidraw_obsidian_logo.svg",
          duration: "Aug 2024 - Present",
          location: "Remote",
          description: [
            "Contributing to the development of Obsidian-Excalidraw in TypeScript & React 18, an open-source plugin integrating Excalidraw sketching capabilities into Obsidian, enhancing note-taking and visual thinking for over 100,000 users.",
          ],
          color: "#9b1578",
        },
        
        
        
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GeeksForGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#45c69d61",
      },
      profileLink: "https://www.geeksforgeeks.org/profile/kartik_?tab=activity",
    },
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "Graphic Era University, Dehradun",
      subtitle: "B.Tech Computer Science Engineering",
      logo_path: "image.svg",
      alt_name: "Graphic Era University",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Relevant Coursework: Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, Software Engineering, AI/ML & Web Development.",
        "⚡ Focus Areas: Software Engineering, Full-Stack Development, Artificial Intelligence, Databases, and Problem Solving.",
        "⚡ Project Work: Built multiple applications combining Java, C++, Python, JavaScript, SQL, AI/ML, and modern web technologies.",
      ],
      website_link: "https://geu.ac.in/",
    },
    {
      title: "Parwati Prema Jagati Saraswati Vihar , Nainital",
      subtitle: "Senior Secondary School (PCM)",
      logo_path: "ppjsv.svg",
      alt_name: "Parwati Prema Jagati Saraswati Vihar",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ Stream: Physics, Chemistry & Mathematics (PCM)",
        "⚡ Achievement: Completed Senior Secondary Education with 79%, building a strong foundation in mathematics, analytical thinking, and scientific problem-solving.",
      ],
      website_link: "https://ppjsvihar.in/",
    },
    {
      title: "Parwati Prema Jagati Saraswati Vihar , Nainital",
      subtitle: "Secondary School",
      logo_path: "ppjsv.svg",
      alt_name: "Parwati Prema Jagati Saraswati Vihar",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ Academic Foundation: Completed Secondary Education with 84%, developing a strong foundation across core academic subjects.",
        "⚡ Focus: Mathematics, Science, and logical problem-solving.",
      ],
      website_link: "https://ppjsvihar.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Web Developer Internship",
      subtitle: "- Prodigy InfoTect Pvt Ltd",
      logo_path: "Prodigylogo.svg",
      certificate_link: "https://drive.google.com/file/d/1K1cTenpla4dALlslblwiKXYFn1eqExlj/view",
      alt_name: "Prodigy InfoTect Pvt Ltd",
      color_code: "#f42fb699",
    },
    {
      title: "Generative AI with LLMs",
      subtitle: "- Nvidia Academy",
      logo_path: "nvidia.svg",
      certificate_link: "https://drive.google.com/file/d/1ewGWZv2j8rDf2i2W7DH-n94fpRq3MkyW/view",
      alt_name: "Ai For All",
      color_code: "#e9e4e4",
    },
    {
      title: "Google Cloud Computing Foundations",
      subtitle: "- IIT Kanpur",
      logo_path: "nptel_logo.png",
      certificate_link: "https://drive.google.com/file/d/154tdHbnPYE54I21zQBjUR2o2ex54XzW0/view",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Hack-O-Holics3.0",
      subtitle: "- CO-DEV",
      logo_path: "codev.svg",
      certificate_link: "https://drive.google.com/file/d/1V8PeO6j5D9bEEFA-JAYpzfSB40MhpvQL/view",
      alt_name: "CO-DEV",
      color_code: "#f3f8f6",
    }, 
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My aim is to create projects that solve problems and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "kartik_animated.png",
    description:
      "I am available via email, LinkedIn. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and web development. Feel free to mmail me if you want to discuss ideas or have any interesting opportunity.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Gadarpur, Udham Singh Nagar, 263152",
    county: "India",
    country: "India",
    state: "Uttarakhand",
    zipCode: "263152",
    streetAddress: "Gadarpur, Udham Singh Nagar, Uttarakhand, India",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NYFGQZsWFnZCT2jo9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
