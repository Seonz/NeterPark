import Footer from "../../components/footer";
import Header from "../../components/herder";
import Prouduct from "./sections/productform";



export default function Productform() {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="container-fluid">
                <div style={{ textAlign: "center" }}>
                    <Prouduct />
                </div>
            </div>
            <Footer />
        </div >
    )

}