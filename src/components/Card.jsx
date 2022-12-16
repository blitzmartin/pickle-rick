import { Favorite, FavoriteBorder } from "@mui/icons-material"
import { useState } from "react";

export default function Card({ character, handleToggle }) {
const {id, name, image, episode, isFavorite} = character;
    return (
        <li style={{ listStyleType: "none" }}>
            <div>
                <h3>{name}</h3>
                <div>
                    <img alt={name} src={image} />
                    <span onClick={() => {
                    handleToggle(id);
                  }} >
                        {isFavorite
                            ? <Favorite />
                            : <FavoriteBorder />}
                    </span>

                </div>
                <p>Was in: {episode.length}  episodes</p>
            </div>
        </li>
    )
}

//favorite_border vs favorite
