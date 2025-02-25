import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Download } from "lucide-react";
import { DatePickerWithRange } from "@/components/ui/date-picker-with-range";
import { addDays } from "date-fns";

interface SupportFiltersProps {
  onSearch?: (query: string) => void;
  onPriorityChange?: (priority: string) => void;
  onStatusChange?: (status: string) => void;
  onDateChange?: (range: { from: Date; to: Date }) => void;
}

export function SupportFilters({
  onSearch,
  onPriorityChange,
  onStatusChange,
  onDateChange,
}: SupportFiltersProps) {
  const defaultDateRange = {
    from: new Date(),
    to: addDays(new Date(), 7),
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-1 items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, email, or subject..."
            className="pl-8"
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent onValueChange={onPriorityChange}>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="urgent">Urgent</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="normal">Normal</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent onValueChange={onStatusChange}>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
          </SelectContent>
        </Select>
        <DatePickerWithRange
          className="w-[300px]"
          defaultDate={defaultDateRange}
          onChange={onDateChange}
        />
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          onClick={() => console.log("Exporting data...")}
        >
          <Download className="h-4 w-4 mr-2" /> Export
        </Button>
      </div>
    </div>
  );
}
