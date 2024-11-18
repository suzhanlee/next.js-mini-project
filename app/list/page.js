'use client'

import { useState } from "react";

export default function List() {
    let product = ["Tomatoes", "pasta", "Coconut"];
    let [quantity, changeQuantity] = useState([0,0,0]);

    return (
        <div>
            <h4 className="title">상품목록</h4>
            {product.map((p, index) => {
                return (
                    <div className="food" key={index}>
                        <image
                            src={`/food${index}.png`}
                            className="food-img"
                        ></image>
                        <h4>{p} $40</h4>
                        <span> {quantity[index]} </span>
                        <button onClick={() => {
                            let copy = [...quantity];
                            copy[index]++;
                            changeQuantity(quantity)
                            }}>+</button>
                        <button onClick={() => {
                            let copy = [...quantity]; // 참조 주소가 다른 새로운 배열을 만들어서 다시 생성
                            copy[index]--;
                            changeQuantity(quantity)
                            }}>-</button>
                    </div>
                );
            })}
        </div>
    );
}
