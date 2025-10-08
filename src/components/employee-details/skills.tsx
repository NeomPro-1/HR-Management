import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { EmployeeSkill } from "@/lib/placeholder-data";

type SkillsProps = {
    skills: EmployeeSkill[];
}

const progressColors: { [key: string]: string } = {
    Figma: "bg-chart-1",
    HTML: "bg-chart-2",
    CSS: "bg-chart-3",
    WordPress: "bg-chart-4",
    JavaScript: "bg-chart-5",
};

export function Skills({ skills }: SkillsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills & Certifications</CardTitle>
        <CardDescription>Employee's technical and professional skills.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium text-sm">{skill.name}</h4>
                <p className="text-sm text-muted-foreground">{skill.level}</p>
            </div>
            <Progress value={skill.progress} indicatorClassName={progressColors[skill.name] || 'bg-primary'} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
