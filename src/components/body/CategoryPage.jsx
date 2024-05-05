import { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { UserContext } from "../../Contexts/userContext";

const CategoryPage = ()=>{
    const {category} = useParams;
    const {allProduct , location} = useContext(UserContext);
    //Filter Location
    const a = allProduct.filter((item)=> item.city == location);
    //Filter Category
    const arr = a.filter((item)=> item.category == category);

    return(
        <div>
            <div>
                {arr.map((item)=>{
                    return(
                        <Card key={item.id} item={item} />
                    )
                })}
            </div>
        </div>
    )
}
export default CategoryPage;