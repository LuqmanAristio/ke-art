import "../style/choose.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft, faHandshake, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

export const Choose = () =>{
    return(
        <div className="chooseMenu">
            <div className="imageCore">
                <h1>So, Why Choose Us?</h1>
                <p>There is so much reason to choose us as your best partner
                    to build your joglo house. Here some of it
                </p>
            </div>

            <div className="boxBest">
                <div className="box">
                    <div className="imageBox">
                        <div className="circleIcon">
                            <FontAwesomeIcon icon={faClockRotateLeft} className="boxIcon"/>
                        </div>
                    </div>
                    <div className="titleBox">
                        <div className="titleContent">
                            <h3 className="fontBold">10 Years Experience</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat vel consequatur 
                                laboriosam, accusantium nulla minima quam, nobis labore quisquam aut nisi ea facilis aperiam reprehenderit corrupti modi.</p>
                            <h4><Link>Read More</Link></h4>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imageBox">
                        <div className="circleIcon">
                            <FontAwesomeIcon icon={faHandshake} className="boxIcon"/>
                        </div>
                    </div>
                    <div className="titleBox">
                        <div className="titleContent">
                            <h3 className="fontBold">More Than 100 Project</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat vel consequatur 
                                laboriosam, accusantium nulla minima quam, nobis labore quisquam aut nisi ea facilis aperiam reprehenderit corrupti modi.</p>
                            <h4><Link>Read More</Link></h4>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="imageBox">
                        <div className="circleIcon">
                            <FontAwesomeIcon icon={faScrewdriverWrench} className="boxIcon"/>
                        </div>
                    </div>
                    <div className="titleBox">
                        <div className="titleContent">
                            <h3 className="fontBold">Full Bali Service</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat vel consequatur 
                                laboriosam, accusantium nulla minima quam, nobis labore quisquam aut nisi ea facilis aperiam reprehenderit corrupti modi.</p>
                            <h4><Link>Read More</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}