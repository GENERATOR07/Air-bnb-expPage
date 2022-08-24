const Card=({data})=>{
    const {title,coverImg,price,stats:{rating,reviewCount},openSpots,location}=data
    
    return(
        <div className="Card">
         {openSpots===0 && <div className="badge">sold out</div>}
           <img src={coverImg}/>
           <div className="Card-stats">
            <img src="./star 1.png"/>
            <span>{rating}</span>
            <span>({reviewCount}) .</span>
            <span>{location}</span>
           </div>
           <p>{title}</p>
           <p><b>From ${price} </b>/ person</p>
        </div>
    )
}
export default Card