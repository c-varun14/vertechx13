import MegaEventsSlider from "@/components/vertechx/MegaEventsSlider";
import DepartmentFilters from "@/components/vertechx/DepartmentFilters";
import EventsGrid from "@/components/vertechx/EventsGrid";
import "./eventpage.css"; // CSS module or global import depending on setup
import { departmentsType } from "@/lib/eventsData";

export default async function EventsPage({
  params,
}: {
  params: Promise<{
    departmentName: departmentsType;
  }>;
}) {
  let { departmentName } = await params;
  //@ts-expect-error We are replacing %26 but it will be of the type of departmentType
  departmentName = departmentName.replace("%26", "&");
  return (
    <div className="events-page">
      <div className="events-container">
        <MegaEventsSlider />
        {/* Auto-sliding component */}
        <DepartmentFilters selectedDepartment={departmentName} />
        <EventsGrid selectedDepartment={departmentName} />
      </div>
    </div>
  );
}
