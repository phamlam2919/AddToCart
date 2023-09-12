import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Product from "../components/Product";
import { useEffect, useState } from "react";
function Homepage() {
    let [productsYen, setProductsYen] = useState([]);
    let [productsSam, setProductsSam] = useState([]);

    const fetcthProducts = async () => {
        let responseYen = await fetch(
            `http://localhost:3000/api/v1/products?category=thuong-vy-yen`
        );
        let responseSam = await fetch(
            `http://localhost:3000/api/v1/products?category=thuong-vy-sam`
        );
        let dataYen = await responseYen.json();
        let dataSam = await responseSam.json();

        setProductsYen((prev) => [...prev, ...dataYen]);
        setProductsSam((prev) => [...prev, ...dataSam]);
    };

    useEffect(() => {
        fetcthProducts();
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <section className="container section-thuong-vy-yen">
                <div className="row banner">
                    <img
                        src={productsYen.length > 0 && productsYen[0].banner}
                        alt=""
                    />
                </div>
                <div className="row category-name">
                    <h3>
                        {productsYen.length > 0 && productsYen[0].description}
                    </h3>
                </div>
                <div className="row">
                    {productsYen.map((e, i) => (
                        <div className="col-3">
                            <Product
                                number={e.number}
                                price={e.price}
                                id={e.product_id}
                                name={e.product_name}
                                sale={e.sale}
                            ></Product>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container section-thuong-vy-sam">
                <div className="row banner">
                    <img
                        src={productsSam.length > 0 && productsSam[0].banner}
                        alt=""
                    />
                </div>
                <div className="row category-name">
                    <h3>
                        {productsSam.length > 0 && productsSam[0].description}
                    </h3>
                </div>
                <div className="row">
                    {productsSam.map((e, i) => (
                        <div className="col-3">
                            <Product
                                number={e.number}
                                price={e.price}
                                id={e.product_id}
                                name={e.product_name}
                                sale={e.sale}
                            ></Product>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Homepage;
