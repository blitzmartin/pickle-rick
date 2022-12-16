export default function Card({name, imgUrl, episodes}) {
  return (
    <li>
        <div>
            <h3>{name}</h3>
            <img alt={name} src={imgUrl} />
           <p>Was in: {episodes.length}  episodes</p> 
        </div>
        
    </li>
  )
}
