
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CoffeeBuddy = () => {
  const { toast } = useToast();
  const [requestStatus, setRequestStatus] = useState<'idle' | 'searching' | 'matched'>('idle');
  const [match, setMatch] = useState<null | { name: string, avatar: string }>(null);

  const handleFindBuddy = () => {
    setRequestStatus('searching');
    toast({
      title: "Searching for a buddy",
      description: "We're looking for someone to connect with you."
    });
    
    // Simulate finding a match after 3 seconds
    setTimeout(() => {
      setRequestStatus('matched');
      setMatch({
        name: "Jane Smith",
        avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=Jane"
      });
      toast({
        title: "Match found!",
        description: "You've been matched with Jane Smith for a coffee chat."
      });
    }, 3000);
  };

  const handleReset = () => {
    setRequestStatus('idle');
    setMatch(null);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Coffee Buddy</CardTitle>
          <CardDescription>
            Find someone to have a quick coffee chat with
          </CardDescription>
        </CardHeader>
        <CardContent>
          {requestStatus === 'idle' && (
            <p>
              Looking for a spontaneous conversation? Get matched with a colleague who's also on break!
            </p>
          )}
          
          {requestStatus === 'searching' && (
            <div className="text-center py-8">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-12 w-12 bg-blue-200 rounded-full mb-4"></div>
                <div className="h-4 w-32 bg-blue-200 rounded mb-2"></div>
                <div className="h-3 w-24 bg-blue-100 rounded"></div>
              </div>
              <p className="mt-4">Looking for a perfect match...</p>
            </div>
          )}
          
          {requestStatus === 'matched' && match && (
            <div className="text-center py-4">
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-full overflow-hidden mb-2">
                  <img src={match.avatar} alt={match.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-medium text-lg">{match.name}</h3>
                <p className="text-sm text-gray-500">Available for a coffee chat</p>
              </div>
              <div className="mt-4 space-x-2">
                <Button>Start Chat</Button>
                <Button variant="outline">Schedule Call</Button>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {requestStatus === 'idle' ? (
            <Button onClick={handleFindBuddy}>Find a Buddy</Button>
          ) : (
            <Button variant="outline" onClick={handleReset}>Cancel</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default CoffeeBuddy;
