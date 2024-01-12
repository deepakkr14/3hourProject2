import { useState, useContext } from "react";
import CartContext from "../Store/cartContext";
const Form = (e) => {
  const contxt = useContext(CartContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const quantityandler = (e) => {
    setQuantity(e.target.value);
  };
  const addHandler = (e) => {
    e.preventDefault();
    contxt.AddItemsToStore({
      name,
      description,
      price: Number(price),
      inventory: Number(quantity),
    });
    console.log(name, quantity, price, description);
  };
  return (
    <form>
      <label htmlFor="name">Medecine name</label>
      <input id="name" type="text" value={name} onChange={nameHandler} />
      <label htmlFor="Description">Medecine Description</label>
      <input
        id="Description"
        type="text"
        value={description}
        onChange={descriptionHandler}
      />
      <label htmlFor="price">Price</label>
      <input id="price" type="number" value={price} onChange={priceHandler} />
      <label htmlFor="qty">Quantity Available</label>
      <input
        id="qty"
        type="number"
        value={quantity}
        onChange={quantityandler}
      />
      <button onClick={addHandler}>Add Product</button>
      <hr></hr>
    </form>
  );
};
export default Form;
