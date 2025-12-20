import React from 'react'
import RecipeItem from './RecipeItem'

const RecipeList = ({ recipes, loading, onRecipeSelect }) => {
    if (loading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="glass-dark rounded-3xl overflow-hidden h-[360px] animate-pulse">
                        <div className="h-60 bg-white/5"></div>
                        <div className="p-6 space-y-4">
                            <div className="h-6 bg-white/5 rounded-full w-3/4"></div>
                            <div className="h-4 bg-white/5 rounded-full w-1/2"></div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (!recipes || recipes.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-elegant font-bold text-white mb-2">No Recipes Found</h3>
                <p className="text-gray-500 max-w-sm">We couldn't find any culinary matches for your search. Try another ingredient or dish.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {recipes.map((recipe, index) => (
                <RecipeItem
                    key={recipe.idMeal}
                    recipe={recipe}
                    index={index}
                    onSelect={() => onRecipeSelect(recipe)}
                />
            ))}
        </div>
    )
}

export default RecipeList
