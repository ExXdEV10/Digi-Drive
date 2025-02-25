import { useState } from "react";
import { AdminLayout } from "@/components/admin/layout";
import { AnnouncementList } from "@/components/admin/announcements/announcement-list";
import { CreateAnnouncement } from "@/components/admin/announcements/create-announcement";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

export default function AnnouncementsPage() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

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
                <BreadcrumbPage>Announcements</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-bold mt-2">Announcements</h1>
          <p className="text-muted-foreground">
            Create and manage system-wide announcements.
          </p>
        </div>

        <AnnouncementList onCreateNew={() => setIsCreateOpen(true)} />
        <CreateAnnouncement
          open={isCreateOpen}
          onOpenChange={setIsCreateOpen}
        />
      </div>
    </AdminLayout>
  );
}
