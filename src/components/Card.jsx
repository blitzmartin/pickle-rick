export default function Card({ character, icon, handleToggle}) {
const { id, name, image, episode } = character;

    return (
        <li style={{ listStyleType: "none" }}>
            <div>
                <h3>{name}</h3>
                <div>
                    <img alt={name} src={image} />
                    <span onClick={() => {handleToggle(id)}}>{icon}</span>
                </div>
                <p>Was in: {episode.length}  episodes</p>
            </div>
        </li>
    )
}