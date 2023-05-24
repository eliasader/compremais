import "./navbar.css"


const Navbar = () =>{  
    return(
        <div className="navbar">   
            <img src="/Images/logo.png" alt="logo do compre mais"/>
            <ul className="options">
                <li><a href="">Home</a></li>    
                <li><a href="">Contato</a></li>    
                <li><a href="">Sobre nos</a></li>    
            </ul> 
        </div>
    )
}
export default Navbar