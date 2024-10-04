import "./App.css";
import "./index.css";
import Header from "./Header/header";
import CategoryList from "./CategoryList/categoryList";
import { useEffect, useState } from "react";
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./fastFoodList/fastFoodList";
function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoodItems] = useState([]);  //for list fastfood
// we want use fetchData in othereplace so we dont define in useEffect
///give categoryId by null
const fetchData = async (categoryId = null) => {
  setLoading(true);
  const response = await axios.get
  (`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : "" }`)
  setLoading(false);
  setFastFoodItems(response.data);
};
  useEffect(() => {
    fetchData();
  }, [])


  const renderContent = () => {
    if(loading) {
      return <Loading theme="dark"/>
    }
  return <FastFoodList fastFoodItems={fastFoodItems} />
  

}


  return (
    <div className="bg-[rgba(55,63,80,.09)] min-h-screen	">
      <Header></Header>
      <CategoryList></CategoryList>
      <div className="container m-4">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
