import { Check } from "lucide-react";
import { Separator } from "../ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Event } from "@/types/event";

const EventSidebar = ({
  event: {
    maxTeamMembers,
    minTeamMembers,
    name,
    registration_fee,
    rules,
    date_time,
    venue,
    id,
  },
  clubName,
}: {
  event: Event;
  clubName: string;
}) => {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-8">
        <Card className="border-[#e0d5c0] bg-white shadow-md block">
          <CardHeader className="">
            <CardTitle className="text-base font-medium text-[#5f4a37]">
              Facing Issues?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-[#5f4a37]/80">
            <p>
              For any quries or problem with payment/registration, please
              message us on whatsapp
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                {/* <Phone className="w-4 h-4 mr-2 text-[#d4a72c]" /> */}
                <span className="font-medium text-[#5f4a37] mr-1">
                  C Varun:
                </span>
                <span>+91 7338361138</span>
              </div>
              <div className="flex items-center">
                {/* <Phone className="w-4 h-4 mr-2 text-[#d4a72c]" /> */}
                <span className="font-medium text-[#5f4a37] mr-1">
                  Heerath Bhat:
                </span>
                <span>+91 9797243748</span>
              </div>
            </div>
          </CardContent>
        </Card>
        {id !== "clw3q9v6e000308l0cajwj9tt" && (
          <Card className="bg-[#5f4a37] text-[#fff4d4] p-6 shadow-md mt-6">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-[#fff4d4]/80">Organized by {clubName}</p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#d4a72c]/20 p-2 rounded-md mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#d4a72c]"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                    <path d="M8 14h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 18h.01" />
                    <path d="M12 18h.01" />
                    <path d="M16 18h.01" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Date and Time</p>
                  <p className="text-sm text-[#fff4d4]/80">{date_time}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#d4a72c]/20 p-2 rounded-md mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#d4a72c]"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">{venue}</p>
                  <p className="text-sm text-[#fff4d4]/80">MVJCE, Bengaluru</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#d4a72c]/20 p-2 rounded-md mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#d4a72c]"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Registration Fee</p>
                  <p className="text-sm text-[#fff4d4]/80">
                    ₹{registration_fee}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#d4a72c]/20 p-2 rounded-md mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#d4a72c]"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Team Size</p>
                  <p className="text-sm text-[#fff4d4]/80">
                    {maxTeamMembers == minTeamMembers
                      ? minTeamMembers == 1
                        ? "Solo event"
                        : maxTeamMembers + "members per team"
                      : `${minTeamMembers}-${maxTeamMembers} members per team`}
                  </p>
                </div>
              </div>
            </div>

            <Separator className="my-6 bg-[#fff4d4]/20" />

            <div>
              <h3 className="font-medium mb-2">Event Rules</h3>
              <ul className="space-y-2 text-sm text-[#fff4d4]/90">
                {rules.map((rule) => (
                  <li key={rule} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-[#d4a72c]" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};
export default EventSidebar;
