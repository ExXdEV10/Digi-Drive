import { AdminLayout } from "@/components/admin/layout";
import { FilesList } from "@/components/admin/files/files-list";
import { FilesFilters } from "@/components/admin/files/files-filters";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export default function FilesPage() {
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
                <BreadcrumbPage>Files Management</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-2">Files Management</h1>
          <p className="text-muted-foreground">
            View and manage all files uploaded to the platform.
          </p>
        </div>

        <FilesFilters />
        <FilesList />
      </div>
    </AdminLayout>
  );
}
