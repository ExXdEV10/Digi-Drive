import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreHorizontal,
  Eye,
  Download,
  Trash,
  RotateCcw,
  Shield,
} from "lucide-react";

const files = [
  {
    id: "1",
    name: "presentation.pdf",
    type: "Document",
    size: "2.5 MB",
    uploadedBy: "John Doe",
    uploadDate: "2024-03-20",
    status: "Active",
  },
  {
    id: "2",
    name: "profile-image.jpg",
    type: "Image",
    size: "1.8 MB",
    uploadedBy: "Jane Smith",
    uploadDate: "2024-03-19",
    status: "Active",
  },
  {
    id: "3",
    name: "project-demo.mp4",
    type: "Video",
    size: "15 MB",
    uploadedBy: "Mike Johnson",
    uploadDate: "2024-03-18",
    status: "Deleted",
  },
];

export function FilesList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead>File Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Uploaded By</TableHead>
            <TableHead>Upload Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {files.map((file) => (
            <TableRow key={file.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{file.name}</TableCell>
              <TableCell>
                <Badge variant="secondary">{file.type}</Badge>
              </TableCell>
              <TableCell>{file.size}</TableCell>
              <TableCell>{file.uploadedBy}</TableCell>
              <TableCell>{file.uploadDate}</TableCell>
              <TableCell>
                <Badge
                  variant={file.status === "Active" ? "success" : "destructive"}
                >
                  {file.status}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Shield className="mr-2 h-4 w-4" />
                      Enforce Policy
                    </DropdownMenuItem>
                    {file.status === "Active" ? (
                      <DropdownMenuItem className="text-destructive">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem>
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Restore
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
