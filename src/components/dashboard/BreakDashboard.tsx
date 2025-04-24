
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import InterestRooms from "../features/InterestRooms";
import CoffeeBuddy from "../features/CoffeeBuddy";
import SocialFeed from "../features/SocialFeed";
import IcebreakerWidget from "../features/IcebreakerWidget";
import BreakUsers from "../features/BreakUsers";
import { Clock, Timer, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BreakDashboardProps {
  onEndBreak?: () => void;
}

const BreakDashboard = ({ onEndBreak }: BreakDashboardProps) => {
  const { toast } = useToast();

  const handleEndBreak = () => {
    if (onEndBreak) {
      onEndBreak();
      toast({
        title: "Break ended",
        description: "You are now back to work mode.",
      });
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-brand-orange">Break Dashboard</h2>
        <Button 
          onClick={handleEndBreak} 
          variant="outline" 
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          End Break
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2">
          <Tabs defaultValue="rooms" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="rooms" className="rounded-full">Interest Rooms</TabsTrigger>
              <TabsTrigger value="buddy" className="rounded-full">Coffee Buddy</TabsTrigger>
              <TabsTrigger value="feed" className="rounded-full">Social Feed</TabsTrigger>
            </TabsList>
            <TabsContent value="rooms" className="animate-slide-up">
              <InterestRooms />
            </TabsContent>
            <TabsContent value="buddy" className="animate-slide-up">
              <CoffeeBuddy />
            </TabsContent>
            <TabsContent value="feed" className="animate-slide-up">
              <SocialFeed />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <Card className="overflow-hidden border-pastel-orange bg-gradient-to-br from-pastel-peach to-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-brand-orange" />
                Break Time
              </CardTitle>
              <CardDescription>Take a moment to recharge</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-center text-brand-orange">15:00</p>
              <p className="text-center text-sm text-gray-500 mt-2">minutes remaining</p>
            </CardContent>
          </Card>
          
          <BreakUsers />
          <IcebreakerWidget />
        </div>
      </div>
    </div>
  );
};

export default BreakDashboard;
