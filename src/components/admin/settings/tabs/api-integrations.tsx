import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Copy, Plus, Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ApiIntegrations() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-end">
            <Button>
              <Plus className="h-4 w-4 mr-2" /> Generate New API Key
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>API Key</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Used</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  name: "Production API Key",
                  key: "pk_live_xxxxx",
                  status: "Active",
                  created: "2024-03-15",
                  lastUsed: "2024-03-20",
                },
                {
                  name: "Development API Key",
                  key: "pk_test_xxxxx",
                  status: "Active",
                  created: "2024-03-10",
                  lastUsed: "2024-03-19",
                },
              ].map((row) => (
                <TableRow key={row.key}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      {row.key}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-2 h-6 w-6 p-0"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Badge variant="success">{row.status}</Badge>
                  </TableCell>
                  <TableCell>{row.created}</TableCell>
                  <TableCell>{row.lastUsed}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 text-destructive"
                    >
                      <Trash className="h-3 w-3" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Webhooks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="space-y-0.5">
                <Label>Webhook URL</Label>
                <div className="text-sm text-muted-foreground">
                  Enter the URL to receive webhook events
                </div>
              </div>
              <div className="w-[300px]">
                <Input placeholder="https://" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Webhook Events</Label>
              <div className="space-y-2">
                {[
                  { id: "user-signup", label: "User Signup" },
                  { id: "file-upload", label: "File Upload" },
                  { id: "file-share", label: "File Share" },
                  { id: "user-activity", label: "User Activity" },
                ].map((event) => (
                  <div key={event.id} className="flex items-center gap-2">
                    <Switch id={event.id} />
                    <Label htmlFor={event.id}>{event.label}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Third-Party Integrations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {[
              {
                name: "Google Drive",
                description: "Sync files with Google Drive",
                connected: true,
              },
              {
                name: "Dropbox",
                description: "Sync files with Dropbox",
                connected: false,
              },
              {
                name: "Slack",
                description: "Send notifications to Slack",
                connected: false,
              },
            ].map((integration) => (
              <div
                key={integration.name}
                className="flex items-center justify-between"
              >
                <div className="space-y-0.5">
                  <Label>{integration.name}</Label>
                  <div className="text-sm text-muted-foreground">
                    {integration.description}
                  </div>
                </div>
                <Button variant={integration.connected ? "outline" : "default"}>
                  {integration.connected ? "Disconnect" : "Connect"}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
