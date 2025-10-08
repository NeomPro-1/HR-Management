import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import type { EmployeeProject } from "@/lib/placeholder-data";

type ProjectStatusProps = {
    projects: EmployeeProject[];
}

export function ProjectStatus({ projects }: ProjectStatusProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects Status Overview</CardTitle>
        <CardDescription>A summary of projects the employee is involved in.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Team</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <div className="font-medium">{project.name}</div>
                    <div className="text-xs text-muted-foreground">{project.id}</div>
                  </TableCell>
                  <TableCell>{project.deadline}</TableCell>
                  <TableCell>
                    <Badge variant={project.priority === 'High' ? 'destructive' : project.priority === 'Medium' ? 'secondary' : 'default'}>{project.priority}</Badge>
                  </TableCell>
                  <TableCell>
                      <div className="flex -space-x-2 overflow-hidden">
                          {project.team.map((member, i) => (
                              <Avatar key={i} className="h-6 w-6 border-2 border-card">
                                  <AvatarImage src={member.avatar} data-ai-hint="person face"/>
                                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                          ))}
                      </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
