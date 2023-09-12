import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detail from "./pages/Detail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
        </div>
    );
}

export default App;
