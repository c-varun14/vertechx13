"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PaymentStatus } from "./AdminEventRegistrations";

interface PaymentStatusFilterProps {
  status: PaymentStatus;
  onChange: (status: PaymentStatus) => void;
}

export const PaymentStatusFilter = ({
  status,
  onChange,
}: PaymentStatusFilterProps) => {
  return (
    <ToggleGroup
      type="single"
      value={status}
      className="min-w-xs"
      onValueChange={(value) => onChange(value as PaymentStatus)}
    >
      <ToggleGroupItem value="all" aria-label="Show all registrations">
        All
      </ToggleGroupItem>
      <ToggleGroupItem value="pending" aria-label="Show pending payments only">
        Pending
      </ToggleGroupItem>
      <ToggleGroupItem
        value="completed"
        aria-label="Show completed payments only"
      >
        Completed
      </ToggleGroupItem>
    </ToggleGroup>
  );
};
