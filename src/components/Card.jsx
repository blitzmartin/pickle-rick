export default function Card({ character, icon, handleToggle }) {
    const { id, name, image, episode, species, status } = character;

    return (
        <li style={{ listStyleType: "none" }}>
            <div className="card-container">
                <div>
                    <img alt={name} src={image} />
                </div>
                <div className="card-info">
                    <span className="btn" onClick={() => { handleToggle(id) }}>{icon}</span>
                    <h3>{name}</h3>
                    <p>Was in: <b>{episode.length} episodes</b></p>
                    <p>Species: <b>{species}</b></p>
                    <p>Status: <b>{status}</b></p>
                </div>
            </div>
        </li>
    )
}