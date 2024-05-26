import { useEffect, useState } from "react";
import SingleProduct from "../components/dashboard/SingleProduct";


const AllProducts = () => {
    const [products, setProducts] = useState();

    useEffect(()=>{
fetch("http://localhost:3000/toys/")
.then(res=>res.json())
.then(data=>setProducts(data));
    },[]);
    return (
        <>
            <h1>All Products</h1>
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
                    products?.map((product)=><SingleProduct key={product?.id} product={product}/>)
                }
            </tbody>
            </table>
          </div>
        </>
    );
};

export default AllProducts;