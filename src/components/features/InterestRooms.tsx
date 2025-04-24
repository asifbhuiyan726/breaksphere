
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const interestRooms = [
  {
    id: 1,
    title: "Tech Talk",
    description: "Discuss the latest in technology and development.",
    members: 8,
    tags: ["technology", "coding", "development"]
  },
  {
    id: 2,
    title: "Book Club",
    description: "Share and discuss your favorite reads.",
    members: 5,
    tags: ["books", "reading", "literature"]
  },
  {
    id: 3,
    title: "Fitness Friends",
    description: "Tips, motivation and workout buddies.",
    members: 12,
    tags: ["fitness", "health", "workouts"]
  },
  {
    id: 4,
    title: "Foodies",
    description: "Recipes, restaurant recommendations and culinary discussions.",
    members: 15,
    tags: ["food", "cooking", "restaurants"]
  }
];

const InterestRooms = () => {
  const { toast } = useToast();
  
  const handleJoinRoom = (roomId: number, roomTitle: string) => {
    toast({
      title: "Room joined",
      description: `You've joined the ${roomTitle} room.`
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {interestRooms.map((room) => (
          <Card key={room.id}>
            <CardHeader>
              <CardTitle>{room.title}</CardTitle>
              <CardDescription>{room.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                {room.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm mt-2">{room.members} active members</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleJoinRoom(room.id, room.title)}>Join Room</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InterestRooms;
