
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const icebreakers = [
  "If you could have any superpower, what would it be and why?",
  "What's the last great book or article you read?",
  "What's your favorite way to spend a day off?",
  "If you could travel anywhere right now, where would you go?",
  "What's a skill you'd like to learn in the next year?",
  "What's your favorite meal to cook at home?",
  "What was your first job?",
  "What's something you're looking forward to this year?"
];

const IcebreakerWidget = () => {
  const { toast } = useToast();
  const [currentIcebreaker, setCurrentIcebreaker] = useState(() => 
    icebreakers[Math.floor(Math.random() * icebreakers.length)]
  );
  const [responseText, setResponseText] = useState("");
  
  const handleNewIcebreaker = () => {
    let newIcebreaker;
    do {
      newIcebreaker = icebreakers[Math.floor(Math.random() * icebreakers.length)];
    } while (newIcebreaker === currentIcebreaker);
    
    setCurrentIcebreaker(newIcebreaker);
    setResponseText("");
  };
  
  const handleSubmitResponse = () => {
    if (!responseText.trim()) return;
    
    toast({
      title: "Response shared",
      description: "Your icebreaker response has been shared with the team."
    });
    
    setResponseText("");
    handleNewIcebreaker();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Icebreaker</CardTitle>
        <CardDescription>Get to know your colleagues better</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg font-medium mb-4">{currentIcebreaker}</p>
        <textarea 
          className="w-full p-2 border rounded-md resize-none"
          rows={3}
          placeholder="Share your response..."
          value={responseText}
          onChange={(e) => setResponseText(e.target.value)}
        ></textarea>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleNewIcebreaker}>New Question</Button>
        <Button onClick={handleSubmitResponse}>Share</Button>
      </CardFooter>
    </Card>
  );
};

export default IcebreakerWidget;
