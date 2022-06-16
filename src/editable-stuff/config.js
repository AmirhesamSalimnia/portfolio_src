// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Amir",
  middleName: "Hesam",
  lastName: "Salimnia",
  message: " | Data Scientist | Programmer | Photographer | ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/amirhesamsalimnia",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/amirhesamsalimnia/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "#",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile_pic.png"),
  imageSize: 375,
  message:
    "My name is Amir Hesam, and I am a Computer Science student at Western University. I'm passionate about solving real-world problems using AI techniques, specifically Computer Vision and Deep Learning.",
  resume: require("../editable-stuff/resume.pdf"),
};


// SELECTED PROJECT SECTION
const selected_project = {
  show: true,
  heading: "Notable Projects",
  projects_arr: [
    { name: "Cross Modal Generation", 
      description: "Generating audio based on the visual information from video using VQ-VAE and transformers.",
      img: "Spec.png",
      specfic: ["Audio Representation Learning", "Audio Representation Learning", "Transformers", "OpenCV","PyTorch", "Python"],
      time: "Fall 2021" 
    },
    { name: "Multi Resolution Memory for Anomaly Detection (MRMAD)", 
      description: "Proposing new method to detect open set anomaly with distilling multi-resolution knowledge into memory",
      img: "Anomaly.png",
      specfic: ["Anomaly Detection", "Multiresolution Knowledge Distillation", "PyTorch", "Python"],
      time: "Fall 2021" 
    },
    { name: "Image Restoration", 
      description: "Recovering low-quality images using domain translation network which translates the latent space of degraded photos into clean ones.",
      img: "Image_Restoration.png",
      specfic: ["Computer Vision", "Domain Translation", "Image Enhancement", "PyTorch", "Python"],
      time: "Fall 2020" 
    },
    { name: "Multiple Object Tracking in Crowded Scene", 
      description: "At Avir Company, we are implementin and developing a Tractor which tackles multi-object tracking by exploiting the regression head of a detector to perform temporal realignment of object bounding boxes, in addition to two extensions, reidentification Siamese network, and motion model.",
      img: "/MOT.b741fcbd.gif",
      specfic: ["Computer Vision", "MOT", "Image Segmentation", "Object Detection", "PyTorch", "Python"],
      time: "Fall 2020"
    },
    { name: "Music Retrieval", 
      description: "At Hara Company, we designed an identification system for Persian Music based on Pitch-frequency histogram and Metric Learning methods such as Geometric Mean Metric Learning.",
      img: "Music_Retrieval.8db029c7.png",
      specfic: ["Information Retrieval", "Metric Learning", "Python", "MATLAB"],
      time: "Summer 2019" 
    },
    { name: "AI Main Types Problems and Algorithms", 
      description: "Implementing basic algorithms to solve a wide range of AI problems ranging from Supervised Learning to Reinforcement Learning.",
      img: "AI_icon.png",
      specfic: ["ML", "NLP", "Classifying", "Regression", "Naïve Bayes", "Genetic Algorithm", "Search Algorithm", "Decision Tree", "Data Analysis", "Python"],
      repo_url: "https://github.com/AmirhesamSalimnia/Artificial-Intelligence-Projects",
      time:"Spring 2020"
    },
    { name: "Twitter", 
      description: "Implementing Twitter application, a social network in which users can post and interact with messages. Backend is written in C++ using AP HTTP and the frontend is developed with HTML, CSS, and Bootstrap.",
      img: "/twitter.jpeg",
      specfic: ["Object-oriented Programming", "C++", "React", "Bootstrap", "HTML", "CSS"],
      repo_url: "https://github.com/AmirhesamSalimnia/Advanced-Programming-Projects",
      time: "Spring 2017"
    },
    { name: "ACM Vahed", 
      description: "ACM Vahed is a web application helps students to plan their courses and it's implemented with Django framework. This platform is currently available only for college of electrical & computer engineering students at university of Tehran, But we have plans to scale it up and service students from other colleges and universities.",
      img: "/acm.13029f2f.png",
      specfic: ["Backend Programming", "RESTful Programming", "Django"],
      time: "Summer 2017"
    },
    // { name: "Three Connected Tank", 
    //   description: "Identifying, modeling a three connected tank of water, and controlling the height of water in each tank using Simulink.",
    //   img: "Three_Connected_Tank.b89469a7.png",
    //   specfic: ["Controller Design", "MATLAB", "Simulink"],
    //   time: "Spring 2018" 
    // },
  ],
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "AmirHesamSalimnia", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 95 },
    { name: "PyTorch", value: 92 },
    { name: "Tensorflow", value: 85 },
    { name: "C/C++", value: 85 },
    { name: "SQL", value: 80 },
    { name: "LATEX", value: 90 },
    { name: "MATLAB", value: 80 },
    { name: "HTML/CSS", value: 85 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 80 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Please feel free to email me at",
  email: "amirhesam.salimnia@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch, experiences, selected_project};