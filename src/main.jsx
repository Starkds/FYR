import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider , Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home.jsx';

import Login from './pages/Login.jsx';
import Tenantform from './pages/Tenantform.jsx';
import Signup from './pages/Signup.jsx';
import Footer from './Components/Footer.jsx';
import AboutUs from './Components/AboutUs.jsx';
import ContactUs from './Components/ContactUs.jsx';
import PlaceInfo from './cards/PlaceInfo.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/"  element={<Layout/>} >
      <Route path=""  element={<Home />} />
      <Route path='Login' element={<Login/>} />
      <Route path='Tenantform' element={<Tenantform />} />
      <Route path='SignUp' element={<Signup/>} />
      <Route path='About' element={<AboutUs/>} />
      <Route path='/Contact' element={ <ContactUs/>} />
      <Route path='/PlaceInfo' element={<PlaceInfo/>} />
          </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}>
     <App /> 
      
    </RouterProvider>  
 

   
  </React.StrictMode>
)