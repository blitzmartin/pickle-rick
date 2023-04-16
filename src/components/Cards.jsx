import { Button, Center, Checkbox, Divider, GridItem, HStack, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { RiHeart3Fill, RiHeart3Line } from 'react-icons/ri';
import { CustomCard } from './CustomCard';

export const Cards = ({ characters }) => {

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
        <VStack spacing={8} minW="full">
            <Heading fontSize={30}>You have {favorites.length} {favorites.length === 1 ? "favorite" : "favorites"}</Heading>
            <Center>
            <HStack justifyContent="center">
                <Button size="lg" color='white' bg="green.500" onClick={handleResetFavs}>Reset favorites</Button>
                <Checkbox value={isChecked} onChange={() => setIsChecked(!isChecked)} size='md' colorScheme='green'>Show favorites only</Checkbox>
            </HStack>
            </Center>
            <Divider />
            <Heading fontSize={40}>List of Characters:</Heading>
            {isChecked
                ? <SimpleGrid minW="50%" maxW="70%" spacing={4} templateColumns='repeat(auto-fill, minmax(280px, 1fr))'>
                    {favoriteItems.map(character => {
                        return (
                            <GridItem key={character.id}
                            w='100%'
                            >
                                <CustomCard 
                                character={character}
                                icon={favorites.includes(character.id)
                                    ? <RiHeart3Fill size={30} />
                                    : <RiHeart3Line size={30}/>
                                }
                                handleToggle={handleToggle}
                             />
                            </GridItem>
                        )
                    })}
                </SimpleGrid >
                : <SimpleGrid minW="50%" maxW="70%" spacing={4} templateColumns='repeat(auto-fill, minmax(280px, 1fr))'
                >
                    {allItems.map(character => {
                        return (
                            <CustomCard
                            key={character.id}
                                character={character}
                                icon={favorites.includes(character.id)
                                    ? <RiHeart3Fill size={30}/>
                                    : <RiHeart3Line size={30} />
                                }
                                handleToggle={handleToggle}
                            />
                        )
                    })}
                </SimpleGrid >
            }
        </VStack>
    )
}
