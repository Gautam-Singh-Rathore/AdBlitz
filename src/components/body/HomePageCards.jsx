import React from "react";
import { UserContext } from "../../Contexts/userContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const HomePageCards = ()=>{
    const {allProduct , location} = useContext(UserContext);
    console.log(allProduct);
    const navigate = useNavigate();
    // Get products according to location
    const locProd = allProduct.filter((item)=>(item.city==location));
    console.log(locProd);
    return(
        <div className="">
            <div className=" px-1  lg:px-[5vw] container flex flex-wrap justify-between items-center">
                {locProd.slice(0,8).map((item)=>{
                    return(
                        <Card key={item.id} item={item} />
                    )
                })}
            </div>
        </div>
    );
}
export default HomePageCards;