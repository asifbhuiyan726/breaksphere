
import React, { ReactNode, useState } from "react";
import Navbar from "./Navbar";

interface MainLayoutProps {
  children: ReactNode;
  onStatusChange?: (status: string) => void;
}

const MainLayout = ({ children, onStatusChange }: MainLayoutProps) => {
  const [userStatus, setUserStatus] = useState("available");

  const handleStatusChange = (status: string) => {
    setUserStatus(status);
    if (onStatusChange) {
      onStatusChange(status);
    }
  };

  return (
    <div className="min-h-screen bg-pastel-gray/20">
      <Navbar userStatus={userStatus} onStatusChange={handleStatusChange} />
      <main className="container mx-auto px-4 py-6 md:py-8">
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            // Pass only props that the child component expects
            return React.cloneElement(child);
          }
          return child;
        })}
      </main>
      <footer className="bg-white border-t border-gray-100 py-4 mt-10">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BreakSphere — Connect with colleagues during breaks</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
