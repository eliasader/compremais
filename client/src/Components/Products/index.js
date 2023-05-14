import Card from "../Cards";
import "./productCard.css"

const productCard = (props) => {
    return(
        <div className="section">  
            <span className="title1">{props.title}</span>
            <div className="card-place">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

        </div>
    )
}
export default productCard;