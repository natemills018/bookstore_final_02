import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GET, fetcher } from "./services/fetcher";
import Home from "./views/Home";
interface AppProps {}

const App = (props: AppProps) => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />

        </Routes>
    
    
    </BrowserRouter>

    )
};

 

export default App;
