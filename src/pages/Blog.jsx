import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { 
  ArrowLeft,
  Search,
  Calendar,
  User,
  Clock,
  ArrowRight
} from 'lucide-react'
import '../App.css'

const blogPosts = [
  {
    id: 'compound-movements',
    title: 'The Power of Compound Movements',
    excerpt: 'Why exercises like squats, deadlifts, and pull-ups should form the foundation of your training program.',
    content: `Compound movements are exercises that work multiple muscle groups simultaneously. Unlike isolation exercises that target a single muscle, compound movements recruit several muscles and joints to complete the movement.

## Why Compound Movements Matter

Compound exercises are incredibly efficient. In a world where time is precious, getting the most bang for your buck in the gym is crucial. A single compound movement can work more muscles in less time than multiple isolation exercises.

### Benefits of Compound Training

**Functional Strength**: Compound movements mirror real-world activities. When you pick up a heavy box, you're essentially performing a deadlift. When you stand up from a chair, you're doing a squat variation.

**Hormonal Response**: These exercises trigger a greater hormonal response, including increased growth hormone and testosterone production, which aids in muscle building and fat loss.

**Core Stability**: Most compound movements require significant core engagement, improving your overall stability and reducing injury risk.

**Time Efficiency**: You can get a full-body workout with just a few compound exercises, making them perfect for busy schedules.

### The Big Three

1. **Squat**: The king of lower body exercises, working your quads, glutes, hamstrings, and core.
2. **Deadlift**: A total-body exercise that primarily targets your posterior chain.
3. **Pull-up**: The ultimate upper body pulling exercise for back and arm development.

### Programming Compound Movements

Start your workouts with compound movements when you're fresh and can maintain proper form. These exercises should form 70-80% of your training volume, with isolation work filling in the gaps.

Remember, mastery takes time. Focus on perfect form before adding weight, and your body will thank you with years of injury-free training.`,
    author: 'Muscles AI Team',
    date: '2024-09-10',
    readTime: '5 min read',
    category: 'Training',
    tags: ['Strength', 'Compound Movements', 'Programming']
  },
  {
    id: 'recovery-importance',
    title: 'Recovery: The Missing Piece of Your Fitness Puzzle',
    excerpt: 'Understanding why rest and recovery are just as important as your training sessions.',
    content: `Recovery is not the absence of training—it's an active part of your fitness program. Many athletes focus intensely on their workouts but neglect the recovery process, which is where the magic actually happens.

## The Science of Recovery

During exercise, you create microscopic damage to your muscle fibers. This damage is necessary for growth, but the actual repair and strengthening happen during recovery periods.

### Types of Recovery

**Active Recovery**: Light movement that promotes blood flow without adding stress. Think easy walks, gentle yoga, or light swimming.

**Passive Recovery**: Complete rest from structured exercise. This includes sleep, which is arguably the most important recovery tool.

**Nutritional Recovery**: Providing your body with the nutrients it needs to repair and adapt.

### Sleep: Your Secret Weapon

Quality sleep is non-negotiable for serious athletes. During deep sleep, your body releases growth hormone, repairs damaged tissues, and consolidates motor learning from your training sessions.

Aim for 7-9 hours of quality sleep per night. Create a sleep-friendly environment: cool, dark, and quiet. Establish a consistent bedtime routine and avoid screens for at least an hour before bed.

### Stress Management

Chronic stress elevates cortisol levels, which can interfere with recovery and adaptation. Incorporate stress management techniques like meditation, deep breathing, or journaling into your routine.

### Listen to Your Body

Learn to recognize the signs of inadequate recovery:
- Persistent fatigue
- Declining performance
- Increased injury risk
- Mood changes
- Elevated resting heart rate

### Recovery Strategies

1. **Prioritize sleep** - Make it non-negotiable
2. **Manage stress** - Find techniques that work for you
3. **Eat for recovery** - Focus on protein and anti-inflammatory foods
4. **Stay hydrated** - Dehydration impairs recovery
5. **Plan rest days** - They're part of your program, not a sign of weakness

Remember: You don't get stronger during your workout—you get stronger during recovery.`,
    author: 'Dr. Sarah Johnson',
    date: '2024-09-08',
    readTime: '7 min read',
    category: 'Recovery',
    tags: ['Recovery', 'Sleep', 'Stress Management']
  },
  {
    id: 'nutrition-timing',
    title: 'Nutrition Timing: When to Eat for Optimal Performance',
    excerpt: 'Learn how to time your meals and snacks to fuel your workouts and enhance recovery.',
    content: `Nutrition timing—when you eat in relation to your workouts—can significantly impact your performance and recovery. While total daily intake matters most, strategic timing can give you an edge.

## Pre-Workout Nutrition

Your pre-workout meal should provide energy without causing digestive distress. The timing and composition depend on when you're training.

### 3-4 Hours Before Training
A complete meal with all macronutrients:
- Complex carbohydrates for sustained energy
- Lean protein for muscle support
- Moderate fat for satiety
- Plenty of fluids

### 1-2 Hours Before Training
A smaller meal focusing on easily digestible carbs:
- Banana with a small amount of nut butter
- Oatmeal with berries
- Toast with honey

### 30-60 Minutes Before Training
Quick-digesting carbohydrates:
- Piece of fruit
- Sports drink
- Energy gel (for longer sessions)

## During Workout Nutrition

For sessions under 60 minutes, water is usually sufficient. For longer sessions:
- Sports drinks for electrolyte replacement
- Easy-to-digest carbohydrates every 30-45 minutes
- Small, frequent sips rather than large amounts

## Post-Workout Nutrition

The post-workout window is crucial for recovery. Your muscles are primed to absorb nutrients and begin the repair process.

### The Golden Hour
Within 60 minutes post-workout, consume:
- 20-40g of high-quality protein
- 30-60g of carbohydrates
- Plenty of fluids to replace losses

### Protein Priorities
Post-workout protein should be fast-digesting:
- Whey protein powder
- Greek yogurt
- Chocolate milk
- Lean meats

### Carbohydrate Considerations
Post-workout carbs help replenish glycogen stores:
- Fruits (especially berries)
- Sweet potatoes
- Rice
- Oats

## Hydration Strategy

Proper hydration starts before your workout:
- 16-20 oz of fluid 2-3 hours before exercise
- 8 oz of fluid 15-20 minutes before exercise
- 6-12 oz every 15-20 minutes during exercise
- 150% of fluid losses after exercise

### Individual Considerations

Everyone's needs are different. Factors that influence your nutrition timing:
- Training intensity and duration
- Time of day you train
- Individual digestive tolerance
- Specific goals (fat loss, muscle gain, performance)

Experiment with different approaches and find what works best for your body and schedule. Consistency matters more than perfection.`,
    author: 'Mike Rodriguez, RD',
    date: '2024-09-05',
    readTime: '8 min read',
    category: 'Nutrition',
    tags: ['Nutrition', 'Performance', 'Hydration']
  },
  {
    id: 'crossfit-beginners',
    title: 'CrossFit for Beginners: Your Complete Getting Started Guide',
    excerpt: 'Everything you need to know before stepping into your first CrossFit class.',
    content: `CrossFit can seem intimidating to newcomers, but it's designed to be scalable for all fitness levels. Here's everything you need to know to start your CrossFit journey with confidence.

## What is CrossFit?

CrossFit is a fitness methodology that combines elements from various disciplines:
- Olympic weightlifting
- Powerlifting
- Gymnastics
- Cardiovascular training
- Functional movements

The goal is to develop broad, general, and inclusive fitness across all physical domains.

## The CrossFit Methodology

CrossFit workouts are:
- **Constantly varied**: No two workouts are exactly the same
- **Functional**: Based on movements you use in daily life
- **High intensity**: Performed at high intensity relative to your ability

## Common CrossFit Terms

**WOD**: Workout of the Day
**AMRAP**: As Many Rounds As Possible
**EMOM**: Every Minute on the Minute
**For Time**: Complete the workout as fast as possible
**Rx**: As prescribed (the standard workout)
**Scaled**: Modified version of the workout

## Your First Class: What to Expect

### Before You Go
- Arrive 15 minutes early
- Bring water and a towel
- Wear comfortable athletic clothing
- Athletic shoes with good support

### Class Structure
1. **Warm-up** (10-15 minutes): Dynamic movements to prepare your body
2. **Skill/Strength** (15-20 minutes): Learn new movements or build strength
3. **WOD** (10-20 minutes): The main workout
4. **Cool-down** (5-10 minutes): Stretching and recovery

## Scaling and Modifications

Every movement in CrossFit can be scaled:
- **Weight**: Use lighter weights or bodyweight
- **Range of motion**: Modify the movement pattern
- **Volume**: Reduce reps or rounds
- **Substitutions**: Replace movements you can't perform

## Essential Movements to Master

### Air Squat
The foundation of all squatting movements. Master this before adding weight.

### Push-up
Start with incline push-ups if needed, progress to full push-ups.

### Ring Row
The precursor to pull-ups. Build pulling strength progressively.

### Deadlift
Learn proper hip hinge mechanics with light weight or PVC pipe.

## Common Beginner Mistakes

1. **Going too heavy too soon**: Focus on form first
2. **Comparing yourself to others**: Everyone started somewhere
3. **Ignoring scaling options**: There's no shame in modifying
4. **Skipping warm-up or cool-down**: These are crucial for injury prevention
5. **Not asking questions**: Coaches are there to help

## Building Your Foundation

### Week 1-2: Movement Patterns
Focus on learning basic movement patterns with bodyweight or light weights.

### Week 3-4: Adding Load
Gradually add weight while maintaining perfect form.

### Month 2-3: Increasing Intensity
Start working at higher intensities as your fitness improves.

### Month 4+: Skill Development
Begin learning more complex movements like Olympic lifts.

## Nutrition for CrossFit

CrossFit demands fuel. Focus on:
- Adequate protein for recovery
- Carbohydrates for energy
- Healthy fats for hormone production
- Proper hydration

## Recovery and Rest

CrossFit is intense. Plan for:
- 1-2 rest days per week minimum
- 7-9 hours of sleep per night
- Active recovery on off days
- Listen to your body

## Finding the Right Box

Look for:
- Certified coaches
- Emphasis on form over speed
- Welcoming community
- Clean, well-maintained facility
- Appropriate scaling options

## Your First Month Goals

- Learn basic movement patterns
- Understand CrossFit terminology
- Build a routine of consistent attendance
- Focus on form over intensity
- Connect with the community

Remember: Everyone was a beginner once. The CrossFit community is known for being supportive and encouraging. Don't be afraid to ask questions, scale workouts, and take your time learning. Your fitness journey is unique to you.`,
    author: 'Coach Alex Thompson',
    date: '2024-09-03',
    readTime: '12 min read',
    category: 'Getting Started',
    tags: ['CrossFit', 'Beginners', 'Getting Started']
  }
]

