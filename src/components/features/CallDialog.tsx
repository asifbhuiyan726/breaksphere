
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MicOff, PhoneOff, Video, VideoOff } from "lucide-react";
import { useState } from "react";

interface CallDialogProps {
  isOpen: boolean;
  onClose: () => void;
  recipient: string;
  recipientAvatar: string;
}

export function CallDialog({
  isOpen,
  onClose,
  recipient,
  recipientAvatar,
}: CallDialogProps) {
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Call with {recipient}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-6 py-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src={recipientAvatar} alt={recipient} />
            <AvatarFallback>{recipient.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <p className="text-lg font-medium">{recipient}</p>
          <p className="text-sm text-muted-foreground">00:02:45</p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsVideoEnabled(!isVideoEnabled)}
            >
              {isVideoEnabled ? (
                <Video className="h-4 w-4" />
              ) : (
                <VideoOff className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsAudioEnabled(!isAudioEnabled)}
            >
              {isAudioEnabled ? (
                <MicOff className="h-4 w-4" />
              ) : (
                <MicOff className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="destructive"
              size="icon"
              onClick={onClose}
            >
              <PhoneOff className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
