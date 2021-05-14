import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chalenzi - Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my porftolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'castle.jpg',
    title: 'Cloud Castle',
    info: 'An Airbnb-style marketplace app for renting castles. This app was coded in a team of 4 people in 5 days at Le Wagon London using Ruby on Rails, Javascript, and HTML/SCSSRails version 6.0.3.4',
    info2: '',
    url: 'https://cloud-castles-nquiggers.herokuapp.com/',
    repo: 'https://github.com/livzorn/cloud-castles', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cons.jpg',
    title: 'Conscious Clicks',
    info: 'Browsing the internet can be a stressful experience. Conscious Clicks is an app to help you build better habits, unlearn unhealthy ideas, and think more critically about the content you see everyday.',
    info2: '',
    url: 'http://www.consciousclicks.org/',
    repo: 'https://github.com/livzorn/conscious-clicks', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nikola-calic-a08703167/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/chalenzi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
