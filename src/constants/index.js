import project1 from "../assets/real_estate.jpg";
import project2 from "../assets/promanage.jpg";
import project3 from "../assets/cleanNeighbour.jpg";
import project4 from "../assets/portfolio.jpg";

export const HomePage_Content = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, MySQL, PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL, and PostgreSQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, and exploring new technologies.`;

export const PROJECTS = [
  {
    title: "Real Estate Listings",
    image: project1,
    description:
      "Developed a real estate web app similar to the GruhKhoj platform, focused specifically on properties in Kolhapur. The platform allows users to browse, search, and filter property listings with details like price, location, and type.",
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS' ],
  },
  {
    title: "Pro Manage",
    image: project2,
    description:
      "Built a collaborative task management platform to help teams organize, track, and prioritize work efficiently. The app supports real-time updates, task classification (Backlog, To-Do, In Progress, Done), user authentication, and performance analytics. Pro Manage helps teams to stay aligned, manage workload, and complete projects on time.",
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: "CleanNeighbour",
    image: project3,
    description:
      "Developed CleanNeighbour, a web app to help residents report and track improper waste disposal in their communities. The platform allows users to submit complaints with photos, offers anonymous reporting, and includes a reward and penalty system to encourage responsible behavior. It also shows real-time updates on complaint status and shares tips on proper waste management.",
    technologies: ['React', 'Firebase', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Geetanagar Kavalapur, Tal- Miraj, Dist- Sangli ",
  phoneNo: "+91 8459420417 ",
  email: "vedikamjadhav2004@gmail.com",
};
