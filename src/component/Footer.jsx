import { Link } from "react-router-dom"
import "../style/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faMapLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export const Footer = () =>{
    return(
        <div className="footerContent">
            {/* <div className="topFooter">
                <div className="leftLogo">
                    <h1>KE-ART</h1>
                </div>

                <div className="rightContent">
                    <div className="topContent">
                        <div className="topPart">
                            <h3>Product</h3>
                        </div>
                        <div className="topPart">
                            <h3>Social Media</h3>
                        </div>
                        <div className="topPart">
                            <h3>Contact</h3>
                        </div>
                    </div>
                    <div className="botContent">
                        <div className="contentPart product">
                            <h4><Link>Product 1</Link></h4>
                            <h4><Link>Product 2</Link></h4>
                            <h4><Link>Product 3</Link></h4>
                            <h4><Link>Product 4</Link></h4>
                        </div>
                        <div className="contentPart sosmed">
                            <div className="topSosmed">
                                <Link><FontAwesomeIcon icon={faFacebookSquare} className="iconSosmed"/></Link>
                                <Link><FontAwesomeIcon icon={faTwitterSquare} className="iconSosmed"/></Link>
                            </div>
                            <div className="botSosmed">
                                <Link><FontAwesomeIcon icon={faInstagramSquare} className="iconSosmed"/></Link>
                                <Link><FontAwesomeIcon icon={faLinkedin} className="iconSosmed"/></Link>
                            </div>
                        </div>
                        <div className="contentPart contact">
                            <div className="contactPart">
                                <FontAwesomeIcon icon={faWhatsapp} className="iconContact"/>
                                <h4>+62895623449113</h4>
                            </div>
                            <div className="contactPart">
                                <FontAwesomeIcon icon={faMapLocationDot} className="iconContact"/>
                                <h4>Jl. By Pass Ngurah Rai no 232, Denpasar</h4>
                            </div>
                            <div className="contactPart">
                                <FontAwesomeIcon icon={faEnvelope} className="iconContact"/>
                                <h4>ke-art@gmail.com</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="botFooter">
                <h1>Copyright &copy; 2022 Ke-Art. Design by Luqman</h1>
            </div>
        </div>
    )
}