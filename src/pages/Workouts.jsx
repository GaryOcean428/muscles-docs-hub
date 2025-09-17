import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  ArrowLeft,
  Clock,
  Target,
  Dumbbell,
  Heart,
  Zap
} from 'lucide-react'
import '../App.css'

// Import workout images
import thrusterDemo from '../assets/images/movements/thruster_demo.png'
import kettlebellSwing from '../assets/images/movements/kettlebell_swing.png'
import deadliftDemo from '../assets/images/movements/deadlift_demo.png'
import musclesLogo from '../assets/muscles(Copy).png'

const workoutsDatabase = {
  benchmark: [
    {
      id: 'fran',
      name: 'Fran',
      description: '21-15-9 Thrusters & Pull-ups',
      time: '3-8 min',
      difficulty: 'Intermediate',
      image: thrusterDemo,
      movements: ['Thrusters', 'Pull-ups']
    },
    {
      id: 'cindy',
      name: 'Cindy',
      description: 'AMRAP: 5 pull-ups, 10 push-ups, 15 squats',
      time: '20 min',
      difficulty: 'Beginner',
      image: kettlebellSwing,
      movements: ['Pull-ups', 'Push-ups', 'Air Squats']
    },
    {
      id: 'grace',
      name: 'Grace',
      description: '30 Clean & Jerks for time',
      time: '2-5 min',
      difficulty: 'Advanced',
      image: deadliftDemo,
      movements: ['Clean & Jerk']
    },
    {
      id: 'helen',
      name: 'Helen',
      description: '3 rounds: 400m run, 21 KB swings, 12 pull-ups',
      time: '8-12 min',
      difficulty: 'Intermediate',
      image: kettlebellSwing,
      movements: ['Running', 'Kettlebell Swings', 'Pull-ups']
    }
  ],
  hero: [
    {
      id: 'murph',
      name: 'Murph',
      description: '1 mile run, 100 pull-ups, 200 push-ups, 300 squats, 1 mile run',
      time: '25-45 min',
      difficulty: 'Advanced',
      image: thrusterDemo,
      movements: ['Running', 'Pull-ups', 'Push-ups', 'Air Squats']
    },
    {
      id: 'chad',
      name: 'Chad',
      description: '1000 box step-ups with 20/14 lb weighted vest',
      time: '45-60 min',
      difficulty: 'Advanced',
      image: deadliftDemo,
      movements: ['Box Step-ups']
    }
  ],
  strength: [
    {
      id: 'deadlift-5x5',
      name: 'Deadlift 5x5',
      description: '5 sets of 5 reps at 80-85% 1RM',
      time: '20-30 min',
      difficulty: 'Intermediate',
      image: deadliftDemo,
      movements: ['Deadlift']
    }
  ]
}

function WorkoutCard({ workout }) {
  const navigate = useNavigate()
  
  return (
    <Card className="muscles-border-glow hover:muscles-glow transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant={workout.difficulty === 'Advanced' ? 'destructive' : 'default'}>
            {workout.difficulty}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            {workout.time}
          </div>
        </div>
        <CardTitle className="text-xl">{workout.name}</CardTitle>
        <CardDescription>{workout.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img 
          src={workout.image} 
          alt={workout.name}
          className="w-full h-32 object-cover rounded-lg mb-4"
        />
        <div className="flex flex-wrap gap-1 mb-4">
          {workout.movements.map((movement, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {movement}
            </Badge>
          ))}
        </div>
        <Button 
          onClick={() => navigate(`/workout/${workout.id}`)} 
          className="w-full"
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}

export default function Workouts() {
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
            <div className="flex items-center space-x-4">
              <Button onClick={() => navigate('/')} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="muscles-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 muscles-text-glow">
            Workout Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive collection of benchmark WODs, Hero workouts, and strength training sessions
          </p>
        </div>
      </section>

      {/* Workout Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="benchmark" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="benchmark" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                Benchmark WODs
              </TabsTrigger>
              <TabsTrigger value="hero" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Hero Workouts
              </TabsTrigger>
              <TabsTrigger value="strength" className="flex items-center gap-2">
                <Dumbbell className="h-4 w-4" />
                Strength Focus
              </TabsTrigger>
            </TabsList>

            <TabsContent value="benchmark" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Benchmark WODs</h2>
                <p className="text-muted-foreground">
                  Classic CrossFit workouts used to measure fitness progress over time
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workoutsDatabase.benchmark.map((workout) => (
                  <WorkoutCard key={workout.id} workout={workout} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hero" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Hero Workouts</h2>
                <p className="text-muted-foreground">
                  Challenging workouts created to honor fallen heroes and test your limits
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workoutsDatabase.hero.map((workout) => (
                  <WorkoutCard key={workout.id} workout={workout} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="strength" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Strength Training</h2>
                <p className="text-muted-foreground">
                  Focused strength sessions to build power and muscle
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workoutsDatabase.strength.map((workout) => (
                  <WorkoutCard key={workout.id} workout={workout} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Training Reminder */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto muscles-border-glow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/20 rounded-full w-fit">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-3xl mb-4">Workout Intensity Guide</CardTitle>
              <CardDescription className="text-lg">
                Choose the right intensity for your current fitness level and goals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <Badge className="mb-2">Beginner</Badge>
                  <p className="text-sm text-muted-foreground">
                    Focus on form and consistency. Scale movements and reduce intensity.
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <Badge variant="secondary" className="mb-2">Intermediate</Badge>
                  <p className="text-sm text-muted-foreground">
                    Challenge yourself while maintaining good form. Moderate scaling.
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <Badge variant="destructive" className="mb-2">Advanced</Badge>
                  <p className="text-sm text-muted-foreground">
                    Push your limits with prescribed weights and movements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="muscles-gradient border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src={musclesLogo} alt="Muscles AI" className="h-8 w-8" />
            <span className="text-lg font-bold">Muscles AI Documentation Hub</span>
          </div>
          <p className="text-muted-foreground">
            Comprehensive fitness resources to enhance your training journey
          </p>
        </div>
      </footer>
    </div>
  )
}

