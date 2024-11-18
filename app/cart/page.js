export default function Cart() {
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem name = "tomato"></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <Btn color = "blue"></Btn>
            <Btn color = "red"></Btn>
        </div>
    );
}

function Btn(props) {
    return <button style={{ background : props.color }}>버튼</button>
}

function CartItem(props) {
    return (
        <div className="cart-item">
            <p>상품명 {props.name}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    );
}
