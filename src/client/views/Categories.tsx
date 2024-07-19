import React, {useState, useEffect} from "react";
import { GET } from "../services/fetcher";
import { Category } from "../types";


interface CategoriesProps {

}


const Categories = (props: CategoriesProps) => {
    const [data, setData] = useState<Category[]>([])


    useEffect(() => {
        GET('/api/categories')
        .then(data => setData(data))
    }, [data])



    return (
        <main className="container mt-5">
            <section className="row justify-content center mt-5">

                {data.map((category) => (
                            <div className="col-md-5 m-3 card card-shadow bg-primary" key={`category-${category.id}`}>
                            <h5 className="card-title mt-2 text-center font-italic"> 
                                {category.name}
                            </h5>
                            
                        </div>
                ))}

            </section>
        </main>
    )



}

export default Categories