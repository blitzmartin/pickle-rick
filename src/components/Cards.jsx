import { useState } from 'react'
import Card from './Card'

export default function Cards({ characters }) {
/*     
    const handleClick = (selectedId) => {
        setCharacters(characters.map(char => {
            if(char.id === selectedId) {
                return {
                    ...char,
                    isFavorite: !char.isFavorite
                }
            } else {
                return char
            }
        }))
    } */

    return (
        <div>
            <ul>
                {characters.map(character => {
                    return (
                        <Card key={character.id}
                            character={character}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
