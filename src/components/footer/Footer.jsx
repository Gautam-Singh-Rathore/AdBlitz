import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Footer = () => {

  const navigate = useNavigate();

  return (
    <>
    <footer className="bg-slate-900 text-white flex justify-between p-2 md:p-3 lg:p-5 px-16 lg:px-52 md:px-36  ">
        {/* First div */}
      <div className="w-1/3 ">
        <img src={logo} alt="logo" className="w-1/2" />
      </div>
      {/* Second div */}
      <div className="flex gap-5 text-[6px] md:text-[10px] lg:text-[14px]">
        <div>
          <p className="font-bold">Get to Know Us</p>
          <p className="cursor-pointer" onClick={()=>navigate('/about')}>About Us</p>
        </div>
        <div>
          <p className="font-bold">Connect With Us</p>
          <p className="cursor-pointer" onClick={()=>navigate('/team')}>Our Team</p>
        </div>
      </div>
    </footer>
    <p className="bg-black text-white text-[6px] md:text-[10px] lg:text-[14px] text-center">© 2024, AdBlitz.in, Inc. or its affiliates</p>
    </>
  );
};
export default Footer;
