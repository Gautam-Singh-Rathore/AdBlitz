import { Timestamp, addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { fireDB } from "../../Firebase/config";

const AddProduct = () => {
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

  const navigate = useNavigate();

  // Product details
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    owner:JSON.parse(localStorage.getItem('users')).email,
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

  // Add product function
  const addProductFunction = async () => {
    if (
      product.title == "" ||
      product.price == "" ||
      product.productImageUrl == "" ||
      product.category == "" ||
      product.description == ""||
      product.city == ""
    ) {
      return toast.error("all fields are required");
    }

    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, product);
      toast.success("Add product successful");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Add Product failed");
    }
  };

  return (
    <>
      <div>
        <h2>Add Product</h2>
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
        <button onClick={addProductFunction}>Add Product</button>
      </div>
    </>
  );
};
export default AddProduct;
