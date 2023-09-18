import "./welcome.css"
import useAppContext from "../../hook/useAppContext";

const Welcome = () => {
    const {lang} = useAppContext()
    let textFirst;
    let textSecond;
    if(lang){
        textFirst = "Welcome, We do have what you need,";
        textSecond = "and much +"
        

    }else{
        textFirst = "Bem-vindo, temos o que você precisa,";
        textSecond = "e ainda +"

    }
    return(
        <div id="intro">
            <img src="/Images/home-apresentation.jpg" alt="Foto de um laptop"/>
            <h1 className="welcome-text">{textFirst}<br /> {textSecond}</h1>
        </div>
    )
}
export default Welcome;