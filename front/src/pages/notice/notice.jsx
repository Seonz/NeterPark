import Footer from "../../components/footer";
import Header from "../../components/herder";
import Noticeviewform from "./sections/noticeviewform";



export default function Noticeform() {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="container-fluid">
                <div style={{ textAlign: "center" }}>
                    <Noticeviewform />
                </div>
            </div>
            <Footer />
        </div >
    )

}