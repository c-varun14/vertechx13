"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { departmentsType, departmentsNames } from "@/lib/eventsData";

interface ClubSelectorProps {
  selectedClub: departmentsType | "ALL" | undefined;
  onSelectClub: (clubName: departmentsType) => void;
  disabled: boolean;
}

export const ClubSelector = ({
  selectedClub,
  onSelectClub,
  disabled,
}: ClubSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="club-select">Select Club</Label>
      <Select
        value={selectedClub || ""}
        onValueChange={onSelectClub}
        disabled={disabled}
      >
        <SelectTrigger id="club-select" className="w-full">
          <SelectValue placeholder="Select a department" />
        </SelectTrigger>
        <SelectContent>
          {departmentsNames.map((department) => (
            <SelectItem key={department} value={department}>
              {department}
            </SelectItem>
          ))}
          <SelectItem key={"ALL"} value={"ALL"}>
            ALL
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
