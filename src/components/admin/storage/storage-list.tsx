import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, ArrowUp, Trash } from "lucide-react";

const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Paid User",
    storageUsed: "750 MB",
    storageLimit: "1 GB",
    usagePercentage: 75,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Free User",
    storageUsed: "450 MB",
    storageLimit: "500 MB",
    usagePercentage: 90,
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Paid User",
    storageUsed: "2.5 GB",
    storageLimit: "5 GB",
    usagePercentage: 50,
  },
];

export function StorageList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Storage Used</TableHead>
            <TableHead>Storage Limit</TableHead>
            <TableHead>Usage</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium">{user.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {user.email}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={user.role === "Paid User" ? "default" : "secondary"}
                >
                  {user.role}
                </Badge>
              </TableCell>
              <TableCell>{user.storageUsed}</TableCell>
              <TableCell>{user.storageLimit}</TableCell>
              <TableCell className="w-[200px]">
                <div className="flex items-center gap-2">
                  <Progress value={user.usagePercentage} />
                  <span className="text-sm text-muted-foreground w-12">
                    {user.usagePercentage}%
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <ArrowUp className="mr-2 h-4 w-4" />
                      Increase Limit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      Clear Storage
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
