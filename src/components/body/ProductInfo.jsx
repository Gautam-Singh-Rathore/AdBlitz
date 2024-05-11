import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fireDB } from "../../Firebase/config";
import { UserContext } from "../../Contexts/userContext";
import toast from "react-hot-toast";

const ProductInfo = () => {
  const [inCart , setInCart] = useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { isLoggedIn , cart } = useContext(UserContext);
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

  const addToCart = async ()=>{
    try {
      const productRef = collection(fireDB , "cart");
    await addDoc(productRef , product );
    toast.success("Product Added to Cart");
    setInCart(true);
    } catch (error) {
      console.log(error);
      toast.error("Product not added to Cart");
    }
    
  }

  // Add to Cart function
  const handleCart = () => {
    isLoggedIn 
    ? 
     addToCart()  
    : navigate("/login");
  };

  //See owner details function
  const seeOwnerDetails = () => {
    isLoggedIn ? setOwnerDetails(true) : navigate("/login");
  };

  return (
    <>
      <div className="max-w-6xl px-4 mx-auto my-3 lg:my-5">
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
                {
                  inCart
                  ?
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none" onClick={()=> navigate('/cart')}>View Cart</button>
                  :
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none" onClick={handleCart}>Add to Cart</button>
                }
                
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none" onClick={seeOwnerDetails}>Owner details</button>
                 {
                  ownerDetails &&
                  <div className="w-full text-sm text-gray-700 bg-gray-100 p-4 rounded">
                    <p><span>Mobile No :</span>{product.mobile}</p>
                    <p><span>Email id :</span>{product.email}</p>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
