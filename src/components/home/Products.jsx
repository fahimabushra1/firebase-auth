import Product from "./Product";


// eslint-disable-next-line react/prop-types
const Products = ({data}) => {
console.log(data);
    return (
        <div>
          <h1 className="text-center font-bold text-blue-500 my-8 text-5xl">Our Products</h1>
          <div className="flex justify-center items-center flex-wrap gap-4 px-6">
           {
            data.map((toy)=>
           (<Product key={toy.id} toy={toy}/>))
           }
          </div> 
        </div>
    );
};

export default Products;