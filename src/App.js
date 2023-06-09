import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.min.css'
import CartContext from "./components/CartContext"

function App() {
    return (
        <CartContext>
            <BrowserRouter>
                <Header />
                <ToastContainer />
                <Main />
                <Footer />
            </BrowserRouter>
        </CartContext>
    )
}

export default App