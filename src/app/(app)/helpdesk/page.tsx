
import { ChatInterface } from "@/components/helpdesk/chat-interface";

export default async function HelpdeskPage() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <div className="h-[calc(100vh-10rem)]">
        <ChatInterface />
    </div>
  );
}

    