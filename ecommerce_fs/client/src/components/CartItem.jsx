import React, { useEffect, useState } from "react";
import { formatCurrency } from "../helpers";
import { useDispatch } from "react-redux";

function CartItem({ detail }) {
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        setQuantity(() => detail.clickNumber);
    }, []);
    let dispatch = useDispatch();
    const handleup = (id) => {
        setQuantity(quantity + 1);
        dispatch({
            type: "INCREASE_CART_PRODUCT",
            payload: id,
        });
    };

    const handleDown = (id) => {
        setQuantity(quantity - 1);
        dispatch({
            type: "DESCREASE_CART_PRODUCT",
            payload: id,
        });
    };

    return (
        <>
            <tr>
                <td style={tableCellStyle}>
                    <img
                        style={{
                            width: "100px",
                        }}
                        src="https://product.hstatic.net/200000404397/product/tinh_che_1_c8d7ce529c244aa3ab855e9a34c8a990_medium.jpg"
                        alt=""
                    />
                </td>
                <td style={tableCellStyle}>
                    <span>{detail.name}</span> <br />
                    <span>100gram</span>
                </td>
                <td style={tableCellStyle}>
                    <span>{formatCurrency(detail.price * detail.sale)}</span>
                    <br />
                    <span className="gia-tien">
                        {formatCurrency(detail.price)}
                    </span>
                </td>
                <td className="CartPage" style={tableCellStyle}>
                    <div className=" quantity-area d-flex mt-2">
                        <input
                            type="button"
                            value="-"
                            onClick={() => handleDown(detail.product_id)}
                        />
                        <input type="text" value={quantity} />
                        <input
                            type="button"
                            value="+"
                            onClick={() => handleup(detail.product_id)}
                        />
                    </div>
                </td>
                <td style={tableCellStyle}>
                    {formatCurrency(
                        detail.price * detail.sale * detail.clickNumber
                    )}
                </td>
                <td style={tableCellStyle}>
                    <i class="fa-solid fa-trash"></i>
                </td>
            </tr>
        </>
    );
}

const tableCellStyle = {
    padding: "10px",
    borderBottom: "1px solid #ccc",
    textAlign: "center",
};
export default CartItem;
