
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Dribbble } from "lucide-react";
import type { EmployeePersonalInfo } from "@/lib/placeholder-data";

type PersonalInfoProps = {
    employee: EmployeePersonalInfo;
}

const socialIcons = {
    twitter: <Twitter className="h-4 w-4" />,
    linkedin: <Linkedin className="h-4 w-4" />,
    github: <Github className="h-4 w-4" />,
    dribbble: <Dribbble className="h-4 w-4" />,
};

export function PersonalInfo({ employee }: PersonalInfoProps) {
  return (
     <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="bg-muted h-24" />
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="flex flex-col items-center -mt-16">
          <Avatar className="h-24 w-24 border-4 border-card">
            <AvatarImage src={employee.avatar} alt={employee.name} data-ai-hint="person face" />
            <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h2 className="mt-2 text-xl font-bold">{employee.name}</h2>
          <p className="text-muted-foreground">{employee.role}</p>
          <div className="flex gap-2 mt-2">
            {employee.socials.map(social => (
                 <Button key={social.name} variant="outline" size="icon" asChild>
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                        {socialIcons[social.name as keyof typeof socialIcons]}
                    </a>
                </Button>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-4 text-sm">
            <div className="flex flex-col sm:flex-row">
                <span className="w-full sm:w-1/3 font-medium text-muted-foreground">Employee ID</span>
                <span className="w-full sm:w-2/3 sm:text-right">{employee.employeeId}</span>
            </div>
             <div className="flex flex-col sm:flex-row">
                <span className="w-full sm:w-1/3 font-medium text-muted-foreground">Date of Hire</span>
                <span className="w-full sm:w-2/3 sm:text-right">{employee.dateOfHire}</span>
            </div>
             <div className="flex flex-col sm:flex-row">
                <span className="w-full sm:w-1/3 font-medium text-muted-foreground">Email</span>
                <span className="w-full sm:w-2/3 sm:text-right truncate">{employee.email}</span>
            </div>
             <div className="flex flex-col sm:flex-row">
                <span className="w-full sm:w-1/3 font-medium text-muted-foreground">Phone</span>
                <span className="w-full sm:w-2/3 sm:text-right">{employee.phone}</span>
            </div>
             <div className="flex flex-col sm:flex-row">
                <span className="w-full sm:w-1/3 font-medium text-muted-foreground">Birthday</span>
                <span className="w-full sm:w-2/3 sm:text-right">{employee.birthday}</span>
            </div>
            <div className="flex flex-col sm:flex-row">
                <span className="w-full sm:w-1/3 font-medium text-muted-foreground">Gender</span>
                <span className="w-full sm:w-2/3 sm:text-right">{employee.gender}</span>
            </div>
             <div className="flex flex-col sm:flex-row">
                <span className="w-full sm:w-1/3 font-medium text-muted-foreground">Address</span>
                <span className="w-full sm:w-2/3 sm:text-right">{employee.address}</span>
            </div>
        </div>
         <Button className="w-full mt-6">Send Message</Button>
      </CardContent>
    </Card>
  );
}
