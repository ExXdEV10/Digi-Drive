import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SecuritySettings() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Password Policies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Minimum Password Length</Label>
            <Select defaultValue="8">
              <SelectTrigger>
                <SelectValue placeholder="Select minimum length" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6">6 characters</SelectItem>
                <SelectItem value="8">8 characters</SelectItem>
                <SelectItem value="10">10 characters</SelectItem>
                <SelectItem value="12">12 characters</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Require Special Characters</Label>
                <div className="text-sm text-muted-foreground">
                  Must contain at least one special character
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Require Numbers</Label>
                <div className="text-sm text-muted-foreground">
                  Must contain at least one number
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Require Uppercase Letters</Label>
                <div className="text-sm text-muted-foreground">
                  Must contain at least one uppercase letter
                </div>
              </div>
              <Switch />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Password Expiration</Label>
            <Select defaultValue="90">
              <SelectTrigger>
                <SelectValue placeholder="Select expiration period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="never">Never</SelectItem>
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="60">60 days</SelectItem>
                <SelectItem value="90">90 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication (2FA)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Require 2FA for Admins</Label>
                <div className="text-sm text-muted-foreground">
                  All administrators must use 2FA
                </div>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Allow 2FA for Users</Label>
                <div className="text-sm text-muted-foreground">
                  Users can enable 2FA for their accounts
                </div>
              </div>
              <Switch />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Allowed 2FA Methods</Label>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Switch id="authenticator" />
                <Label htmlFor="authenticator">Authenticator App</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="sms" />
                <Label htmlFor="sms">SMS</Label>
              </div>
              <div className="flex items-center gap-2">
                <Switch id="email" />
                <Label htmlFor="email">Email</Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Login Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Failed Login Attempts</Label>
            <Select defaultValue="5">
              <SelectTrigger>
                <SelectValue placeholder="Select attempt limit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3 attempts</SelectItem>
                <SelectItem value="5">5 attempts</SelectItem>
                <SelectItem value="10">10 attempts</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Enable CAPTCHA</Label>
              <div className="text-sm text-muted-foreground">
                Show CAPTCHA after failed login attempts
              </div>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Session Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Session Timeout</Label>
            <Select defaultValue="30">
              <SelectTrigger>
                <SelectValue placeholder="Select timeout duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="60">1 hour</SelectItem>
                <SelectItem value="120">2 hours</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Allow Multiple Sessions</Label>
              <div className="text-sm text-muted-foreground">
                Users can be logged in from multiple devices
              </div>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}
