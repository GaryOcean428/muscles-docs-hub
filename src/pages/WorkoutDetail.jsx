import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  ArrowLeft, 
  Clock, 
  Target, 
  Users, 
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react'
import '../App.css'

// Import workout images
import thrusterDemo from '../assets/images/movements/thruster_demo.png'
import pullupVariations from '../assets/images/movements/pullup_variations.png'
import kettlebellSwing from '../assets/images/movements/kettlebell_swing.png'

const workoutDatabase = {
  'fran': {
    name: 'Fran',
    type: 'Benchmark',
    time: '3-8 min',
    description: '21-15-9 Thrusters & Pull-ups',
    difficulty: 'Intermediate',
    image: thrusterDemo,
    movements: [
      { name: 'Thrusters', weight: '95/65 lbs', reps: '21-15-9' },
      { name: 'Pull-ups', weight: 'Bodyweight', reps: '21-15-9' }
    ],
    scaling: {
      beginner: {
        thrusters: '65/45 lbs or PVC pipe',
        pullups: 'Ring rows or assisted pull-ups',
        rounds: 'Same rep scheme: 21-15-9'
      },
      intermediate: {
        thrusters: '95/65 lbs',
        pullups: 'Strict or kipping pull-ups',
        rounds: 'As prescribed: 21-15-9'
      },
      advanced: {
        thrusters: '115/85 lbs',
        pullups: 'Chest-to-bar pull-ups',
        rounds: 'As prescribed: 21-15-9'
      }
    },
    tips: [
      'Break up the movements early to maintain intensity',
      'Focus on breathing during thrusters',
      'Keep a steady pace rather than going all-out initially',
      'Practice the thruster-to-pull-up transition'
    ],
    commonMistakes: [
      'Going too fast in the first round',
      'Not breaking up pull-ups early enough',
      'Poor thruster form when fatigued',
      'Holding breath during movements'
    ]
  },
  'cindy': {
    name: 'Cindy',
    type: 'Benchmark',
    time: '20 min',
    description: 'AMRAP: 5 pull-ups, 10 push-ups, 15 squats',
    difficulty: 'Beginner',
    image: kettlebellSwing,
    movements: [
      { name: 'Pull-ups', weight: 'Bodyweight', reps: '5 per round' },
      { name: 'Push-ups', weight: 'Bodyweight', reps: '10 per round' },
      { name: 'Air Squats', weight: 'Bodyweight', reps: '15 per round' }
    ],
    scaling: {
      beginner: {
        pullups: 'Ring rows or assisted pull-ups',
        pushups: 'Knee push-ups or incline push-ups',
        squats: 'Air squats to a box'
      },
      intermediate: {
        pullups: 'Kipping or strict pull-ups',
        pushups: 'Standard push-ups',
        squats: 'Air squats below parallel'
      },
      advanced: {
        pullups: 'Chest-to-bar or weighted pull-ups',
        pushups: 'Handstand push-ups',
        squats: 'Pistol squats or jump squats'
      }
    },
    tips: [
      'Maintain a steady pace throughout',
      'Focus on consistent movement quality',
      'Break movements before failure',
      'Track your rounds and partial rounds'
    ],
    commonMistakes: [
      'Starting too fast and burning out',
      'Poor movement standards when tired',
      'Not pacing for the full 20 minutes',
      'Resting too long between movements'
    ]
  },
  'murph': {
    name: 'Murph',
    type: 'Hero WOD',
    time: '25-45 min',
    description: '1 mile run, 100 pull-ups, 200 push-ups, 300 squats, 1 mile run',
    difficulty: 'Advanced',
    image: pullupVariations,
    movements: [
      { name: 'Run', distance: '1 mile', reps: 'Start and finish' },
      { name: 'Pull-ups', weight: 'Bodyweight', reps: '100 total' },
      { name: 'Push-ups', weight: 'Bodyweight', reps: '200 total' },
      { name: 'Air Squats', weight: 'Bodyweight', reps: '300 total' }
    ],
    scaling: {
      beginner: {
        run: '800m run or 400m run',
        pullups: '50 ring rows',
        pushups: '100 knee push-ups',
        squats: '150 air squats'
      },
      intermediate: {
        run: '1 mile run',
        pullups: '100 assisted pull-ups',
        pushups: '200 push-ups',
        squats: '300 air squats'
      },
      advanced: {
        run: '1 mile run with 20lb vest',
        pullups: '100 strict pull-ups',
        pushups: '200 push-ups',
        squats: '300 air squats'
      }
    },
    tips: [
      'Partition the middle movements (20 rounds of 5-10-15)',
      'Pace the first run conservatively',
      'Stay hydrated throughout',
      'Honor the hero this workout commemorates'
    ],
    commonMistakes: [
      'Running the first mile too fast',
      'Not partitioning the middle movements',
      'Poor pacing strategy',
      'Inadequate preparation for volume'
    ]
  }
}

