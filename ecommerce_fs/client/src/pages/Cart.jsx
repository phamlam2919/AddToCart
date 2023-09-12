import React from "react";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import DisabledContext from "antd/es/config-provider/DisabledContext";
import { formatCurrency } from "../helpers";
import { Link } from "react-router-dom";

function Cart() {
    let cart = useSelector((state) => state.cart);
    console.log(cart);
    return (
        <div>
            <Navbar />
            <div style={{ padding: "5%" }}>
                <h2
                    style={{
                        backgroundColor: "#d3d3d3",
                        width: "100%",
                        height: "70px",
                        padding: "11px",
                        textAlign: "center",
                    }}
                >
                    Giỏ hàng của bạn
                </h2>
                <div>
                    {cart.length > 0 ? (
                        <table
                            style={{
                                width: "100%",
                                borderCollapse: "collapse",
                            }}
                        >
                            <thead>
                                <tr>
                                    <th style={tableHeaderStyle}></th>
                                    <th style={tableHeaderStyle}>
                                        Tên sản phẩm
                                    </th>
                                    <th style={tableHeaderStyle}>Giá</th>
                                    <th style={tableHeaderStyle}>Số lượng</th>
                                    <th style={tableHeaderStyle}>Thành tiền</th>
                                    <th style={tableHeaderStyle}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart?.map((e, i) => (
                                    <CartItem key={i} detail={e} />
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p style={{ textAlign: "center" }}>
                            Chưa có sản phẩm nào trong giỏ hàng
                        </p>
                    )}
                </div>
                <div style={{ marginTop: "3%" }} className="row">
                    <div className="col-7">
                        <h3>Ghi chú đơn hàng</h3>
                    </div>
                    <div className="col-5">
                        <h3>Thông tin đơn hàng</h3>
                        <p style={{ display: "flex" }}>
                            Tổng tiền:
                            <b>
                                <h5>
                                    {formatCurrency(
                                        cart.reduce((pre, cur) => {
                                            return (pre +=
                                                cur.price *
                                                (1 - cur.sale) *
                                                cur.clickNumber);
                                        }, 0)
                                    )}
                                </h5>
                            </b>
                        </p>
                        <p>
                            Phí vận chuyển sẽ được tính ở trang thanh toán.
                            <br />
                            Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
                        </p>
                        <Link to="/checkout">
                            <button
                                style={{
                                    width: "150px",
                                    height: "40px",
                                    backgroundColor: "#1e3d37",
                                    color: "white",
                                }}
                            >
                                Thanh toán
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
const tableHeaderStyle = {
    backgroundColor: "#d3d3d3",
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid #ccc",
};
export default Cart;
