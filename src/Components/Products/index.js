import Card from "../Cards";
import "./productCard.css";

const productCard = (props) => {
    const createCards = Object.values(props.list).map((value,index) => {
        return <Card key={index} Name={value.name} price={value.price} priceCents={value.priceCents} imgsrc={value.img}/>;
    })
    return(
        <div className="section">  
            <span className="title1">{props.title}</span>
            <div className="card-place">
                {createCards}
            </div>

        </div>
    )
}
export default productCard;