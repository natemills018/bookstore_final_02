import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GET, fetcher } from "./services/fetcher";
import Home from "./views/Home";
import Books from "./views/Books";
import NavBar from "./components/navBar";
interface AppProps {}

const App = (props: AppProps) => {
    return(
        <BrowserRouter>
 

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books' element={<Books />} />

        </Routes>
           
        <NavBar />
    
    </BrowserRouter>

    )
};

 

export default App;
