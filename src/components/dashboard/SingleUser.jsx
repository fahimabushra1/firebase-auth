import { Link } from "react-router-dom";


const SingleProduct = ({product}) => {
    const {id,name,brand,category,price} = product;
    console.log(product)


    return (
       
    <tr className="bg-base-200">
        <th>{id}</th>
        <td>{name}</td>
        <td>{brand}</td>
        <td>{category}</td>
        <td>{price}</td>
    </tr>
        
    );
};

export default SingleProduct;