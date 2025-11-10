import { authOptions } from "@/lib/auth";
import { getGmailClubAccess } from "@/lib/GetGmailClubAccess";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const PUT = async (req: Request) => {
  try {
    const session = await getServerSession(authOptions);
    if (!(session?.user.email && getGmailClubAccess(session?.user.email))) {
      return NextResponse.json(
        { message: "You are unauthorized" },
        { status: 400 }
      );
    }
    const {
      registrationId,
      checkedIn,
    }: { registrationId: string; checkedIn: boolean } = await req.json();
    await prisma.registration.update({
      where: {
        id: registrationId,
      },
      data: {
        isCheckedIn: checkedIn,
        checkedInAt: checkedIn ? new Date() : null,
      },
    });
    return NextResponse.json({ message: "Checked in successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Could not checkin the user" },
      { status: 500 }
    );
  }
};
