import { AdminLayout } from "./admin/layout";
import { OverviewCard } from "./admin/dashboard/overview-card";
import { StorageChart } from "./admin/dashboard/storage-chart";
import { RecentActivities } from "./admin/dashboard/recent-activities";
import { QuickActions } from "./admin/dashboard/quick-actions";
import {
  Users,
  Activity,
  HardDrive,
  TrendingUp,
  DollarSign,
} from "lucide-react";

function Home() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to the admin dashboard.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <OverviewCard
            title="Total Users"
            value="1,234"
            description="+12% from last month"
            icon={Users}
          />
          <OverviewCard
            title="Active Users"
            value="892"
            description="Currently online"
            icon={Activity}
          />
          <OverviewCard
            title="Storage Used"
            value="1.2 TB"
            description="75% of total capacity"
            icon={HardDrive}
          />
          <OverviewCard
            title="New Signups"
            value="48"
            description="Last 7 days"
            icon={TrendingUp}
          />
          <OverviewCard
            title="Monthly Revenue"
            value="$12,345"
            description="+8% from last month"
            icon={DollarSign}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <StorageChart />
          <QuickActions />
        </div>

        <RecentActivities />
      </div>
    </AdminLayout>
  );
}

export default Home;
