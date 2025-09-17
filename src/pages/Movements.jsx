import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Input } from '@/components/ui/input.jsx'
import { 
  Search,
  ArrowLeft,
  Play,
  Target,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'
import '../App.css'

// Import logo
import musclesLogo from '../assets/muscles(Copy).png'

// Import complete movements database
import { 
  movementDatabase, 
  movementCategories, 
  getAllMovements, 
  getMovementsByCategory,
  searchMovements 
} from '../data/complete_movements_database.js'

function MovementCard({ movement, onLearnMore }) {
  return (
    <Card className="muscles-glass-card hover:muscles-glow transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant={movement.difficulty === 'Advanced' ? 'destructive' : 'default'}>
            {movement.difficulty}
          </Badge>
          <Badge variant="outline">{movement.category}</Badge>
        </div>
        <CardTitle className="text-xl">{movement.name}</CardTitle>
        <CardDescription>{movement.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="image-container mb-4">
          <img
            src={movement.image}
            alt={`${movement.name} demonstration`}
            className="w-full h-48 object-cover rounded-lg"
            onError={(e) => {
              e.target.src = '/src/assets/images/movements/placeholder_demo.png'
            }}
          />
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {movement.muscles.slice(0, 3).map((muscle, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {muscle}
            </Badge>
          ))}
        </div>
        <Button 
          onClick={() => onLearnMore(movement)} 
          className="w-full muscles-button"
        >
          <Play className="mr-2 h-4 w-4" />
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}

function MovementDetail({ movement, onBack }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4 mb-6">
        <Button onClick={onBack} variant="outline" className="muscles-button-outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Movements
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Badge variant={movement.difficulty === 'Advanced' ? 'destructive' : 'default'}>
                {movement.difficulty}
              </Badge>
              <Badge variant="outline">{movement.category}</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4 muscles-text-glow">{movement.name}</h1>
            <p className="text-lg text-muted-foreground">{movement.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="muscles-glass-card p-4">
              <h3 className="font-semibold text-primary mb-2">Primary Muscles</h3>
              <div className="flex flex-wrap gap-1">
                {movement.muscles.map((muscle, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {muscle}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="muscles-glass-card p-4">
              <h3 className="font-semibold text-primary mb-2">Equipment</h3>
              <p className="text-sm text-muted-foreground">{movement.equipment}</p>
            </Card>
          </div>
        </div>

        <div className="image-container">
          <img
            src={movement.image}
            alt={`${movement.name} demonstration`}
            className="w-full h-auto rounded-lg"
            onError={(e) => {
              e.target.src = '/src/assets/images/movements/placeholder_demo.png'
            }}
          />
        </div>
      </div>

      <Tabs defaultValue="cues" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="cues">Movement Cues</TabsTrigger>
          <TabsTrigger value="faults">Common Faults</TabsTrigger>
          <TabsTrigger value="progressions">Progressions</TabsTrigger>
        </TabsList>

        <TabsContent value="cues" className="space-y-4">
          <Card className="muscles-glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                Key Movement Cues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {movement.cues.map((cue, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{cue}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faults" className="space-y-4">
          <Card className="muscles-glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Common Faults to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {movement.commonFaults.map((fault, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>{fault}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progressions" className="space-y-4">
          <Card className="muscles-glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Movement Progressions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {movement.progressions.map((progression, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{progression}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default function Movements() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedMovement, setSelectedMovement] = useState(null)

  // Get filtered movements using the database functions
  const filteredMovements = (() => {
    // Convert lowercase category to proper case for database lookup
    const categoryMap = {
      'all': 'All',
      'foundational': 'Foundational',
      'bodyweight': 'Bodyweight', 
      'olympic': 'Olympic',
      'kettlebell': 'Kettlebell',
      'gymnastics': 'Gymnastics',
      'strength': 'Strength'
    }
    
    let movements = getMovementsByCategory(categoryMap[selectedCategory] || 'All')
    
    if (searchTerm) {
      movements = movements.filter(movement => 
        movement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movement.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    return movements
  })()

  if (selectedMovement) {
    return (
      <div className="min-h-screen bg-background">
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
                <Button onClick={() => navigate('/')} variant="outline" className="muscles-button-outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <MovementDetail 
              movement={selectedMovement} 
              onBack={() => setSelectedMovement(null)} 
            />
          </div>
        </section>
      </div>
    )
  }

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
              <Button onClick={() => navigate('/')} variant="outline" className="muscles-button-outline">
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
            Movement Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master every movement with detailed video demonstrations and expert coaching cues
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search movements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                size="sm"
                className={selectedCategory === 'all' ? 'muscles-button' : 'muscles-button-outline'}
              >
                All
              </Button>
              <Button
                variant={selectedCategory === 'foundational' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('foundational')}
                size="sm"
                className={selectedCategory === 'foundational' ? 'muscles-button' : 'muscles-button-outline'}
              >
                Foundational
              </Button>
              <Button
                variant={selectedCategory === 'bodyweight' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('bodyweight')}
                size="sm"
                className={selectedCategory === 'bodyweight' ? 'muscles-button' : 'muscles-button-outline'}
              >
                Bodyweight
              </Button>
              <Button
                variant={selectedCategory === 'olympic' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('olympic')}
                size="sm"
                className={selectedCategory === 'olympic' ? 'muscles-button' : 'muscles-button-outline'}
              >
                Olympic
              </Button>
              <Button
                variant={selectedCategory === 'kettlebell' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('kettlebell')}
                size="sm"
                className={selectedCategory === 'kettlebell' ? 'muscles-button' : 'muscles-button-outline'}
              >
                Kettlebell
              </Button>
              <Button
                variant={selectedCategory === 'gymnastics' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('gymnastics')}
                size="sm"
                className={selectedCategory === 'gymnastics' ? 'muscles-button' : 'muscles-button-outline'}
              >
                Gymnastics
              </Button>
              <Button
                variant={selectedCategory === 'strength' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('strength')}
                size="sm"
                className={selectedCategory === 'strength' ? 'muscles-button' : 'muscles-button-outline'}
              >
                Strength
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Movements Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMovements.map((movement) => (
              <MovementCard 
                key={movement.id} 
                movement={movement} 
                onLearnMore={setSelectedMovement}
              />
            ))}
          </div>
          
          {filteredMovements.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">No movements found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filters.
              </p>
            </div>
          )}
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
            Master every movement with expert guidance and video demonstrations
          </p>
        </div>
      </footer>
    </div>
  )
}

