import axios from "../axios";
// take link from file axios
import { useEffect, useState } from "react";
import Loading from "../Loading/loading";

const CategoryList = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]); //first one do not data
    useEffect(() => {
        const fetchCategories = async () => {
            //async for API
           const response = await axios.get('/FoodCategory/categories');
            //use Axios Instance
            setCategories(response.data); //access data
            setLoading(false);
        };
        fetchCategories();
    }, []);
    // Update the document title using the browser API


    const renderContent = () => {
        if(loading) {
            return <Loading theme="primary"/>
        }
        return (
            <ul className="flex justify-between items-center">
            <li className="">
              <a className="text-gray-600 text-sm font-vazirmatn px-4 hover:text-red-600" href="/categories">همه فست فود‌ها</a>
            </li> 
            {
            categories.map(category => (
                <li className="" key={category.id}>
                    <a className="text-gray-600 text-sm font-vazirmatn px-4 hover:text-red-600" href="#">
                         {category.name}
                    </a>
                </li>
            )
       )}
         </ul>
        )
    }
    return (
        <nav className="container mx-auto w-full -mt-10 p-3">
           <div className="w-3/4 mx-auto bg-white rounded-md shadow-lg py-4 flex justify-between items-center gap-5"  
           style={{height: "70px"}}>
                {renderContent()} 
                {/* whitout {} like data and object */}
          </div>
        </nav>
    )
}


export default CategoryList;