import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GlobalSettings } from "./tabs/global-settings";
import { SecuritySettings } from "./tabs/security-settings";
import { FeatureAccess } from "./tabs/feature-access";
import { NotificationSettings } from "./tabs/notification-settings";
import { ApiIntegrations } from "./tabs/api-integrations";
import { BackupSettings } from "./tabs/backup-settings";

export function SettingsTabs() {
  return (
    <Tabs defaultValue="global" className="space-y-4">
      <TabsList className="grid grid-cols-6 w-full">
        <TabsTrigger value="global">Global</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="features">Features</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="api">API & Integrations</TabsTrigger>
        <TabsTrigger value="backup">Backup & Recovery</TabsTrigger>
      </TabsList>
      <TabsContent value="global" className="space-y-4">
        <GlobalSettings />
      </TabsContent>
      <TabsContent value="security" className="space-y-4">
        <SecuritySettings />
      </TabsContent>
      <TabsContent value="features" className="space-y-4">
        <FeatureAccess />
      </TabsContent>
      <TabsContent value="notifications" className="space-y-4">
        <NotificationSettings />
      </TabsContent>
      <TabsContent value="api" className="space-y-4">
        <ApiIntegrations />
      </TabsContent>
      <TabsContent value="backup" className="space-y-4">
        <BackupSettings />
      </TabsContent>
    </Tabs>
  );
}
