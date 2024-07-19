import React, {useEffect, useState} from "react";
import { POST, GET } from "../services/fetcher";
import { useNavigate } from "react-router-dom";
import { Category } from "../types";

interface AddProps {

}


const AddBook = (props: AddProps) => {
    const navigate = useNavigate();
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0)
    const [categories, setCategories] = useState<Category[]>([])
    const [ selectCatId, setSelectCatId] = useState(0)

    useEffect(() => {
        GET("/api/categories").then((categories) => setCategories(categories))
    }, [])

    const handleButton = () => {
        const url = '/api/books/';
        if(!selectCatId) {
            return alert('Select a category before attempting to add a book!')
        }

        POST(url, {author, title, price, category_id: selectCatId}).then((book) =>{
            console.log(book);
            alert('You have added a book to the bookstore! Thanks!')
            navigate(`/books/${book.id}`)
        })
    }


    console.log({ title, author, price, selectCatId})


    return (
      <main className="container mt-5">
        <section className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card-body">
              <div>
                <h1 className="d-flex justify-content-center">
                  Add your own book!
                </h1>
  
                <div className="d-flex justify-content-center m-2">
                  <input
                    className="m-2"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                  <input
                    className="m-2"
                    placeholder="Title"
                    nonce=""
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <input
                  className="m-2"
                  placeholder="Price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
  
                <select
                  value={selectCatId}
                  onChange={(e) => setSelectCatId(Number(e.target.value))}
                >
                  <option value={0}>Pick a Category</option>
                  {categories.map((cat) => (
                    <option key={`categories-${cat.id}`} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
  
                <div className="d-flex justify-content-center m-2">
                  <button
                    className="rounded mx-4 bg-dark"
                    onClick={handleButton}
                  >
                    Click to Add your Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default AddBook;
  




