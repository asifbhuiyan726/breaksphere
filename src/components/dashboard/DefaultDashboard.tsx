
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DefaultDashboardProps {
  currentStatus: string;
  onStatusChange?: (status: string) => void;
}

const DefaultDashboard = ({ currentStatus, onStatusChange }: DefaultDashboardProps) => {
  const { toast } = useToast();
  
  const handleStartBreak = () => {
    if (onStatusChange) {
      onStatusChange("break");
      toast({
        title: "Break initiated",
        description: "Your status has been changed to 'On Break'.",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Welcome Back!</CardTitle>
          <CardDescription>
            Your current status is: <span className="font-medium capitalize">{currentStatus}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Switch to break mode to connect with colleagues, join interest rooms, find a coffee buddy, or participate in events.
          </p>
          <Button onClick={handleStartBreak} className="flex items-center gap-2">
            <Coffee className="h-4 w-4" />
            <span>Start a Break</span>
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Latest events scheduled for your team</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="border-b pb-2">
              <p className="font-medium">Weekly Team Sync</p>
              <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
            </li>
            <li className="border-b pb-2">
              <p className="font-medium">Product Demo</p>
              <p className="text-sm text-gray-500">Wed, 2:00 PM</p>
            </li>
            <li>
              <p className="font-medium">Friday Social Hour</p>
              <p className="text-sm text-gray-500">Fri, 4:30 PM</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DefaultDashboard;
