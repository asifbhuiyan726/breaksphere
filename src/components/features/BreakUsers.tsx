
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, PhoneCall } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ChatDialog } from "./ChatDialog";
import { CallDialog } from "./CallDialog";

// Mock data - in a real app this would come from your backend
const usersOnBreak = [
  {
    id: 1,
    name: "Sarah Wilson",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=Sarah",
    status: "break",
    duration: "10 mins left"
  },
  {
    id: 2,
    name: "Mike Chen",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=Mike",
    status: "break",
    duration: "5 mins left"
  },
  {
    id: 3,
    name: "Emma Davis",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=Emma",
    status: "break",
    duration: "15 mins left"
  }
];

const BreakUsers = () => {
  const { toast } = useToast();
  const [chatUser, setChatUser] = useState<{ name: string } | null>(null);
  const [callUser, setCallUser] = useState<{ name: string; avatar: string } | null>(null);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">People on Break</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px] pr-4">
            <div className="space-y-4">
              {usersOnBreak.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user.name}</h4>
                      <p className="text-sm text-gray-500">{user.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setChatUser(user)}
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setCallUser(user)}
                    >
                      <PhoneCall className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {chatUser && (
        <ChatDialog
          isOpen={true}
          onClose={() => setChatUser(null)}
          recipient={chatUser.name}
        />
      )}

      {callUser && (
        <CallDialog
          isOpen={true}
          onClose={() => setCallUser(null)}
          recipient={callUser.name}
          recipientAvatar={callUser.avatar}
        />
      )}
    </>
  );
};

export default BreakUsers;
