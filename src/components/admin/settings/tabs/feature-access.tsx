import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function FeatureAccess() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>User Roles and Permissions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Feature</TableHead>
                <TableHead>Admin</TableHead>
                <TableHead>Paid User</TableHead>
                <TableHead>Free User</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  feature: "Upload Files",
                  admin: true,
                  paid: true,
                  free: true,
                },
                {
                  feature: "Download Files",
                  admin: true,
                  paid: true,
                  free: true,
                },
                {
                  feature: "Share Files",
                  admin: true,
                  paid: true,
                  free: false,
                },
                {
                  feature: "Create Public Links",
                  admin: true,
                  paid: true,
                  free: false,
                },
                {
                  feature: "Advanced Analytics",
                  admin: true,
                  paid: false,
                  free: false,
                },
                { feature: "API Access", admin: true, paid: true, free: false },
                {
                  feature: "Custom Branding",
                  admin: true,
                  paid: false,
                  free: false,
                },
              ].map((row) => (
                <TableRow key={row.feature}>
                  <TableCell>{row.feature}</TableCell>
                  <TableCell>
                    <Switch defaultChecked={row.admin} disabled />
                  </TableCell>
                  <TableCell>
                    <Switch defaultChecked={row.paid} />
                  </TableCell>
                  <TableCell>
                    <Switch defaultChecked={row.free} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feature Toggles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {[
              {
                feature: "File Sharing",
                description: "Allow users to share files with others",
              },
              {
                feature: "Public Links",
                description: "Allow users to create public download links",
              },
              {
                feature: "Advanced Analytics",
                description: "Enable detailed usage analytics and reports",
              },
              {
                feature: "API Access",
                description: "Allow access to platform API",
              },
            ].map((item) => (
              <div
                key={item.feature}
                className="flex items-center justify-between"
              >
                <div className="space-y-0.5">
                  <Label>{item.feature}</Label>
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </div>
                <Switch />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Storage Limits</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label>Free User Storage Limit (GB)</Label>
              <Input type="number" placeholder="5" />
            </div>
            <div className="space-y-2">
              <Label>Paid User Storage Limit (GB)</Label>
              <Input type="number" placeholder="100" />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Allow Storage Overages</Label>
                <div className="text-sm text-muted-foreground">
                  Users can exceed their storage limit (paid users only)
                </div>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
