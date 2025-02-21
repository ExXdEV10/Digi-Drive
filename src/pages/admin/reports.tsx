import { AdminLayout } from "@/components/admin/layout";
import { UserActivityReports } from "@/components/admin/reports/user-activity";
import { StorageTrendsReports } from "@/components/admin/reports/storage-trends";
import { SystemPerformanceReports } from "@/components/admin/reports/system-performance";
import { CustomReports } from "@/components/admin/reports/custom-reports";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export default function ReportsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/admin">
                  Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Reports & Analytics</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-2">Reports & Analytics</h1>
          <p className="text-muted-foreground">
            View detailed reports and analytics about platform usage.
          </p>
        </div>

        <div className="grid gap-6">
          <UserActivityReports />
          <StorageTrendsReports />
          <SystemPerformanceReports />
          <CustomReports />
        </div>
      </div>
    </AdminLayout>
  );
}
