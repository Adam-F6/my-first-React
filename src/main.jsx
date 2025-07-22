import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './componants/Home/Home.jsx'
import About from './componants/About/About.jsx'
import Portfolio from './componants/Portfolio/Portfolio.jsx'
import Contact from './componants/Contact/Contact.jsx'
import Layout from './componants/layout/Layout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




const Myrouter = createBrowserRouter([

  {path: '/', element: <Layout/> , children: [

  {path: '/', element: <Home/>},

{path: 'about', element: <About/>},  

{path: 'portfolio', element: <Portfolio/>},  

{path: 'contact', element: <Contact/>}

  ]} 



]);

createRoot(document.getElementById('root')).render(<RouterProvider router = {Myrouter}/>)
