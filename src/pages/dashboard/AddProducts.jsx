import Swal from 'sweetalert2'
const AddProducts = () => {
    const handleSubmit= async (e)=>{
        e.preventDefault();
    
        const form = e.target;
     const name = form.productName.value;
     const brand = form.brandName.value;
     const price = form.price.value;
     const category = form.category.value;
     console.log(name,brand,price,category);

     await fetch("http://localhost:3000/toys",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data),})
        .then((res) =>res.json())
        .then((result) =>console.log(result))
        if(data){
          Swal.fire({
            title: 'warning!',
            text: 'All data are not included',
            icon: 'qwarning',
            confirmButtonText: 'Cool'
          })
        }
      }
        return (
        <div>
            <h1 className="text-5xl text-center text-purple-500 my-8 font-bold">Add Products</h1>
           <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="productName" placeholder="product name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input type="text" name="brandName" placeholder="brand name" className="input input-bordered" required />
              </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="number" name="price" placeholder="price" className="input input-bordered" required />
              </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>
              <input type="text" name="category" placeholder="category" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add</button>
              </div>
          </form>
        </div>
      </div>
    </div>
);
    };
    

export default AddProducts;