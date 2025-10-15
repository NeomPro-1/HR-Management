
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default async function RecruitmentPage() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recruitment</CardTitle>
        <CardDescription>
          The AI-powered resume parser has been removed. This section is being updated.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center h-48 border-2 border-dashed rounded-lg">
          <p className="text-muted-foreground">Recruitment tools coming soon.</p>
        </div>
      </CardContent>
    </Card>
  );
}
