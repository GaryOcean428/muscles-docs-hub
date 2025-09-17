import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

// Import logo
import musclesLogo from '../assets/muscles(Copy).png'

// Simple movements data
const simpleMovements = [
  {
    id: 'air-squat',
    name: 'Air Squat',
    description: 'The foundation of all squatting movements',
    difficulty: 'Beginner',
    category: 'Foundational',
    muscles: ['Quads', 'Glutes', 'Hamstrings']
  },
  {
    id: 'deadlift',
    name: 'Deadlift',
    description: 'The king of all exercises for posterior chain strength',
    difficulty: 'Intermediate',
    category: 'Foundational',
    muscles: ['Hamstrings', 'Glutes', 'Back']
  },
  {
    id: 'push-up',
    name: 'Push-up',
    description: 'Classic bodyweight upper body exercise',
    difficulty: 'Beginner',
    category: 'Bodyweight',
    muscles: ['Chest', 'Shoulders', 'Triceps']
  },
  {
    id: 'pull-up',
    name: 'Pull-up',
    description: 'Essential upper body pulling movement',
    difficulty: 'Intermediate',
    category: 'Bodyweight',
    muscles: ['Lats', 'Biceps', 'Rhomboids']
  },
  {
    id: 'burpee',
    name: 'Burpee',
    description: 'Full body conditioning exercise',
    difficulty: 'Intermediate',
    category: 'Bodyweight',
    muscles: ['Full Body']
  },
  {
    id: 'kettlebell-swing',
    name: 'Kettlebell Swing',
    description: 'Dynamic hip hinge movement with kettlebell',
    difficulty: 'Intermediate',
    category: 'Kettlebell',
    muscles: ['Glutes', 'Hamstrings', 'Core']
  }
]

const categories = ['All', 'Foundational', 'Bodyweight', 'Kettlebell']

export default function MovementsSimple() {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMovements = simpleMovements.filter(movement => {
    const matchesCategory = selectedCategory === 'All' || movement.category === selectedCategory
    const matchesSearch = movement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         movement.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
              <button 
                onClick={() => navigate('/')} 
                className="muscles-button-outline px-4 py-2 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 muscles-text-glow">Movement Library</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master every exercise with detailed instructions and expert guidance
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search movements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:border-primary/50 focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'muscles-button-primary'
                    : 'muscles-button-outline'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Movements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMovements.map((movement) => (
            <div key={movement.id} className="muscles-glass-card p-6 hover:muscles-glow transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  movement.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                  movement.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {movement.difficulty}
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-primary/20 text-primary">
                  {movement.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">{movement.name}</h3>
              <p className="text-muted-foreground mb-4">{movement.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Primary Muscles:</h4>
                <div className="flex flex-wrap gap-1">
                  {movement.muscles.map((muscle, index) => (
                    <span key={index} className="px-2 py-1 rounded text-xs bg-muted/50">
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full muscles-button-primary py-2 rounded-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {filteredMovements.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No movements found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

