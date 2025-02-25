import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, MessageCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TicketDetails } from "./ticket-details";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const tickets = [
  {
    ticketId: "T1001",
    userId: "U123",
    name: "John Doe",
    email: "john@example.com",
    subject: "Cannot access my files",
    priority: "High",
    status: "Open",
    createdDate: "2024-03-20",
    messages: [
      {
        id: 1,
        sender: "John Doe",
        message: "I'm unable to access my uploaded files. Getting error 404.",
        timestamp: "2024-03-20T10:30:00",
        isUser: true,
      },
      {
        id: 2,
        sender: "Support Team",
        message:
          "We're looking into this issue. Could you please provide more details about when this started happening?",
        timestamp: "2024-03-20T10:35:00",
        isUser: false,
      },
    ],
    attachments: [
      { name: "error-screenshot.png", size: "245 KB", type: "image/png" },
    ],
  },
  {
    ticketId: "T1002",
    userId: "U124",
    name: "Jane Smith",
    email: "jane@example.com",
    subject: "Billing inquiry",
    priority: "Normal",
    status: "In Progress",
    createdDate: "2024-03-19",
    messages: [
      {
        id: 1,
        sender: "Jane Smith",
        message: "I was charged twice for my subscription this month.",
        timestamp: "2024-03-19T14:20:00",
        isUser: true,
      },
    ],
    attachments: [
      { name: "invoice.pdf", size: "156 KB", type: "application/pdf" },
    ],
  },
];

interface SupportTicketListProps {
  onSelectionChange?: (selectedIds: string[]) => void;
  selectedTickets?: string[];
}

export function SupportTicketList({
  onSelectionChange,
  selectedTickets = [],
}: SupportTicketListProps) {
  const [selectedTicket, setSelectedTicket] = useState<
    (typeof tickets)[0] | null
  >(null);

  const handleSelectAll = (checked: boolean) => {
    const newSelected = checked ? tickets.map((t) => t.ticketId) : [];
    onSelectionChange?.(newSelected);
  };

  const handleSelectTicket = (ticketId: string, checked: boolean) => {
    const newSelected = checked
      ? [...selectedTickets, ticketId]
      : selectedTickets.filter((id) => id !== ticketId);
    onSelectionChange?.(newSelected);
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={selectedTickets.length === tickets.length}
                onCheckedChange={(checked) =>
                  handleSelectAll(checked as boolean)
                }
              />
            </TableHead>
            <TableHead>Ticket ID</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.ticketId}>
              <TableCell>
                <Checkbox
                  checked={selectedTickets.includes(ticket.ticketId)}
                  onCheckedChange={(checked) =>
                    handleSelectTicket(ticket.ticketId, checked as boolean)
                  }
                />
              </TableCell>
              <TableCell className="font-medium">{ticket.ticketId}</TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span>{ticket.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {ticket.email}
                  </span>
                </div>
              </TableCell>
              <TableCell>{ticket.subject}</TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell>{ticket.createdDate}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedTicket(ticket)}
                  >
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() =>
                          console.log("Assign ticket:", ticket.ticketId)
                        }
                      >
                        Assign
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          console.log("Change priority:", ticket.ticketId)
                        }
                      >
                        Change Priority
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          console.log("Close ticket:", ticket.ticketId)
                        }
                      >
                        Close Ticket
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog
        open={!!selectedTicket}
        onOpenChange={() => setSelectedTicket(null)}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Ticket Details</DialogTitle>
          </DialogHeader>
          {selectedTicket && <TicketDetails ticket={selectedTicket} />}
        </DialogContent>
      </Dialog>
    </div>
  );
}
