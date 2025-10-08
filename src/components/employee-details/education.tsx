import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { EmployeeEducation } from "@/lib/placeholder-data";

type EducationProps = {
    education: EmployeeEducation[];
}

export function Education({ education }: EducationProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education Qualifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 h-full w-px bg-border" />
          {education.map((edu, index) => (
            <div key={index} className="relative mb-8 pl-8 last:mb-0">
               <div className="absolute -left-[23px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-card border">
                 <GraduationCap className="h-5 w-5 text-muted-foreground" />
              </div>
               <div className="flex items-start justify-between">
                <div>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </div>
                 <p className="text-sm text-muted-foreground">{edu.duration}</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{edu.details}</p>
              <div className="mt-2 flex gap-2">
                {edu.courses.map(course => <Badge key={course} variant="outline">{course}</Badge>)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
