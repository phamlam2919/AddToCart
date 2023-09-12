import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BreadCrumb from "../components/BreadCrumb";
import ProductCarousel from "../components/ProductCarousel";
import { useParams } from "react-router-dom";
import axios from "axios";
import { InputNumber } from "antd";
import { formatCurrency } from "../helpers";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
function Detail() {
    const onChange = (value) => {
        console.log("changed", value);
    };

    let [product, setProduct] = useState({});
    let { id } = useParams();
    let [quantity, setQuantity] = useState(0);
    let dispatch = useDispatch();
    // useEffect(() => {
    //     axios
    //         .get(`http://localhost:3000/api/v1/products/${id}`)
    //         .then((res) => setProduct(res.data))
    //         .catch((err) => console.log(err));
    // }, []);

    const fetchProduct = async () => {
        try {
            let response = await fetch(
                "http://localhost:3000/api/v1/products/" + id
            );
            let data = await response.json();
            setProduct(() => {
                return { ...data };
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    const handleAddToCart = () => {
        let buyProduct = {
            ...product,
            clickNumber: quantity,
        };
        dispatch({ type: "ADD_TO_CART", payload: buyProduct });
        setQuantity(() => 0);
        Swal.fire(
            "Thành Công!",
            "Sản phẩm đã được thêm vào giỏ hàng",
            "success"
        );
    };
    return (
        <div className="DetailPage">
            <Navbar />
            <BreadCrumb />
            <section className=" container product-detail">
                <div className="row">
                    <h3>{product.name}</h3>
                    <i className="product-sku">SKU: {product.product_id}</i>
                    <p className="mini-description">
                        <span className=" mini-description-item product-origin">
                            <b>Thương Hiệu</b>: {product.name}
                        </span>
                        <span className=" mini-description-item product-status">
                            <b>Tình trạng</b>:
                            {product.number === 0 ? "Hết hàng" : "Còn hàng"}
                        </span>
                        <span className=" mini-description-item product-sell">
                            <b>Đã bán</b>: 21 sản phẩm
                        </span>
                    </p>
                </div>
                <div className=" product-detail1 row">
                    <div className="col-5">
                        {product?.sources?.length > 0 && (
                            <ProductCarousel sources={product.sources} />
                        )}
                    </div>
                    <div className="col-4">
                        <h3>
                            <p>
                                <b
                                    style={{
                                        marginRight: "10px",
                                    }}
                                >
                                    {product.price &&
                                        product.sale &&
                                        formatCurrency(
                                            product.price * product.sale
                                        )}
                                </b>

                                <span
                                    style={{
                                        marginRight: "10px",
                                        textDecoration: "line-through",
                                    }}
                                >
                                    {product.price &&
                                        formatCurrency(product.price)}
                                </span>
                                <span
                                    style={{
                                        background: "red",
                                        color: "white",
                                    }}
                                >
                                    {product?.sale * 100}%
                                </span>
                            </p>
                        </h3>
                        <p>Trọng Lượng:</p>
                        <button style={{ width: "60px", height: "35px" }}>
                            50gram
                        </button>
                        <button
                            style={{
                                width: "80px",
                                height: "35px",
                                marginLeft: "10px",
                            }}
                        >
                            100gram
                        </button>
                        <br /> <br />
                        <input
                            type="button"
                            value="-"
                            onClick={() => {
                                if (quantity > 0) setQuantity(quantity - 1);
                            }}
                        />
                        <input type="text" value={quantity} />
                        <input
                            type="button"
                            value="+"
                            onClick={() => setQuantity(quantity + 1)}
                        />
                        <br /> <br />
                        <button
                            onClick={handleAddToCart}
                            style={{
                                width: "160px",
                                height: "50px",
                                color: "white",
                                backgroundColor: "#1e3d37",
                            }}
                        >
                            Thêm vào giỏ
                        </button>
                        <button
                            style={{
                                width: "160px",
                                height: "50px",
                                color: "white",
                                backgroundColor: "#1e3d37",
                                marginLeft: "10px",
                            }}
                        >
                            Mua Ngay
                        </button>
                    </div>
                    <div
                        style={{
                            height: "230px",
                            border: "1px black solid",
                            padding: "10px",
                        }}
                        className="col-3"
                    >
                        <p>
                            <img
                                style={{ width: "17px", marginRight: "15px" }}
                                src="https://theme.hstatic.net/200000404397/1001052028/14/pro_service_icon_1.png?v=167"
                                alt=""
                            />
                            Giao hành toàn quốc
                        </p>
                        <p>
                            <img
                                style={{ width: "17px", marginRight: "15px" }}
                                src="https://theme.hstatic.net/200000404397/1001052028/14/pro_service_icon_2.png?v=167"
                                alt=""
                            />
                            Chính hãng 100% - Nhận hàng trong 2 giờ
                        </p>
                        <p>
                            <img
                                style={{ width: "17px", marginRight: "15px" }}
                                src="https://theme.hstatic.net/200000404397/1001052028/14/pro_service_icon_3.png?v=167"
                                alt=""
                            />
                            Được kiểm tra hàng trước khi nhận
                        </p>
                        <p>
                            <img
                                style={{ width: "17px", marginRight: "15px" }}
                                src="	https://theme.hstatic.net/200000404397/1001052028/14/pro_service_icon_4.png?v=167"
                                alt=""
                            />
                            Đổi trả trong 48h nếu không hài lòng
                        </p>
                        <p>
                            <img
                                style={{ width: "30px", height: "17px" }}
                                src="	https://theme.hstatic.net/200000404397/1001052028/14/pro_service_icon_5.png?v=167"
                                alt=""
                            />
                            Sản phẩm đã được chứng nhận
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Detail;
