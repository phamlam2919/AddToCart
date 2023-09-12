import React from "react";

function BreadCrumb() {
    return (
        <div>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            Library
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default BreadCrumb;
