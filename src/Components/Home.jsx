import { useEffect, useState } from "react";
import WebService from "../Sevices/WebService";
import Webapi from "../Sevices/Webapi";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeItem } from "../Redux/Slice";

function Home() {
  const [productData, setProductData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const cart = useSelector((state) => state.productDetails.value);
  console.log(cart);
  const dispatch = useDispatch();
  useEffect(() => {
    loadProductData();
  }, []);

  const loadProductData = async () => {
    let response = await WebService.getProductAPI(Webapi.productAPI);
    console.log(response);
    let resp = response.data;
    setProductData(resp.products);
  };
  // Search for products
  const filterProduct = productData.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  // Switch between Add and Remove item from Cart
  const isCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row mb-4">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="row ">
          {filterProduct.map((obj) => (
            <div className="col-md-4 col-sm-6 col-lg-3 mt-3 ">
              <div
                className="card w-100 h-100 shadow-md rounded-md"
                style={{ width: "18rem" }}
              >
                <img src={obj.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{obj.title}</h5>
                  <p className="card-text">{obj.category}</p>
                  <h3 className="card-text">${obj.price}</h3>
                  {isCart(obj.id) ? (
                    <button
                      href="#"
                      className="btn btn-danger"
                      onClick={() => dispatch(removeItem(obj.id))}
                    >
                      Delete from cart
                    </button>
                  ) : (
                    <button
                      href="#"
                      className="btn btn-primary"
                      onClick={() => dispatch(addProduct(obj))}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
