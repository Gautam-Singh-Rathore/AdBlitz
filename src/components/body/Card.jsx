import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product-info/${item.id}`);
  };

  return (
    <div key={item.index} className="p-4 w-full md:w-1/4" onClick={handleClick}>
      <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
        <img className="lg:h-80  h-96 w-full" src={item.productImageUrl} alt="blog" />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {item.title}
          </h1>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            ₹{item.price}
          </h1>
          <h1 className="title-font text-sm font-medium text-gray-600 mb-3">
            {item.city}
          </h1>
          <div className="flex justify-center ">
            <button className=" bg-yellow-400 hover:bg-yellow-500 w-full text-white py-[4px] rounded-lg font-bold">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* // <div className="bg-slate-500 w-1/3 h-auto p-3 cursor-pointer" onClick={handleClick}>
            <div>
                <img src={item.productImageUrl} alt="product-image" />
            </div>
            <div>
                <span>₹{item.price}</span>
                <span>{item.title}</span>
                <span>{item.city}</span>
            </div>
            <div>
                <button>Add to Card</button>
            </div>
        </div> */
}

export default Card;
