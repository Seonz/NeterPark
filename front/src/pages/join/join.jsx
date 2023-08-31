import Footer from "../../components/footer"
import Header from "../../components/herder"
import JoinForm from "./sections/joinform"


export default function MainJoinform() {

    return (
        <div id="main-wrapper">
            <Header />
            <div className="container-fluid">
                <div style={{ margin: "200px", textAlign: "center" }}>
                    <JoinForm />
                </div>
            </div>
            <Footer />
        </div >
    )
}