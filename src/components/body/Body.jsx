import { useEffect } from "react";
import Carousel from "./Carousel ";
import Category from "./Category";
import HomePageCards from "./HomePageCards";
import Reviews from "./Reviews";

const Body = ()=>{
    useEffect(()=>{

    },[]);
    return(
    <>
        <Carousel/>
        <Category/>
        <HomePageCards/>
        <Reviews/>
    </>
    );
}
export default Body;