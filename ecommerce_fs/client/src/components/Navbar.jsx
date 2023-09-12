import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
    let cart = useSelector((state) => state.cart);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Danh mục
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        href="/category/thuong-vy-yen"
                                    >
                                        Thượng vy yến
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        href="/category/thuong-vy-sam"
                                    >
                                        Thượng vy sâm
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/cart"
                                className="nav-link "
                                aria-disabled="true"
                            >
                                <i
                                    style={{ paddingRight: "10px" }}
                                    class="fa-solid fa-cart-shopping"
                                ></i>
                                Giỏ hàng(
                                {cart.reduce(
                                    (pre, cur) => (pre += cur.clickNumber),
                                    0
                                )}
                                )
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
