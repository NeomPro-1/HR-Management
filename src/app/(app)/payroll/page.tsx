import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CircleDollarSign } from "lucide-react";

export default function PayrollPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payroll Processing</CardTitle>
        <CardDescription>Automated payroll for India compliance.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center text-center py-20 border-2 border-dashed rounded-lg">
          <CircleDollarSign className="h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-xl font-semibold">Coming Soon</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Our automated payroll processing module for India is under construction. Stay tuned for updates!
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
