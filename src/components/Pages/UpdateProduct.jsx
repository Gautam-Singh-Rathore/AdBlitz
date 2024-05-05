import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import React, { useContext, useEffect , useState} from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { fireDB } from "../../Firebase/config";
import { UserContext } from "../../Contexts/userContext";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const {getAllProduct} = useContext(UserContext);
  const categoryList = [
    {
      name: "Property",
    },
    {
      name: "Furnitures",
    },
    {
      name: "Cars",
    },
    {
      name: "Mobile and Laptop",
    },
    {
      name: "Home Appliances",
    },
    {
      name: "Two Wheelers",
    },
    {
      name: "Services",
    },
    {
      name: "Pets",
    },
    {
      name: "Fashion",
    },
    {
      name: "Books,Sports",
    },
  ];

  const cityList = [
    {
      name:"Jaipur",
    },
    {
      name:"Delhi",
    },
    {
      name:"Mumbai",
    },
    {
      name:"Chennai",
    },
    {
      name:"Hyderabad",
    }
  ]

  //Product state
  const [product, setProduct] = useState({
    title: "",
    owner:JSON.parse(localStorage.getItem('users')).email,
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    mobile: "",
    email: "",
    city: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Get Single product function
  const getSingleProduct = async () => {
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      const product = productTemp.data();
      setProduct({
        ...product,
        title:product.title ,
        price: product.price,
        productImageUrl: product.productImageUrl,
        category: product.category,
        description: product.description,
        mobile: product.mobile,
        email: product.email,
        city:product.city ,
        time:product.time,
        date: product.date,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Update Product Function
  const updateProduct = async()=>{
        try {
            await setDoc(doc(fireDB , "products" , id) , product);
            toast.success("Product Updated Successfully");
            getAllProduct();
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
        }
  }


  useEffect(() => {
    getSingleProduct();
  }, []);
  return (
    <>
      <div>
        <h2>Update Product</h2>
      </div>

      <div>
        <input
          type="text"
          placeholder="Product Title"
          value={product.title}
          onChange={(e) => {
            setProduct({
              ...product,
              title: e.target.value,
            });
          }}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Product Price"
          value={product.price}
          onChange={(e) => {
            setProduct({
              ...product,
              price: e.target.value,
            });
          }}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Product image url"
          value={product.productImageUrl}
          onChange={(e) => {
            setProduct({
              ...product,
              productImageUrl: e.target.value,
            });
          }}
        />
      </div>

      <div>
        <select
          value={product.category}
          onChange={(e) => {
            setProduct({
              ...product,
              category: e.target.value,
            });
          }}
        >
          <option disabled>Select Product Category</option>
          {categoryList.map((value, index) => {
            const { name } = value;
            return (
              <option key={index} value={name}>
                {name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <select
          value={product.city}
          onChange={(e) => {
            setProduct({
              ...product,
              city: e.target.value,
            });
          }}
        >
          <option disabled>Select Product City</option>
          {cityList.map((value, index) => {
            const { name } = value;
            return (
              <option key={index} value={name}>
                {name}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <textarea type="text"
          placeholder="Product Description"
          value={product.description}
          onChange={(e) => {
            setProduct({
              ...product,
              description: e.target.value,
            });
          }}></textarea>
        
      </div>

      <div>
        <input
          type="text"
          placeholder="Mobile No."
          value={product.mobile}
          onChange={(e) => {
            setProduct({
              ...product,
              mobile: e.target.value,
            });
          }}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Email Id"
          value={product.email}
          onChange={(e) => {
            setProduct({
              ...product,
              email: e.target.value,
            });
          }}
        />
      </div>

      <div>
        <button onClick={updateProduct}>Update Product</button>
      </div>
    </>
  );
};
export default UpdateProduct;
