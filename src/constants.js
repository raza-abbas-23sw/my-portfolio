// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';



// Education Section Logo's
import gasLogo from './assets/education_logo/gas_logo.png';
import habibLogo from './assets/education_logo/habib_logo.jpg';
import muetLogo from './assets/education_logo/muet_logo.png';

// Project Section Logo's
import hultprize from './assets/work_logo/hultprize.jpg'
import itcompany from './assets/work_logo/itcompany.jpg';
import movierecLogo from './assets/work_logo/movie_rec.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];


  export const education = [
   {
      id: 0,
      img: muetLogo,
      school: "MUET",
      date: "Aug 2023 - Aug 2027",
      grade: "3.5 CGPA",
      desc: "I am currently pursuing a Bachelor of Engineering (BE) in Software Engineering from Mehran University of Engineering and Technology (MUET), and I am in my third year. Till now, I have gained a strong understanding of various concepts related to software development, continuously expanding my skills through hands-on projects and learning.",
      degree: "BE Software Engineering",
    },
    {
      id: 1,
      img: habibLogo,
      school: "Habib Public High School",
      date: "Aug 2021 - Jun 2023",
      grade: "86%",
      desc: "I completed my intermediate studies in Pre-Engineering from Habib Public High School in 2023, under the Aga Khan University Examination Board (AKUEB).",
      degree: "Intermidiate",
    },
    {
      id: 2,
      img: gasLogo,
      school: "Ghulaman-e-Abbas School, Karachi",
      date: "May 2014 - Jun 2021",
      grade: "97%",
      desc: "I completed my matriculation from Ghulaman-e-Abbas School under the Aga Khan University Examination Board board (AKUEB) in 2021, where I studied Science with Computer.",
      degree: "Matriculation",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Hult Prize",
      description:
        "As the Head Director of Web Management, I developed the official website for Hult Prize MUET SZAB, ensuring a seamless, user-friendly, and visually appealing experience. The website serves as a central hub for event details, registrations, and updates, enhancing the digital presence of the competition. ",
      image: hultprize,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "API"],
      github: "#",
      webapp: "https://hpmuetszab.social/",
    },
    {
      id: 1,
      title: "Infinity Technonolgy",
      description:
        "As part of the Decthon Hackathon organized by Decentral Developers, Abdul Majid Tangri and I built a fully functional IT consulting website in just 4 hours. This project tested our ability to rapidly develop a responsive and visually appealing website using Bootstrap, JavaScript, and various JS libraries.",
      image: itcompany,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "GSAP"],
      github: "https://github.com/raza-abbas-23sw/Frontend-Hackathon-2k25",
      webapp: "https://raza-abbas-23sw.github.io/Frontend-Hackathon-2k25/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },

  ];  