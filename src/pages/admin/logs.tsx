import { AdminLayout } from "@/components/admin/layout";
import { LogList } from "@/components/admin/logs/log-list";
import { LogFilters } from "@/components/admin/logs/log-filters";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export default function LogsPage() {
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
                <BreadcrumbPage>System Logs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-2">System Logs</h1>
          <p className="text-muted-foreground">
            View and analyze system logs and user activities.
          </p>
        </div>

        <LogFilters />
        <LogList />
      </div>
    </AdminLayout>
  );
}
