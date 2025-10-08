import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, Pencil, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { EmployeeWorkExperience } from "@/lib/placeholder-data";

type WorkExperienceProps = {
    experience: EmployeeWorkExperience[];
}

export function WorkExperience({ experience }: WorkExperienceProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
        <CardDescription>Employee's professional background and roles.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 h-full w-px bg-border" />
          {experience.map((exp, index) => (
            <div key={index} className="relative mb-8 pl-8 last:mb-0">
              <div className="absolute -left-[23px] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-card border">
                 <Briefcase className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex flex-col sm:flex-row items-start justify-between">
                <div className="mb-2 sm:mb-0">
                  <h4 className="font-semibold">{exp.role}</h4>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                   <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground shrink-0">{exp.duration}</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
              <div className="mt-3 flex gap-2">
                <Button variant="outline" size="sm"><Pencil className="mr-2 h-3 w-3"/>Edit</Button>
                <Button variant="destructive" size="sm"><Trash2 className="mr-2 h-3 w-3"/>Delete</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
