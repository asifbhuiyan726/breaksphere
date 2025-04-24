
import { useState } from "react";
import { User, Bell, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusDropdown from "../status/StatusDropdown";
import { useToast } from "@/hooks/use-toast";

interface NavbarProps {
  userStatus: string;
  onStatusChange: (status: string) => void;
}

const Navbar = ({ userStatus, onStatusChange }: NavbarProps) => {
  const { toast } = useToast();
  const [user, setUser] = useState({
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=John",
  });

  const handleStatusChange = (status: string) => {
    onStatusChange(status);
    
    // Update user interface with toast
    toast({
      title: "Status updated",
      description: `Your status is now set to ${status}`,
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">
              <span className="text-primary">Break</span>
              <span className="text-brand-orange">Sphere</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <StatusDropdown 
              currentStatus={userStatus} 
              onStatusChange={handleStatusChange} 
            />
            
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-brand-orange rounded-full"></span>
            </Button>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className={`absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white ${
                    userStatus === "break" ? "bg-green-500" : 
                    userStatus === "lunch" ? "bg-orange-500" : 
                    userStatus === "dnd" ? "bg-red-500" : "bg-blue-500"
                  }`}></div>
                  <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-gray-100">
                    <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                  </div>
                </div>
                <span className="text-sm font-medium hidden sm:inline">{user.name}</span>
              </div>
              
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
