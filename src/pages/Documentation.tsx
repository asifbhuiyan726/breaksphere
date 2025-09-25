import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Coffee, 
  MessageCircle, 
  PhoneCall, 
  Users, 
  Calendar, 
  UserCheck, 
  Sparkles,
  Globe,
  Target,
  CheckCircle
} from "lucide-react";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-primary">Break</span>
            <span className="text-brand-orange">Sphere</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive workplace break management and social collaboration platform that transforms your break time into meaningful connections and productive rest.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Social Collaboration</Badge>
            <Badge variant="secondary">Break Management</Badge>
            <Badge variant="secondary">Team Building</Badge>
          </div>
        </div>

        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              BreakSphere revolutionizes workplace break culture by providing a centralized platform for employees to connect, 
              collaborate, and make the most of their downtime. Whether you're looking for a coffee buddy, want to join interest-based 
              chat rooms, or participate in break activities, BreakSphere facilitates meaningful workplace relationships and enhances 
              overall employee satisfaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 border rounded-lg">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">Social Connection</h3>
                <p className="text-sm text-muted-foreground">Connect with colleagues</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Coffee className="h-8 w-8 mx-auto mb-2 text-brand-orange" />
                <h3 className="font-semibold">Break Optimization</h3>
                <p className="text-sm text-muted-foreground">Make breaks more productive</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <Sparkles className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">Team Building</h3>
                <p className="text-sm text-muted-foreground">Strengthen workplace bonds</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Status Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Status Management
              </CardTitle>
              <CardDescription>Real-time status tracking and visibility</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <span><strong>Break:</strong> Currently on break and available for social activities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-blue-500 rounded-full"></div>
                  <span><strong>Available:</strong> Working but open to quick interactions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-orange-500 rounded-full"></div>
                  <span><strong>Lunch:</strong> On lunch break</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  <span><strong>Do Not Disturb:</strong> Focused work mode</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coffee Buddy System */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coffee className="h-5 w-5" />
                Coffee Buddy System
              </CardTitle>
              <CardDescription>AI-powered colleague matching for coffee breaks</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Smart matching based on availability and interests
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Instant chat functionality to coordinate meetups
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Schedule calls for virtual coffee breaks
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Cross-department networking opportunities
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Communication Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Communication Suite
              </CardTitle>
              <CardDescription>Integrated chat and call functionality</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Chat System
                  </h4>
                  <p className="text-sm text-muted-foreground">Real-time messaging for quick coordination and casual conversations</p>
                </div>
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <PhoneCall className="h-4 w-4" />
                    Video Calls
                  </h4>
                  <p className="text-sm text-muted-foreground">Built-in video calling with camera and microphone controls</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interest Rooms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Interest-Based Chat Rooms
              </CardTitle>
              <CardDescription>Topic-focused communities within your workplace</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <Badge variant="outline">🎮 Gaming</Badge>
                <Badge variant="outline">📚 Book Club</Badge>
                <Badge variant="outline">🏃‍♂️ Fitness</Badge>
                <Badge variant="outline">🍳 Cooking</Badge>
                <Badge variant="outline">🎵 Music</Badge>
                <Badge variant="outline">📸 Photography</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Join rooms based on your interests, participate in discussions, and build connections with like-minded colleagues.
              </p>
            </CardContent>
          </Card>

        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Break Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Organized group activities</li>
                <li>• Team building sessions</li>
                <li>• Wellness workshops</li>
                <li>• Social mixers</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Social Feed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Share updates and thoughts</li>
                <li>• Like and comment on posts</li>
                <li>• Discover colleague activities</li>
                <li>• Build workplace community</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Icebreaker Widget
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Daily conversation starters</li>
                <li>• Fun facts and questions</li>
                <li>• Team bonding prompts</li>
                <li>• Cultural exchange topics</li>
              </ul>
            </CardContent>
          </Card>

        </div>

        {/* Use Cases */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Use Cases & Benefits</CardTitle>
            <CardDescription>How BreakSphere transforms workplace culture</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">For Employees</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Combat workplace isolation and build meaningful connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Maximize break time productivity and enjoyment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Discover colleagues with shared interests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Reduce stress through social interaction</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">For Organizations</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Improve employee satisfaction and retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Foster cross-departmental collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Build stronger company culture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Enhance overall workplace wellbeing</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technology Stack */}
        <Card>
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
            <CardDescription>Built with modern, scalable technologies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 border rounded">
                <h4 className="font-semibold text-sm">Frontend</h4>
                <p className="text-xs text-muted-foreground mt-1">React + TypeScript</p>
              </div>
              <div className="text-center p-3 border rounded">
                <h4 className="font-semibold text-sm">Styling</h4>
                <p className="text-xs text-muted-foreground mt-1">Tailwind CSS</p>
              </div>
              <div className="text-center p-3 border rounded">
                <h4 className="font-semibold text-sm">UI Components</h4>
                <p className="text-xs text-muted-foreground mt-1">Shadcn/ui</p>
              </div>
              <div className="text-center p-3 border rounded">
                <h4 className="font-semibold text-sm">Build Tool</h4>
                <p className="text-xs text-muted-foreground mt-1">Vite</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default Documentation;