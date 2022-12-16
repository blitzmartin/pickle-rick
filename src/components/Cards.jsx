import { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
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
                                        icon={<RemoveIcon fontSize="large"/>}
                                        handleToggle={handleToggle}
                                    />
                                )
                            })}
                        </ul>
                </>
                : <h2>You have selected 0 favorites!</h2>
            }
            <hr />
            <h2>List of Characters:</h2>
            <ul className="cards-container">
                {characters.map(character => {
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
