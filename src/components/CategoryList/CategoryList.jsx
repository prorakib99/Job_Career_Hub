import { useEffect, useState } from "react";
import CategoryItems from "../CategoryItems/CategoryItems";

const CategoryList = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('./data/categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])
    return (
        <div className="container mx-auto px-8">
            <div className="pt-28 pb-8">
                <h2 className="text-zinc-900 text-5xl font-extrabold text-center mb-4">Job Category List</h2>
                <p className="text-center text-neutral-500 text-base font-medium leading-relaxed">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                <div className="grid md:grid-cols-4 gap-6">
                    {
                        category.map(item => <CategoryItems key={item.id} item={item}></CategoryItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryList;