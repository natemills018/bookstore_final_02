import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GET, fetcher } from "./services/fetcher";
import Home from "./views/Home";
import Books from "./views/Books";
import NavBar from "./components/NavBar";
import BookDetails from "./components/BookDetails";
import AddBook from "./views/AddBook";
import Categories from "./views/Categories";
import Login from "./views/Login";
import Register from "./views/Register";
import UpdateBook from "./views/UpdateBook";
import PrivateRoute from "./views/PrivateWrapper";

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
         <Route
         path="/books/new"
         element={<PrivateRoute><AddBook /></PrivateRoute>} 
         />
         <Route 
         path="/books/:id/update"
         element={<PrivateRoute><UpdateBook /></PrivateRoute>}
         />
         <Route
         path="/categories"
         element={<Categories/>}
         />
         <Route 
         path="/login"
         element={<Login />}/>

         <Route 
         path="/register"
         element={<Register />}
         />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
