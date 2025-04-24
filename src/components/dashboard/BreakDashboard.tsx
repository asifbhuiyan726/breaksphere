
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InterestRooms from "../features/InterestRooms";
import CoffeeBuddy from "../features/CoffeeBuddy";
import SocialFeed from "../features/SocialFeed";
import IcebreakerWidget from "../features/IcebreakerWidget";

const BreakDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2">
          <Tabs defaultValue="rooms">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="rooms">Interest Rooms</TabsTrigger>
              <TabsTrigger value="buddy">Coffee Buddy</TabsTrigger>
              <TabsTrigger value="feed">Social Feed</TabsTrigger>
            </TabsList>
            <TabsContent value="rooms">
              <InterestRooms />
            </TabsContent>
            <TabsContent value="buddy">
              <CoffeeBuddy />
            </TabsContent>
            <TabsContent value="feed">
              <SocialFeed />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Break Time</CardTitle>
              <CardDescription>Take a moment to recharge</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-center">15:00</p>
              <p className="text-center text-sm text-gray-500 mt-2">minutes remaining</p>
            </CardContent>
          </Card>
          
          <IcebreakerWidget />
        </div>
      </div>
    </div>
  );
};

export default BreakDashboard;
