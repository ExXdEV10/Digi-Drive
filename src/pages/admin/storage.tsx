import { AdminLayout } from "@/components/admin/layout";
import { StorageOverview } from "@/components/admin/storage/storage-overview";
import { StorageList } from "@/components/admin/storage/storage-list";
import { StorageFilters } from "@/components/admin/storage/storage-filters";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export default function StoragePage() {
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
                <BreadcrumbPage>Storage Management</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-2">Storage Management</h1>
          <p className="text-muted-foreground">
            Monitor and manage storage usage across all users.
          </p>
        </div>

        <StorageOverview />
        <StorageFilters />
        <StorageList />
      </div>
    </AdminLayout>
  );
}
