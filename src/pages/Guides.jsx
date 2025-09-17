import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  ArrowLeft,
  BookOpen,
  Clock,
  User,
  Heart,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Calendar
} from 'lucide-react'
import '../App.css'

const guidesDatabase = {
  training: [
    {
      id: 'intensity-guide',
      title: 'Understanding Training Intensity',
      description: 'Learn how to gauge and manage workout intensity for optimal results',
      category: 'Training',
      readTime: '8 min read',
      difficulty: 'Beginner',
      icon: <Zap className="h-6 w-6" />,
      content: {
        introduction: "Training intensity is one of the most misunderstood concepts in fitness. Many people believe that every workout should leave them completely exhausted, but this approach often leads to burnout, injury, and poor results.",
        sections: [
          {
            title: "What is Training Intensity?",
            content: "Training intensity refers to how hard you're working during exercise, typically measured as a percentage of your maximum effort. It's not just about how tired you feel afterward - it's about the physiological stress you're placing on your body during the workout."
          },
          {
            title: "The 80/20 Rule",
            content: "Elite athletes follow the 80/20 rule: 80% of their training is done at low to moderate intensity, while only 20% is high intensity. This allows for proper recovery and adaptation while still providing the stimulus needed for improvement."
          },
          {
            title: "Signs You're Training at the Right Intensity",
            content: "You should feel energized after most workouts, not destroyed. You should be able to maintain good form throughout the session. You should feel like you could do one more round or set if absolutely necessary."
          },
          {
            title: "Recovery is Part of Training",
            content: "Your body adapts and gets stronger during recovery, not during the workout itself. If you're constantly exhausted, you're not allowing your body to adapt properly."
          }
        ],
        keyTakeaways: [
          "Most training should be moderate intensity",
          "High intensity should be used sparingly",
          "Good form is more important than speed",
          "Recovery is when adaptation happens"
        ]
      }
    },
    {
      id: 'progressive-overload',
      title: 'Progressive Overload Principles',
      description: 'The fundamental principle for continuous improvement in strength and fitness',
      category: 'Training',
      readTime: '10 min read',
      difficulty: 'Intermediate',
      icon: <TrendingUp className="h-6 w-6" />,
      content: {
        introduction: "Progressive overload is the gradual increase of stress placed on the body during exercise. It's the fundamental principle behind all strength and fitness improvements.",
        sections: [
          {
            title: "What is Progressive Overload?",
            content: "Progressive overload means gradually increasing the demands on your muscles over time. This can be achieved through increasing weight, reps, sets, or decreasing rest time."
          },
          {
            title: "Methods of Progression",
            content: "Weight progression is most common, but you can also progress by adding reps, sets, or improving movement quality. The key is consistent, gradual increases."
          },
          {
            title: "Periodization",
            content: "Plan your progressions over weeks and months. Don't try to add weight every single workout - your body needs time to adapt."
          },
          {
            title: "Plateau Management",
            content: "Plateaus are normal. When progress stalls, consider deload weeks, technique refinement, or changing exercise variations."
          }
        ],
        keyTakeaways: [
          "Gradual progression is key to long-term success",
          "Multiple methods exist for overload",
          "Plan progressions over time",
          "Plateaus are normal and manageable"
        ]
      }
    }
  ],
  nutrition: [
    {
      id: 'nutrition-basics',
      title: 'Nutrition Fundamentals for Athletes',
      description: 'Essential nutrition principles to fuel your training and recovery',
      category: 'Nutrition',
      readTime: '12 min read',
      difficulty: 'Beginner',
      icon: <Heart className="h-6 w-6" />,
      content: {
        introduction: "Proper nutrition is the foundation of athletic performance and recovery. Understanding the basics will help you fuel your workouts and optimize your results.",
        sections: [
          {
            title: "Macronutrients Overview",
            content: "Protein builds and repairs muscle, carbohydrates fuel your workouts, and fats support hormone production and overall health. All three are essential."
          },
          {
            title: "Timing Matters",
            content: "When you eat can be as important as what you eat. Pre-workout nutrition should focus on easily digestible carbs, while post-workout should emphasize protein and carbs for recovery."
          },
          {
            title: "Hydration",
            content: "Even mild dehydration can significantly impact performance. Aim for clear or light yellow urine as a hydration indicator."
          },
          {
            title: "Individual Needs",
            content: "Nutrition needs vary based on training volume, body composition goals, and individual tolerance. What works for others may not work for you."
          }
        ],
        keyTakeaways: [
          "All macronutrients are important",
          "Timing can enhance performance",
          "Stay consistently hydrated",
          "Individualize your approach"
        ]
      }
    }
  ],
  recovery: [
    {
      id: 'sleep-optimization',
      title: 'Sleep Optimization for Athletes',
      description: 'How to improve sleep quality for better recovery and performance',
      category: 'Recovery',
      readTime: '9 min read',
      difficulty: 'Beginner',
      icon: <Shield className="h-6 w-6" />,
      content: {
        introduction: "Sleep is when your body repairs and adapts to training stress. Poor sleep can undo the benefits of even the best training program.",
        sections: [
          {
            title: "Sleep Architecture",
            content: "Quality sleep involves multiple stages, including deep sleep for physical recovery and REM sleep for mental recovery. Both are crucial for athletes."
          },
          {
            title: "Sleep Hygiene",
            content: "Create a consistent bedtime routine, keep your room cool and dark, and avoid screens before bed. These simple changes can dramatically improve sleep quality."
          },
          {
            title: "Recovery Metrics",
            content: "Pay attention to how you feel upon waking. You should feel refreshed, not groggy. Heart rate variability can also be a useful metric."
          },
          {
            title: "Napping Strategy",
            content: "Short naps (20-30 minutes) can be beneficial, but longer naps or naps late in the day can interfere with nighttime sleep."
          }
        ],
        keyTakeaways: [
          "Sleep is when adaptation happens",
          "Consistency is more important than duration",
          "Environment matters for quality",
          "Monitor how you feel upon waking"
        ]
      }
    }
  ],
  programming: [
    {
      id: 'workout-programming',
      title: 'Effective Workout Programming',
      description: 'How to structure your training for maximum results',
      category: 'Programming',
      readTime: '15 min read',
      difficulty: 'Advanced',
      icon: <Calendar className="h-6 w-6" />,
      content: {
        introduction: "Effective programming balances stress and recovery, progressively overloads the body, and aligns with your specific goals.",
        sections: [
          {
            title: "Training Variables",
            content: "Volume (sets x reps x weight), intensity (% of max), frequency (sessions per week), and density (work:rest ratio) all need to be managed."
          },
          {
            title: "Periodization Models",
            content: "Linear, undulating, and block periodization each have their place. Choose based on your goals, experience level, and time constraints."
          },
          {
            title: "Recovery Integration",
            content: "Plan recovery as carefully as you plan training. Include deload weeks, active recovery days, and complete rest days."
          },
          {
            title: "Autoregulation",
            content: "Learn to adjust training based on how you feel. Some days you'll need to push harder, others you'll need to back off."
          }
        ],
        keyTakeaways: [
          "Balance all training variables",
          "Choose appropriate periodization",
          "Plan recovery systematically",
          "Learn to autoregulate intensity"
        ]
      }
    }
  ]
}

