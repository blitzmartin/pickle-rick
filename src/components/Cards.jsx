import { useState } from 'react'
import Card from './Card'

export default function Cards({ characters }) {
    const [favorites, setFavorites] = useState([]);
    const filteredItems = characters.filter(item => favorites.includes(item.id))

    // when items is clicked, its id is added in favorites state array if not already present and gets removed if already present
    function handleToggle(toggledId) {
        // Was it previously selected?
        if (favorites.includes(toggledId)) {
            // Then remove this ID from the array.
            setFavorites(favorites.filter((id) => id !== toggledId));
        } else {
            // Otherwise, add this ID to the array.
            setFavorites([...favorites, toggledId]);
        }
        console.log(favorites);
    }

    return (
        <div>

            {favorites.length > 0 
            ?
                <>
                    <h2>{favorites.length} Favorites:</h2>
                    <ul>
                        {filteredItems.map(character => {
                            return (
                                <Card key={character.id}
                                    character={character}
                                    handleToggle={handleToggle}
                                />
                            )
                        })}
                    </ul>
                </>
            : <h2>You have selected 0 favorites!</h2>
            }
            <hr />
            <ul>
                {characters.map(character => {
                    return (
                        <Card key={character.id}
                            character={character}
                            handleToggle={handleToggle}
                        />
                    )
                })}
            </ul>


        </div>
    )
}
