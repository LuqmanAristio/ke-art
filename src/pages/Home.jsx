import { Header } from "../component/Header"
import "../style/App.css"
import { About } from "../component/About"
import { Choose } from "../component/Choose"
import { Gallery } from "../component/Gallery"
import { Footer } from "../component/Footer"

export const Home = () =>{
    return(
            <div className="homePage">
                    <Header />
                    <About />
                    <Choose />
                    <Gallery />
                    <Footer />
            </div>
    )
}