import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
 const toy = useLoaderData();
 console.log(toy)
    const {id,name,brand,category,price,age,img} = toy
    return (
        <div className="flex justify-center items-center my-16 p-4">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src= {img} alt="Toys" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-3xl">No:{id} {name}</h2>
    <p className="text-xl">Brand: {brand}</p>
    <p className="text-xl">Category: {category}</p>
    <p className="text-xl">Price: {price}$</p>
    <p className="text-xl">Useful for {age} babies.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary mt-4">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetail;