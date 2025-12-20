import React from 'react'

const RecipeItem = ({ recipe, onSelect, index }) => {
    return (
        <div
            onClick={onSelect}
            style={{ animationDelay: `${index * 100} ms` }}
            className="group relative glass-dark rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards"
        >
            <div className="overflow-hidden h-60">
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>
            <div className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-elegant font-bold text-white leading-tight group-hover:text-red-400 transition-colors">
                        {recipe.strMeal}
                    </h3>
                </div>
                <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest rounded-full">
                        {recipe.strCategory}
                    </span>
                    <span className="text-gray-500 text-xs font-medium uppercase tracking-tighter">
                        {recipe.strArea}
                    </span>
                </div>
            </div>
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem
