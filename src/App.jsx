import React, { useState } from 'react'
import Search from './components/Search'
import RecipeList from './components/RecipeList'
import RecipeDetail from './components/RecipeDetail'

function App() {
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-500/30">
      <header className="sticky top-0 z-50 glass-dark py-6 px-8 flex justify-between items-center transition-all duration-300">
        <h1
          className="text-3xl font-elegant font-bold tracking-tight bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
          onClick={() => setSelectedRecipe(null)}
        >
          MEAL<span className="text-gray-400 font-light">FINDER</span>
        </h1>
        <div className="hidden md:block text-sm font-medium text-gray-400 uppercase tracking-widest">
          Exclusive Culinary Collection
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {!selectedRecipe ? (
          <div className="space-y-12">
            <Search setRecipes={setRecipes} setLoading={setLoading} />
            <RecipeList recipes={recipes} loading={loading} onRecipeSelect={setSelectedRecipe} />
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <RecipeDetail recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
          </div>
        )}
      </main>

      <footer className="py-12 text-center text-gray-600 text-sm font-light mt-12 border-t border-white/5">
        &copy; 2025 MealFinder Exclusive. All rights reserved.
      </footer>
    </div>
  )
}

export default App
