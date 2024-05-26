import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Product = ({toy}) => {
    const {id,name} = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-3xl text-purple-600">Exciting Toys!</h2>
  <div className="font-bold text-2xl text-pink-500">
    <p>{name}</p>
  </div>
    <div className="card-actions">
      <button className="btn btn-primary mt-4"><Link to ={`/products/${id}`}>See Details</Link></button>
    </div>
  </div>
</div>
    );
};

export default Product;