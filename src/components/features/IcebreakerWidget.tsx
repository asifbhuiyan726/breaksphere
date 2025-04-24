
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, RefreshCw } from "lucide-react";

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
    <Card className="pastel-card overflow-hidden border-pastel-purple/50 bg-gradient-to-br from-pastel-purple/30 to-white">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-purple-500" />
          Icebreaker
        </CardTitle>
        <CardDescription>Get to know your colleagues better</CardDescription>
      </CardHeader>
      <CardContent className="pt-3">
        <div className="bg-white bg-opacity-70 p-3 rounded-lg mb-4">
          <p className="text-lg font-medium text-gray-800 font-serif italic">"{currentIcebreaker}"</p>
        </div>
        <textarea 
          className="w-full p-3 border border-pastel-purple/30 rounded-lg resize-none bg-white bg-opacity-80 
                    focus:ring-1 focus:ring-purple-300 focus:border-purple-300 font-serif transition-all"
          rows={3}
          placeholder="Share your response..."
          value={responseText}
          onChange={(e) => setResponseText(e.target.value)}
        ></textarea>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-pastel-purple/20 bg-white/50">
        <Button variant="outline" onClick={handleNewIcebreaker} className="text-purple-600 border-purple-300 hover:bg-purple-50">
          <RefreshCw className="h-4 w-4 mr-1" /> New Question
        </Button>
        <Button onClick={handleSubmitResponse} className="bg-purple-600 hover:bg-purple-700">Share</Button>
      </CardFooter>
    </Card>
  );
};

export default IcebreakerWidget;