function BlogCard({ post, onSelect }) {
  return (
    <Card className="muscles-border-glow hover:muscles-glow transition-all duration-300 cursor-pointer" onClick={() => onSelect(post)}>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline">{post.category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </div>
        </div>
        <CardTitle className="text-xl hover:text-primary transition-colors">{post.title}</CardTitle>
        <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
            <Calendar className="h-4 w-4 ml-2" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <Button size="sm" variant="ghost">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {post.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function BlogPost({ post, onBack }) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Button>

      <article className="space-y-6">
        <header className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4">
            <Badge variant="outline">{post.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          <h1 className="text-4xl font-bold muscles-text-glow">{post.title}</h1>
          <p className="text-xl text-muted-foreground">{post.excerpt}</p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <Card className="muscles-border-glow">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold text-primary mt-8 mb-4">{paragraph.replace('## ', '')}</h2>
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold text-primary mt-6 mb-3">{paragraph.replace('### ', '')}</h3>
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index} className="font-semibold text-primary mb-4">{paragraph.replace(/\*\*/g, '')}</p>
                } else if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(item => item.startsWith('- '))
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 mb-4">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  )
                } else if (paragraph.match(/^\d+\./)) {
                  const items = paragraph.split('\n').filter(item => item.match(/^\d+\./))
                  return (
                    <ol key={index} className="list-decimal list-inside space-y-2 mb-4">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item.replace(/^\d+\.\s*/, '')}</li>
                      ))}
                    </ol>
                  )
                } else if (paragraph.trim()) {
                  return <p key={index} className="leading-relaxed mb-4">{paragraph}</p>
                }
                return null
              })}
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  )
}

function Blog() {
  const navigate = useNavigate()
  const [selectedPost, setSelectedPost] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  if (selectedPost) {
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
          <BlogPost 
            post={selectedPost} 
            onBack={() => setSelectedPost(null)} 
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
          <h1 className="text-4xl font-bold muscles-text-glow">Muscles AI Blog</h1>
          <p className="text-xl text-muted-foreground mt-2">Expert insights, tips, and stories from the fitness world</p>
        </div>
      </div>

      {/* Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              onSelect={setSelectedPost}
            />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">No articles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog

