import React, { useState , useEffect} from "react";
import logo from "../../../public/assets/Logo.png";
import location from "../../../public/assets/Location.png";
import cart from "../../../public/assets/cart.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/userContext";
import toast from "react-hot-toast";
import { HiUserCircle } from "react-icons/hi";
import CityPopup from "../body/CityPopup";

const Header = () => {

  const [isCityPopupOpen , setIsCityPopupOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, location , setLocation } = useContext(UserContext);  
  const [search, setSearch] = useState("");

  // LogOut handler
  const logOutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('./')
    toast.success("Logged Out Successfully");
  };

  // Cart click Handler
  const cartClick = () => {
    isLoggedIn ? navigate("/cart") : navigate("/login");
  };

  // Handling the location thing
  const locationHandler = () => {
    setIsCityPopupOpen(true);
  };
  useEffect(() => {
    if (location) {
        localStorage.setItem('selectedCity', location);
        setIsCityPopupOpen(false);
    }
}, [location]);
  
  

   return (
    <div>
      {isCityPopupOpen && <CityPopup setCity={setLocation} />}
      <div className="bg-slate-900 w-full flex flex-col md:flex-row justify-center items-center lg:justify-between lg:h-16">
        <div className="h-10 lg:h-16 w-full md:w-[23%] flex justify-between items-center px-5">
          <div onClick={() => navigate("/")} className="h-full hover:cursor-pointer p-2">
            <img src={logo} alt="logo" className="h-full w-1/10" />
          </div>
          <div onClick={locationHandler} className="h-3/4 flex justify-start items-center gap-2 hover:cursor-pointer">
            <p className="text-white lg:font-bold text-xs lg:text-lg md:text-sm">
              {location}
            </p>
          </div>
        </div>
        <div className="h-10 lg:h-16 w-full md:w-[73%] flex justify-between items-center px-5">
          <div className="bg-yellow-500 p-1 w-3/5 lg:w-1/2 m-2 lg:m-4 rounded-md px-2 flex items-center">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search AdBlitz"
              className="h-4/5 lg:h-full w-4/6 lg:w-5/6 p-1 md:px-3 lg:px-5 outline-none text-xs lg:text-lg md:text-sm py-1"
            />
            <button
              className="w-2/6 lg:w-1/6 h-full text-xs lg:text-lg md:text-sm lg:font-bold text-center"
              onClick={() => navigate(`/search/${search}`)}
            >
              Search
            </button>
          </div>
          <div className="h-16 flex justify-around items-center w-2/5">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard">
                  <HiUserCircle className="text-white cursor-pointer hover:text-gray-300 text-xl lg:text-2xl" />
                </Link>
                <button
                  className="bg-yellow-500 text-xs lg:text-lg lg:font-bold rounded-sm lg:rounded-xl px-2 lg:px-5 py-1 lg:py-2"
                  onClick={logOutHandler}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="bg-yellow-500 text-xs lg:text-lg lg:font-bold rounded-sm lg:rounded-xl px-2 lg:px-5 py-1 lg:py-2">
                  Login
                </button>
              </Link>
            )}
            <img
              src={cart}
              alt="cart-icon"
              onClick={cartClick}
              className="h-2/5 lg:h-3/5 cursor-pointer border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
  
};
export default Header;
