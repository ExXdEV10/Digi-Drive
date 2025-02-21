import { AdminLayout } from "@/components/admin/layout";
import { SubscriptionOverview } from "@/components/admin/billing/subscription-overview";
import { SubscriptionList } from "@/components/admin/billing/subscription-list";
import { PaymentList } from "@/components/admin/billing/payment-list";
import { UpgradeRequests } from "@/components/admin/billing/upgrade-requests";
import { SubscriptionFilters } from "@/components/admin/billing/subscription-filters";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export default function BillingPage() {
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
                <BreadcrumbPage>Subscriptions & Billing</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-2">Subscriptions & Billing</h1>
          <p className="text-muted-foreground">
            Manage user subscriptions, payments, and billing information.
          </p>
        </div>

        <SubscriptionOverview />
        <SubscriptionFilters />
        <SubscriptionList />
        <PaymentList />
        <UpgradeRequests />
      </div>
    </AdminLayout>
  );
}
