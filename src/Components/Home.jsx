import { useEffect, useState } from "react";
import WebService from "../Sevices/WebService";
import Webapi from "../Sevices/Webapi";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/Slice";

function Home() {
  const [productData, setProductData] = useState([]);
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
  return (
    <>
       <div className="container" style={{marginTop:"100px"}}>
        <div className="row ">
          {productData.map((obj) => (
            <div  className="col-md-4 col-sm-6 col-lg-3 mt-3 ">
              <div className="card w-100 h-100 shadow-md rounded-md" style={{ width: "18rem" }}>
                <img src={obj.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{obj.title}</h5>
                  <p className="card-text">{obj.category}</p>
                  <h3 className="card-text">${obj.price}</h3>
                  <button href="#" className="btn btn-primary" onClick={() => dispatch(addProduct(obj))}>
                    Add to Cart
                  </button>
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
