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
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";

const users = [
  {
    userId: "U126",
    name: "Robert Wilson",
    email: "robert@example.com",
    currentPlan: "Premium",
  },
  {
    userId: "U127",
    name: "Sarah Brown",
    email: "sarah@example.com",
    currentPlan: "Business",
  },
  {
    userId: "U128",
    name: "Tom Davis",
    email: "tom@example.com",
    currentPlan: "Premium",
  },
];

export function UpgradeRequests() {
  return (
    <div className="rounded-md border">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">Upgrade Requests</h2>
        <p className="text-sm text-muted-foreground">
          Business & Enterprise tier management
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Current Plan</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.userId}>
              <TableCell>{user.userId}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge variant="secondary">{user.currentPlan}</Badge>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-green-600 hover:text-green-700"
                >
                  <ArrowUpCircle className="h-4 w-4 mr-1" />
                  Upgrade
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-yellow-600 hover:text-yellow-700"
                >
                  <ArrowDownCircle className="h-4 w-4 mr-1" />
                  Downgrade
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
