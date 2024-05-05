import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/header/Login.jsx'
import Signup from './components/header/Signup.jsx'
import { Toaster } from 'react-hot-toast';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Body from './components/body/Body.jsx'
import { UserProvider } from './Contexts/userContext.jsx'
import Dashboard from './components/Pages/Dashboard.jsx'
import AddProduct from './components/Pages/AddProduct.jsx'
import UpdateProduct from './components/Pages/UpdateProduct.jsx'
import ProductInfo from './components/body/ProductInfo.jsx'
import CategoryPage from './components/body/CategoryPage.jsx'

const myRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<h1>Opps Something went wrong</h1>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/dashboard',
        element : <Dashboard/>
      },
      {
        path:'/product-info/:id',
        element:<ProductInfo/>
      },
      {
        path:'/category/:name',
        element:<CategoryPage/>
      }
    ]
  },
  {
    path:'/login' ,
    element: <Login/>,
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path: '/add-product',
    element: <AddProduct/>
  },
  {
    path:'/update-product/:id',
    element:<UpdateProduct/>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={myRouter}>
      </RouterProvider>
      <Toaster/>
    </UserProvider>    
  </React.StrictMode>
)
