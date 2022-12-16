import { useState, useEffect } from 'react'
import Cards from "../components/Cards";

export default function Home() {
    const [favourite, setFavourite] = useState([])
    const [characters, setCharacters] = useState([])
    const url = "https://rickandmortyapi.com/api/character"
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {setCharacters(data.results)})
        .catch(err => console.error("Something went wrong: ", err))
    }, [])
    return (
        <div>
            <h1>The Rick & Morty Project</h1>
            {favourite.length > 0 && <Cards key="favourite" />}
            <Cards key="cards" characters={characters} />
        </div>
    )
}

// results[0].name
