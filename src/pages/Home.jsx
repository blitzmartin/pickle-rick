import { Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { CardsChakra } from '../components/CardsChakra';
import {Footer }from '../components/Footer';
import {Header} from '../components/Header';
import SearchBar from '../components/SearchBar';

export default function Home() {

    const [characters, setCharacters] = useState([])
    const [query, setQuery] = useState('');
    const url = "https://rickandmortyapi.com/api/character?page=1"

    // when page loads, fetch data from API and set results of page 1 (an array of 20 elements) as default value for characters state var
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => { 
                setCharacters(data.results)
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
        <Container maxW={1300} minW={600} align="center">     
            <Header />
            <SearchBar value={query} onChange={handleChange}  />
            <CardsChakra key="cards" characters={filteredChars}  />
            <Footer />
        </Container>
    )
}

