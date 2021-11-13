import "./CartItems.css";

function CartItems(props) {
  function deleteHandeler(key) {
    let updatedArr = props.items;
    for (let i in updatedArr) {
      let { id } = updatedArr[i];
      if (id === key) {
        updatedArr.splice(i, 1);
      }
    }
    console.log(updatedArr);
    props.onChangeItems(updatedArr, key);
  }
  let result;
  if (props.items.length > 0) {
    result = props.items.map((data) => (
      <div className="row cart-box__row">
        <div className="col-4 cart-data align-items-center">
          <p>
            <b>Name :</b> {data.name}
          </p>
        </div>
        <div className="col-4 cart-data">
          <p>
            <b>Price :</b> {data.price}
          </p>
        </div>
        <div className="col-4 cart-data">
          <button
            className="btn btn-outline-dark mt-auto"
            onClick={() => deleteHandeler(data.id)}
          >
            Delete Item
          </button>
        </div>
      </div>
    ));
  } else {
    result = <p className="empty-cart">Cart is Empty</p>;
  }

  return (
    <>
      <div className="container cart-box">
        <div className="row cart-heading">
          <h3>Cart Items</h3>
        </div>

        {result}
      </div>
    </>
  );
}

export default CartItems;
