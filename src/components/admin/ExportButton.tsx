"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { RegistrationWithTeamMembersAndEvents } from "@/types/zod/registrationSchema";
import * as XLSX from "xlsx";

interface ExportButtonProps {
  data: RegistrationWithTeamMembersAndEvents[];
  filename: string;
}

export const ExportButton = ({ data, filename }: ExportButtonProps) => {
  const exportToExcel = () => {
    const headers = [
      "ID",
      "Name",
      "Phone",
      "USN",
      "College",
      "Event Name",
      "Payment Amount",
      "Payment Id",
      "Created At",
      "TeamMembers",
    ];

    const rows = data.map((reg) => [
      reg.id,
      reg.name,
      reg.phone,
      reg.usn,
      reg.collegeName,
      reg.event.title,
      reg.paymentAmount,
      reg.paymentId || "Pending",
      new Date(reg.createdAt).toLocaleDateString(),
      reg.teamMembers.length,
    ]);

    const worksheetData = [headers, ...rows];

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    // Hardcoded column widths
    worksheet["!cols"] = [
      { wch: 6 }, // ID
      { wch: 10 }, // Name
      { wch: 16 }, // Phone
      { wch: 12 }, // USN
      { wch: 15 }, // College
      { wch: 32 }, // Event Name
      { wch: 10 }, // Payment Amount
      { wch: 22 }, // Payment ID
      { wch: 12 }, // Created At
      { wch: 10 }, // Team Members Count
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");

    XLSX.writeFile(workbook, `${filename}.xlsx`);
  };

  return (
    <Button
      onClick={exportToExcel}
      variant="outline"
      className="flex items-center space-x-2"
    >
      <Download className="h-4 w-4" />
      <span>Export</span>
    </Button>
  );
};
