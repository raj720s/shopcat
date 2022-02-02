import React, { useEffect, useState } from "react";
import ProductDetails from "../Components/ProductDetails";
// import products from "../dummydata/datas";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProductPage() {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  // console.log(id);
  // const product = products.find((p) => p._id === id);
  // console.log(product);
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get("/api/product/" + id);
      if (data) {
        setProduct(data);
        console.log(product);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div>
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <div>"product ! found"</div>
      )}
    </div>
  );
}

export default ProductPage;
