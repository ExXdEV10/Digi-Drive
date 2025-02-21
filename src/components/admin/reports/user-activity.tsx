import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download } from "lucide-react";

export function UserActivityReports() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>User Activity Reports</CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="7d">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 Hours</SelectItem>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="User Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              <SelectItem value="free">Free Users</SelectItem>
              <SelectItem value="paid">Paid Users</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <div className="text-xl font-bold">892</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
            <div className="text-xs text-green-500">+12% from last period</div>
          </div>
          <div className="space-y-2">
            <div className="text-xl font-bold">48</div>
            <div className="text-sm text-muted-foreground">New Signups</div>
            <div className="text-xs text-green-500">+5% from last period</div>
          </div>
          <div className="space-y-2">
            <div className="text-xl font-bold">2,456</div>
            <div className="text-sm text-muted-foreground">Total Actions</div>
            <div className="text-xs text-green-500">+8% from last period</div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="text-sm font-medium">User Actions Breakdown</div>
          {[
            { action: "Uploads", count: 856, percentage: 35 },
            { action: "Downloads", count: 721, percentage: 29 },
            { action: "Shares", count: 492, percentage: 20 },
            { action: "Deletions", count: 387, percentage: 16 },
          ].map((item) => (
            <div key={item.action} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{item.action}</span>
                <span>{item.count}</span>
              </div>
              <div className="bg-secondary h-2 rounded-full">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
