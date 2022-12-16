import { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Card from './Card'

export default function Cards({ characters }) {
    const [favorites, setFavorites] = useState([]);
    const favoriteItems = characters.filter(item => favorites.includes(item.id))
    const notFavoriteItems = characters.filter(item => !favorites.includes(item.id))
    const correctItems = [...favoriteItems, ...notFavoriteItems];

    // when heart icon is clicked, its item's id is added in favorites state array if not already present and gets removed if already present
    const handleToggle = (toggledId) => {
        if (favorites.includes(toggledId)) {
            setFavorites(favorites.filter((id) => id !== toggledId));
        } else {
            setFavorites([...favorites, toggledId]);
        }
    }

       return (
        <div>
            <h3>You have {favorites.length} {favorites.length === 1 ? "favorite" : "favorites"}</h3>
            <hr />
            <h2>List of Characters:</h2>
            <ul className="cards-container">
                {correctItems.map(character => {
                    return (
                        <Card key={character.id}
                            character={character}
                            icon={ favorites.includes(character.id)
                                ? <RemoveIcon fontSize="large"/>
                                : <AddIcon fontSize="large"/>
                        }
                            handleToggle={handleToggle}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
