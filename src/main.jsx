import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Css/heading.css'
import './Css/Location_card.css'
import './Css/searchbtn.css'
import './Css/mini-card.css'
import './Css/Collection_card.css'
import './Css/Download_section.css'
import './Css/Download_section.css'
import './Css/Accordion_component.css'
import './Css/footer.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Layout from './pages/Layout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
