import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { FileText, Paperclip, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
  isUser: boolean;
}

interface Attachment {
  name: string;
  size: string;
  type: string;
}

interface Ticket {
  ticketId: string;
  userId: string;
  name: string;
  email: string;
  subject: string;
  priority: string;
  status: string;
  createdDate: string;
  messages: Message[];
  attachments: Attachment[];
}

interface TicketDetailsProps {
  ticket: Ticket;
}

export function TicketDetails({ ticket }: TicketDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <div className="text-sm font-medium text-muted-foreground">User</div>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${ticket.userId}`}
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <div>{ticket.name}</div>
              <div className="text-sm text-muted-foreground">
                {ticket.email}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-sm font-medium text-muted-foreground">
            Status
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant={
                ticket.status === "Open"
                  ? "default"
                  : ticket.status === "In Progress"
                    ? "warning"
                    : "success"
              }
            >
              {ticket.status}
            </Badge>
            <Badge
              variant={
                ticket.priority === "Urgent"
                  ? "destructive"
                  : ticket.priority === "High"
                    ? "default"
                    : "secondary"
              }
            >
              {ticket.priority}
            </Badge>
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-sm font-medium text-muted-foreground">
            Ticket ID
          </div>
          <div>{ticket.ticketId}</div>
        </div>
        <div className="space-y-1">
          <div className="text-sm font-medium text-muted-foreground">
            Created Date
          </div>
          <div>{ticket.createdDate}</div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="text-sm font-medium text-muted-foreground">Subject</div>
        <div>{ticket.subject}</div>
      </div>

      {ticket.attachments.length > 0 && (
        <div className="space-y-2">
          <div className="text-sm font-medium">Attachments</div>
          <div className="flex flex-wrap gap-2">
            {ticket.attachments.map((attachment) => (
              <Button
                key={attachment.name}
                variant="outline"
                className="h-auto py-1 px-2"
              >
                <FileText className="h-4 w-4 mr-2" />
                <span className="text-sm">{attachment.name}</span>
                <span className="text-xs text-muted-foreground ml-2">
                  {attachment.size}
                </span>
              </Button>
            ))}
          </div>
        </div>
      )}

      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {ticket.messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${message.isUser ? "flex-row-reverse" : ""}`}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${message.sender}`}
                />
                <AvatarFallback>
                  {message.sender.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div
                className={`space-y-1 ${message.isUser ? "items-end" : "items-start"}`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{message.sender}</span>
                  <span className="text-xs text-muted-foreground">
                    {format(new Date(message.timestamp), "MMM d, yyyy h:mm a")}
                  </span>
                </div>
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${message.isUser ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"}`}
                >
                  {message.message}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          <Paperclip className="h-4 w-4" />
        </Button>
        <Textarea placeholder="Type your reply..." className="min-h-[80px]" />
        <Button size="icon" className="self-end">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
