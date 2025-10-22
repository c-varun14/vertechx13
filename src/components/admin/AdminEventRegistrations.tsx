"use client";

import { useEffect, useState } from "react";
import { ClubSelector } from "./ClubSelector";
import { EventSelector } from "./EventSelector";
import { RegistrationsTable } from "./RegistrationsTable";
import { PaymentStatusFilter } from "./PaymentStatusFilter";
import { ExportButton } from "./ExportButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { departmentsType } from "@/lib/eventsData";
import seedData from "../../../prisma/seedData";
import { RegistrationWithTeamMembersAndEvents } from "@/types/zod/registrationSchema";

// Mock data types based on the Prisma schema
export type Club = {
  name: string;
};

export type Event = {
  id: string;
  title: string;
};

export type TeamMember = {
  id: string;
  name: string;
  usn: string;
  collegeName: string;
};

export type Registration = {
  id: string;
  name: string;
  userId: string;
  phone: string;
  usn: string;
  collegeName: string;
  teamMembers: TeamMember[];
  clubName: string;
  paymentAmount: number | null;
  paymentId: string | null;
  createdAt: string;
  updatedAt: string | null;
  eventId: string;
  isCheckedIn: boolean;
  checkedInAt: string | null;
};

export type PaymentStatus = "all" | "pending" | "completed";

export const AdminEventRegistrations = ({
  clubName,
  registrations,
}: {
  clubName: departmentsType | "ALL";
  registrations: RegistrationWithTeamMembersAndEvents[];
}) => {
  const [selectedClub, setSelectedClub] = useState<
    departmentsType | "ALL" | undefined
  >(clubName);
  const [selectedEvent, setSelectedEvent] = useState<string>("ALL");
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("all");

  const filteredEvents =
    selectedClub && selectedClub !== "ALL" ? seedData[selectedClub] : [];

  const filteredRegistrations = registrations.filter((registration) => {
    if (
      selectedClub &&
      selectedClub !== "ALL" &&
      selectedClub !== registration.clubName
    )
      return false;

    if (
      selectedEvent &&
      selectedEvent !== "ALL" &&
      registration.eventId !== selectedEvent
    ) {
      return false;
    }

    if (paymentStatus === "pending" && registration.paymentId) {
      return false;
    }
    if (paymentStatus === "completed" && !registration.paymentId) {
      return false;
    }

    return true;
  });

  useEffect(() => {
    if (clubName) setSelectedClub(clubName);
  }, [clubName]);

  return (
    <div className="space-y-6 px-2">
      <Card>
        <CardHeader>
          <CardTitle>Filter Registrations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <ClubSelector
                disabled={clubName && clubName !== "ALL" ? true : false}
                selectedClub={selectedClub}
                onSelectClub={(club) => {
                  setSelectedClub(club);
                  setSelectedEvent("ALL");
                }}
              />
              {clubName && clubName !== "ALL" ? (
                <p className="text-sm ml-2 mt-1">
                  You are not allowed to select a different club
                </p>
              ) : (
                ""
              )}
            </div>
            <div>
              <EventSelector
                events={filteredEvents}
                selectedEvent={selectedEvent}
                onSelectEvent={setSelectedEvent}
                disabled={!selectedClub}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="block lg:flex justify-between">
          <CardTitle className="text-lg mb-1">
            Registration List ({filteredRegistrations.length})
          </CardTitle>
          <div className="flex flex-col gap-2 mt-2 lg:flex-row space-x-2 overflow-x-hidden">
            <PaymentStatusFilter
              status={paymentStatus}
              onChange={setPaymentStatus}
            />
            <ExportButton
              data={filteredRegistrations}
              filename={`registrations-${selectedEvent}`}
            />
          </div>
        </CardHeader>
        <CardContent>
          <RegistrationsTable registrations={filteredRegistrations} />
        </CardContent>
      </Card>
    </div>
  );
};
