import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { DicrementQty, incrementQty, removeItem } from "../Redux/Slice";
function Cart() {
  const productData = useSelector((state) => state.productDetails.value);
  let dispatch = useDispatch();
  console.log(productData);
  return (
    <>
      <div className=" container" style={{marginTop:"100px"}}>
        {/* <div className="row mt-3"> */}
          {productData.map((product) => (
            <>
              <div className=" row d-flex  my-3 py-3 shadow-lg justify-content-center align-items-center ">
                <div className="col-md-6">
                  <img
                    src={product.data.thumbnail}
                    alt=""
                    height={250}
                    width={250}
                  />
                </div>

                <div className="col-md-6">
                  <h5 className="card-title">{product.data.title}</h5>
                  <p className="card-text">{product.data.category}</p>
                  <p className="card-text">{product.data.description}</p>
                  <h3 className="card-text">
                    ${(product.data.price * product.qty).toFixed(3)}
                  </h3>
                  <button
                    className="btn btn-success"
                    onClick={() => dispatch(DicrementQty(product.data.id))}
                    disabled={product.qty === 1}
                  >
                    -
                  </button>
                  &nbsp;&nbsp;
                  {product.qty}
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(incrementQty(product.data.id))}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-danger mx-4"
                    onClick={() => dispatch(removeItem(product.data.id))}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      {/* </div> */}
    </>
  );
}
export default Cart;
