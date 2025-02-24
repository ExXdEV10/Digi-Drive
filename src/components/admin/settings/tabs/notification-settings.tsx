import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function NotificationSettings() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {[
              {
                title: "Welcome Email",
                description: "Send welcome email to new users",
              },
              {
                title: "Password Reset",
                description: "Send password reset instructions",
              },
              {
                title: "Account Changes",
                description: "Notify users of account changes",
              },
              {
                title: "Storage Alerts",
                description: "Notify users when approaching storage limit",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between"
              >
                <div className="space-y-0.5">
                  <Label>{item.title}</Label>
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <Label>Email Template - Welcome Email</Label>
            <Select defaultValue="welcome">
              <SelectTrigger>
                <SelectValue placeholder="Select template to edit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="welcome">Welcome Email</SelectItem>
                <SelectItem value="reset">Password Reset</SelectItem>
                <SelectItem value="changes">Account Changes</SelectItem>
                <SelectItem value="storage">Storage Alert</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              className="min-h-[200px] mt-2"
              placeholder="Enter email template content..."
              defaultValue={`Welcome to [Platform Name]!

Dear [User Name],

Thank you for joining our platform. We're excited to have you on board.

Your account has been successfully created and is ready to use.

Best regards,
The Team`}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>In-App Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {[
              {
                title: "File Activity",
                description:
                  "Show notifications for file uploads and downloads",
              },
              {
                title: "Share Notifications",
                description: "Notify when files are shared with users",
              },
              {
                title: "Comment Notifications",
                description: "Show notifications for comments on files",
              },
              {
                title: "System Updates",
                description:
                  "Notify users about platform updates and maintenance",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between"
              >
                <div className="space-y-0.5">
                  <Label>{item.title}</Label>
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <Label>Notification Display Duration</Label>
            <Select defaultValue="5">
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3 seconds</SelectItem>
                <SelectItem value="5">5 seconds</SelectItem>
                <SelectItem value="7">7 seconds</SelectItem>
                <SelectItem value="10">10 seconds</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
