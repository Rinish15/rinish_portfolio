//  icons
import {

  FiLinkedin,
  FiPhone,
  FiGithub,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';


// projects images
import Project1 from './assets/img/projects/curry.png';
import Project2 from './assets/img/projects/project2.png';
import Project3 from './assets/img/projects/project3.png';
import Project4 from './assets/img/projects/ignite.PNG';




// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/python.png';


// testimonial images


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'education',
    href: 'education',
  },
  {
    name: 'project',
    href: 'portfolio',
  },
  {
    name: 'skills',
    href: 'skills',
  },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/rinish-reddy-8b37ba219/',
    target:"_blank"
  },
  {
    icon: <FiMail />,
    href: 'mailto:rinishreddy.rokkam@slu.edu',
    target:"_blank"
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Rinish15',
    target:"_blank"
  },
  
];

// companies

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Curry Chronicles',
    category: 'Team Projects',
    info:"Our website is your digital entrance to the rich flavors of India. Explore the menu, place orders, and discover our restaurant's ambiance and history. Join our foodie community, make reservations, and stay updated on special deals and events for a vibrant gastronomic experience.",
    github:"https://cs.slu.edu/student/rrokkamasdfasdfa/Project/home.html",
    live:"https://cs.slu.edu/student/rrokkamasdfasdfa/Project/home.html",
    tech:"Html | CSS | JS"
    
  
  },
  {
    id: '2',
    image: Project2,
    name: 'Simple Portfolio',
    category: 'Team Projects',
    info:"This is a simple portfolio done using HTML, CSS and JS and addeda few ectra features such as Dark Mode",
    github:"https://rinish15.github.io/rinishrokkam.github.io/",
    live:"https://rinish15.github.io/rinishrokkam.github.io/",
    tech:"HTML | CSS | Javascript "
  },
  {
    id: '3',
    image: Project3,
    name: 'Tourism Website',
    category: 'Team Projects',
    info:"An online portal inviting you to explore the city's rich history, cultures and landmarks. Discover the stories behind the Gateway Arch, navigate through the St. Louis Art Museum's artistic treasures, and find culinary delights unique to the city. Plan your visit seamlessly with our user-friendly website, ensuring an unforgettable Midwest experience.",
    github:"https://cs.slu.edu/student/rrokkamasdfasdfa/hw2/index.html",
    live:"https://cs.slu.edu/student/rrokkamasdfasdfa/hw2/index.html",
    tech:"HTML | CSS "
  },
  {
    id: '4',

    image: Project4,
    name: 'Training website ',
    category: 'Solo Projects',
    info:"This is a simple training website shiowcasing on how to use different HTML elements",
    github:"https://cs.slu.edu/student/rrokkamasdfasdfa/hw1/index.html",
    live:"https://cs.slu.edu/student/rrokkamasdfasdfa/hw1/index.html",
    tech:"HTML | CSS"
  },
];

// projects
export const education = [
  {
    id: 1,
    degree: 'Your Degree',
    university: 'University Name',
    duration: 'Year - Year',
  },
  // Add more education entries as needed
];

// skill


// services


// testimonials

// contact
export const contact = [
  {
    icon: <FiMail />,
    description: 'rinishreddy.rokkam@slu.edu',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'St Louis, MO',

  },
  {
    icon: <FiPhone />,
    title: 'Mobile Number',
    subtitle: '3143638956',
  }
];

export const skills = [
  { name: 'HTML', image: SkillImg1, percent: 90 },
  { name: 'CSS', image: SkillImg2, percent: 70 },
  { name: 'Java Script', image: SkillImg3, percent: 60 },
  { name: 'Python', image: SkillImg4, percent: 80 },
  
  // ... other skills
];