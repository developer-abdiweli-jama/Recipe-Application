import React, { useEffect, useState } from 'react'

const URL = "https://www.themealdb.com/api/json/v1/1/search.php"

const Search = ({ setRecipes, setLoading }) => {
    const [query, setQuery] = useState('')

    useEffect(() => {
        async function fetchdata() {
            setLoading(true)
            try {
                const response = await fetch(`${URL}?s=${query}`)
                const data = await response.json()
                // Artificial delay for premium feel of loading state
                setTimeout(() => {
                    setRecipes(data.meals || [])
                    setLoading(false)
                }, 600)
            } catch (error) {
                console.error("Error fetching recipes:", error)
                setRecipes([])
                setLoading(false)
            }
        }
        fetchdata()
    }, [query, setRecipes, setLoading])

    return (
        <div className="relative max-w-2xl mx-auto w-full group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
                <input
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 text-lg px-8 py-5 rounded-3xl outline-none focus:border-red-500/50 transition-all duration-300 backdrop-blur-md shadow-2xl"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a recipe..."
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Search
