import { useContext } from "react";
import CartContext from "../Store/cartContext";
const List = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.StoreItems);
const addItemCart=(item)=>{
    cartCtx.AddItems(item)
}
  return (
    <div>
      <h3>List Of Items</h3>
      <pre>Nmae description price Quantity</pre>
      <ul>
        {cartCtx.StoreItems.map((item) => (
          <li key={Math.random()}>
            {item.name} ----{item.description}---{item.price}---{item.inventory}{" "}
            <button onClick={()=>addItemCart(item.name)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
