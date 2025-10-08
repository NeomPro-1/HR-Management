import { PersonalInfo } from "@/components/employee-details/personal-info";
import { WorkExperience } from "@/components/employee-details/work-experience";
import { Education } from "@/components/employee-details/education";
import { ProjectStatus } from "@/components/employee-details/project-status";
import { Skills } from "@/components/employee-details/skills";
import { BankDetails } from "@/components/employee-details/bank-details";
import { AccessInfo } from "@/components/employee-details/access-info";
import { employeeDetailData } from "@/lib/placeholder-data";

export default function EmployeeDetailsPage() {
    const employee = employeeDetailData;
  return (
    <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-6">
                 <PersonalInfo employee={employee.personalInfo} />
            </div>
            <div className="lg:col-span-2 space-y-6">
                <WorkExperience experience={employee.workExperience} />
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
                 <ProjectStatus projects={employee.projects} />
                 <Skills skills={employee.skills} />
            </div>
             <div className="lg:col-span-1 space-y-6">
                <Education education={employee.education} />
                <BankDetails bankDetails={employee.bankDetails} />
            </div>
        </div>
        <AccessInfo accessInfo={employee.accessInfo} />
    </div>
  );
}
