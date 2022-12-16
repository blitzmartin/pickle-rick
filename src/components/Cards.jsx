import { useState } from 'react'
import Favorite from "@mui/icons-material/Favorite"
import AddBoxIcon from '@mui/icons-material/AddBox';
import Card from './Card'

export default function Cards({ characters }) {
    const [favorites, setFavorites] = useState([]);
    const filteredItems = characters.filter(item => favorites.includes(item.id))

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

            {favorites.length > 0
                ? <>
                    <h2>{favorites.length} Favorites:</h2>
                        <ul className="cards-container">
                            {filteredItems.map(character => {
                                return (
                                    <Card key={character.id}
                                        character={character}
                                        icon={<Favorite />}
                                        handleToggle={handleToggle}
                                    />
                                )
                            })}
                        </ul>
                </>
                : <h2>You have selected 0 favorites!</h2>
            }
            <hr />
            <ul className="cards-container">
                {characters.map(character => {
                    return (
                        <Card key={character.id}
                            character={character}
                            icon={<AddBoxIcon fontSize="large" />}
                            handleToggle={handleToggle}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
