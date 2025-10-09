
import { ResumeParser } from "@/components/recruitment/resume-parser";

export default async function RecruitmentPage() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div className="space-y-8">
      <ResumeParser />
    </div>
  );
}

    