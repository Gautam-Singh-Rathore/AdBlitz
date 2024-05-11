import React , { useContext }from "react";
import { UserContext } from "../../Contexts/userContext";
import { useNavigate } from "react-router-dom";
import { fireDB } from "../../Firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";

const Cart = ()=>{
    const {cart , getCartProduct} = useContext(UserContext);
    const navigate = useNavigate();
    // Get users cart products
  const userCart = cart.filter(
    (item) => item.owner == JSON.parse(localStorage.getItem("users")).email
  );

  //remove froom cart
  const removeFromCart = async (id) => {
    try {
      await deleteDoc(doc(fireDB, "cart", id));
      toast.success("Removed From Cart");
      getCartProduct();
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <div className="min-h-screen">
    {userCart.length === 0 
    ? (<h1 
      className=" text-center h-screen pt-3 lg:pt-8 text-lg lg:text-2xl font-bold ">
       Your Cart is Empty </h1>)
    : (
        <div className=" m-1 lg:m-2 p-1 lg:p-2">
          <div className="w-full flex justify-between ">
            <span className="bg-yellow-500 text-white my-2 px-2 text-sm md:text-lg  lg:px-4 py-1 rounded-lg">
              Cart Products
            </span>
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-3">#</th>
                <th className="border p-3">Image</th>
                <th className="border p-3">Title</th>
                <th className="border p-3">Price</th>
                <th className="border p-3">Category</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {userCart.map((item, index) => (
                <tr key={index} className="border">
                  <td className="border p-3">{index + 1}.</td>
                  <td className="border p-3">
                    <img
                      src={item.productImageUrl}
                      alt="prod-img"
                      className="w-20 h-20 object-cover"
                    />
                  </td>
                  <td className="border p-3">{item.title}</td>
                  <td className="border p-3">₹{item.price}</td>
                  <td className="border p-3">{item.category}</td>
                  <td className="border p-3">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        removeFromCart(item.id);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        
        </div>
      )}
    </div>
  )
}
export default Cart ;