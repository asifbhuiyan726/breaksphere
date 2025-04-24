
import { useState } from "react";
import { User, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusDropdown from "../status/StatusDropdown";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const { toast } = useToast();
  const [user, setUser] = useState({
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=John",
    status: "available"
  });

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">
              Break<span className="text-orange-500">Sphere</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <StatusDropdown 
              currentStatus={user.status} 
              onStatusChange={(status) => {
                setUser(prev => ({ ...prev, status }));
                toast({
                  title: "Status updated",
                  description: `Your status is now set to ${status}`,
                });
              }} 
            />
            
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                    user.status === "break" ? "bg-green-500" : 
                    user.status === "lunch" ? "bg-orange-500" : 
                    user.status === "dnd" ? "bg-red-500" : "bg-blue-500"
                  }`}></div>
                  <div className="h-9 w-9 rounded-full overflow-hidden">
                    <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                  </div>
                </div>
                <span className="text-sm font-medium hidden sm:inline">{user.name}</span>
              </div>
              
              <Button variant="ghost" size="icon" onClick={handleLogout}>
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
