import Card from './Card'

export default function Cards({ characters }) {
    return (
        <div>Cards
            <ul>
                {characters.map(character => {
                    return (
                        <Card key={character.id} name={character.name} imgUrl={character.image} episodes={character.episode} />
                    )
                })
                }

            </ul>
        </div>
    )
}
