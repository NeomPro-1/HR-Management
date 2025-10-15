
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default async function HelpdeskPage() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return (
    <Card>
      <CardHeader>
        <CardTitle>HR Helpdesk</CardTitle>
        <CardDescription>
          The AI-powered chatbot has been removed. This section is being updated.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center h-48 border-2 border-dashed rounded-lg">
          <p className="text-muted-foreground">Helpdesk feature coming soon.</p>
        </div>
      </CardContent>
    </Card>
  );
}
