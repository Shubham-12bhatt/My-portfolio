// Project Images
import projectImage1 from "../assets/pimg1.png";
import projectImage2 from "../assets/pimg2.png";
import projectImage3 from "../assets/pimg3.png";
import projectImage4 from "../assets/pimg4.png";

export const HERO_CONTENT = `Computer Science student passionate about building modern web applications. Specializing in the MERN stack with hands-on experience in React, Node.js, and MongoDB. Eager to contribute to innovative projects and grow as a developer.`;

export const ABOUT_TEXT = `I'm a dedicated Computer Science student at KIET Group of Institutions with a strong foundation in full-stack development. My journey in web development is driven by curiosity and a passion for creating efficient, user-friendly applications. I specialize in the MERN stack and have built several projects ranging from civic issue reporting systems to e-commerce clones. I thrive in collaborative environments and continuously seek to learn new technologies. Currently looking for internship opportunities where I can contribute my skills and grow as a developer.`;

export const EXPERIENCES = [
  {
    year: "Jan 2026 - Present",
    role: "Web Developer (Intern)",
    company: "Family Feast - Australia",
    description: `Developing and maintaining the official website using React.js and Tailwind CSS to deliver a responsive, modern user interface. Building reusable components and integrating REST APIs to display dynamic, user-driven content efficiently.`,
    technologies: ["React.js", "Tailwind CSS", "REST API"],
  },
  {
    year: "Oct 2024 - Present",
    role: "Technical Member (Web Development)",
    company: "CPByte KIET",
    description: `Joined CBByte, the technical club of KIET, as a Web Developer and active technical member. Contributed to enhancing web-based initiatives and participated in the club's DSA Bootcamp to strengthen core programming fundamentals and problem-solving skills.`,
    technologies: ["Web Development", "DSA", "Team Collaboration"],
  },
];

export const PROJECTS = [
  {
    title: "NagarBandhu - Civic Issue Reporting System",
    image: projectImage1,
    description:
      "Developed a responsive web admin dashboard using React.js for real-time civic issue tracking and map-based visualization. Built scalable REST APIs using Node.js, Express.js, and MongoDB with support for geospatial data and issue status management.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://urbanlytics.netlify.app/",
    github: "https://github.com/Shubham-12bhatt/SIH-website"
  },
  {
    title: "Country Explorer",
    image: projectImage2,
    description:
      "Built a responsive web application to explore country details such as population, region, capital, and national flags. Implemented search and filter functionality using REST APIs for dynamic data fetching and smooth user interaction.",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"],
    link: "https://explor2world.netlify.app/",
    github: "https://github.com/Shubham-12bhatt/country-explorer"
  },
  {
    title: "WellTech",
    image: projectImage3,
    description:
      "Developed a full-stack wellness web platform using React and Tailwind CSS with a responsive, user-friendly dashboard. Implemented Firebase authentication and real-time database features for secure access and personalized content delivery.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Firebase"],
    link: "https://welltech23.netlify.app/",
    github: "https://github.com/Shubham-12bhatt/Well-tech-project"
  },
  {
    title: "Myntra Clone",
    image: projectImage4,
    description:
      "Developed a responsive Myntra website clone with reusable components for homepage, product listings, and navigation using modern frontend practices. Implemented dynamic UI interactions, hover effects, and state-driven rendering to enhance user experience.",
    technologies: ["React.js", "Redux", "Tailwind CSS"],
    link: "https://myntr-a.netlify.app/",
    github: "https://github.com/Shubham-12bhatt/Myntra-Clone-React"
  },
];

export const CONTACT = {
  address: "Ghaziabad, India",
  phoneNo: "+91-8816078859 ",
  email: "bhattshubham466@gmail.com",
};
