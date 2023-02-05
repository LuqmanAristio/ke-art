import { Link } from "react-router-dom"
import imageHero from "../assets/aboutImage.png"
import "../style/about.css"

export const About = () =>{
    return(
        <div className="aboutUs">
            <div className="imageAbout">
                <img src={imageHero} alt="Joglo House" />
            </div>
            <div className="aboutText">
                <div className="boxText">
                    <h4>WELCOME TO KE-ART</h4>
                    <h1 className="fontBold">BEST JOGLO HOUSE SPECIALIST IN BALI</h1>

                    <p>Joglo is a traditional Javanese house that has existed since ancient times and its preferred by many people today. 
                        Joglo gives the feel of the past which is full of simplicity and serenity. <span>Ke-Art</span> is an experienced company engaged 
                        in the sale of joglo houses with services throughout the island of Bali</p>

                    <h3><Link>SEE OUR GALLERY!</Link></h3>
                </div>
            </div>
        </div>
    )
}