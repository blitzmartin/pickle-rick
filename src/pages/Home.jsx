import { useState, useEffect } from 'react'
import Cards from "../components/Cards";
import SearchBar from '../components/SearchBar';

export default function Home() {

    const [favorites, setFavorites] = useState([])
    const [characters, setCharacters] = useState([])
    const [query, setQuery] = useState('');

    // fetch data from api and set results array as default value for characters state var, also use map and spread operator to add the property isFavorite (false as default) to each object
    const url = "https://rickandmortyapi.com/api/character"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { 
                setCharacters(data.results.map(item => {
                    return {
                        ...item,
                        isFavorite: false
                    }
                })) 
                console.log(characters)
            })
            .catch(err => console.error("Something went wrong: ", err))
    }, [])
    
    // handle input of searchbar
    const handleChange = (e) => {
        setQuery(e.target.value)
    };

    // logic to filter characters from input query
    const filterItems = (items, input) => {
        input = input.toLowerCase();
        return items.filter(item =>
            item.name.split(' ').some(word =>
                word.toLowerCase().startsWith(input)
            )
        )
    }

    // applying the filter on characters array from input query, storing in filteredChars array
    const filteredChars = filterItems(characters, query)

    return (
        <div>
            <h1>The Rick & Morty Project</h1>
            <SearchBar value={query} onChange={handleChange}  />
            {favorites.length > 0 && <Cards key="favourite" />}
            <Cards key="cards" characters={filteredChars} />
        </div>
    )
}

