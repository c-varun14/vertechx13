"use client";

import axios from "axios";
import { Checkbox } from "../ui/checkbox";
import { toast } from "sonner";
import { RegistrationWithTeamMembersAndEvents } from "@/types/zod/registrationSchema";
import { useState } from "react";

const CheckIn = ({
  registration,
}: {
  registration: RegistrationWithTeamMembersAndEvents;
}) => {
  const [checked, setChecked] = useState(
    registration.isCheckedIn ? true : false
  );
  const checkboxClick = async (checkedIn: boolean) => {
    setChecked(checkedIn);
    try {
      const res = await axios.put(
        `/api/registration/checkin`,
        JSON.stringify({
          registrationId: registration.id,
          checkedIn: checkedIn,
        })
      );
      if (res.status !== 200) throw new Error("Check-in failed");
      toast.success(
        checkedIn ? "Checked in successfully" : "Checked out successfully"
      );
    } catch (error) {
      setChecked(!checkedIn);
      console.log(error);
      toast.error("Could not checkin the user");
    }
  };
  return (
    <Checkbox
      className="border-brand"
      onCheckedChange={checkboxClick}
      checked={checked}
    />
  );
};
export default CheckIn;
