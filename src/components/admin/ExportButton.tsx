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
      reg.teamMembers.map((tm) => `${tm.name} (${tm.usn})`).join("\n"),
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
      { wch: 32 }, // Team Members
    ];
    // Set row heights - first row is header, then data rows
    worksheet["!rows"] = [
      { hpt: 30 }, // Header row height
      ...data.map((reg) => ({
        hpt: Math.max(20, 18 + reg.teamMembers.length * 15), // Base height + 15pt per team member
      })),
    ];

    // Enable text wrapping for team members column
    const teamMemberColIndex = 9; // Column J (0-based index of 'TeamMembers' column)
    const range = XLSX.utils.decode_range(worksheet["!ref"] || "A1");
    for (let i = range.s.r + 1; i <= range.e.r; i++) {
      const cellAddress = XLSX.utils.encode_cell({
        r: i,
        c: teamMemberColIndex,
      });
      const cell = worksheet[cellAddress];
      if (cell) {
        cell.s = {
          ...cell.s,
          alignment: {
            wrapText: true,
            vertical: "top",
          },
        };
      }
    }

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
