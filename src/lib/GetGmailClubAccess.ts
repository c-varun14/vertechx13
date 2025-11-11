import { departmentsType } from "./eventsData";

const clubEmails = {
  ALL: [
    "vertechx13.0@gmail.com",
    "khanakbjuttiyavar@gmail.com",
    "saisumedh6361@gmail.com",
    "heerath.bhat@gmail.com",
    "hameemshan@gmail.com",
    "varun1492006@gmail.com",
    "snarenkumar30@gmail.com",
    "mrsurabhi1704@gmail.com",
    "k93010217@gmail.com",
    "shravanramakunja@gmail.com",
    "raoakshatha4002@gmail.com",
    "manogna4124@gmail.com",
    "narayanaks943@gmail.com",
    "likhithag142004@gmail.com",
    "contactmvjce@gmail.com",
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
