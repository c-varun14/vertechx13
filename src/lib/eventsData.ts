import { z } from "zod";

export type departmentsType =
  | "AE&AS"
  | "ECE"
  | "CH"
  | "CV"
  | "ME"
  | "EEE"
  | "AI&ML"
  | "CG"
  | "CSE"
  | "ISE"
  | "CD"
  | "MEGA";

export const departmentsNames: departmentsType[] = [
  "AE&AS",
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
  "MEGA",
];

export const departmentsSchema = z.enum([
  "AE&AS",
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
  "MEGA",
]);

export const eventsData = {
  "AE&AS": [
    {
      id: "clw3q9v6e002a08l0h6qy7q2s",
      name: "Fast & Furious - The Drone Edition",
      image: "/assets/events/AEAS/Drone.jpg",
      description:
        "The “Fast and furious - drone edition” is a competitive drone event where participants must demonstrate their skills by flying their drone through a series of obstacle hoops and successfully dropping a given payload onto a designated target zone. Scoring is based on the precision of the payload drop, with higher points awarded for landing closer to the bullseye, while completion time is also factored into scoring of points. This event evaluates critical drone pilot skills including payload management, obstacle navigation, flight precision, target accuracy, and time optimization.",
      rules: [
        "A maximum of 550 mm diagonal length of the drone frame.",
        "Readymade drone is not allowed (eg. Dji )",
        "Dropping mechanism can be done using Servo or any similar mechanism.",
        "Only payload will be given from management side.",
        "Bring extra things like propeller, batteries etc.",
        "Maximum 5 members per team.",
      ],
      registration_fee: 500,
      drive:
        "https://drive.google.com/drive/folders/1-bUc09JZwjN4KYQVuQybqrYXGu1RyFx-",
      prizes: {
        first: "7,500",
        second: "3,500",
      },
      minTeamMembers: 1,
      maxTeamMembers: 5,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [{ name: "TBD", phone: "TBD" }],
    },
    {
      id: "clw3q9v6e000108l0h6qy7q1z",
      name: "DIMENSIO-CRAFT",
      image: "/assets/events/AEAS/DIMENSIO_CRAFT.jpg",
      description:
        "DIMENSIO-CRAFT is a high-stakes, It’s your chance to transform 2D blueprints—the top, front, and side views—into a 3D aircraft component model using CAD software. Sharpen your CAD skills and precision to design essential parts like the fuselage, wing, or tail assembly, mirroring real aerospace design. The objective is to accurately and quickly translate technical specifications into a flawless 3D model under a strict time limit.",
      rules: [
        "Participants from any engineering  are allowed . Participation is individual ( solo participation).",
        "Each member will be using Fusion360, where they must draft and assemble the component",
        "Each member will be given a common design ",
      ],
      registration_fee: 200,
      drive:
        "https://drive.google.com/file/d/1kMeH-PDmOxVh5wvfypLe91jM6lTkEshn/view?usp=drive_link",
      prizes: {
        first: "3,000",
        second: "1,500",
      },
      minTeamMembers: 1,
      maxTeamMembers: 1,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "S Vimal Adithya", phone: "7411688915" },
        { name: "Anna Jovita J", phone: "8310616583" },
        { name: "Chidanya", phone: "9739260555" },
      ],
    },
    // {
    //   id: "clw3q9v6e000208l0h6qy7q20",
    //   name: "AQUANOVA",
    //   image: "/assets/events/AEAS/AQUANOVA.jpg",
    //   description:
    //     "Design and construct water rockets using self-brought materials. No ready-made kits allowed. Focus on distance, stability, and safety.",
    //   rules: [
    //     "Maximum length: 75 cm",
    //     "Nose must be cone-like, soft and flexible",
    //     "Fuel tank: plastic soda bottle, max 2 litres",
    //     "Fuel: water powered by pressurized air",
    //     "Ready-made kits strictly not allowed",
    //     "All assembly during allotted time only",
    //     "No second chance for launching",
    //   ],
    //   registration_fee: 300,
    //   drive:
    //     "https://drive.google.com/file/d/1TtJnTNVuPTU-cZQbOJhet2Tp0pqbPhRc/view?usp=drive_link",
    //   prizes: {
    //     first: "5,000",
    //     second: "2,500",
    //   },
    //   requirements: "Air pump provided by organizers",
    //   minTeamMembers: 1,
    //   maxTeamMembers: 2,
    //   date_time: null,
    //   start_time: null,
    //   venue: null,
    //   coordinators: [
    //     { name: "Sambhradha", phone: "8867054035" },
    //     { name: "Arpita S H", phone: "8073591238" },
    //     { name: "Amogh Kerur", phone: "8431085574" },
    //     { name: "Yogitha S", phone: "8431898347" },
    //   ],
    // },
    {
      id: "clw3q9v6e000308l0h6qy7q21",
      name: "Glitch 'N Glide",
      image: "/assets/events/AEAS/Glitch_N_Glide.jpg",
      description:
        "Design, fabricate, and demonstrate a glider for maximum range and endurance. Two rounds for distance and airtime combined scoring.",
      rules: [
        "Material: high-density thermocol, Styrofoam, or balsa wood only",
        "Wax paper, masking tape, glue gun allowed for assembly",
        "No metal, motors, or catapults",
        "Hand-launch only",
        "Maximum wingspan: 0.5 meters",
        "Weight limit: TBD after initial test flights",
        "Must show stable flight",
        "2 flights per team, best counts",
      ],
      registration_fee: 200,
      drive:
        "https://drive.google.com/file/d/11GKrLUkxP2eT8KJ4ICw84Pk2Rcn6r2Le/view?usp=drive_link",
      prizes: {
        first: "3,000",
        second: "1,500",
      },
      minTeamMembers: 1,
      maxTeamMembers: 3,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "H K.Hemalatha", phone: "9972571916" },
        { name: "Purvajaa I", phone: "9483204607" },
        { name: "Mahitha Menon", phone: "6360310860" },
      ],
    },
    {
      id: "clw3q9v6e000408l0h6qy7q22",
      name: "THE PARA-LAUNCH",
      image: "/assets/events/AEAS/THE_PARA_LAUNCH.jpg",
      description:
        "Design a parachute descent system for a toy aircraft ensuring a stable and controlled landing using aerodynamic drag principles.",
      rules: [
        "Parachute using lightweight materials (plastic bags, thin fabric)",
        "Maximum canopy size: 1m or equivalent surface area",
        "Must carry 300g payload with stable descent",
        "Evenly spaced suspension lines required",
        "Manual deployment only",
        "No hazardous materials except scissors",
        "Maximum 2 members per team",
        "2 drops from 5m height in Round 1",
        "Judged on descent time, stability, softness",
      ],
      registration_fee: 300,
      drive:
        "https://drive.google.com/file/d/1SP2mKBgwxEeYH5OTGtOSY4YSNoiNZYrG/view?usp=drive_link",
      prizes: {
        first: "5,000",
        second: "2,500",
      },
      minTeamMembers: 1,
      maxTeamMembers: 2,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "Ranjitha M", phone: "9731556749" },
        { name: "Ayeesha MS", phone: "9019148634" },
        { name: "Bushra Sadiqa", phone: "8660878176" },
        { name: "Devanshi Bhimta", phone: "6364349089" },
      ],
    },
    // {
    //   id: "clw3q9v6e000508l0h6qy7q23",
    //   name: "MechaBird",
    //   image: "/assets/events/AEAS/MechaBird.jpg",
    //   description:
    //     "Design and construct an Ornithopter (flapping wing aircraft) of monowing configuration within two hours focusing on maximum flight endurance.",
    //   rules: [
    //     "Construct using lightweight materials (balsa wood)",
    //     "Rubber band power only",
    //     "Maximum wingspan: 45 cm",
    //     "Carbon fiber, Kevlar, boron materials not allowed",
    //     "Metal or plastic only in hinges, shafts, rods, hooks",
    //     "Maximum 4 members per team",
    //     "No participant in multiple teams",
    //     "Round 1: Design compliance and construction quality check",
    //     "Round 2: Hand-launch, 3 timed flights, best counts",
    //   ],
    //   registration_fee: 300,
    //   drive:
    //     "https://drive.google.com/file/d/1smCs6zi2SLY7XIe0gndOdxJ70HtLYxn4/view?usp=drive_link",
    //   prizes: {
    //     first: "5,000",
    //     second: "2,500",
    //   },
    //   minTeamMembers: 2,
    //   maxTeamMembers: 4,
    //   date_time: null,
    //   start_time: null,
    //   venue: null,
    //   coordinators: [
    //     { name: "Swaroop Dinesh Bhat", phone: "8970889676" },
    //     { name: "Krishnavansh V", phone: "9108650079" },
    //     { name: "Likith C", phone: "9148315019" },
    //   ],
    // },
  ],
  ECE: [
    {
      id: "clw3q9v6e000608l0h6qy7q24",
      name: "AQUA BOT",
      image: "/assets/events/ECE/AQUA_BOT.jpg",
      description:
        "Custom-built aquatic robots compete in high-speed races through various aquatic challenges. Battery-powered and remotely controlled with size and weight restrictions.",
      rules: [
        "Robot must fit in 30x30x30 cm cube",
        "No external power supply, on-board only",
        "No Lego kits or ready-made mechanisms",
        "Robot must not harm other robots or arena",
        "No engines, battery only",
        "Voltage: max 12.4V, Current: max 3A",
        "Round 1: Individual time trial, top 10 advance",
        "Round 2: Final competition for winners",
      ],
      registration_fee: 300,
      drive:
        "https://drive.google.com/file/d/10ITWiOs7K55MxpkTNyJJcxMXulA_tAuu/view?usp=drive_link",
      prizes: {
        first: "5,000",
        second: "2,500",
      },
      minTeamMembers: 1,
      maxTeamMembers: 4,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "David Wiliam Raj", phone: "9790347191" },
        { name: "S.NITIN", phone: "8296090231" },
        { name: "NITHIN R", phone: "8904444607" },
      ],
    },
    {
      id: "clw3q9v6e000708l0h6qy7q25",
      name: "ROBO KABBADI",
      image: "/assets/events/ECE/ROBO_KABBADI.jpg",
      description:
        "Robots compete in a Kabaddi-themed game promoting teamwork, design innovation, and real-time strategy. Manually controlled with wireless controllers.",
      rules: [
        "Any microcontroller on-board allowed",
        "Manually controlled wirelessly, no autonomous programs",
        "Commercial or DIY controllers permitted",
        "Voltage between nodes: max 36V DC",
        "No damaged/puffed Lipo batteries",
        "Master safety switch required",
        "Manual emergency switch on controller",
        "No RF jammers allowed",
        "Match duration: 1 minute (best of 3 rounds)",
        "Raider must carry block points from opponent side",
        "No intentional damage to opponent robots",
      ],
      registration_fee: 300,
      drive:
        "https://drive.google.com/file/d/1DuX2dBdp5rKoApn5n344VmSPc5nro0SI/view?usp=drive_link",
      prizes: {
        first: "5,000",
        second: "2,500",
      },
      minTeamMembers: 1,
      maxTeamMembers: 5,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "David Wiliam Raj", phone: "9790347191" },
        { name: "S.NITIN", phone: "8296090231" },
        { name: "NITHIN R", phone: "8904444607" },
      ],
    },
    {
      id: "clw3q9v6e000808l0h6qy7q26",
      name: "CIRCUITRONICS",
      image: "/assets/events/ECE/CIRCUITRONICS.jpg",
      description:
        "Single-round technical event testing circuit design, identification, and troubleshooting with coded hints and real-time validation challenges.",
      rules: [
        "Teams of 1-2 members",
        "Match circuits with real-world applications",
        "Covers basic electronics, electrical, analog, digital",
        "Bonus points for identifying mystery circuits",
        "Only organizer's time counts",
        "Books, mobiles, internet prohibited",
        "Valid college ID required",
        "Judges' decision is final",
      ],
      registration_fee: 200,
      drive:
        "https://docs.google.com/document/d/1BrHtHuPlTTm3Y7v5zr4V7Z6z6Jm0fi8Abkvf8j9yobg/edit?usp=sharing",
      prizes: {
        first: "3,000",
        second: "1,500",
      },
      minTeamMembers: 1,
      maxTeamMembers: 2,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "David Wiliam Raj", phone: "9790347191" },
        { name: "S.NITIN", phone: "8296090231" },
        { name: "NITHIN R", phone: "8904444607" },
      ],
    },
    // {
    //   id: "clw3q9v6e000908l0h6qy7q27",
    //   name: "VIRTUAL VISTA",
    //   image: "/assets/events/ECE/VIRTUAL_VISTA.jpg",
    //   description:
    //     "AR/VR competition to design and animate 3D models blending creativity and mixed reality technology. Participants explore mixed reality concepts and present futuristic 3D designs.",
    //   rules: [
    //     "Teams of 1-2 members",
    //     "Prior software experience required",
    //     "External resources strictly prohibited",
    //     "Bring college ID cards",
    //     "Task: Design assigned 3D model",
    //     "Focus on imagination, accuracy, time management",
    //     "Any unfair practices lead to disqualification",
    //     "Judges' decision is final",
    //   ],
    //   registration_fee: 300,
    //   drive:
    //     "https://drive.google.com/file/d/1uo59a75FgSSsTa07EIKwChgjMpZYi_O1/view?usp=drive_link",
    //   prizes: {
    //     first: "5,000",
    //     second: "2,500",
    //   },
    //   minTeamMembers: 1,
    //   maxTeamMembers: 2,
    //   date_time: null,
    //   start_time: null,
    //   venue: null,
    //   coordinators: [
    //     { name: "David Wiliam Raj", phone: "9790347191" },
    //     { name: "S.NITIN", phone: "8296090231" },
    //     { name: "NITHIN R", phone: "8904444607" },
    //   ],
    // },
    {
      id: "clw3q9v6e001008l0h6qy7q28",
      name: "LINE-XTREME",
      image: "/assets/events/ECE/LINE_XTREME.jpg",
      description:
        "High-speed autonomous robot racing competition where participants design and build line follower robots with innovative challenges like loops and discontinuities.",
      rules: [
        "Bot must fit in 20x20x20 cm cube, weight ≤ 2.5 kg",
        "Battery-powered, fully autonomous, no computer vision",
        "Voltage max 12.4V DC",
        "Maximum 5 IR sensors",
        "No ready-made kits or LEGO sets",
        "Adaptive speed control encouraged",
        "Junction-solving ability required",
        "Auto-recovery if line lost",
        "Round 1: Straight paths, smooth turns, crossover",
        "Round 2: Discontinuous lines, loops, sharp turns",
      ],
      registration_fee: 300,
      drive:
        "https://drive.google.com/file/d/1fCXKzRmngTSVcOzPENkcICgIjDxHXhcH/view?usp=drive_link",
      prizes: {
        first: "5,000",
        second: "2,500",
      },
      minTeamMembers: 1,
      maxTeamMembers: 4,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "David Wiliam Raj", phone: "9790347191" },
        { name: "S.NITIN", phone: "8296090231" },
        { name: "NITHIN R", phone: "8904444607" },
      ],
    },
    // {
    //   id: "clw3q9v6e001108l0h6qy7q29",
    //   name: "COSMO-CRAZE",
    //   image: "/assets/events/ECE/COSMO_CRAZE.jpg",
    //   description:
    //     "Obstacle-based robot race where wired bots must traverse terrains, earning points per obstacle overcome. Teams design robots to complete the arena in minimum time.",
    //   rules: [
    //     "Robot can be wired with RF controllers",
    //     "Robot dimensions max 30x30 cm",
    //     "Not autonomous, team-controlled",
    //     "Microcontroller only",
    //     "No ready-made robots",
    //     "Batteries sealed properly",
    //     "Voltage max 12V DC (2A)",
    //     "No sensors allowed",
    //     "Must overcome obstacles",
    //     "5-second penalty for adjustments",
    //     "Negative points for leaving track",
    //   ],
    //   registration_fee: 300,
    //   drive:
    //     "https://drive.google.com/file/d/1WKqzQzRSUMjql4NEtAhZSEEU740apszE/view?usp=drive_link",
    //   prizes: {
    //     first: "5,000",
    //     second: "2,500",
    //   },
    //   minTeamMembers: 1,
    //   maxTeamMembers: 5,
    //   date_time: null,
    //   start_time: null,
    //   venue: null,
    //   coordinators: [
    //     { name: "David Wiliam Raj", phone: "9790347191" },
    //     { name: "S.NITIN", phone: "8296090231" },
    //     { name: "NITHIN R", phone: "8904444607" },
    //   ],
    // },
  ],
  CH: [
    // {
    //   id: "clw3q9v6e001208l0h6qy7q2a",
    //   name: "AROMATICA",
    //   image: "/assets/events/CH/AROMATICA.jpg",
    //   description:
    //     "Natural perfume-making competition combining chemistry, creativity, and sensory science. Participants design and produce natural perfumes using natural ingredients.",
    //   rules: [
    //     "Only natural ingredients allowed (essential oils, carrier oils, distilled water)",
    //     "No synthetic fragrance oils or artificial ingredients",
    //     "Ethanol and mixing utility provided",
    //     "Participants bring essential oils and natural ingredients",
    //     "Teams 1-4 members from same institution",
    //     "Submit ingredient list with quantities",
    //     "Present in small glass bottles or vials",
    //     "Round 1: Prepare perfume",
    //     "Round 2: Present to judges",
    //     "Judged on smell, presentation, hygiene, materials",
    //   ],
    //   registration_fee: 300,
    //   drive:
    //     "https://drive.google.com/file/d/1mH3KZ25Mox6lbYqmMZqDT5n6Watc838u/view?usp=drive_link",
    //   prizes: {
    //     first: "5,000",
    //     second: "2,500",
    //   },
    //   minTeamMembers: 1,
    //   maxTeamMembers: 4,
    //   date_time: null,
    //   start_time: null,
    //   venue: null,
    //   coordinators: [
    //     { name: "Sheeba", phone: "9310938256" },
    //     { name: "Veerendra", phone: "8147033902" },
    //   ],
    // },
    {
      id: "clw3q9v6e001308l0h6qy7q2b",
      name: "CHEMQUEST",
      image: "/assets/events/CH/CHEMQUEST.jpg",
      description:
        "Chemical engineering treasure hunt where teams embark on a thrilling adventure across campus solving chemistry-based puzzles to uncover clues and locations.",
      rules: [
        "Teams 1-4 members from same institution",
        "Only 1 phone per team (clues via QR code)",
        "Teams must not damage tokens",
        "No sharing answers or clues between teams",
        "Each checkpoint: answer chemistry question",
        "Receive token and next location clue on correct answer",
        "Collect tokens as proof of completion",
        "Final checkpoint: submit all tokens for prize",
        "Sharing answers leads to disqualification",
      ],
      registration_fee: 200,
      drive:
        "https://drive.google.com/file/d/153BNqRCpeQQrEIjqp1xCiw28m7Txl38G/view?usp=drive_link",
      prizes: {
        first: "3,000",
        second: "1,500",
      },
      minTeamMembers: 1,
      maxTeamMembers: 4,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "Kousthub", phone: "7829992205" },
        { name: "Bhavesh", phone: "9080015692" },
      ],
    },
  ],
  CV: [
    {
      id: "clw3q9v6e001408l0h6qy7q2c",
      name: "TrafficX-Smart Intersection Challenge",
      image: "/assets/events/CV/TrafficX.jpg",
      description:
        "Design a working model of a traffic intersection demonstrating proper signals, pedestrian crossings, and smart innovations to reduce congestion and accidents.",
      rules: [
        "Teams 2-4 members, interdisciplinary allowed",
        "Bring own materials, tools, power sources",
        "Only safe and sustainable materials",
        "Model size max 1m × 1m",
        "Built on-site within 4 hours",
        "No pre-made components",
        "Late or incomplete models not evaluated",
        "Round 1: Concept display with basic model",
        "Round 2: 5-minute presentation explaining features",
      ],
      registration_fee: 300,
      drive:
        "https://drive.google.com/file/d/1SGDNrX5V8GbxvaEE9I3inagly4FCOfcV/view?usp=drive_link",
      prizes: {
        first: "5,000",
        second: "2,500",
      },
      requirements: "Venue: Double Lobby for 3 hours",
      minTeamMembers: 2,
      maxTeamMembers: 4,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "MOHAMMAD TAMEEM ZAKARIYA", phone: "8105006039" },
        { name: "MOHAMMAD ZAID", phone: "9103091711" },
        { name: "SAQLAIN PARVEEZ", phone: "6005084196" },
      ],
    },
  ],
  ME: [
    {
      id: "clw3q9v6e001508l0h6qy7q2d",
      name: "Pontification",
      image: "/assets/events/ME/Pontification.jpg",
      description:
        "Bridge design and construction competition emphasizing innovation, strength, and efficient use of materials. Transform ideas into reality through creative engineering.",
      rules: [
        "Time for Round 1: 45 minutes",
        "No extra components beyond those provided",
        "Group size 2-3 members",
        "Interdisciplinary groups allowed",
        "No external help",
        "Don't damage/misuse provided components",
        "Round 1: Design 2D bridge on A3 sheets",
        "Round 2: Make 3D model from provided components",
        "Judged on design aesthetics, sustainability, feasibility, load-bearing capacity",
      ],
      registration_fee: 200,
      drive:
        "https://drive.google.com/file/d/1jhihXPvazhF1Ux1OUNNonApKKPN7Nsep/view?usp=drive_link",
      prizes: {
        first: "3,000",
        second: "1,500",
      },
      minTeamMembers: 2,
      maxTeamMembers: 3,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "ASHISH KUMAR TIWARI", phone: "7411826045" },
        { name: "KAREN ANTHONY", phone: "8147536499" },
        { name: "ABHAY SINGH", phone: "7006562500" },
      ],
    },

    // {
    //   id: "clw3q9v6e001508l0h6qy7q1d",
    //   name: "ONE-PIECE - Hunt | Gather | Build ",

    //   image: "/assets/events/ME/Onepiece.jpg",
    //   description:
    //     "Where Adventure meets engineering in a race against time and wit. ONE-PIECE challenges brains, instincts, and teamwork where every clue leads to creation.",

    //   rules: [
    //     " Teams must rely solely on their own efforts, no outside support or assistance is allowed.",
    //     "Each team should designate one lead member to coordinate decisions.",
    //     "Clues must be solved and tasks must be completed to uncover the hidden components across campus.",
    //     " Interdisciplinary groups are welcomed, and strong teamwork may unlock in-game advantages.",
    //     "Skipping clues or failing assigned tasks will result in time penalties",
    //     " Once the event begins, teams must stay committed until completion and no withdrawals mid challenge will be entertained",
    //   ],
    //   registration_fee: 200,
    //   drive:
    //     "https://drive.google.com/file/d/1dBHH4bpYmXZTDX8yToKSBvYDvRksjUyp/view?usp=drive_link",
    //   prizes: {
    //     first: "3,000",
    //     second: "1,500",
    //   },
    //   minTeamMembers: 4,
    //   maxTeamMembers: 5,
    //   date_time: null,
    //   start_time: null,
    //   venue: null,
    //   coordinators: [{ name: "TBD", phone: "TBD" }],
    // },
  ],
  EEE: [
    // {
    //   id: "clw3q9v6e001608l0h6qy7q2e",
    //   name: "Arc Reactor Wars",
    //   image: "/assets/events/EEE/Arc_Reactor_Wars.jpg",
    //   description:
    //     "Marvel-themed One-day competition teaching practical electronics skills through creating a functional Arc Reactor prototype. Focus on PCB design, soldering, and microcontroller integration.",
    //   rules: [
    //     "Teams 4-5 members",
    //     "Register before event",
    //     "Valid student ID required",
    //     "Laptop with KiCad and Arduino IDE",
    //     "Only provided tools unless approved",
    //     "Designs must be original, completed during event",
    //     "Follow safety protocols",
    //     "Professional behavior expected",
    //     "Misconduct or plagiarism leads to disqualification",
    //     "Strict time limit adherence",
    //   ],
    //   registration_fee: 300,
    //   drive:
    //     "https://drive.google.com/file/d/1kyv2VdFZjmxMdR33yyuNg0fKwUu0Qwwu/view?usp=drive_link",
    //   prizes: {
    //     first: "5,000",
    //     second: "2,500",
    //   },
    //   minTeamMembers: 4,
    //   maxTeamMembers: 5,
    //   date_time: null,
    //   start_time: null,
    //   venue: null,
    //   coordinators: [
    //     { name: "Ranganath S", phone: "7019922146" },
    //     { name: "Nithish N M", phone: "9353636599" },
    //   ],
    // },
  ],
  "AI&ML": [
    {
      id: "clw3q9v6e001708l0h6qy7q2i",
      name: "BGMI THE ULTIMATE SHOWDOWN",
      image: "/assets/events/AIML/BGMI-THE-ULTIMATE-SHOWDOWN.jpg",
      description:
        "Join the ultimate BGMI showdown! Compete with top players, showcase your skills, and win exciting prizes in an action-packed gaming battle",
      rules: [
        "Rules 1. Hackers not allowed",
        "2. Tablets or not allowed ",
        "3. Minimum 2 player's and maximum 4 player's",
        "4. All players must have BGMI account above level 25",
        "5. All players must download All the maps before the tournament",
      ],
      registration_fee: 100,
      drive: "",
      prizes: {
        first: "3,000",
        second: "1,500",
      },
      minTeamMembers: 2,
      maxTeamMembers: 4,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "Bindu Mahanthi", phone: "TBD" },
        { name: "Gouthami B", phone: "TBD" },
        { name: "Harsha", phone: "TBD" },
        { name: "Samanvitha R K", phone: "TBD" },
      ],
    },
    // {
    //   id: "clw3q9v6e001708l0h6qy7q2f",
    //   name: "AI Pixel Animation Challenge",
    //   image: "/assets/events/AIML/AI_Pixel_Animation_Challenge.jpg",
    //   description:
    //     "Merge art and AI by creating animated pixel sprites using generative tools to tell visual stories. Harness cutting-edge AI tools to craft stunning pixel animations.",
    //   rules: [
    //     "Individuals or teams of 2",
    //     "Register before deadline",
    //     "One entry per participant/team",
    //     "Follow event theme",
    //     "Original content created for event",
    //     "No inappropriate or copyrighted content",
    //     "Use approved AI tools",
    //     "Manual pixel art can combine with AI",
    //     "Submit in prescribed format",
    //     "Bring own devices (laptops/tablets)",
    //   ],
    //   registration_fee: 200,
    //   drive:
    //     "https://drive.google.com/file/d/1a134pPC6EugGYGDV4yNQhih-PaLhFvin/view?usp=drive_link",
    //   prizes: {
    //     first: "3,000",
    //     second: "1,500",
    //   },
    //   minTeamMembers: 2,
    //   maxTeamMembers: 2,
    //   date_time: null,
    //   start_time: null,
    //   venue: null,
    //   coordinators: [
    //     { name: "Bindu Mahanthi", phone: "TBD" },
    //     { name: "Gouthami B", phone: "TBD" },
    //     { name: "Harsha", phone: "TBD" },
    //     { name: "Samanvitha R K", phone: "TBD" },
    //   ],
    // },
    {
      id: "clw3q9v6e001808l0h6qy7q2g",
      name: "AI Build-a-thon: Idea to Application",
      image: "/assets/events/AIML/AI_Build_a_thon_Idea_to_Application.jpg",
      description:
        "Fast-paced competition designed to inspire innovation. Transform problem statements into working AI-powered applications within 2.5 hours.",
      rules: [
        "Teams up to 3 members",
        "Register before event",
        "One project per team",
        "Problem statement announced at start",
        "2 hours development time",
        "All projects created during event",
        "Plagiarism or pre-built code leads to disqualification",
        "Any AI framework/API allowed",
        "Internet for coding and model usage only",
        "2-3 minute demo after development",
      ],
      registration_fee: 300,
      drive:
        "https://drive.google.com/file/d/1q2sDpUD3UNU9UBaov5V9tPNHIlJq79wH/view?usp=drive_link",
      prizes: {
        first: "5,000",
        second: "2,500",
      },
      minTeamMembers: 2,
      maxTeamMembers: 3,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "J Bahulika", phone: "TBD" },
        { name: "Angel Susan", phone: "TBD" },
        { name: "Gia Victor", phone: "TBD" },
        { name: "P Ankit", phone: "TBD" },
      ],
    },
  ],
  CG: [
    {
      id: "clw3q9v6e001908l0h6qy7q2h",
      name: "UI FLOW",
      image: "/assets/events/CG/UI_FLOW.jpg",
      description:
        "Evaluate participants' problem-solving, creativity, and front-end development skills. Improve poorly designed interfaces and implement them into functional, responsive prototypes.",
      rules: [
        "Teams 2-3 members",
        "Bring own laptops",
        "Internet for design/development resources only",
        "No plagiarism or pre-built templates",
        "Strict time limits enforced",
        "Round 1: Design Doctor - Identify UI flaws",
        "Round 2:  Code Craft – Prototype Implementation",
        "In this round, participants will receive a JSON file containing structured data that represents components, layout details, or dynamic content.Your task is to convert this JSON file into a functional user interface. You can use any tool, framework, or AI assistance (including V0, Vibe Code, or any AI-powered UI generator).",
        "All assets must be royalty-free",
        "Code must be original, clean, modular",
      ],
      registration_fee: 300,
      drive:
        "https://drive.google.com/file/d/1Sy3-hVRFmcLA2vIrAB57rRrolJdzedc1/view?usp=sharing",
      prizes: {
        first: "5,000",
        second: "2,500",
      },
      minTeamMembers: 2,
      maxTeamMembers: 3,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "Harshath R", phone: "7348950177" },
        { name: "Diya Oommen", phone: "9845106872" },
      ],
    },
    {
      id: "clw3q9v6e002008l0h6qy7q2i",
      name: "Meme Arena",
      image: "/assets/events/CG/Meme_Arena.jpg",
      description:
        "Light-hearted creative design competition where participants create pixel-style memes centered around technology and college life. Blend humor, creativity, and retro design aesthetics.",
      rules: [
        "Teams 1-2 members (individual encouraged)",
        "Bring own laptops",
        "Canvas size: 595x842 pixels",
        "Any tool allowed",
        "Duration: 3 hours total",
        "Theme announced on-the-spot",
        "Submissions must be original",
        "No offensive/inappropriate/copyrighted content",
        "Time limits strictly enforced",
        "Judged on creativity, humor, pixel art execution, virality",
      ],
      registration_fee: 200,
      drive:
        "https://drive.google.com/file/d/1QRf8Kw9ETunnti4rYOpz0zN_7sUgcLjb/view?usp=drive_link",
      prizes: {
        first: "3,000",
        second: "1,500",
      },
      minTeamMembers: 1,
      maxTeamMembers: 2,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "NITISHKUMAR PATIL", phone: "8123552246" },
        { name: "HARISMITHA G", phone: "7338121844" },
      ],
    },
  ],
  CSE: [
    {
      id: "clw3q9v6e002108l0h6qy7q2j",
      name: "PixelCraft - Modular Web Development Challenge",
      image:
        "/assets/events/CSE/PixelCraft_Modular_Web_Development_Challenge.jpg",
      description:
        "Front-end web design contest where participants craft visually appealing and functional websites using modular design principles. Focus on clean layout, responsiveness, and interactive elements.",
      rules: [
        "Teams 2-3 members",
        "Only HTML, CSS, JavaScript allowed",
        "No frameworks, libraries, or backend technologies",
        "All code must be original",
        "No templates or copied code",
        "Modular design with reusability required",
        "Component-based structure",
        "No mobile phones allowed",
        "No AI tools allowed",
      ],
      registration_fee: 200,
      drive:
        "https://drive.google.com/file/d/1c5IL83neqc-dbMrslbxYbQA-Sl9Jcpsf/view?usp=drive_link",
      prizes: {
        first: "3,000",
        second: "1,500",
      },
      minTeamMembers: 2,
      maxTeamMembers: 3,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "Prabjyot", phone: "8899640581" },
        { name: "Bushra", phone: "9964933575" },
        { name: "Danish", phone: "9103742990" },
        { name: "Deeksha", phone: "7019917641" },
      ],
    },
    // {
    //   id: "clw3q9v6e002208l0h6qy7q2k",
    //   name: "Pixel Gauntlet - The Pixel Unlocked",
    //   image: "/assets/events/CSE/Pixel_Gauntlet_The_Pixel_Unlocked.jpg",
    //   description:
    //     "Intense and fast-paced coding adventure where logic, cryptography, and problem-solving collide. Battle through code debugging and puzzle-solving challenges to reconstruct a hidden digital artifact.",
    //   rules: [
    //     "Solo or duo participation",
    //     "Integrates coding, logical reasoning, cryptography",
    //     "Sequential stages, no skipping allowed",
    //     "All debugging and solutions performed live",
    //     "No pre-written code or online solvers",
    //     "No collaboration between teams",
    //     "Accuracy and logical deduction crucial",
    //   ],
    //   registration_fee: 200,
    //   drive:
    //     "https://drive.google.com/file/d/10ZFPXtCvhloldAJ0xEhVKcC4vMCPM96F/view?usp=drive_link",
    //   prizes: {
    //     first: "3,000",
    //     second: "1,500",
    //   },
    //   minTeamMembers: 1,
    //   maxTeamMembers: 2,
    //   date_time: null,
    //   start_time: null,
    //   venue: null,
    //   coordinators: [
    //     { name: "Mussarat", phone: "9353801953" },
    //     { name: "Nikitha", phone: "7975161965" },
    //     { name: "Arfa", phone: "7019556615" },
    //     { name: "Danish", phone: "9103742990" },
    //   ],
    // },
    // {
    //   id: "clw3q9v6e002308l0h6qy7q2l",
    //   name: "Traversal Trials - The Pixel Path",
    //   image: "/assets/events/CSE/Traversal_Trials_The_Pixel_Path.jpg",
    //   description:
    //     "Step into the world of binary trees with challenges designed to test understanding of tree data structures and traversal techniques. Decode, reconstruct, and traverse trees to unveil final secret.",
    //   rules: [
    //     "Solo or duo participation",
    //     "Revolves around tree traversal (Inorder, Preorder, Postorder)",
    //     "Derive/reconstruct traversal outputs accurately",
    //     "Logical reasoning and pattern recognition essential",
    //     "All solutions original and written during event",
    //     "No external references",
    //     "Challenge sequencing with increasing complexity",
    //   ],
    //   registration_fee: 300,
    //   drive:
    //     "https://drive.google.com/file/d/1MYXq8wUTiFILK47GH_b2fKtVimsp0GUt/view?usp=drive_link",
    //   prizes: {
    //     first: "5,000",
    //     second: "2,500",
    //   },
    //   minTeamMembers: 1,
    //   maxTeamMembers: 2,
    //   date_time: null,
    //   start_time: null,
    //   venue: null,
    //   coordinators: [
    //     { name: "Basavaraj", phone: "8073871635" },
    //     { name: "Ankita", phone: "9243620020" },
    //     { name: "Mussarrat", phone: "9353801953" },
    //     { name: "Sanmay", phone: "8088387063" },
    //   ],
    // },
    {
      id: "clw3q9v6e002408l0h6qy7q2m",
      name: "Binary Build - The Modular Tree Challenge",
      image: "/assets/events/CSE/Binary_Build_The_Modular_Tree_Challenge.jpg",
      description:
        "Engaging tree-structured coding event challenging participants to repair, balance, and reconstruct modular binary trees. Apply understanding of BSTs, AVL, and tree variants to rebuild broken structures.",
      rules: [
        "Teams 2-3 members",
        "Centers on binary tree manipulation, balancing, reconstruction",
        "Each task contributes to revealing digital artifact",
        "Every stage coded live",
        "No pre-written code or online tools",
        "No collaboration between teams",
        "No pre-built modules or AI-assisted solutions",
      ],
      registration_fee: 300,
      drive:
        "https://drive.google.com/file/d/1F4_iUET4A7sg_rrZdZrgAgPdM9z7cWdi/view?usp=drive_link",
      prizes: {
        first: "5,000",
        second: "2,500",
      },
      minTeamMembers: 2,
      maxTeamMembers: 3,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "Deeksha", phone: "7019917641" },
        { name: "Krish", phone: "7889608840" },
        { name: "Bushra", phone: "9964933575" },
        { name: "Arfa", phone: "7019556615" },
      ],
    },
  ],
  ISE: [
    // {
    //   id: "clw3q9v6e002508l0h6qy7q2n",
    //   name: "Algo Fix & Forge",
    //   image: "/assets/events/ISE/Algo_Fix_Forge.jpg",
    //   description:
    //     "Coding challenge where participants repair and optimize broken algorithm implementations. Debug tricky logic, handle edge cases, and transform faulty code into efficient, reliable solutions.",
    //   rules: [
    //     "Exactly 3 members per team",
    //     "Two rounds: Fix & Debug, then Optimize & Forge",
    //     "Bring college ID, arrive 15 minutes early",
    //     "Submit code within time limit",
    //     "Plagiarism or code copying leads to disqualification",
    //     "Round 1 judged on correctness",
    //     "Round 2 judged on optimization and efficiency",
    //     "Unethical behavior prohibited",
    //   ],
    //   registration_fee: 200,
    //   drive:
    //     "https://drive.google.com/file/d/1rke_2zIDNqzXjkcuOZbEnij22qGUasWN/view?usp=drive_link",
    //   prizes: {
    //     first: "3,000",
    //     second: "1,500",
    //   },
    //   minTeamMembers: 1,
    //   maxTeamMembers: 3,
    //   date_time: null,
    //   start_time: null,
    //   venue: null,
    //   coordinators: [
    //     { name: "Lakshaya I", phone: "7892925234" },
    //     { name: "Nayana D", phone: "8123397879" },
    //   ],
    // },
    {
      id: "clw3q9v6e002608l0h6qy7q2o",
      name: "PixHunter",
      image: "/assets/events/ISE/PixHunter.jpg",
      description:
        "Exciting cybersecurity event inspired by real-world competitions. Step into role of digital detectives uncovering hidden information within images and across the internet using OSINT and digital forensics.",
      rules: [
        "Exactly 3 members per team",
        "2 rounds: Geolocation Hunt, Identity Unveil",
        "Bring college ID, arrive 15 minutes early",
        "Internet for event-related research only",
        "No hacking, phishing, or unauthorized data access",
        "Document investigation process",
        "Submit findings within time limit",
        "No sharing answers between teams",
        "Unethical behavior leads to disqualification",
      ],
      registration_fee: 300,
      drive:
        "https://drive.google.com/file/d/1LShRHrQ7onY0VAycuGNTyfYgIWIWOUFw/view?usp=drive_link",
      prizes: {
        first: "5,000",
        second: "2,500",
      },
      requirements:
        "Internet-enabled computers, Google Maps, TinEye, ExifTool access",
      minTeamMembers: 1,
      maxTeamMembers: 3,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "Naresh M", phone: "7975482136" },
        { name: "S.Nikhil Aradhya", phone: "8431707289" },
        { name: "SR BHUVANESH KUMAR", phone: "8792619729" },
      ],
    },
    {
      id: "clw3q9v6e002708l0h6qy7q2p",
      name: "ESCAPE ROOM",
      image: "/assets/events/ISE/ESCAPE_ROOM.jpg",
      description:
        "Immersive, hands-on experience in computational problem-solving and cryptography. Use advanced techniques in logic, data analysis, and cipher-cracking to progress through locked virtual stages.",
      rules: [
        "Teams 2-3 members",
        "Bring college ID, arrive 15 minutes early",
        "Time management: 1 hour for puzzles",
        "Round 1: Solve 4 sequential puzzles",
        "Puzzle types: Logic, binary decoding, SQL, cryptography",
        "All team members can discuss and solve together",
        "No malpractice or external help allowed",
        "Round 2: Form Final Escape Code from Round 1 answers",
        "Only one final submission allowed",
      ],
      registration_fee: 300,
      drive:
        "https://drive.google.com/file/d/1xIHKSOukg6b0OH6Afcx-vzDnKx0I2KHr/view?usp=drive_link",
      prizes: {
        first: "5,000",
        second: "2,500",
      },
      minTeamMembers: 1,
      maxTeamMembers: 3,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "Ananya Bera", phone: "8310458929" },
        { name: "Chaitanya.M", phone: "9380261673" },
      ],
    },
  ],
  CD: [
    // {
    //   id: "clw3q9v6e002808l0h6qy7q2q",
    //   name: "Block by Block - Power BI Modular Championship",
    //   image:
    //     "/assets/events/CD/Block_by_Block_Power_BI_Modular_Championship.jpg",
    //   description:
    //     "Data visualization and analytics challenge testing ability to transform raw datasets into meaningful insights using Microsoft Power BI. Build interactive dashboards that effectively communicate stories.",
    //   rules: [
    //     "Teams 2-4 members",
    //     "Bring laptops with Power BI installed",
    //     "Internet for dataset understanding and documentation only",
    //     "No pre-built dashboards or templates",
    //     "Round 1: Analyze dataset, identify trends and patterns",
    //     "Round 2: Design interactive Power BI dashboard",
    //     "Use DAX functions, relationships, calculated measures",
    //     "Include KPIs, charts, slicers for interactivity",
    //     "All visuals must be original",
    //     "Include explanation of visualization choices",
    //   ],
    //   registration_fee: 200,
    //   drive:
    //     "https://drive.google.com/file/d/12dNBzyvQF7p_K7IEroy5BmrEdr3v6M3G/view?usp=drive_link",
    //   prizes: {
    //     first: "3,000",
    //     second: "1,500",
    //   },
    //   minTeamMembers: 2,
    //   maxTeamMembers: 4,
    //   date_time: null,
    //   start_time: null,
    //   venue: null,
    //   coordinators: [
    //     { name: "Surabhi", phone: "6363898557" },
    //     { name: "Abhishek", phone: "9380533700" },
    //   ],
    // },
    {
      id: "clw3q9v6e002908l0h6qy7q2r",
      name: "DATA-DRIVEN RIDDLES CONTEST",
      image: "/assets/events/CD/DATA_DRIVEN_RIDDLES_CONTEST.jpg",
      description:
        "Thrilling data interpretation and problem-solving challenge testing analytical thinking, logical reasoning, and data literacy. Solve series of data-based riddles, puzzles, and real-world scenarios.",
      rules: [
        "Teams 2-4 members",
        "Bring own laptops",
        "Internet limited to documentation and references only",
        "No AI tools or pre-built analysis templates",
        "Round 1: Crack data-driven riddles and logic-based problems",
        "Use analytical reasoning and interpretation",
        "Only Excel or Power BI tools may be used",
        "Submit reasoning or steps leading to answer",
        "Speed, accuracy, logic determines qualification",
        "Round 2: Solve real-world data scenario",
      ],
      registration_fee: 300,
      drive:
        "https://drive.google.com/file/d/1OWgpCOzZVmF-eeUPquwpNnnRiRrSBNH6/view?usp=drive_link",
      prizes: {
        first: "5,000",
        second: "2,500",
      },
      minTeamMembers: 2,
      maxTeamMembers: 4,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "Rakshitha", phone: "7892316603" },
        { name: "Shashank", phone: "7022742719" },
      ],
    },
  ],
  MEGA: [
    {
      id: "clw3q9v6e002b08l0h6qy7q2t",
      name: "PixelGensis Hackathon",
      image: "/assets/events/MEGA/CYBER_FORGE.png",
      description:
        "The 24-Hour Software Hackathon is designed as a fast-paced and challenging coding event, encouraging participants to showcase their innovation, technical skills, and teamwork. The event aims to push participants to ideate, develop, and present a functional software solution in just 24 hours, based on a theme revealed at the beginning of the event.",
      rules: [
        "Teams 2-4 members",
        "24-hour duration",
        "Design models performing tasks through mechanical steps",
        "Promotes creativity and teamwork",
        "Critical thinking and out-of-box innovation required",
        "All work must be original",
        "Interdisciplinary teams encouraged",
      ],
      registration_fee: 500,
      drive: null,
      prizes: {
        first: "15,000",
        second: "7,500",
      },
      minTeamMembers: 2,
      maxTeamMembers: 4,
      date_time: null,
      start_time: null,
      venue: null,
      coordinators: [
        { name: "S Naren Kumar", phone: "8123816894" },
        { name: "Shravan Ramakunja", phone: "636850438" },
        { name: "Surabhi M R", phone: "6363898557" },
        { name: " S Pavan ", phone: "9113936062" },
        { name: "Soujanya Maharudra Bailawad ", phone: "9380594015" },
        { name: "Rana Biswas", phone: "9019849813" },
      ],
    },
  ],
};

export default eventsData;
export const getdepartmentEvents = (departmentName: departmentsType) => {
  return eventsData[departmentName];
};

export const getdepartmentEvent = (
  departmentName: departmentsType,
  id: string
) => {
  const events = getdepartmentEvents(departmentName);
  let index: number;
  events.forEach((data, i) => {
    if (data.id == id) index = i + 1;
  });
  // @ts-expect-error Index will be defined due to for each loop
  if (!index) throw new Error("Couldn't find the event");
  return events[index - 1];
};

export const getEventDetailsById = (id: string) => {
  for (const department of departmentsNames) {
    const events = eventsData[department];
    for (const event of events) {
      if (event.id == id) {
        return { event, club: department };
      }
    }
  }

  return undefined;
};
