
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Event {
  id: number;
  title: string;
  time: string;
  participants: number;
  joined: boolean;
}

export default function BreakEvents() {
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      title: "Coffee Break Meetup",
      time: "10:30 AM",
      participants: 5,
      joined: false,
    },
    {
      id: 2,
      title: "Quick Team Sync",
      time: "11:00 AM",
      participants: 3,
      joined: true,
    },
    {
      id: 3,
      title: "Lunch Group",
      time: "12:30 PM",
      participants: 8,
      joined: false,
    },
  ]);

  const handleToggleJoin = (eventId: number) => {
    setEvents(events.map(event => {
      if (event.id === eventId) {
        const updatedEvent = {
          ...event,
          joined: !event.joined,
          participants: event.joined ? event.participants - 1 : event.participants + 1
        };
        
        // Show toast
        toast({
          title: updatedEvent.joined ? "Event Joined" : "Left Event",
          description: updatedEvent.joined 
            ? `You've joined ${updatedEvent.title}` 
            : `You've left ${updatedEvent.title}`,
        });
        
        return updatedEvent;
      }
      return event;
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-brand-orange" />
          Break Events
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <div>
                <h4 className="font-medium">{event.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {event.time} · {event.participants} participants
                </p>
              </div>
              <Button 
                variant={event.joined ? "outline" : "default"}
                onClick={() => handleToggleJoin(event.id)}
              >
                {event.joined ? "Leave" : "Join"}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