function GuideCard({ guide, onSelect }) {
  return (
    <Card className="muscles-border-glow hover:muscles-glow transition-all duration-300 cursor-pointer" onClick={() => onSelect(guide)}>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">{guide.category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            {guide.readTime}
          </div>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <div className="text-primary">{guide.icon}</div>
          <CardTitle className="text-xl">{guide.title}</CardTitle>
        </div>
        <CardDescription>{guide.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <Badge variant={guide.difficulty === 'Beginner' ? 'default' : guide.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}>
            {guide.difficulty}
          </Badge>
          <Button size="sm">
            <BookOpen className="mr-2 h-4 w-4" />
            Read Guide
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function GuideDetail({ guide, onBack }) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Guides
      </Button>

      <div className="space-y-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4">
            <Badge variant="outline">{guide.category}</Badge>
            <Badge variant={guide.difficulty === 'Beginner' ? 'default' : guide.difficulty === 'Intermediate' ? 'secondary' : 'destructive'}>
              {guide.difficulty}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {guide.readTime}
            </div>
          </div>
          <h1 className="text-4xl font-bold muscles-text-glow">{guide.title}</h1>
          <p className="text-xl text-muted-foreground">{guide.description}</p>
        </div>

        <Card className="muscles-border-glow">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-8">{guide.content.introduction}</p>
              
              {guide.content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">{section.title}</h2>
                  <p className="leading-relaxed">{section.content}</p>
                </div>
              ))}
              
              <div className="mt-12 p-6 bg-primary/10 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Key Takeaways</h3>
                <ul className="space-y-2">
                  {guide.content.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function Guides() {
  const navigate = useNavigate()
  const [selectedGuide, setSelectedGuide] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const allGuides = [
    ...guidesDatabase.training,
    ...guidesDatabase.nutrition,
    ...guidesDatabase.recovery,
    ...guidesDatabase.programming
  ]

  const filteredGuides = activeCategory === 'all' 
    ? allGuides 
    : allGuides.filter(guide => guide.category.toLowerCase() === activeCategory)

  if (selectedGuide) {
    return (
      <div className="min-h-screen bg-background">
        <div className="muscles-gradient border-b border-border">
          <div className="container mx-auto px-4 py-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-4 text-foreground hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <GuideDetail 
            guide={selectedGuide} 
            onBack={() => setSelectedGuide(null)} 
          />
        </div>
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
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold muscles-text-glow">Training Guides</h1>
          <p className="text-xl text-muted-foreground mt-2">Expert knowledge to optimize your fitness journey</p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All Guides</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="recovery">Recovery</TabsTrigger>
            <TabsTrigger value="programming">Programming</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <GuideCard 
              key={guide.id} 
              guide={guide} 
              onSelect={setSelectedGuide}
            />
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">No guides found</h3>
            <p className="text-muted-foreground">
              Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Guides

