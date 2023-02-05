import { useState } from "react"
import { Link } from "react-router-dom"
import "../style/navBar.css"
import $ from "jquery"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () =>{

    window.onscroll = () => {
        if(window.scrollY > 100){
            $(".navBar").addClass("onScroll");
        }
        else{
            $(".navBar").removeClass("onScroll");
        }
    };

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
        <div className="navBar">
            <div className="titleNav">
                <h1 className="fontBold">KE-ART</h1>
            </div>
            <div className="menuNav">
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>Gallery</Link></li>
                    <li><Link>Product</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            </div>

            <div className={
          isNavExpanded ? "dropdownMenu active" : "dropdownMenu"
        } onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
                <div className="leftEmpty" id="exitSide"></div>
                <div className="rightDropdown">
                    <FontAwesomeIcon icon={faXmark} className="exitButton"/>
                    <ul>
                        <li><Link>Home</Link></li>
                        <li><Link>Gallery</Link></li>
                        <li><Link>Product</Link></li>
                        <li className="lastChild"><Link>Contact</Link></li>
                    </ul>
                </div>
            </div>
            
            <FontAwesomeIcon icon={faBars} className="hamburgerBar" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}/>
        </div>
    )
}