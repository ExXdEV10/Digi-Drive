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

export function SystemPerformanceReports() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>System Performance Reports</CardTitle>
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
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <div className="text-xl font-bold">99.9%</div>
            <div className="text-sm text-muted-foreground">Server Uptime</div>
            <div className="text-xs text-green-500">Last 30 days</div>
          </div>
          <div className="space-y-2">
            <div className="text-xl font-bold">145ms</div>
            <div className="text-sm text-muted-foreground">
              Avg Response Time
            </div>
            <div className="text-xs text-green-500">-15ms from last period</div>
          </div>
          <div className="space-y-2">
            <div className="text-xl font-bold">0.1%</div>
            <div className="text-sm text-muted-foreground">Error Rate</div>
            <div className="text-xs text-green-500">
              -0.02% from last period
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="text-sm font-medium">Response Time Distribution</div>
          {[
            { range: "< 100ms", percentage: 45 },
            { range: "100-200ms", percentage: 35 },
            { range: "200-500ms", percentage: 15 },
            { range: "> 500ms", percentage: 5 },
          ].map((item) => (
            <div key={item.range} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>{item.range}</span>
                <span>{item.percentage}%</span>
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
