import React, {useState, useEffect}  from 'react';
import { Category, type Book } from '../types';
import { Link } from 'react-router-dom';
import { GET } from '../services/fetcher';


interface BooksProps {

}


const Books = (props: BooksProps) => {
    const [data, setData] = useState<Book[]>([])
    useEffect(() => {
        GET('/api/books').then(data => setData(data))
    }, [])

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center mt-5'>
                        {data.map((book) => (
                            <div className="col-md-6 m-1 card" key={`book-${book.id}`}>
                            <h5 className="card-title mt-2 text-center"> 
                                Written by {book.author}
                            </h5>
                            <div className="card-body mx-1">
                            <h1 className='d-flex justify-content-center align-items-center'>
                                {book.title}
                            </h1>
                            <h4 className='d-flex justify-content-center'>Price: ${book.price}
                            </h4>
                            </div>
                            <div className='d-flex justify-content-center pb-3'>
                                <Link to={`/books/${book.id}`} className='btn btn-md btn-dark'>Details</Link>
                            </div>
                        </div>
                        ))}
        
            </section>
        </main>
    )
}

export default Books;