import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BarChart2, Bell, ScrollText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    { label: "Manage Users", icon: Users, href: "/admin/users" },
    { label: "Review Reports", icon: BarChart2, href: "/admin/reports" },
    { label: "Send Announcement", icon: Bell, href: "/admin/announcements" },
    { label: "View System Logs", icon: ScrollText, href: "/admin/logs" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action) => (
            <Button
              key={action.href}
              variant="outline"
              className="h-20 flex flex-col gap-2"
              onClick={() => navigate(action.href)}
            >
              <action.icon className="h-5 w-5" />
              {action.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
