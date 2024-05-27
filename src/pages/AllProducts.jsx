import { useEffect, useState } from "react";
import SingleProduct from "../components/dashboard/SingleProduct";


const AllProducts = () => {
  const [toyProducts,setToyProducts] = useState();

  useEffect(()=>{
    fetch("http://localhost:3000/toys/")
    .then(res=>res.json())
    .then(data=>setToyProducts(data));
        },[]);

        const handleDeleteProduct = (id) =>{
                setToyProducts(toyProducts.filter((toyProduct) => toyProduct.id!==id))
              }

  return (
    <div>
      <h1 className="text-5xl text-center text-blue-500 my-8 font-bold">All Products</h1>
<div className=" flex justify-center items-center justify-items-stretch flex-wrap gap-4 px-6">
  {
    toyProducts?.map((toyProduct) =><SingleProduct key ={toyProduct.id} toyProduct= {toyProduct} onDelete={handleDeleteProduct}/>)
  }
</div>
    </div>
  );
};

export default AllProducts;