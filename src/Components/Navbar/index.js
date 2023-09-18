import "./navbar.css"
import { useState  } from 'react';
import useAppContext from "../../hook/useAppContext";

const Navbar = () =>{  
    const {lang,setLang} = useAppContext()
    let cont;
    const handleClick = () => {
        setLang(!lang);
    }
    if(lang){
        cont = "Contact";

    }else{
        cont = "Contato"

    }
    return(
        <div className="navbar">   
            <img src="/Images/logo.png" alt="logo do compre mais"/>
            <ul className="options">
                <li><a className="op" href="#intro">Home</a></li>    
                <li><a className="op" href="#contact__main">{cont}</a></li>
                <li><a>
                    <div className="switch">
	                <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox"
                    onChange={handleClick}/>
	                <label htmlFor="language-toggle"></label>
	                <span className="on">BR</span>
	                <span className="off">EN</span>
  	                </div>
                </a></li>      
            </ul> 
        </div>
    )
}
export default Navbar;
