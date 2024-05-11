// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Card = ({ item }) => {
//   const navigate = useNavigate();

//   return (
//     <div key={item.index} className="p-4 w-full md:w-1/4" onClick={() => navigate(`/product-info/${item.id}`)}>
//       <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
//         <img
//           className="lg:h-80 h-96 w-full object-cover"
//           src={item.productImageUrl}
//           alt="product"
//         />
//         <div className="p-6">
//           <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//             {item.category}
//           </h2>
//           <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//             {item.title}
//           </h1>
//           <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//             ₹{item.price}
//           </h1>
//           <h1 className="title-font text-sm font-medium text-gray-600 mb-3">
//             {item.city}
//           </h1>
//           <div className="flex justify-center">
//             <button
//               className="bg-yellow-400 hover:bg-yellow-500 w-full text-white py-2 rounded-lg font-bold"
//             >
//               View Product
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div key={item.index} className="p-2 sm:p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4" onClick={() => navigate(`/product-info/${item.id}`)}>
      <div className="h-full border border-gray-300 rounded-lg overflow-hidden shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
        <img
          className="lg:h-64 h-48 w-full object-cover"
          src={item.productImageUrl}
          alt="product"
        />
        <div className="p-4">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {item.category}
          </h2>
          <h1 className="title-font text-base md:text-lg font-medium text-gray-900 mb-2">
            {item.title}
          </h1>
          <h1 className="title-font text-base md:text-lg font-medium text-gray-900 mb-2">
            ₹{item.price}
          </h1>
          <h1 className="title-font text-sm font-medium text-gray-600 mb-2">
            {item.city}
          </h1>
          <div className="flex justify-center">
            <button
              className="bg-yellow-400 hover:bg-yellow-500 w-full text-white py-2 rounded-lg font-bold"
            >
              View Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;



