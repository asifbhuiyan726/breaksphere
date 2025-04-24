
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Coffee, MessageSquare, Clock } from "lucide-react";
import { ChatDialog } from "./ChatDialog";
import { CallDialog } from "./CallDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CoffeeBuddy = () => {
  const { toast } = useToast();
  const [requestStatus, setRequestStatus] = useState<'idle' | 'searching' | 'matched'>('idle');
  const [match, setMatch] = useState<null | { name: string, avatar: string }>(null);
  const [showChatDialog, setShowChatDialog] = useState(false);
  const [showCallDialog, setShowCallDialog] = useState(false);

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
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
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

  const handleStartChat = () => {
    if (match) {
      setShowChatDialog(true);
    }
  };

  const handleScheduleCall = () => {
    if (match) {
      setShowCallDialog(true);
    }
  };

  return (
    <div className="space-y-4">
      <Card className="pastel-card overflow-hidden border-pastel-peach bg-gradient-to-br from-white to-pastel-peach">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Coffee className="h-5 w-5 text-brand-orange" />
            <CardTitle>Coffee Buddy</CardTitle>
          </div>
          <CardDescription>
            Find someone to have a quick coffee chat with
          </CardDescription>
        </CardHeader>
        <CardContent>
          {requestStatus === 'idle' && (
            <div className="bg-white bg-opacity-70 rounded-lg p-4">
              <p className="text-gray-700 font-serif">
                Looking for a spontaneous conversation? Get matched with a colleague who's also on break!
              </p>
            </div>
          )}
          
          {requestStatus === 'searching' && (
            <div className="text-center py-8">
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-16 w-16 bg-pastel-orange rounded-full mb-4 flex items-center justify-center">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <div className="h-4 w-32 bg-pastel-orange/30 rounded mb-2"></div>
                <div className="h-3 w-24 bg-pastel-orange/20 rounded"></div>
              </div>
              <p className="mt-4 font-serif">Looking for a perfect match...</p>
            </div>
          )}
          
          {requestStatus === 'matched' && match && (
            <div className="text-center py-4 bg-white bg-opacity-70 rounded-lg">
              <div className="flex flex-col items-center">
                <Avatar className="h-20 w-20 mb-3 ring-4 ring-brand-orange/20">
                  <AvatarImage src={match.avatar} alt={match.name} />
                  <AvatarFallback>{match.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className="font-medium text-lg">{match.name}</h3>
                <p className="text-sm text-gray-500">Available for a coffee chat</p>
              </div>
              <div className="mt-5 space-x-3">
                <Button className="button-hover" onClick={handleStartChat}>
                  <MessageSquare className="h-4 w-4 mr-1" /> Start Chat
                </Button>
                <Button variant="outline" className="button-hover" onClick={handleScheduleCall}>
                  <Clock className="h-4 w-4 mr-1" /> Schedule Call
                </Button>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="bg-white/50 border-t border-pastel-peach/30">
          {requestStatus === 'idle' ? (
            <Button onClick={handleFindBuddy} className="w-full button-hover">Find a Buddy</Button>
          ) : (
            <Button variant="outline" onClick={handleReset} className="w-full">Cancel</Button>
          )}
        </CardFooter>
      </Card>

      {/* Chat and Call Dialogs */}
      {match && showChatDialog && (
        <ChatDialog
          isOpen={showChatDialog}
          onClose={() => setShowChatDialog(false)}
          recipient={match.name}
        />
      )}

      {match && showCallDialog && (
        <CallDialog
          isOpen={showCallDialog}
          onClose={() => setShowCallDialog(false)}
          recipient={match.name}
          recipientAvatar={match.avatar}
        />
      )}
    </div>
  );
};

export default CoffeeBuddy;
