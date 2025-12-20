import React, { useEffect, useState } from 'react'

const RecipeDetail = ({ recipe, onBack }) => {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight) * 100
            setScrollProgress(progress)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const ingredients = []
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`]
        const measure = recipe[`strMeasure${i}`]
        if (ingredient && ingredient.trim() !== "") {
            ingredients.push({ name: ingredient, measure: measure })
        }
    }

    // Modern "Drop Cap" effect for instructions
    const instructions = recipe.strInstructions || ""
    const firstLetter = instructions.charAt(0)
    const restOfText = instructions.slice(1)

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-20">
            {/* Premium Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-white/5">
                <div
                    className="h-full bg-gradient-to-r from-red-600 to-orange-400 transition-all duration-150"
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>

            <button
                className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors py-2.5 px-6 rounded-full border border-white/5 hover:border-white/20 glass"
                onClick={onBack}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-bold uppercase tracking-widest">Back to Collection</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="relative group lg:sticky lg:top-32">
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <img
                        src={recipe.strMealThumb}
                        alt={recipe.strMeal}
                        className="relative w-full rounded-[3rem] shadow-2xl overflow-hidden border border-white/10 aspect-square object-cover"
                    />
                </div>

                <div className="space-y-10">
                    <div className="space-y-6">
                        <div className="flex flex-wrap gap-3">
                            <span className="px-5 py-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-black uppercase tracking-[0.3em] rounded-full">
                                {recipe.strCategory}
                            </span>
                            <span className="px-5 py-2 bg-white/5 border border-white/10 text-gray-400 text-xs font-black uppercase tracking-[0.3em] rounded-full">
                                {recipe.strArea} CUISINE
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-elegant font-bold text-white leading-tight">
                            {recipe.strMeal}
                        </h1>
                    </div>

                    <div className="glass-dark p-10 rounded-[2.5rem] border border-white/10 shadow-inner">
                        <h3 className="text-2xl font-elegant font-bold text-white mb-8 flex items-center gap-4">
                            <span className="w-12 h-[2px] bg-red-500/50"></span>
                            Ingredients List
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
                            {ingredients.map((item, index) => (
                                <div key={index} className="flex justify-between items-baseline py-2.5 border-b border-white/5 group hover:border-white/20 transition-colors">
                                    <span className="text-gray-200 font-medium tracking-wide">{item.name}</span>
                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-tighter italic">{item.measure}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-white/10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10 space-y-10">
                    <h3 className="text-4xl font-elegant font-bold text-white border-b-2 border-red-500/20 pb-6">
                        Preparation Method
                    </h3>
                    <div className="text-gray-300 leading-[2.2] text-xl font-light max-w-5xl whitespace-pre-line relative">
                        <span className="float-left text-7xl font-elegant font-bold text-red-500 mr-4 mb-2 leading-[0.8] mt-2 translate-y-1">
                            {firstLetter}
                        </span>
                        {restOfText}
                    </div>
                </div>
            </div>

            {recipe.strYoutube && (
                <div className="flex justify-center pt-10">
                    <a
                        href={recipe.strYoutube}
                        target="_blank"
                        rel="noreferrer"
                        className="glass px-12 py-6 rounded-full text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-white hover:text-black transition-all duration-700 hover:scale-105 shadow-[0_0_40px_rgba(255,75,43,0.2)] flex items-center gap-5 group"
                    >
                        <svg className="w-7 h-7 fill-red-600 group-hover:fill-black transition-colors" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                        Experience Masterclass
                    </a>
                </div>
            )}
        </div>
    )
}

export default RecipeDetail
