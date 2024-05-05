import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fireDB } from "../../Firebase/config";
import { UserContext } from "../../Contexts/userContext";

const ProductInfo = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { isLoggedIn } = useContext(UserContext);
  const [ownerDetails, setOwnerDetails] = useState(false);
  const navigate = useNavigate();
  // Get product data
  const getProductData = async () => {
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      setProduct(productTemp.data());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  // Add to Cart function
  const handleCart = () => {
    isLoggedIn ? console.log("abc") : navigate("/login");
  };

  //See owner details function
  const seeOwnerDetails = () => {
    isLoggedIn ? setOwnerDetails(true) : navigate("/login");
  };

  return (
    <>
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-wrap mb-24 -mx-4">
          <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
            <div className="">
              <div className="">
                <img
                  className=" w-full lg:h-[39em] rounded-lg"
                  src={product?.productImageUrl}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-6 flex flex-col">
                <h2 className="max-w-xl  text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl ">
                  {product?.title}
                </h2>
                <p className="inline-block text-sm mb-6 font-semibold text-gray-700   ">
                  <span> {product?.city}</span>
                </p> 
                <p className="inline-block text-2xl font-semibold text-gray-700  ">
                  <span>₹ {product?.price}</span>
                </p> 
              </div>
              <div className="mb-6">
                <h2 className="mb-2 text-lg font-bold text-gray-700 "></h2>
                <p>{product?.description}</p>
              </div>
              <div className="mb-6 " />
              <div className="flex flex-wrap gap-2 items-center mb-6">
                <button className="w-full px-4 py-3 text-center text-[#EAB308] bg-yellow-100 border border-[#EAB308]  hover:bg-[#EAB308] hover:text-gray-100  rounded-xl" onClick={handleCart}>Add to Cart</button>
                <button className="w-full px-4 py-3 text-center text-[#EAB308] bg-yellow-100 border border-[#EAB308]  hover:bg-[#EAB308] hover:text-yellow-100  rounded-xl" onClick={seeOwnerDetails}>Contact the Owner</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// <div>
//     <div>
//         <img src={product.productImageUrl} alt="" />
//     </div>
//     <div>
//         <span>{product.title}</span>
//         <span>₹{product.price}</span>
//         <span>{product.city}</span>
//         <span>Description: <span>{product.description}</span></span>
//         <button onClick={handleCart}>Add to Cart</button>
//         <button onClick={seeOwnerDetails}>Contact the Owner</button>
//         {
//             ownerDetails &&
//             <div>
//                 <span>
//                     Mobile No. : {product.mobile}
//                 </span>
//                 <span>
//                     Email id : {product.email}
//                 </span>
//             </div>
//         }
//     </div>
// </div>

export default ProductInfo;
