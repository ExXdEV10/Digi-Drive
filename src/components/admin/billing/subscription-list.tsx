import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Download, ArrowUpDown, Ban } from "lucide-react";

const subscriptions = [
  {
    userId: "U123",
    name: "John Doe",
    email: "john@example.com",
    plan: "Premium",
    status: "Active",
    renewalDate: "2024-04-15",
  },
  {
    userId: "U124",
    name: "Jane Smith",
    email: "jane@example.com",
    plan: "Basic",
    status: "Trial",
    renewalDate: "2024-04-01",
  },
  {
    userId: "U125",
    name: "Mike Johnson",
    email: "mike@example.com",
    plan: "Enterprise",
    status: "Active",
    renewalDate: "2024-05-01",
  },
];

export function SubscriptionList() {
  return (
    <div className="rounded-md border">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">Subscription List</h2>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Renewal Date</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subscriptions.map((subscription) => (
            <TableRow key={subscription.userId}>
              <TableCell>{subscription.userId}</TableCell>
              <TableCell>{subscription.name}</TableCell>
              <TableCell>{subscription.email}</TableCell>
              <TableCell>
                <Badge variant="secondary">{subscription.plan}</Badge>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    subscription.status === "Active"
                      ? "success"
                      : subscription.status === "Trial"
                        ? "warning"
                        : "destructive"
                  }
                >
                  {subscription.status}
                </Badge>
              </TableCell>
              <TableCell>{subscription.renewalDate}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <ArrowUpDown className="mr-2 h-4 w-4" />
                      Change Plan
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Ban className="mr-2 h-4 w-4" />
                      Cancel Subscription
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
