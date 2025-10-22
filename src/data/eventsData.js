import { z } from "zod";

export const clubsType = [
    "Dhwani",
    "Nrityatrix",
    "Raagabhinaya",
    "Toastmasters",
    "Saahitya",
    "Aakriti"
];

export const clubsSchema = z.enum([
    "Dhwani",
    "Nrityatrix",
    "Raagabhinaya",
    "Toastmasters",
    "Aakriti",
    "Saahitya",
]);

export const eventsData = {
    Dhwani: [
        {
            id: "clw3q9v6e000408l0h6qy7q1z",
            no: 1,
            name: "BATTLE OF BANDS: Clash of Talent, Power and Pure Music Energy",
            description:
                "The ultimate stage for rock stars to battle it out with electrifying performances. Bring your band and let your music leave the crowd in awe.",
            rules: [
                "Teams of 3-8 members.",
                "Performance time: 8 minutes (including setup).",
                "At least one original composition is encouraged.",
            ],
            registration_fee: 1000,
            prizes: {
                first: "20,000",
                second: "10,000",
            },
            date_time: "May 31, 1:30 PM - 3:30 PM",
            venue: "Basketball Stage",
            coordinators: [
                { name: "Onkar", phone: "9234236426" },
                { name: "S Rithanya", phone: "8310541198" },
                { name: "Shravya Kote", phone: "8792635071" },
            ],
            minTeamMembers: 3,
            maxTeamMembers: 8,
            image: "/assets/clubevents/dhwani/battle_bands.svg",
        },
        {
            id: "clw3q9v6e000308l0cajwj9tt",
            no: 2,
            name: "DJ Night",
            description:
                "Join us for an electrifying DJ Night featuring top talents and an unforgettable evening of music, lights, and energy.",
            rules: [
                "Free for MVJCE students and event participants.",
                "Entry fee for others: ₹200.",
                "Event starts at 4:00 PM sharp.",
            ],
            registration_fee: 300,
            prizes: {
                first: "-",
                second: "-",
            },
            date_time: "31 May, 4:00 PM onwards",
            venue: "MVJCE Campus",
            coordinators: [
                { name: "DJ Naveen", phone: "-" },
                { name: "DJ Gagan", phone: "-" },
            ],
            minTeamMembers: 1,
            maxTeamMembers: 1,
            image: "/assets/clubevents/dj-bg.png",
        },
    ],
    Nrityatrix: [
        {
            id: "clw3q9v6e000808l0h6qy7q1z",
            no: 1,
            name: "VIRASAT ki Jugalbandi - Duet of Heritage [DUET DANCE]",
            description:
                "Two is better than one! Perform in perfect synchronization with your partner in a celebration of coordination and rhythm.",
            rules: [
                "Teams of 2 members.",
                "Time limit: 3+1 minute (including setup).",
                "Props allowed; hazardous materials prohibited.",
            ],
            registration_fee: 320,
            prizes: {
                first: "3,000",
                second: "1,500",
            },
            date_time: "May 31, 11:00 AM - 1:00 PM",
            venue: "MVJCE Amphitheatre",
            coordinators: [
                { name: "Damini", phone: "8904075454" },
                { name: "Jeevan", phone: "7892066331" },
            ],
            minTeamMembers: 2,
            maxTeamMembers: 2,
            image: "/assets/clubevents/nrityatrix/duet_dance.svg",
        },
        {
            id: "clw3q9v6e000908l0h6qy7q1z",
            no: 2,
            name: "Taandav X Takedown - Where Legends Clash",
            description:
                "Bring the heat to the floor in this spontaneous dance showdown. Unpredictable beats and raw talent take center stage.",
            rules: [
                "This is an individual event, conducted in 1 vs 1 format.",
                "Music will be played spontaneously on the spot.",
            ],
            registration_fee: 250,
            prizes: {
                first: "2,000",
                second: "1,000",
            },
            date_time: "May 31, 1:00 PM - 3:00 PM",
            venue: "Lonely Tree",
            coordinators: [
                { name: "Charan", phone: "7892040913" },
                { name: "Chetan", phone: "6363205414" },
            ],
            minTeamMembers: 1,
            maxTeamMembers: 1,
            image: "/assets/clubevents/nrityatrix/battle.svg",
        },
        {
            id: "clw3q9v6e001008l0h6qy7q1z",
            no: 3,
            name: "Groove Riot [INDO-WESTERN GROUP]",
            description:
                "Showcase your team's creativity and energy through captivating choreography that represents the vibrancy of Indo-Western dance styles.",
            rules: [
                "Teams of 8-15 members.",
                "Time limit: 5+2 minutes (including setup and conclusion).",
                "Props encouraged, hazardous materials prohibited.",
            ],
            registration_fee: 1200,
            prizes: {
                first: "8,000",
                second: "5,000",
            },
            date_time: "May 31, 10:30 AM - 11:30 AM",
            venue: "Seminar Hall 2",
            coordinators: [
                { name: "Manasvini", phone: "9606793908" },
                { name: "Neethu", phone: "9686742350" },
            ],
            minTeamMembers: 8,
            maxTeamMembers: 15,
            image: "/assets/clubevents/nrityatrix/western_group.svg",
        },
    ],
    Raagabhinaya: [
        {
            id: "clw3q9v6e001808l0h6qy7q1z",
            no: 1,
            name: "Raahgiri - STREET PLAY",
            description:
                "Command the streets with impactful performances that bring societal issues to the forefront. Fuse energy and creativity to inspire change while honoring the values of VIRASAT.",
            rules: [
                "Teams of 12-20 members.",
                "Time limit: 7+3 minutes (including setup & conclusion).",
                "Props allowed; electronic instruments prohibited.",
            ],
            registration_fee: 800,
            prizes: {
                first: "8,000",
                second: "5,000",
            },
            date_time: "May 31, 10:30 AM - 11:30 AM",
            venue: "Basketball Stage",
            coordinators: [
                { name: "Heerath", phone: "9797243748" },
                { name: "Preetika", phone: "9622431393" },
            ],
            minTeamMembers: 12,
            maxTeamMembers: 20,
            image: "/assets/clubevents/raagabhinaya/street_play.svg",
        },
        {
            id: "clw3q9v6e001908l0h6qy7q1z",
            no: 2,
            name: "Rangmanch - IMPROV",
            description:
                "Unleash your spontaneity and humor in this improvisation event where quick thinking takes the stage. Create magic on the spot.",
            rules: [
                "Teams of 2-3 participants.",
                "Scenarios provided on the spot.",
                "Multiple entries from an institution are allowed.",
            ],
            registration_fee: 300,
            prizes: {
                first: "4,000",
                second: "2,500",
            },
            date_time: "May 31, 11:30 AM - 1:30 PM",
            venue: "Seminar Hall 2",
            coordinators: [
                { name: "Aravind", phone: "9380016889" },
                { name: "Paul", phone: "7411508842" },
            ],
            minTeamMembers: 2,
            maxTeamMembers: 3,
            image: "/assets/clubevents/raagabhinaya/improv.svg",
        },
    ],
    Saahitya: [
        {
            id: "clw3q9v6e002008l0h6qy7q1z",
            no: 1,
            name: "ChronoChatter - Timeless talk, 60 seconds sharp.",
            description:
                "Test your wit and spontaneity in this fast-paced speaking challenge. Keep your thoughts sharp, your words sharper, and impress the audience in JUST A MINUTE.",
            rules: [
                "Individual event.",
                "Avoid hesitation, repetition, or deviation.",
                "The use of Queen's English is encouraged.",
            ],
            registration_fee: 200,
            prizes: {
                first: "4,000",
                second: "2,000",
            },
            date_time: "31 May, 10:30 AM - 12:30 PM",
            venue: "Seminar Hall 3",
            coordinators: [
                { name: "Maria", phone: "6362748820" },
                { name: "Nadeem", phone: "6372525448" },
            ],
            minTeamMembers: 1,
            maxTeamMembers: 1,
            image: "/assets/clubevents/saahitya/jam.svg",
        },
        {
            id: "clw3q9v6e002208l0h6qy7q1z",
            no: 2,
            name: "The Cipher Sprint - Literary Treasure Hunt",
            description:
                "Embark on a thrilling adventure through words and riddles. Crack literary clues and solve mystery challenges to uncover hidden treasures where time is the ultimate judge.",
            rules: [
                "Teams of 2-3 participants.",
                "Participants must stay within the specified boundaries.",
                "No collaboration between teams will be tolerated.",
            ],
            registration_fee: 500,
            prizes: {
                first: "5,000",
                second: "3,000",
            },
            date_time: "31 May, 1:30 PM - 4:00 PM",
            venue: "Open area near 034",
            coordinators: [
                { name: "Sravan", phone: "7204700369" },
                { name: "Vanshika", phone: "7892676862" },
            ],
            minTeamMembers: 2,
            maxTeamMembers: 3,
            image: "/assets/clubevents/saahitya/literary_treasure_hunt.svg",
        },
        {
            id: "clw3q9v6e002508l0h6qy7q1z",
            no: 3,
            name: "The Poetic Gavel - Poet's Auction",
            description:
                "Step into the world of Slam Poetry but with a twist! The Poet's Auction challenges teams to craft powerful, original poems while battling in an exhilarating auction for their words. Combine poetic artistry with strategy and performance as you bring your creations to life.",
            rules: [
                "Solo event",
                "Languages include English and Hindi",
                "Participants must bid for words and compose a poem.",
                "20 minutes for the word auction.",
                "30 minutes to write your poem.",
                "2 minutes to perform on stage, slam poetry style.",
            ],
            registration_fee: 200,
            prizes: {
                first: "2,000",
                second: "1,000",
            },
            date_time: "31 May, 9:00 AM - 11:00 AM",
            venue: "Gavel's Seminar Hall",
            coordinators: [
                { name: "Mussarrat", phone: "9353801953" },
                { name: "Shivani", phone: "6360584283" },
            ],
            minTeamMembers: 1,
            maxTeamMembers: 1,
            image: "/assets/clubevents/saahitya/poets_auction.svg",
        },
        {
            id: "clw3q9v6e002608l0h6qy7q1z",
            no: 4,
            name: "The Catalyst Chain - Design Domino",
            description:
                "Unleash your inner designer to create stunning narratives through visuals. Build upon each domino for a unique chain of ideas.",
            rules: [
                "Solo Event.",
                "Time limit: 75 minutes.",
                "Twists revealed every 10 mins.",
                "Submission in digital (JPEG, PNG, or PDF).",
            ],
            registration_fee: 150,
            prizes: {
                first: "2,500",
                second: "1,500",
            },
            date_time: "31 May, 10:00 AM - 11:00 AM",
            venue: "Lab",
            coordinators: [
                { name: "Aravind", phone: "9740181866" },
                { name: "Sanskritthi", phone: "9663395425" },
            ],
            minTeamMembers: 1,
            maxTeamMembers: 1,
            image: "/assets/clubevents/saahitya/design_domino.svg",
        },
        {
            id: "clw3q9v6e002708l0h6qy7q1z",
            no: 5,
            name: "Kannada Kalarava",
            description:
                "Kannada Kalarava is a vibrant event dedicated to showcasing the richness of Karnataka's culture, Kannada language as well as its literature. Participants will engage in a series of rounds that test their knowledge, creativity and fluency in Kannada.",
            rules: ["Team of 2 participants.", "4 round event."],
            registration_fee: 300,
            prizes: {
                first: "3,000",
                second: "2,000",
            },
            date_time: "31 May, 11:30 AM - 1:30 PM",
            venue: "Seminar Hall 1",
            coordinators: [
                { name: "Kavita", phone: "8660761775" },
                { name: "Darshan", phone: "8073797091" },
            ],
            minTeamMembers: 2,
            maxTeamMembers: 2,
            image: "/assets/clubevents/saahitya/kannada_kalarava.svg",
        },
    ],
    Aakriti: [
        {
            id: "clw3q9v6e000208l0fn9g4c5c",
            no: 1,
            name: "Doodle on Clay",
            description:
                "Transform plain ceramics into masterpieces by adding intricate and vibrant doodles. A perfect blend of creativity and craftsmanship.",
            rules: [
                "Individual event.",
                "Time limit: 2.5 hours + 30 minutes.",
                "Participants must bring their own ceramic objects (plate, mug, tile, or vase).",
            ],
            registration_fee: 250,
            prizes: {
                first: "2,000",
                second: "1,000",
            },
            date_time: "31 May, 11:00 AM - 12:30 PM",
            venue: "Classroom 314",
            coordinators: [
                { name: "Azezzah", phone: "9242107871" },
                { name: "Dhanush", phone: "6360952142" },
            ],
            minTeamMembers: 1,
            maxTeamMembers: 1,
            image: "/assets/clubevents/aakriti/ceramic.svg",
        },
        {
            id: "clw3q9v6e000408l0h0jh6zsa",
            no: 2,
            name: "Rangoli Rhapsody",
            description:
                "Celebrate Indian traditions by crafting stunning rangoli designs with vibrant colors. Showcase your skills and bring your designs to life.",
            rules: [
                "Individual participation.",
                "Time limit: 2.5 hours + 30 minutes.",
                "Bring your own materials.",
            ],
            registration_fee: 150,
            prizes: {
                first: "1,500",
                second: "800",
            },
            date_time: "31 May, 11:00 AM - 2:00 PM",
            venue: "Double Lobby",
            coordinators: [
                { name: "Ritesh", phone: "9620571230" },
                { name: "Chandana S H", phone: "9739844329" },
            ],
            minTeamMembers: 1,
            maxTeamMembers: 1,
            image: "/assets/clubevents/aakriti/rangoli.svg",
        },
        {
            id: "clw3q9v6e000508l0g1kw58em",
            no: 3,
            name: "Mandala Magic",
            description:
                "A Mandala Art Competition offers participants a chance to explore patterns, symmetry, and spiritual symbolism through intricate designs. It encourages mindfulness, creativity, and precision in creating visually captivating circular artwork. The event emphasizes detail, harmony, originality, and adherence to the theme provided.",
            rules: [
                "Individual competition.",
                "Time limit: 2.5 hours + 30 minutes.",
                "Only black pens, fine liners, and pencils are allowed.",
            ],
            registration_fee: 200,
            prizes: {
                first: "3,000",
                second: "1,500",
            },
            date_time: "31 May, 12:30 PM - 2:00 PM",
            venue: "Classroom 314",
            coordinators: [
                { name: "Amithesh C", phone: "9113543283" },
                { name: "Sambhardha", phone: "8867054035" },
            ],
            minTeamMembers: 1,
            maxTeamMembers: 1,
            image: "/assets/clubevents/aakriti/mandala_magic.svg",
        },
    ],
    Toastmasters: [
        {
            id: "clw3q9v6e000608l0hr9zhq3d",
            no: 1,
            name: "Katha Yatra - Slide Thru Stories",
            description:
                "The Ultimate Storytelling Challenge Craft imaginative narratives driven by surprise visual prompts. Spin tales that captivate and leave a lasting impression on the audience.",
            rules: [
                "Individual event.",
                "Minimum: 3 minutes, Maximum: 5 minutes.",
                "Incorporate all provided visual prompts.",
            ],
            registration_fee: 200,
            prizes: {
                first: "2,000",
                second: "1,000",
            },
            date_time: "31 May, 12:30 PM - 2:00 PM",
            venue: "Seminar Hall 4",
            coordinators: [{ name: "Aadil", phone: "8610912825" }],
            minTeamMembers: 1,
            maxTeamMembers: 1,
            image: "/assets/clubevents/toastmasters/slide_thru_stories.svg",
        },
        {
            id: "clw3q9v6e000708l0fp5ep3fw",
            no: 2,
            name: "Virodh Vodh - Turn Coat Debate",
            description:
                "Think Fast. Argue Both Sides. Adapt Instantly. A debate like no other, where you argue both sides of a motion. Quick thinking and adaptability are your best allies in this dynamic contest.",
            rules: ["Individual event.", "Switch stances on cue.", "2 Round event."],
            registration_fee: 200,
            prizes: {
                first: "2,000",
                second: "1,000",
            },
            date_time: "31 May, 9:30 AM - 11:30 AM",
            venue: "Seminar Hall 4",
            coordinators: [{ name: "Preethi", phone: "7760868083" }],
            minTeamMembers: 1,
            maxTeamMembers: 1,
            image: "/assets/clubevents/toastmasters/turn_coat_debate.svg",
        },
        {
            id: "clw3q9v6e000808l0fmlt4c87",
            no: 3,
            name: "Sabha Sutradhar - Elevate your pitch",
            description:
                "The Ultimate Pitch Challenge Deliver the ultimate pitch in this challenge where persuasion meets clarity. Convince the audience and judges of your vision in minutes.",
            rules: [
                "Individual event.",
                "Time limit: Maximum of 3 minutes.",
                "Use provided visuals or props effectively.",
            ],
            registration_fee: 200,
            prizes: {
                first: "2,000",
                second: "1,000",
            },
            date_time: "31 May, 11:30 AM - 12:30 PM",
            venue: "Seminar Hall 4",
            coordinators: [{ name: "Trisha", phone: "8904625443" }],
            minTeamMembers: 1,
            maxTeamMembers: 1,
            image: "/assets/clubevents/toastmasters/elevate.svg",
        },
    ],
};

