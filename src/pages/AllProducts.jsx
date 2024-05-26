import { useEffect, useState } from "react";
import SingleProduct from "../components/dashboard/SingleProduct";


const AllProducts = () => {
    const [products, setProducts] = useState();

    useEffect(()=>{
fetch("http://localhost:3000/toys/")
.then(res=>res.json())
.then(data=>setProducts(data));
    },[]);


    const handleDeleteProduct = (id) =>{
      setProducts(products.filter((product) => product.id!==id))
    }
    return (
        <>
            <h1 className="text-5xl text-center text-blue-500 my-8 font-bold">All Products</h1>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Price</th>
                  </tr>
                </thead>
            <tbody>
                {
                    products?.map((product)=><SingleProduct key={product?.id} product={product} onDelete={handleDeleteProduct}/>)
                }
            </tbody>
            </table>
          </div>
        </>
    );
};

export default AllProducts;