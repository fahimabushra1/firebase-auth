import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import './styles.css'

const EditProduct = () => {
    const toy = useLoaderData();
    console.log(toy)
    const [name,setName]= useState(toy?.name);
    const [brand,setBrand]= useState(toy?.brand);
    const [price,setPrice]= useState(toy?.price);
    const [category,setCategory]= useState(toy.Category);

    const handleSubmit= async (e)=>{
        e.preventDefault();
    
        const form = e.target;
     const name = form.productName.value;
     const brand = form.brandName.value;
     const price = form.price.value;
     const category = form.category.value;
     console.log(name,brand,price,category);

     await fetch(`http://localhost:3000/toys/${toy.id}`,{
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data),})
        .then((res) =>res.json())
        .then((data) =>console.log(data))
        Swal.fire({
          title: 'Do you want to update data?',
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
            <h1 className="text-5xl text-center text-orange-500 my-8 font-bold">Update Products</h1>
           <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="productName" placeholder="product name"
              value= {name}  onChange={(e)=>setName(e.target.value)}className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input type="text" name="brandName" placeholder="brand name" value ={brand}  onChange={(e)=>setBrand(e.target.value)} className="input input-bordered" required />
              </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="number" name="price" placeholder="price" value={price}  onChange={(e)=>setPrice(e.target.value)} className="input input-bordered" required />
              </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>
              <input type="text" name="category" placeholder="category" value={category} 
              onChange={(e)=>setCategory(e.target.value)} className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update</button>
              </div>
          </form>
        </div>
      </div>
    </div>
);
    };
    

export default EditProduct;