function WorkoutDetail() {
  const { workoutId } = useParams()
  const navigate = useNavigate()
  
  const workout = workoutDatabase[workoutId?.toLowerCase()]
  
  if (!workout) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Workout Not Found</CardTitle>
            <CardDescription>The requested workout could not be found.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/')} className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="muscles-gradient border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-4 text-foreground hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Workouts
          </Button>
          
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img 
              src={workout.image} 
              alt={workout.name}
              className="w-full md:w-64 h-48 object-cover rounded-lg muscles-border-glow"
            />
            
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant={workout.type === 'Hero WOD' ? 'destructive' : 'default'}>
                  {workout.type}
                </Badge>
                <Badge variant="outline">{workout.difficulty}</Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {workout.time}
                </div>
              </div>
              
              <h1 className="text-4xl font-bold mb-4 muscles-text-glow">{workout.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{workout.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {workout.movements.map((movement, index) => (
                  <Card key={index} className="muscles-border-glow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-primary">{movement.name}</h3>
                      <p className="text-sm text-muted-foreground">{movement.weight || movement.distance}</p>
                      <p className="text-sm">{movement.reps}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="scaling" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="scaling">Scaling Options</TabsTrigger>
            <TabsTrigger value="tips">Pro Tips</TabsTrigger>
            <TabsTrigger value="mistakes">Common Mistakes</TabsTrigger>
            <TabsTrigger value="strategy">Strategy</TabsTrigger>
          </TabsList>

          <TabsContent value="scaling" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(workout.scaling).map(([level, options]) => (
                <Card key={level} className="muscles-border-glow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(options).map(([movement, scaling]) => (
                      <div key={movement}>
                        <h4 className="font-medium text-primary">{movement.charAt(0).toUpperCase() + movement.slice(1)}</h4>
                        <p className="text-sm text-muted-foreground">{scaling}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-4">
            <Card className="muscles-border-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Pro Tips for Success
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {workout.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mistakes" className="space-y-4">
            <Card className="muscles-border-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Common Mistakes to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {workout.commonMistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strategy" className="space-y-4">
            <Card className="muscles-border-glow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Workout Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Remember: Quality Over Speed</h4>
                  <p className="text-sm">
                    This workout should challenge you while maintaining good form. Scale appropriately 
                    and focus on consistent movement patterns. A well-executed workout should leave 
                    you feeling accomplished, not destroyed.
                  </p>
                </div>
                
                {workout.name === 'Murph' && (
                  <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                    <h4 className="font-semibold text-destructive mb-2">In Honor of Lt. Michael Murphy</h4>
                    <p className="text-sm">
                      This workout is dedicated to Navy Lieutenant Michael Murphy, who was killed in 
                      Afghanistan on June 28, 2005. Approach this workout with respect and remember 
                      the sacrifice it commemorates.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default WorkoutDetail

