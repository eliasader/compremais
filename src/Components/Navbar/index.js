import "./navbar.css"


const Navbar = () =>{  
    return(
        <div className="navbar">   
            <img src="/Images/logo.png" alt="logo do compre mais"/>
            <ul className="options">
                <li><a href="#intro">Home</a></li>    
                <li><a href="#contact__main">Contato</a></li>      
            </ul> 
        </div>
    )
}
export default Navbar