import type { Metadata } from "next";
// import AdminDashboard from "@/components/admin/admin-dashboard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { AdminEventRegistrations } from "@/components/admin/AdminEventRegistrations";
import { getGmailClubAccess } from "@/lib/GetGmailClubAccess";
import { prisma } from "@/lib/prisma";
import { RegistrationWithTeamMembersAndEvents } from "@/types/zod/registrationSchema";

export const metadata: Metadata = {
  title: "Admin Dashboard | Event Registrations",
  description: "Manage event registrations across clubs and events",
};

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email)
    return redirect(
      `/api/auth/signin?callbackUrl=${
        process.env.BASE_URL || "http://localhost:3000"
      }/admin`
    );
  const clubName = getGmailClubAccess(session.user.email);
  if (!clubName)
    return (
      <div className="container mx-auto py-10 min-h-[90vh]">
        <p className="mt-12 text-xl font-medium">Unauthorized</p>;
      </div>
    );
  let registrations: RegistrationWithTeamMembersAndEvents[];
  if (clubName && clubName != "ALL")
    registrations = await prisma.registration.findMany({
      where: {
        clubName,
      },
      include: {
        teamMembers: true,
        event: true,
      },
    });
  else
    registrations = await prisma.registration.findMany({
      include: {
        teamMembers: true,
        event: true,
      },
    });

  return (
    <div className="container mx-auto py-10 min-h-[90vh]">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Event Registration Management
      </h1>
      {/* <AdminDashboard clubName={clubName == "ALL" ? undefined : clubName} /> */}
      <AdminEventRegistrations
        clubName={clubName}
        registrations={registrations}
      />
    </div>
  );
}
