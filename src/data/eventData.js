import { z } from "zod";

export const departmentsType = [
  "AE AS",
  "ECE",
  "CH",
  "CV",
  "ME",
  "EEE",
  "AI&ML",
  "CG",
  "CSE",
  "ISE",
  "CD",
];

export const departmentsSchema = z.enum([
  "AE AS",
  "ECE",
  "CH",
  "CV",
  "ME",
  "EEE",
  "AI&ML",
  "CG",
  "CSE",
  "ISE",
  "CD",
]);

export const eventsData = {
  "AE AS": [
    {
      id: "aeas1",
      no: 1,
      name: "Fast & Furious – The Drone Edition (Mega Event)",
      description:
        "A drone flying race where participants demonstrate piloting skills through obstacle hoops. Includes training by Drona Aviation on assembling the Pluto X educational drone.",
      registration_fee: 500,
      prizes: { first: "7500", second: "3500" },
      sponsors: "Drona Aviation",
      expenses: "Nil (Getting Sponsors)",
      requirements: "",
      minTeamMembers: 1,
      maxTeamMembers: 5,
      isMega: true, // MARKED AS MEGA EVENT
    },
    {
      id: "aeas2",
      no: 2,
      name: "DIMENSIO-CRAFT",
      description:
        "Design in CAD the given components of the aircraft within the given time.",
      registration_fee: 200,
      prizes: { first: "3000", second: "1500" },
      sponsors: "AutoDesk",
      expenses: "Nil",
      requirements: "",
      minTeamMembers: 1,
      maxTeamMembers: 2,
    },
    {
      id: "aeas3",
      no: 3,
      name: "AQUANOVA",
      description:
        "Design and construct water rockets using self-brought materials. No ready-made kits allowed. Focus on distance, stability, and safety.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "1500",
      requirements: "Air pump provided by organizers",
      minTeamMembers: 1,
      maxTeamMembers: 2,
    },
    {
      id: "aeas4",
      no: 4,
      name: "Glitch 'N Glide",
      description:
        "Design, fabricate, and demonstrate a glider for maximum range and endurance. Two rounds for distance and airtime combined scoring.",
      registration_fee: 200,
      prizes: { first: "3000", second: "1500" },
      expenses: "5000",
      requirements: "",
      minTeamMembers: 1,
      maxTeamMembers: 3,
    },
    {
      id: "aeas5",
      no: 5,
      name: "THE PARA-LAUNCH",
      description:
        "Design a parachute descent system for a toy aircraft ensuring a stable and controlled landing using aerodynamic drag principles.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "3000",
      requirements: "",
      minTeamMembers: 1,
      maxTeamMembers: 2,
    },
    {
      id: "aeas6",
      no: 6,
      name: "MechaBird",
      description:
        "Design and construct an Ornithopter (flapping wing aircraft) of monoplane configuration within two hours focusing on maximum flight endurance.",
      registration_fee: 0,
      prizes: { first: "3000", second: "1500" },
      expenses: "3000",
      requirements: "",
      minTeamMembers: 2,
      maxTeamMembers: 3,
    },
  ],

  ECE: [
    {
      id: "ece1",
      no: 7,
      name: "AQUA BOT",
      description:
        "Custom-built aquatic robots compete in high-speed races, adhering to size and weight rules. Battery-powered and remotely controlled.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "1500",
      minTeamMembers: 1,
      maxTeamMembers: 4,
    },
    {
      id: "ece2",
      no: 8,
      name: "ROBO KABBADI",
      description:
        "Robots compete in a Kabaddi-themed game promoting teamwork, design innovation, and real-time strategy.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "500",
      minTeamMembers: 1,
      maxTeamMembers: 5,
    },
    {
      id: "ece3",
      no: 9,
      name: "CIRCUITRONICS",
      description:
        "Single-round technical event testing circuit design, identification, and troubleshooting with coded hints.",
      registration_fee: 200,
      prizes: { first: "3000", second: "1500" },
      sponsors: "Casio",
      expenses: "Nil",
      minTeamMembers: 1,
      maxTeamMembers: 2,
    },
    {
      id: "ece4",
      no: 10,
      name: "VIRTUAL VISTA",
      description:
        "AR/VR competition to design and animate 3D models blending creativity and mixed reality technology.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "Nil",
      minTeamMembers: 1,
      maxTeamMembers: 2,
    },
    {
      id: "ece5",
      no: 11,
      name: "LINE-XTREME",
      description:
        "Autonomous robot race with complex line paths to test speed, precision, and embedded control algorithms.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "500",
      minTeamMembers: 1,
      maxTeamMembers: 4,
    },
    {
      id: "ece6",
      no: 12,
      name: "COSMO-CRAZE",
      description:
        "Obstacle-based robot race where wired bots must traverse terrains, earning points per obstacle.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "1500",
      minTeamMembers: 1,
      maxTeamMembers: 5,
    },
  ],

  CH: [
    {
      id: "ch1",
      no: 13,
      name: "AROMATICA",
      description:
        "Natural perfume-making competition blending chemistry, creativity, and sensory science using natural ingredients.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "1500",
      minTeamMembers: 2,
      maxTeamMembers: 5,
    },
    {
      id: "ch2",
      no: 14,
      name: "CHEMQUEST",
      description:
        "Chemical engineering treasure hunt where clues are unlocked by solving chemistry-based questions.",
      registration_fee: 200,
      prizes: { first: "3000", second: "1500" },
      expenses: "Nil",
      minTeamMembers: 2,
      maxTeamMembers: 5,
    },
  ],

  CV: [
    {
      id: "cv1",
      no: 15,
      name: "TrafficX-Smart Intersection Challenge",
      description:
        "Design a working model of a traffic intersection with proper signals, pedestrian crossings, and smart innovations to reduce congestion.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "Nil",
      requirements: "Venue: Double Lobby for 3 hours",
      minTeamMembers: 2,
      maxTeamMembers: 4,
    },
  ],

  ME: [
    {
      id: "me1",
      no: 16,
      name: "Pontification",
      description:
        "Bridge design and construction competition emphasizing innovation, strength, and efficient use of materials.",
      registration_fee: 200,
      prizes: { first: "3000", second: "1500" },
      expenses: "3000",
      minTeamMembers: 1,
      maxTeamMembers: 4,
    },
    {
      id: "me2",
      no: 17,
      name: "CyberForge Hackathon",
      description:
        "8-hour software hackathon where teams design models that perform simple tasks through a series of interconnected mechanical steps, promoting creativity and teamwork.",
      registration_fee: 400,
      prizes: { first: "15000", second: "7000" },
      expenses: "3000",
      minTeamMembers: 2,
      maxTeamMembers: 6,
      isMega: true, // MARKED AS MEGA EVENT
    },
  ],

  EEE: [
    {
      id: "eee1",
      no: 18,
      name: "Arc Reactor Wars",
      description:
        "Marvel-themed two-day competition teaching PCB design, soldering, and microcontroller integration through creating a functional Arc Reactor.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "13000",
      minTeamMembers: 4,
      maxTeamMembers: 5,
    },
  ],

  "AI&ML": [
    {
      id: "aiml1",
      no: 19,
      name: "AI Pixel Animation Challenge",
      description:
        "Merge art and AI by creating animated pixel sprites using generative tools to tell visual stories.",
      registration_fee: 200,
      prizes: { first: "3000", second: "1500" },
      expenses: "Nil",
      minTeamMembers: 2,
      maxTeamMembers: 2,
    },
    {
      id: "aiml2",
      no: 20,
      name: "AI Build-a-thon: Idea to Application",
      description:
        "Transform problem statements into AI-powered applications within limited time, emphasizing teamwork and rapid prototyping.",
      registration_fee: 500,
      prizes: { first: "5000", second: "2500" },
      expenses: "Nil",
      minTeamMembers: 2,
      maxTeamMembers: 3,
    },
  ],

  CG: [
    {
      id: "cg1",
      no: 21,
      name: "UI FLOW",
      description:
        "Improve poor UI designs and convert them into responsive front-end prototypes using HTML, CSS, JS, and Figma/Canva.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "Nil",
      minTeamMembers: 2,
      maxTeamMembers: 3,
    },
    {
      id: "cg2",
      no: 22,
      name: "Meme Arena",
      description:
        "On-the-spot meme creation challenge using design, animation, and humor to compete across creative tracks.",
      registration_fee: 200,
      prizes: { first: "3000", second: "1500" },
      expenses: "Nil",
      minTeamMembers: 1,
      maxTeamMembers: 2,
    },
  ],

  CSE: [
    {
      id: "cse1",
      no: 23,
      name: "PixelCraft – Modular Web Development Challenge",
      description:
        "Front-end web design contest focused on modular design using only HTML, CSS, and JS.",
      registration_fee: 200,
      prizes: { first: "3000", second: "1500" },
      expenses: "Nil",
      minTeamMembers: 2,
      maxTeamMembers: 3,
    },
    {
      id: "cse2",
      no: 24,
      name: "Pixel Gauntlet – The Pixel Unlocked",
      description:
        "Coding and cryptography-based challenge where teams solve puzzles to reveal a hidden pixel artifact.",
      registration_fee: 200,
      prizes: { first: "3000", second: "1500" },
      expenses: "Nil",
      minTeamMembers: 1,
      maxTeamMembers: 2,
    },
    {
      id: "cse3",
      no: 25,
      name: "Traversal Trials – The Pixel Path",
      description:
        "Binary tree traversal-based puzzle challenge requiring decoding and reconstruction of hidden structures.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "Nil",
      minTeamMembers: 1,
      maxTeamMembers: 2,
    },
    {
      id: "cse4",
      no: 26,
      name: "Binary Build – The Modular Tree Challenge",
      description:
        "Teams rebuild broken binary trees through sub-challenges revealing hidden pixel art or flags.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "Nil",
      minTeamMembers: 2,
      maxTeamMembers: 3,
    },
  ],

  ISE: [
    {
      id: "ise1",
      no: 27,
      name: "Algo Fix & Forge",
      description:
        "Identify and optimize faulty or inefficient algorithm implementations to improve correctness and performance.",
      registration_fee: 200,
      prizes: { first: "3000", second: "1500" },
      expenses: "Nil",
      minTeamMembers: 3,
      maxTeamMembers: 3,
    },
    {
      id: "ise2",
      no: 28,
      name: "PixHunter",
      description:
        "Digital forensics and OSINT competition to uncover hidden information using public data tools and ethical hacking methods.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "Nil",
      requirements:
        "Internet-enabled computers with access to Google Maps, TinEye, ExifTool, and social media.",
      minTeamMembers: 3,
      maxTeamMembers: 3,
    },
    {
      id: "ise3",
      no: 29,
      name: "ESCAPE ROOM",
      description:
        "Solve interconnected puzzles across logic, cryptography, and programming to unlock the final escape code.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "Nil",
      minTeamMembers: 2,
      maxTeamMembers: 3,
    },
  ],

  CD: [
    {
      id: "cd1",
      no: 30,
      name: "Block by Block – Power BI Modular Championship",
      description:
        "Dashboard-building contest where participants design modular Power BI dashboards forming a cohesive data story.",
      registration_fee: 200,
      prizes: { first: "3000", second: "1500" },
      expenses: "Nil",
      minTeamMembers: 2,
      maxTeamMembers: 4,
    },
    {
      id: "cd2",
      no: 31,
      name: "DATA-DRIVEN RIDDLES CONTEST",
      description:
        "Solve real-world riddles using data analysis techniques, emphasizing logical reasoning and teamwork.",
      registration_fee: 300,
      prizes: { first: "5000", second: "2500" },
      expenses: "Nil",
      minTeamMembers: 2,
      maxTeamMembers: 4,
    },
  ],
};

// Helper function to get all events from all departments
export const getAllEvents = () => {
  const allEvents = [];
  Object.keys(eventsData).forEach(departmentName => {
    eventsData[departmentName].forEach(event => {
      allEvents.push({
        ...event,
        department: departmentName
      });
    });
  });
  return allEvents;
};

// Helper function to get ONLY mega events
export const getMegaEvents = () => {
  const megaEvents = [];
  Object.keys(eventsData).forEach(departmentName => {
    eventsData[departmentName].forEach(event => {
      if (event.isMega) {
        megaEvents.push({
          ...event,
          department: departmentName
        });
      }
    });
  });
  return megaEvents;
};

// Helper function to get events by department
export const getDepartmentEvents = (departmentName) => {
  return eventsData[departmentName] || [];
};

// Helper function to get event by ID
export const getEventById = (id) => {
  for (const departmentName of Object.keys(eventsData)) {
    const event = eventsData[departmentName].find(e => e.id === id);
    if (event) {
      return { ...event, department: departmentName };
    }
  }
  return null;
};

export default eventsData;