import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Detail from "../components/Detail.js";

//Http Requests
import { getProductById } from "../Http/Requests";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await getProductById(productId);
      setProduct(response);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [productId]);


  const formatDateTime = (dateTimeString) => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true, 
    };

    return new Date(dateTimeString).toLocaleString(undefined, options);
  };

  return (
    <div className="detail-page">
      {product ? 
        <Detail
          name={product.name}
          img={product.img}
          scndImg={product.scndImg}
          thirdImg={product.thirdImg}
          description={product.description}
          availability={product.availability}
          price={product.price}
          discount={product.discount}
          discountedPrice={product.discountedPrice}
          expDate={formatDateTime(product.expDate)}
        />
      : (
        <h3>Loading product details...</h3>
      )}
    </div>
  );
};

export default ProductDetails;