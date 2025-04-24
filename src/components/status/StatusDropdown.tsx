
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
        <Button variant="outline" className="flex items-center gap-2">
          <StatusIcon className={`h-4 w-4 ${currentStatusOption.color}`} />
          <span>{currentStatusOption.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {statusOptions.map((option) => {
          const Icon = option.icon;
          return (
            <DropdownMenuItem
              key={option.value}
              className={`flex items-center gap-2 ${
                currentStatus === option.value ? "bg-accent" : ""
              }`}
              onClick={() => onStatusChange(option.value)}
            >
              <Icon className={`h-4 w-4 ${option.color}`} />
              <span>{option.label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default StatusDropdown;
