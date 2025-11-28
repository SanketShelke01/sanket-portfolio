import html5Icon from "/assets/icons/frontend/html5.svg";
import css3Icon from "/assets/icons/frontend/css3.svg";
import jsIcon from "/assets/icons/frontend/js.svg";
import reactIcon from "/assets/icons/frontend/react.svg";
import reduxIcon from "/assets/icons/frontend/redux.svg";
import bootstrapIcon from "/assets/icons/frontend/bootstrap.svg";
import materialUiIcon from "/assets/icons/frontend/material-ui.svg";
import tailwindCssIcon from "/assets/icons/frontend/tailwind-css.svg";

import pythonIcon from "/assets/icons/backend/python.svg";
import java from "/assets/icons/backend/java.svg";
import mysqlIcon from "/assets/icons/backend/mysql.svg";
import postgresqlIcon from "/assets/icons/backend/postgresql.svg";
import mongodbIcon from "/assets/icons/backend/mongodb.svg";

import reactNativeIcon from "/assets/icons/mobile/react-native.svg";
import androidStudioIcon from "/assets/icons/mobile/android-studio.svg";


import gitIcon from "/assets/icons/others/git.svg";
import githubIcon from "/assets/icons/others/github.svg";
import dockerIcon from "/assets/icons/others/docker.svg";
import postmanIcon from "/assets/icons/others/postman.png";


import awsProfessionalBadge from "/assets/images/aws-professional-badge.png";
import awsDeveloperBadge from "/assets/images/aws-developer-badge.png";
import awsSolutionBadge from "/assets/images/aws-solutions-badge.png";
import terraformBadge from "/assets/images/terraform-associate-badge.png";

export const ABOUT_CONTENT = `Motivated Full Stack Developer and a BE student specialized in IT Engineering. With a solid background in web development. Explore my projects to see how I combine technical skills with creative problem-solving.

`;

export const TECHNOLOGIES = {
  Frontend: [
    { icon: html5Icon, name: "HTML5" },
    { icon: css3Icon, name: "CSS3" },
    { icon: jsIcon, name: "JavaScript" },
    { icon: reactIcon, name: "React" },
    { icon: reduxIcon, name: "Redux" },
    { icon: bootstrapIcon, name: "BootStrap" },
    { icon: materialUiIcon, name: "Material UI" },
    { icon: tailwindCssIcon, name: "Tailwind CSS" },
  ],
  Backend: [
    { icon: java, name: "java" },
    { icon: pythonIcon, name: "Python" },
    { icon: mysqlIcon, name: "MySQL" },
    { icon: postgresqlIcon, name: "PostgreSQL" },
    { icon: mongodbIcon, name: "MongoDB" },
  ],
  Mobile: [
    { icon: reactNativeIcon, name: "React Native" },
    { icon: androidStudioIcon, name: "Android Studio" },
    
  ],
  Others: [
    { icon: gitIcon, name: "Git" },
    { icon: githubIcon, name: "GitHub" },
    { icon: dockerIcon, name: "Docker" },
    { icon: postmanIcon, name: "Postman" },
  ],
};

export const EXPERIENCES = [
  {
    year: "Mar 2021 - May 2021",
    role: "Mobile Android App Development",
    company: " Mountreach Solution",
    description: `During this workshop, I gained hands-on experience in Android app development using Android Studio. I learned the fundamentals of building mobile applications and worked on practical exercises that strengthened my understanding of the Android development process..`,
    technologies: ["Core Python", "Java", "Xml" ],
  },
  {
    year: "Feb 2025 - Nov 2025",
    role: "Full Stack Developer Trainee",
    company: "Seven Mentor",
    description: `Completed an intensive full stack development program covering frontend, backend, databases, APIs, and deployment. Gained hands-on experience building responsive web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Worked on real-time projects, debugging, REST API development, and deploying applications to cloud platforms.`,
    technologies: ["HTML", "CSS", "JavaScript", "React", "SQL", "Java", "Bootstrap"],
  },
];

export const EDUCATION = [
  {
    institution: "Dr.Vitthalrao Vikhe Patil College of Engineering, Ahmednagar",
    university: "Savitribai Phule Pune University",
    percentage: "7.51 CGPA",
    year: "2022-2025",
    degree: "Information Technology",
    location: "Ahmednagar, Maharashtra",
    level: "college",
  },
  {
    institution: "Government Polytechnic College, Ambad",
    university: "Maharashtra State Board of Technical Education",
    percentage: "85.20%",
    year: "2022",
    degree: "Diploma in Computer Science",
    location: "Ambad, Maharashtra",
    level: "higher-secondary",
  },
  {
    institution: "Jawahar Madhyamik Vidyalaya, Chanda",
    university: "Maharashtra State Board of Secondary and Higher Secondary Education",
    percentage: "84.80%",
    year: "2019",
    degree: "High School (10<sup>th</sup>)",
    location: "Chanda, Maharashtra",
    level: "high-school",
  },
];

export const PROJECTS = [

  {
    title: " Mini Store Mobile Website",
    description:
      "Developed a responsive Mini Mobile Store Website designed for browsing and purchasing mobile phones. The website provides users with a clean layout, easy navigation, and product-focused design, ensuring a smooth online shopping experience.",
    technologies: ["Html","Css", "JavaScript","Bootstrap","JSON"],
    githubLink: "https://github.com/",
    link:"",

  },

  {
    title: " Detection of Apple Plant Diseases Using Leaf Images through CNN ",
    description:
      "The project “Detection of Apple Plant Diseases Using Leaf Images through CNN” aims to create an automated and intelligent system capable of identifying various diseases present on apple leaves by analyzing their images. This system integrates deep learning techniques with a web-based interface to provide farmers and agricultural stakeholders with a reliable, fast, and accurate disease detection tool.",
    technologies: [ "JAVA", "JSP", "HTML", "CSS", "JavaScript","MySql" ],
    githubLink: "https://github.com/",
    link:"",
  },

];

export const CERTIFICATIONS = [
  {
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services Training and Certification",
    date: "April 2024",
    link: "https://www.credly.com/badges/00c91b85-4948-4275-88c3-d143e0e888e7/public_url",
    badge: awsProfessionalBadge,
  },

];

export const CONTACT = {
  phoneNo: "+91 7741829872",
  email: "sanketshelke!49@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanket-shelke-aa6399254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/SanketShelke01",
  x: "https://x.com/",
  instagram:
    "https://www.instagram.com/___sanket.s?igsh=MXRsZjNmcnZneWthZw==",
};
