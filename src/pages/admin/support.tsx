import { useState } from "react";
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
  const [selectedTickets, setSelectedTickets] = useState<string[]>([]);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const handlePriorityChange = (priority: string) => {
    console.log("Filtering by priority:", priority);
  };

  const handleStatusChange = (status: string) => {
    console.log("Filtering by status:", status);
  };

  const handleDateChange = (range: { from: Date; to: Date }) => {
    console.log("Filtering by date range:", range);
  };

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

        <SupportFilters
          onSearch={handleSearch}
          onPriorityChange={handlePriorityChange}
          onStatusChange={handleStatusChange}
          onDateChange={handleDateChange}
        />
        <BulkActions selectedCount={selectedTickets.length} />
        <SupportTicketList
          onSelectionChange={setSelectedTickets}
          selectedTickets={selectedTickets}
        />
      </div>
    </AdminLayout>
  );
}
