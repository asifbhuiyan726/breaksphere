
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Users } from "lucide-react";

const interestRooms = [
  {
    id: 1,
    title: "Tech Talk",
    description: "Discuss the latest in technology and development.",
    members: 8,
    tags: ["technology", "coding", "development"],
    color: "bg-pastel-blue"
  },
  {
    id: 2,
    title: "Book Club",
    description: "Share and discuss your favorite reads.",
    members: 5,
    tags: ["books", "reading", "literature"],
    color: "bg-pastel-green"
  },
  {
    id: 3,
    title: "Fitness Friends",
    description: "Tips, motivation and workout buddies.",
    members: 12,
    tags: ["fitness", "health", "workouts"],
    color: "bg-pastel-purple"
  },
  {
    id: 4,
    title: "Foodies",
    description: "Recipes, restaurant recommendations and culinary discussions.",
    members: 15,
    tags: ["food", "cooking", "restaurants"],
    color: "bg-pastel-yellow"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interestRooms.map((room) => (
          <Card key={room.id} className={`pastel-card card-hover overflow-hidden border ${room.color} border-opacity-30`}>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">{room.title}</CardTitle>
              <CardDescription>{room.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {room.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-white bg-opacity-50 text-gray-700 text-xs px-2.5 py-1 rounded-full font-sans"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="h-4 w-4 mr-1.5" />
                <span>{room.members} active members</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleJoinRoom(room.id, room.title)} className="button-hover w-full">Join Room</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InterestRooms;
