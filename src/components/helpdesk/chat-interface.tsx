"use client";

import { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { hrHelpdeskChatbotAction } from "@/app/(app)/helpdesk/actions";

type Message = {
  id: number;
  sender: 'user' | 'bot';
  text: string;
};

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'bot', text: "Hello! I'm the SynergyHR Helpdesk bot. How can I assist you today with company policies, leave requests, or other HR questions?" }
  ]);
  const [input, setInput] = useState('');
  const [isPending, setIsPending] = useState(false);
  const scrollViewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollViewportRef.current) {
        setTimeout(() => {
            scrollViewportRef.current!.scrollTo({ top: scrollViewportRef.current!.scrollHeight, behavior: 'smooth' });
        }, 100);
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;

    const userMessage: Message = { id: Date.now(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsPending(true);

    const context = messages.map(m => `${m.sender}: ${m.text}`).join('\n');
    const result = await hrHelpdeskChatbotAction({ query: input, context });
    
    setIsPending(false);

    if (result.answer) {
      const botMessage: Message = { id: Date.now() + 1, sender: 'bot', text: result.answer };
      setMessages(prev => [...prev, botMessage]);
    } else if(result.error) {
      const errorMessage: Message = { id: Date.now() + 1, sender: 'bot', text: `Sorry, something went wrong: ${result.error}` };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-card border rounded-lg shadow-sm">
      <ScrollArea className="flex-1 p-4" viewportRef={scrollViewportRef}>
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start gap-3",
                message.sender === 'user' ? 'justify-end' : ''
              )}
            >
              {message.sender === 'bot' && (
                <Avatar className="h-8 w-8 border">
                  <AvatarFallback className="bg-transparent"><Bot className="h-5 w-5 text-primary" /></AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  "max-w-xl rounded-lg p-3 text-sm shadow-sm",
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                )}
              >
                {message.text}
              </div>
              {message.sender === 'user' && (
                <Avatar className="h-8 w-8 border">
                  <AvatarFallback className="bg-transparent"><User className="h-5 w-5 text-primary" /></AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isPending && (
             <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8 border">
                  <AvatarFallback className="bg-transparent"><Bot className="h-5 w-5 text-primary" /></AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg p-3 shadow-sm">
                    <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="p-4 border-t bg-background/95">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about company policies, leave, etc."
            className="flex-1"
            disabled={isPending}
            autoComplete="off"
          />
          <Button type="submit" size="icon" disabled={isPending || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
