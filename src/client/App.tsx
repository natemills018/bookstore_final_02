import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GET, fetcher } from "./services/fetcher";
import Home from "./views/Home";
import Books from "./views/Books";
import NavBar from "./components/NavBar";
import BookDetails from "./components/BookDetails";

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/books"
          element={<Books />}
        />
        <Route
         path="/books/:id"
         element={<BookDetails />} 
         />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
