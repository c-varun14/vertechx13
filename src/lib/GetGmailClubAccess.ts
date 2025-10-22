import { departmentsType } from "./eventsData";

const clubEmails = {
  Dhwani: ["yuvrajwhitefield2019@gmail.com"],
  Nrityatrix: ["darshan14200400@gmail.com", "ashrv2005@gmail.com"],
  Raagabhinaya: [
    "aishwaryaanand1141@gmail.com",
    "shachinbharath28@gmail.com",
    "srksjpuc716@gmail.com",
  ],
  Toastmasters: ["saikkarthik0307@gmail.com"],
  Saahitya: ["maclinflorida207@gmail.com"],
  Aakriti: ["pushpanjaligc8@gmail.com", "adityagoled2002@gmail.com"],
  ALL: [
    "c.varun149@gmail.com",
    "heerath.bhat@gmail.com",
    "hameemshan@gmail.com",
    "saikrishnachakkara@gmail.com",
    "greeshmadj0@gmail.com",
    "manojnambhat@gmail.com",
    "varun1492006@gmail.com",
    "swayammvjce2025@gmail.com",
    "theofficialsaahitya@gmail.com",
  ],
};

export const getGmailClubAccess = (
  gmail: string
): departmentsType | "ALL" | undefined => {
  for (const [club, emails] of Object.entries(clubEmails)) {
    //@ts-expect-error The returned club is of clubsTyle
    if (emails.includes(gmail)) return club;
  }
};
