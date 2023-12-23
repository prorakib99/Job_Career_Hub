import { useEffect, useState } from "react";
import CategoryItems from "../CategoryItems/CategoryItems";
import SubHeader from "../SubHeader/SubHeader";

const CategoryList = () => {
    const [category, setCategory] = useState([]);
    
    useEffect(() => {
        fetch('./data/categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])
    return (
        <div className="container mx-auto px-8">
            <SubHeader subTitle='Job Category List'></SubHeader>
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