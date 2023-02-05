import { Link } from "react-router-dom"
import { Navbar } from "./Navbar"
import "../style/homePage.css"

export const Header = () =>{
    return(
            <div className="headerBanner">
                    <Navbar></Navbar>
                    <div className="titleBanner">
                        <h1><span>DISCOVER</span> YOUR DREAM WOODEN <span>HOUSE</span></h1>
                        <p>Join other people to find your dream joglo house
                            and live comfortably and safely at Bali</p>

                        <h3><Link>EXPLORE MORE</Link></h3>
                    </div>
            </div>
    )
}