import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BulkActionsProps {
  selectedCount?: number;
}

export function BulkActions({ selectedCount = 0 }: BulkActionsProps) {
  const handleAssign = (value: string) => {
    console.log("Assigning selected tickets to:", value);
  };

  const handlePriorityChange = (value: string) => {
    console.log("Changing priority of selected tickets to:", value);
  };

  const handleClose = () => {
    console.log("Closing selected tickets");
  };

  return (
    <div className="flex items-center gap-2">
      {selectedCount > 0 && (
        <span className="text-sm text-muted-foreground">
          {selectedCount} ticket{selectedCount !== 1 ? "s" : ""} selected
        </span>
      )}
      <Select>
        <SelectTrigger className="w-[200px]" disabled={selectedCount === 0}>
          <SelectValue placeholder="Assign to" />
        </SelectTrigger>
        <SelectContent onValueChange={handleAssign}>
          <SelectItem value="john">John Doe</SelectItem>
          <SelectItem value="jane">Jane Smith</SelectItem>
          <SelectItem value="mike">Mike Johnson</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[200px]" disabled={selectedCount === 0}>
          <SelectValue placeholder="Change Priority" />
        </SelectTrigger>
        <SelectContent onValueChange={handlePriorityChange}>
          <SelectItem value="urgent">Urgent</SelectItem>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="normal">Normal</SelectItem>
          <SelectItem value="low">Low</SelectItem>
        </SelectContent>
      </Select>
      <Button
        variant="outline"
        disabled={selectedCount === 0}
        onClick={handleClose}
      >
        Close Selected
      </Button>
    </div>
  );
}
