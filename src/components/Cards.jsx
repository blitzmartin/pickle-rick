import { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Card from './Card'

export default function Cards({ characters }) {

    const [favorites, setFavorites] = useState([]);

    // separating what's flagged as fav and what's not so that the favs can go at the beginning of full array
    const favoriteItems = characters.filter(item => favorites.includes(item.id))
    const notFavoriteItems = characters.filter(item => !favorites.includes(item.id))
    const allItems = [...favoriteItems, ...notFavoriteItems];

    const handleResetFavs = () => {
        setFavorites([])
    }

    // when plus icon is clicked, the id of selected item is added in favorites ìarray if not already present and gets removed if already present
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
            <button 
                style={{fontSize: "1rem", padding: "8px 10px", cursor: "pointer"}} 
                onClick={handleResetFavs}>Reset favorites
            </button>
            <hr />
            <h2>List of Characters:</h2>
            <ul className="cards-container">
                {allItems.map(character => {
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
