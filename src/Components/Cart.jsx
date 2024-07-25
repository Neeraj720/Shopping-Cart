import { useDispatch, useSelector } from "react-redux";
import { DicrementQty, incrementQty, removeItem } from "../Redux/Slice";
function Cart() {
  const productData = useSelector((state) => state.productDetails.value);
  console.log(productData)
  let dispatch = useDispatch();
  return (
    <>
      <div className=" container" style={{ marginTop: "100px" }}>
        {productData.length > 0 ? (
          productData.map((product) => (
            <>
              <div className=" row d-flex  my-3 py-3 shadow-lg justify-content-center align-items-center ">
                <div className="col-md-6">
                  <img
                    src={product.thumbnail}
                    alt=""
                    height={250}
                    width={250}
                  />
                </div>

                <div className="col-md-6">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.category}</p>
                  <p className="card-text">{product.description}</p>
                  <h3 className="card-text">
                    ${(product.price * product.qyt).toFixed(2)}
                  </h3>
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(DicrementQty(product.id))}
                    disabled={product.qyt === 1}
                  >
                    -
                  </button>
                  &nbsp;&nbsp;
                  {product.qyt}
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(incrementQty(product.id))}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger mx-4"
                    onClick={() => dispatch(removeItem(product.id))}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </>
          ))
        ) : (
          <>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{height: '100vh',}}
            >
              <h3>Shopping Cart is Empty</h3>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Cart;
