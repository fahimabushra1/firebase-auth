import { Link } from "react-router-dom";


const SingleProduct = ({toyProduct, onDelete}) => {
    console.log(toyProduct)
    const {id,name,img,brand}= toyProduct;

    const handleDelete = async () =>{
        await fetch(`http://localhost:3000/toys/${id}`,{
            method: "DELETE",
          })
            .then((res) =>res.json())
            .then((data) =>{
                console.log(data)
                onDelete(id)
            })
          }

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className="rounded-xl w-52" src={img} alt="Toys" /></figure>
  <div className="card-body">
   <h2 className="card-title text-3xl font-bold">{name}</h2>
    <p className="text-xl font-bold">{brand}</p>
    <div className="card-actions justify-start mt-2">
    <button className="mr-2 bg-purple-500 p-2 rounded"><Link to='/dashboard/detail-product/:id'>Detail</Link></button>
       <button className="mr-2 bg-green-500 p-2 rounded"><Link to='/dashboard/edit-product/:id'>Edit</Link></button>
        <button onClick={handleDelete} className="bg-red-500 p-2 rounded">Delete</button>
    </div>
  </div>
</div>
</div>
    );
};

export default SingleProduct;