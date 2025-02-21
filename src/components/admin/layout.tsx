import { AdminHeader } from "./header";
import { AdminSidebar } from "./sidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="h-screen flex flex-col bg-background">
      <AdminHeader />
      <div className="flex-1 flex">
        <AdminSidebar />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
