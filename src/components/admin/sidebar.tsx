import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  HardDrive,
  Files,
  CreditCard,
  BarChart,
  ScrollText,
  Settings,
  LifeBuoy,
  Bell,
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: Users, label: "Users Management", href: "/admin/users" },
  { icon: HardDrive, label: "Storage Management", href: "/admin/storage" },
  { icon: Files, label: "Files Management", href: "/admin/files" },
  {
    icon: CreditCard,
    label: "Subscriptions & Billing",
    href: "/admin/billing",
  },
  { icon: BarChart, label: "Reports & Analytics", href: "/admin/reports" },
  { icon: ScrollText, label: "System Logs", href: "/admin/logs" },
  { icon: Settings, label: "Settings", href: "/admin/settings" },
  { icon: LifeBuoy, label: "Support Requests", href: "/admin/support" },
  { icon: Bell, label: "Announcements", href: "/admin/announcements" },
];

export function AdminSidebar() {
  const location = useLocation();

  return (
    <div className="w-64 h-full border-r bg-background">
      <div className="space-y-1 py-4">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
