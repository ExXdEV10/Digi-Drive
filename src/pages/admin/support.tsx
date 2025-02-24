import { AdminLayout } from "@/components/admin/layout";
import { SupportTicketList } from "@/components/admin/support/support-ticket-list";
import { SupportFilters } from "@/components/admin/support/support-filters";
import { BulkActions } from "@/components/admin/support/bulk-actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export default function SupportPage() {
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
                <BreadcrumbPage>Support Requests</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-2">Support Requests</h1>
          <p className="text-muted-foreground">
            Manage and respond to customer support tickets.
          </p>
        </div>

        <SupportFilters />
        <BulkActions />
        <SupportTicketList />
      </div>
    </AdminLayout>
  );
}
