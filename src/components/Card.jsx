export default function Card({ character, icon, handleToggle }) {
    const { id, name, image, episode, species, origin } = character;

    return (
        <li style={{ listStyleType: "none" }}>
            <div className="card">
                <div>
                    <img alt={name} src={image} />
                </div>
                <div className="card-info">
                    <span>Name:</span>
                    <h2>{name}</h2>
                    <p>Was in: <b>{episode.length} episodes</b></p>
                    <p>Species: <b>{species}</b></p>
                    <p>Origin: <b>{origin.name}</b></p>
                    <span onClick={() => { handleToggle(id) }}>{icon}</span>
                </div>

            </div>
        </li>
    )
}