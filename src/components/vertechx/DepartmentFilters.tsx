import "./DepartmentFilters.css";
import { departmentsNames, departmentsType } from "@/lib/eventsData";
import Link from "next/link";

const DepartmentFilters = ({
  selectedDepartment,
}: {
  selectedDepartment: departmentsType;
}) => {
  const departments = [...departmentsNames];
  departments.splice(departments.length - 1); // Removed Mega event
  return (
    <div className="department-filters" id="department-filters">
      <div className="filters-container">
        {departments.map((department) => (
          <Link
            key={department}
            href={`/events/${department}#department-filters`}
            className={`filter-btn ${
              selectedDepartment === department ? "active" : ""
            }`}
            data-text={department}
          >
            {department}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DepartmentFilters;
