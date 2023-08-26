import Footer from "../../components/footer"
import Header from "../../components/herder"
import LoginForm from "./sections/loginform"


export default function MainLoginform() {

    return (
        <div id="main-wrapper">
            <Header />
            <div className="container-fluid">
                <div style={{ margin: "200px", textAlign: "center" }}>
                    <LoginForm />
                </div>
            </div>
            <Footer />
        </div >
    )
}