import { Link } from "react-router-dom";


const SingleProduct = ({product,onDelete}) => {
    const {id,name,brand,category,price} = product;
    console.log(product)

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
       
    <tr className="bg-base-200">
        <th>{id}</th>
        <td>{name}</td>
        <td>{brand}</td>
        <td>{category}</td>
        <td>{price}</td>
       <div className="card-actions justify-end">
       <button className="mr-2 bg-green-500 p-2 rounded"><Link to='/dashboard/edit-product/:id'>Edit</Link></button>
        <button onClick={handleDelete} className="bg-red-500 p-2 rounded">Delete</button>
       </div>
    </tr>
        
    );
};

export default SingleProduct;