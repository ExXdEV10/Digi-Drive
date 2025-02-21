import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <div className="flex gap-2 mt-2">
          <Input placeholder="Search activities..." className="max-w-xs" />
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Activities</SelectItem>
              <SelectItem value="upload">Upload</SelectItem>
              <SelectItem value="download">Download</SelectItem>
              <SelectItem value="share">Share</SelectItem>
              <SelectItem value="delete">Delete</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <div className="grid grid-cols-5 gap-4 p-4 text-sm font-medium">
            <div>User</div>
            <div>Action</div>
            <div>Details</div>
            <div>Size</div>
            <div>Date/Time</div>
          </div>
          {[
            {
              user: "John Doe",
              action: "Upload",
              details: "presentation.pdf",
              size: "2.5 MB",
              date: "2024-03-20 14:30",
            },
            {
              user: "Jane Smith",
              action: "Download",
              details: "report.docx",
              size: "1.8 MB",
              date: "2024-03-20 14:25",
            },
            {
              user: "Mike Johnson",
              action: "Share",
              details: "project-files.zip",
              size: "15 MB",
              date: "2024-03-20 14:20",
            },
          ].map((activity, i) => (
            <div
              key={i}
              className="grid grid-cols-5 gap-4 p-4 text-sm border-t"
            >
              <div>{activity.user}</div>
              <div>{activity.action}</div>
              <div>{activity.details}</div>
              <div>{activity.size}</div>
              <div>{activity.date}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