export default eventsData;

export const getClubEvents = (clubName) => {
    return eventsData[clubName] || [];
};

export const getClubEvent = (clubName, id) => {
    const events = getClubEvents(clubName);
    let index;
    events.forEach((data) => {
        if (data.id == id) index = data.no;
    });
    if (!index) throw new Error("Event not found");
    return events[index - 1];
};

export const getEventDetailsById = (id) => {
    for (const event of eventsData.Dhwani) {
        if (event.id == id) return { event, club: "Dhwani" };
    }
    for (const event of eventsData.Aakriti) {
        if (event.id == id) return { event, club: "Aakriti" };
    }
    for (const event of eventsData.Saahitya) {
        if (event.id == id) {
            return { event, club: "Saahitya" };
        }
    }
    for (const event of eventsData.Toastmasters) {
        if (event.id == id) return { event, club: "Toastmasters" };
    }
    for (const event of eventsData.Nrityatrix) {
        if (event.id == id) return { event, club: "Nrityatrix" };
    }
    for (const event of eventsData.Raagabhinaya) {
        if (event.id == id) return { event, club: "Raagabhinaya" };
    }
    return undefined;
};

// Helper function to get all events from all clubs
export const getAllEvents = () => {
    const allEvents = [];
    Object.keys(eventsData).forEach(clubName => {
        eventsData[clubName].forEach(event => {
            allEvents.push({
                ...event,
                club: clubName
            });
        });
    });
    return allEvents;
};
