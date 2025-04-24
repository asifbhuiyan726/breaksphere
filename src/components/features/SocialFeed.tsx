
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Define a proper type for our posts to prevent TypeScript errors
type PollOption = {
  id: string;
  text: string;
  votes: number;
};

type Post = {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  isPoll?: boolean;
  pollOptions?: PollOption[];
};

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
    
    const post: Post = {
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
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <img src="https://api.dicebear.com/7.x/avatars/svg?seed=John" alt="Your avatar" />
            </Avatar>
            <span className="font-medium">Share something...</span>
          </div>
        </CardHeader>
        <CardContent>
          <Textarea 
            placeholder="What's on your mind?" 
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="resize-none"
          />
        </CardContent>
        <CardFooter className="justify-between">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Add Poll</Button>
          </div>
          <Button size="sm" onClick={handlePostSubmit}>Post</Button>
        </CardFooter>
      </Card>
      
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <img src={post.author.avatar} alt={post.author.name} />
              </Avatar>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-xs text-gray-500">{post.timestamp}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-line">{post.content}</p>
            
            {post.isPoll && post.pollOptions && (
              <div className="mt-4 space-y-2">
                {post.pollOptions.map((option) => (
                  <div key={option.id} className="flex flex-col">
                    <Button 
                      variant="outline" 
                      className="justify-between"
                      onClick={() => handleVote(post.id, option.id)}
                    >
                      <span>{option.id}. {option.text}</span>
                      <span className="text-xs text-gray-500">{option.votes} votes</span>
                    </Button>
                    <div className="h-1 mt-1 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary"
                        style={{ width: `${(option.votes / post.pollOptions.reduce((acc, curr) => acc + curr.votes, 0)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="border-t pt-4">
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" onClick={() => handleLike(post.id)}>
                Like ({post.likes})
              </Button>
              <Button variant="ghost" size="sm">
                Comment ({post.comments})
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default SocialFeed;
