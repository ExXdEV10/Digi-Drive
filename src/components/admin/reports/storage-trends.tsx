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

export function StorageTrendsReports() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Storage Trends Reports</CardTitle>
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
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-sm font-medium">Total Storage Used</div>
            <div className="text-2xl font-bold">1.2 TB</div>
            <div className="text-xs text-green-500">+15% from last period</div>
          </div>

          <div className="space-y-4">
            <div className="text-sm font-medium">Storage by User Type</div>
            {[
              { type: "Free Users", used: "250 GB", percentage: 25 },
              { type: "Paid Users", used: "950 GB", percentage: 75 },
            ].map((item) => (
              <div key={item.type} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{item.type}</span>
                  <span>{item.used}</span>
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

          <div className="space-y-4">
            <div className="text-sm font-medium">Storage by File Type</div>
            {[
              { type: "Documents", used: "480 GB", percentage: 40 },
              { type: "Images", used: "360 GB", percentage: 30 },
              { type: "Videos", used: "240 GB", percentage: 20 },
              { type: "Others", used: "120 GB", percentage: 10 },
            ].map((item) => (
              <div key={item.type} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{item.type}</span>
                  <span>{item.used}</span>
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
        </div>
      </CardContent>
    </Card>
  );
}
