import { Box, Button, Center, Divider, HStack, Heading } from '@chakra-ui/react';
import { CheckBox } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useEffect, useState } from 'react';
import { CardChakra } from './CardChakra';

export const CardsChakra = ({ characters }) => {

    const [favorites, setFavorites] = useState([]);
    const [isChecked, setIsChecked] = useState(false);


    // using localStorage getItem to retrieve the saved favorites, if any
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('favorites'));
        if (storedData) {
            setFavorites(storedData);
        }
    }, []);


    // separating what's flagged as fav and what's not so that the favs can go at the beginning of full array
    const favoriteItems = characters.filter(item => favorites.includes(item.id))
    const notFavoriteItems = characters.filter(item => !favorites.includes(item.id))
    let allItems = [...favoriteItems, ...notFavoriteItems];


    // just a simple handler to quickly reset the favorites
    const handleResetFavs = () => { 
        setFavorites([]) 
        localStorage.clear();
    }


    // when plus icon is clicked, the id of selected item is added in favorites ìarray if not already present and gets removed if already present
    const handleToggle = (toggledId) => {
        if (favorites.includes(toggledId)) {
            setFavorites(favorites.filter((id) => id !== toggledId));
        } else {
            setFavorites([...favorites, toggledId]);
        }
    }


    // using localStorage setItem to add favorites to the local store; it checks if there's any favorite otherwise it will always be overwritten by the empty favorites array on first load
    useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem('favorites', JSON.stringify(favorites))
        }
    }, [favorites])


    return (
        <Box>
            <Heading fontSize={40}>You have {favorites.length} {favorites.length === 1 ? "favorite" : "favorites"}</Heading>
            <Center>
            <HStack justifyContent="center">
                <Button style={{ fontSize: "1rem", padding: "8px 10px", cursor: "pointer" }} onClick={handleResetFavs}>Reset favorites</Button>
                <CheckBox onChange={() => setIsChecked(!isChecked)} size='md' colorScheme='green'>Show favorites only</CheckBox>
            </HStack>
            </Center>
            <Divider />
            <Heading fontSize={30}>List of Characters:</Heading>
            {isChecked
                ? <ul className="cards-container">
                    {favoriteItems.map(character => {
                        return (
                            <CardChakra key={character.id}
                                character={character}
                                icon={favorites.includes(character.id)
                                    ? <RemoveIcon fontSize="large" />
                                    : <AddIcon fontSize="large" />
                                }
                                handleToggle={handleToggle}
                            />
                        )
                    })}
                </ul>
                : <ul className="cards-container">
                    {allItems.map(character => {
                        return (
                            <CardChakra key={character.id}
                                character={character}
                                icon={favorites.includes(character.id)
                                    ? <RemoveIcon fontSize="large" />
                                    : <AddIcon fontSize="large" />
                                }
                                handleToggle={handleToggle}
                            />
                        )
                    })}
                </ul>
            }
        </Box>
    )
}
