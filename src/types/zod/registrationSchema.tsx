import { Prisma } from "@prisma/client";
import { z } from "zod";

// Participants Zod Schema
export const teamMemberSchema = z.object({
  name: z.string(),
  usn: z.string(),
  collegeName: z.string(),
});

// Registration Zod Schema
export const registrationSchema = z.object({
  eventId: z.string(),
  userId: z.string(),
  name: z.string(),
  phone: z.string(),
  usn: z.string(),
  collegeName: z.string(),
  teamMembers: z.array(teamMemberSchema).optional(), // if validating nested participants
  paymentAmount: z.number().optional(),
  paymentId: z.string().optional(),
});

export type RegistrationWithTeamMembers = Prisma.RegistrationGetPayload<{
  include: { teamMembers: true };
}>;
export type RegistrationWithTeamMembersAndEvents =
  Prisma.RegistrationGetPayload<{
    include: { teamMembers: true; event: true };
  }>;
