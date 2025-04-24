
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Circle, Coffee, Clock, X } from "lucide-react";

interface StatusDropdownProps {
  currentStatus: string;
  onStatusChange: (status: string) => void;
}

const statusOptions = [
  { label: "Available", value: "available", icon: Circle, color: "text-blue-500" },
  { label: "On Break", value: "break", icon: Coffee, color: "text-green-500" },
  { label: "At Lunch", value: "lunch", icon: Clock, color: "text-orange-500" },
  { label: "Do Not Disturb", value: "dnd", icon: X, color: "text-red-500" },
];

const StatusDropdown = ({ currentStatus, onStatusChange }: StatusDropdownProps) => {
  const currentStatusOption = statusOptions.find(option => option.value === currentStatus) || statusOptions[0];
  const StatusIcon = currentStatusOption.icon;
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 border-gray-200 hover:bg-gray-50">
          <StatusIcon className={`h-3.5 w-3.5 ${currentStatusOption.color}`} />
          <span className="text-sm font-medium">{currentStatusOption.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 rounded-xl border-gray-100 shadow-md">
        {statusOptions.map((option) => {
          const Icon = option.icon;
          return (
            <DropdownMenuItem
              key={option.value}
              className={`flex items-center gap-2 rounded-lg my-0.5 text-sm ${
                currentStatus === option.value ? "bg-gray-100" : ""
              } hover:bg-gray-50 cursor-pointer`}
              onClick={() => onStatusChange(option.value)}
            >
              <Icon className={`h-3.5 w-3.5 ${option.color}`} />
              <span>{option.label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StatusDropdown;
