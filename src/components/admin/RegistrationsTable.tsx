"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { RegistrationWithTeamMembersAndEvents } from "@/types/zod/registrationSchema";

interface RegistrationsTableProps {
  registrations: RegistrationWithTeamMembersAndEvents[];
}

export const RegistrationsTable = ({
  registrations,
}: RegistrationsTableProps) => {
  return (
    <div className="rounded-md border border-border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="border-border">
            <TableHead className="whitespace-nowrap">Name</TableHead>
            <TableHead className="whitespace-nowrap">USN</TableHead>
            <TableHead className="whitespace-nowrap">College</TableHead>
            <TableHead className="whitespace-nowrap">Phone</TableHead>
            <TableHead className="whitespace-nowrap">Event Name</TableHead>
            <TableHead className="whitespace-nowrap">Payment</TableHead>
            <TableHead className="whitespace-nowrap">Team Size</TableHead>
            <TableHead className="whitespace-nowrap">Status</TableHead>
            <TableHead className="whitespace-nowrap">Created At</TableHead>
            <TableHead className="whitespace-nowrap">Team</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {registrations.length === 0 ? (
            <TableRow>
              <TableCell colSpan={9} className="h-24 text-center border-border">
                No registrations found.
              </TableCell>
            </TableRow>
          ) : (
            registrations.map((registration) => (
              <TableRow key={registration.id} className="border-border">
                <TableCell className="font-medium">
                  {registration.name}
                </TableCell>
                <TableCell className="font-mono text-xs">
                  {registration.usn}
                </TableCell>
                <TableCell
                  className="max-w-32 truncate"
                  title={registration.collegeName}
                >
                  {registration.collegeName}
                </TableCell>
                <TableCell className="font-mono text-xs">
                  {registration.phone}
                </TableCell>
                <TableCell className="font-mono text-xs max-w-40 truncate">
                  {registration.event.title}
                </TableCell>
                <TableCell>
                  {registration.paymentAmount
                    ? `₹${registration.paymentAmount}`
                    : "—"}
                </TableCell>
                <TableCell>{registration.teamMembers.length + 1}</TableCell>
                <TableCell>
                  {registration.paymentId ? (
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200"
                    >
                      Completed
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="bg-yellow-50 text-yellow-700 border-yellow-200"
                    >
                      Pending
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="text-muted-foreground whitespace-nowrap">
                  {new Date(registration.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 p-0"
                      >
                        <Users className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Team Members</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        {registration.teamMembers.length > 0 ? (
                          <div>
                            <h3 className="font-medium text-sm mb-2">
                              Other Members
                            </h3>
                            <div className="space-y-3">
                              {registration.teamMembers.map((member) => (
                                <div
                                  key={member.id}
                                  className="bg-muted p-3 rounded-md"
                                >
                                  <div className="text-sm grid grid-cols-2 gap-x-4 gap-y-1">
                                    <span className="text-muted-foreground">
                                      Name:
                                    </span>
                                    <span>{member.name}</span>
                                    <span className="text-muted-foreground">
                                      USN:
                                    </span>
                                    <span className="font-mono text-xs">
                                      {member.usn}
                                    </span>
                                    <span className="text-muted-foreground">
                                      College:
                                    </span>
                                    <span>{member.collegeName}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <p className="text-center font-medium">
                            No Teammembers
                          </p>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
