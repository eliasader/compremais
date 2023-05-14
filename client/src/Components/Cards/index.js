import "./cards.css"
const Card = (props) => {

    return(
        <div className="cards">
            <div>
                <img src="/Images/Ferro.jpg"/>
            </div>
            <div className="prod-info">
                <h1>Ferro de passar</h1>
                <span className="price">
                    R$ 93
                    <span className="price-cents">
                        99
                    </span>
                </span>
            </div>
        </div>
    )
}
export default Card;