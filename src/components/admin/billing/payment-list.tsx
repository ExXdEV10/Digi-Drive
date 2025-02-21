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
import { MoreHorizontal, Download, RefreshCcw, Ban } from "lucide-react";

const payments = [
  {
    paymentId: "P123",
    userId: "U123",
    name: "John Doe",
    email: "john@example.com",
    amount: "$29.99",
    date: "2024-03-15",
    status: "Completed",
  },
  {
    paymentId: "P124",
    userId: "U124",
    name: "Jane Smith",
    email: "jane@example.com",
    amount: "$19.99",
    date: "2024-03-14",
    status: "Pending",
  },
  {
    paymentId: "P125",
    userId: "U125",
    name: "Mike Johnson",
    email: "mike@example.com",
    amount: "$99.99",
    date: "2024-03-13",
    status: "Failed",
  },
];

export function PaymentList() {
  return (
    <div className="rounded-md border">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">Payment History</h2>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Payment ID</TableHead>
            <TableHead>User ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[100px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.paymentId}>
              <TableCell>{payment.paymentId}</TableCell>
              <TableCell>{payment.userId}</TableCell>
              <TableCell>{payment.name}</TableCell>
              <TableCell>{payment.email}</TableCell>
              <TableCell>{payment.amount}</TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    payment.status === "Completed"
                      ? "success"
                      : payment.status === "Pending"
                        ? "warning"
                        : "destructive"
                  }
                >
                  {payment.status}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {payment.status === "Failed" && (
                      <DropdownMenuItem>
                        <RefreshCcw className="mr-2 h-4 w-4" />
                        Retry Payment
                      </DropdownMenuItem>
                    )}
                    {payment.status === "Completed" && (
                      <DropdownMenuItem>
                        <Ban className="mr-2 h-4 w-4" />
                        Refund
                      </DropdownMenuItem>
                    )}
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
