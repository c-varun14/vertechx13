export interface Event {
  id: string;
  name: string;
  description: string;
  rules: string[];
  registration_fee: number;
  prizes: {
    first: string;
    second: string;
  };
  date_time: string | null;
  start_time: Date | null;
  coordinators: {
    name: string;
    phone: string;
  }[];
  venue: string | null;
  minTeamMembers: number;
  maxTeamMembers: number;
  image: string;
  drive: string | null;
}

export interface Club {
  id: string;
  name: string;
  description: string;
  image: string;
}

// export interface ClubEvent {
//   id: string;
//   title: string;
//   description: string;
//   rules: string[];
//   date: string;
//   time: string;
//   fee: string;
//   prize1: string;
//   prize2: string;
//   image: string;
// }
