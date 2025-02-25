import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash } from "lucide-react";
import { format } from "date-fns";

interface AnnouncementListProps {
  onCreateNew: () => void;
}

const announcements = [
  {
    id: 1,
    title: "System Maintenance",
    content: "Scheduled maintenance on March 25th from 2 AM to 4 AM UTC.",
    type: "maintenance",
    date: "2024-03-20T10:00:00Z",
    active: true,
  },
  {
    id: 2,
    title: "New Feature Release",
    content: "We've added new collaboration tools to enhance your workflow.",
    type: "feature",
    date: "2024-03-19T15:30:00Z",
    active: true,
  },
];

export function AnnouncementList({ onCreateNew }: AnnouncementListProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Recent Announcements</h2>
          <p className="text-sm text-muted-foreground">
            Manage your system-wide announcements
          </p>
        </div>
        <Button onClick={onCreateNew}>
          <Plus className="h-4 w-4 mr-2" /> Create Announcement
        </Button>
      </div>

      <div className="grid gap-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div>
                <CardTitle className="flex items-center gap-2">
                  {announcement.title}
                  <Badge
                    variant={announcement.active ? "default" : "secondary"}
                  >
                    {announcement.active ? "Active" : "Inactive"}
                  </Badge>
                  <Badge
                    variant={
                      announcement.type === "maintenance"
                        ? "destructive"
                        : "default"
                    }
                  >
                    {announcement.type}
                  </Badge>
                </CardTitle>
                <CardDescription>
                  {format(new Date(announcement.date), "PPP 'at' p")}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    console.log("Edit announcement:", announcement.id)
                  }
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive"
                  onClick={() =>
                    console.log("Delete announcement:", announcement.id)
                  }
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p>{announcement.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
