import { useEffect, useState } from "react";
import SingleProduct from "../components/dashboard/SingleProduct";
import Swal from 'sweetalert2'
// import './styles.css'


const AllProducts = () => {
  const [toyProducts,setToyProducts] = useState();

  useEffect(()=>{
    fetch("http://localhost:3000/toys/")
    .then(res=>res.json())
    .then(data=>setToyProducts(data));
        },[]);

        const handleDeleteProduct = (id) =>{
                setToyProducts(toyProducts.filter((toyProduct) => toyProduct.id!==id))
                Swal.fire({
                  title: 'Do you want to delete?',
                  showDenyButton: true,
                  showCancelButton: true,
                  confirmButtonText: 'Yes',
                  denyButtonText: 'No',
                  customClass: {
                    actions: 'my-actions',
                    cancelButton: 'order-1 right-gap',
                    confirmButton: 'order-2',
                    denyButton: 'order-3',
                  },
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire('Saved!', '', 'success')
                  } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                  }
                })
                
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