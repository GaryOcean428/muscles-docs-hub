import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  Dumbbell, 
  Target, 
  BookOpen, 
  Play, 
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Heart
} from 'lucide-react'
import './App.css'

// Import pages
import WorkoutDetail from './pages/WorkoutDetail.jsx'
import Movements from './pages/Movements.jsx'
import Guides from './pages/Guides.jsx'
import Blog from './pages/Blog.jsx'
import Workouts from './pages/Workouts.jsx'

// Import images
import musclesLogo from './assets/muscles(Copy).png'
import thrusterDemo from './assets/images/movements/thruster_demo.png'
import kettlebellSwing from './assets/images/movements/kettlebell_swing.png'

function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="muscles-gradient border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={musclesLogo} alt="Muscles AI" className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Muscles AI</h1>
                <p className="text-sm text-muted-foreground">Documentation Hub</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/workouts" className="text-foreground hover:text-primary transition-colors">
                Workouts
              </Link>
              <Link to="/movements" className="text-foreground hover:text-primary transition-colors">
                Movements
              </Link>
              <Link to="/guides" className="text-foreground hover:text-primary transition-colors">
                Guides
              </Link>
              <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Button asChild>
                <a href="https://getmuscles.app" target="_blank" rel="noopener noreferrer">
                  Open App
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="muscles-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 muscles-text-glow">
            Master Your Fitness Journey
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive guides, expert workouts, and movement instruction to complement your Muscles AI experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/guides')} className="muscles-button">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Guides
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/movements')} className="muscles-button-outline">
              <Play className="mr-2 h-5 w-5" />
              Watch Demos
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive resources designed to enhance your Muscles AI experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="muscles-border-glow hover:muscles-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Dumbbell className="h-12 w-12 text-primary" />
                  <Badge variant="secondary">150+ Movements</Badge>
                </div>
                <CardTitle className="text-2xl">Movement Library</CardTitle>
                <CardDescription>
                  Detailed instructions for every exercise in your Muscles AI workouts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => navigate('/movements')} className="w-full">
                  Explore
                </Button>
              </CardContent>
            </Card>

            <Card className="muscles-border-glow hover:muscles-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Target className="h-12 w-12 text-primary" />
                  <Badge variant="secondary">50+ Workouts</Badge>
                </div>
                <CardTitle className="text-2xl">Sample Workouts</CardTitle>
                <CardDescription>
                  Benchmark WODs, Hero workouts, and categorized training sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => navigate('/workouts')} className="w-full">
                  Explore
                </Button>
              </CardContent>
            </Card>

            <Card className="muscles-border-glow hover:muscles-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="h-12 w-12 text-primary" />
                  <Badge variant="secondary">Expert Guides</Badge>
                </div>
                <CardTitle className="text-2xl">Training Philosophy</CardTitle>
                <CardDescription>
                  Understanding intensity, recovery, and progressive overload
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => navigate('/guides')} className="w-full">
                  Explore
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Workouts Section */}
      <section id="workouts" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Workouts</h2>
            <p className="text-xl text-muted-foreground">
              Benchmark WODs and Hero workouts with scaling options for every level
            </p>
          </div>

          <Tabs defaultValue="benchmark" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="benchmark">Benchmark WODs</TabsTrigger>
              <TabsTrigger value="hero">Hero Workouts</TabsTrigger>
              <TabsTrigger value="strength">Strength Focus</TabsTrigger>
            </TabsList>

            <TabsContent value="benchmark" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="muscles-border-glow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge>Benchmark</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>3-8 min</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">Fran</CardTitle>
                    <CardDescription>21-15-9 Thrusters & Pull-ups</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={thrusterDemo} 
                      alt="Thruster demonstration"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">Intermediate</Badge>
                      <Button onClick={() => navigate('/workout/fran')}>
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="muscles-border-glow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge>Benchmark</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>20 min</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">Cindy</CardTitle>
                    <CardDescription>AMRAP: 5 pull-ups, 10 push-ups, 15 squats</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={kettlebellSwing} 
                      alt="Bodyweight movements"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">Beginner</Badge>
                      <Button onClick={() => navigate('/workout/cindy')}>
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="hero" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="muscles-border-glow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="destructive">Hero WOD</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span>25-45 min</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">Murph</CardTitle>
                    <CardDescription>1 mile run, 100 pull-ups, 200 push-ups, 300 squats, 1 mile run</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={thrusterDemo} 
                      alt="Murph workout"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">Advanced</Badge>
                      <Button onClick={() => navigate('/workout/murph')}>
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="strength" className="space-y-6">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Strength Workouts Coming Soon</h3>
                <p className="text-muted-foreground">
                  We're adding dedicated strength training workouts to complement your conditioning.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Training Reminder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto muscles-border-glow">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-3xl">Important Training Reminder</CardTitle>
              <CardDescription className="text-lg">
                A well-executed workout should leave you feeling energized, not destroyed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary flex items-center gap-2">
                    <CheckCircle className="h-6 w-6" />
                    Signs of a Good Workout
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Feeling accomplished and strong</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Energized for the rest of your day</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Maintained good form throughout</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Could potentially do one more round</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-destructive flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6" />
                    Signs You Pushed Too Hard
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Completely exhausted for hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Form broke down significantly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Feeling depleted or drained</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Unable to function normally after</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center p-6 bg-primary/10 rounded-lg">
                <p className="text-lg font-medium">
                  <strong>Remember:</strong> Strength workouts should build you up, not break you down. 
                  Listen to your body and scale appropriately.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="muscles-gradient border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={musclesLogo} alt="Muscles AI" className="h-8 w-8" />
                <span className="text-lg font-bold">Muscles AI</span>
              </div>
              <p className="text-muted-foreground">
                Your AI-powered fitness companion for smarter training and better results.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/workouts" className="text-muted-foreground hover:text-primary">Workouts</Link></li>
                <li><Link to="/movements" className="text-muted-foreground hover:text-primary">Movements</Link></li>
                <li><Link to="/guides" className="text-muted-foreground hover:text-primary">Guides</Link></li>
                <li><Link to="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">App</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://getmuscles.app" target="_blank" rel="noopener noreferrer" 
                     className="text-muted-foreground hover:text-primary flex items-center gap-2">
                    Open Muscles AI <ExternalLink className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <p className="text-muted-foreground">
                Join the Muscles AI community and take your fitness to the next level.
              </p>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Muscles AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/workout/:workoutId" element={<WorkoutDetail />} />
        <Route path="/movements" element={<Movements />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App

