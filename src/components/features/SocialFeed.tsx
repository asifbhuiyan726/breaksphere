import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Heart, BarChart3 } from "lucide-react";

// Define a proper type for our posts
type PollOption = {
  id: string;
  text: string;
  votes: number;
};

interface BasePost {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

interface RegularPost extends BasePost {
  isPoll?: false;
  pollOptions?: never;
}

interface PollPost extends BasePost {
  isPoll: true;
  pollOptions: PollOption[];
}

type Post = RegularPost | PollPost;

const initialPosts: Post[] = [
  {
    id: 1,
    author: {
      name: "Alex Johnson",
      avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=Alex"
    },
    content: "Just joined a great session on remote work productivity. Anyone else attended?",
    timestamp: "10 min ago",
    likes: 5,
    comments: 2
  },
  {
    id: 2,
    author: {
      name: "Sam Taylor",
      avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=Sam"
    },
    content: "Poll: What's your favorite break activity?\nA) Quick walk\nB) Coffee chat\nC) Reading\nD) Social media browse",
    timestamp: "25 min ago",
    likes: 8,
    comments: 12,
    isPoll: true,
    pollOptions: [
      { id: 'A', text: 'Quick walk', votes: 5 },
      { id: 'B', text: 'Coffee chat', votes: 8 },
      { id: 'C', text: 'Reading', votes: 3 },
      { id: 'D', text: 'Social media browse', votes: 4 }
    ]
  }
];

const SocialFeed = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [newPost, setNewPost] = useState("");
  
  const handlePostSubmit = () => {
    if (!newPost.trim()) return;
    
    const post: RegularPost = {
      id: Date.now(),
      author: {
        name: "John Doe",
        avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=John"
      },
      content: newPost,
      timestamp: "Just now",
      likes: 0,
      comments: 0
    };
    
    setPosts([post, ...posts]);
    setNewPost("");
    toast({
      title: "Post created",
      description: "Your post has been published to the feed."
    });
  };
  
  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };
  
  const handleVote = (postId: number, optionId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId && post.isPoll && post.pollOptions) {
        return {
          ...post,
          pollOptions: post.pollOptions.map(option => 
            option.id === optionId ? { ...option, votes: option.votes + 1 } : option
          )
        };
      }
      return post;
    }));
    
    toast({
      title: "Vote recorded",
      description: "Your vote has been submitted."
    });
  };

  return (
    <div className="space-y-5">
      <Card className="pastel-card overflow-hidden border-pastel-blue bg-white">
        <CardHeader className="pb-2 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <Avatar className="h-9 w-9 ring-2 ring-pastel-blue/30">
              <img src="https://api.dicebear.com/7.x/avatars/svg?seed=John" alt="Your avatar" />
            </Avatar>
            <span className="font-medium text-gray-700">Share something...</span>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <Textarea 
            placeholder="What's on your mind?" 
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="resize-none border-pastel-blue/30 focus:border-pastel-blue"
          />
        </CardContent>
        <CardFooter className="justify-between border-t border-gray-100 bg-gray-50/50">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="text-xs flex items-center gap-1">
              <BarChart3 className="h-3.5 w-3.5" />
              Add Poll
            </Button>
          </div>
          <Button size="sm" className="button-hover" onClick={handlePostSubmit}>Post</Button>
        </CardFooter>
      </Card>
      
      {posts.map((post) => (
        <Card key={post.id} className="pastel-card card-hover overflow-hidden border-gray-200 bg-white">
          <CardHeader className="pb-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <img src={post.author.avatar} alt={post.author.name} className="rounded-full" />
              </Avatar>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-xs text-gray-500">{post.timestamp}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="py-4">
            <p className="whitespace-pre-line font-serif text-gray-700">{post.content}</p>
            
            {post.isPoll && post.pollOptions && (
              <div className="mt-5 space-y-3">
                {post.pollOptions.map((option) => (
                  <div key={option.id} className="flex flex-col">
                    <Button 
                      variant="outline" 
                      className="justify-between hover:bg-pastel-blue/20 transition-all"
                      onClick={() => handleVote(post.id, option.id)}
                    >
                      <span className="font-medium">{option.id}. {option.text}</span>
                      <span className="text-xs text-gray-500">{option.votes} votes</span>
                    </Button>
                    <div className="h-1.5 mt-1 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-700"
                        style={{ width: `${(option.votes / post.pollOptions.reduce((acc, curr) => acc + curr.votes, 0)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="border-t border-gray-100 py-2 bg-gray-50/50">
            <div className="flex space-x-4 w-full">
              <Button variant="ghost" size="sm" className="flex gap-1.5 text-gray-600 hover:text-brand-orange" onClick={() => handleLike(post.id)}>
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex gap-1.5 text-gray-600">
                <MessageSquare className="h-4 w-4" />
                <span>{post.comments}</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SocialFeed;
