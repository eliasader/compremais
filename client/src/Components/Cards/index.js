import "./cards.css"
const Card = (props) => {

    return(
        <div className="cards">
            <div>
                <img src="/Images/Ferro.jpg"/>
            </div>
            <div className="prod-info">
                <h1>{props.Name}</h1>
                <span className="price">
                    {props.price}
                    <span className="price-cents">
                    {props.priceCents}
                    </span>
                </span>
            </div>
        </div>
    )
}
export default Card;