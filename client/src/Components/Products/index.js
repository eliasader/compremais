import Card from "../Cards";
import "./productCard.css"
const productsList = [
    {"name":"A", "price":"1", "priceCents":"99" },
    {"name":"B", "price":"2", "priceCents":"99" },
    {"name":"C", "price":"4", "priceCents":"50" },
    {"name":"D", "price":"3", "priceCents":"99" },
    {"name":"E", "price":"5", "priceCents":"99" },
    {"name":"F", "price":"7", "priceCents":"99" },
    {"name":"G", "price":"6", "priceCents":"99" }
];

const productCard = (props) => {
    const createCards = Object.values(productsList).map((value,index) => {
        return <Card key={index} Name={value.name} price={value.price} priceCents={value.priceCents}/>;
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