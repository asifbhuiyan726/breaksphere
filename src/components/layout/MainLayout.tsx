
import { ReactNode } from "react";
import Navbar from "./Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-pastel-gray/20">
      <Navbar />
      <main className="container mx-auto px-4 py-6 md:py-8">
        {children}
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
