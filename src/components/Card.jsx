export default function Card({ character, icon, handleToggle }) {
    const { id, name, image, episode, species, status } = character;

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
                    <p>Status: <b>{status}</b></p>
                    <button className="btn" onClick={() => { handleToggle(id) }}>{icon}</button>
                </div>
            </div>
        </li>
    )
}