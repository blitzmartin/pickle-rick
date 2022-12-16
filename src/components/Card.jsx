import { Favorite, FavoriteBorder } from "@mui/icons-material"
import { useState } from "react";

export default function Card({ name, imgUrl, episodes,}) {

    const [isFavorite, setIsFavorite] = useState(false)
    const handleClick = () => { setIsFavorite(!isFavorite) }

    return (
        <li style={{ listStyleType: "none" }}>
            <div>
                <h3>{name}</h3>
                <div>
                    <img alt={name} src={imgUrl} />
                    <span onClick={handleClick}>
                        {isFavorite
                            ? <Favorite />
                            : <FavoriteBorder />}
                    </span>

                </div>
                <p>Was in: {episodes.length}  episodes</p>
            </div>
        </li>
    )
}

//favorite_border vs favorite
