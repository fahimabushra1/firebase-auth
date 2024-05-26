import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import Statics from "../components/home/Statics";
import Accordian from "../components/home/Accordian";


const Home = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <Banner/>
            <Statics/>
            <Products data= {data}/>
            <Accordian/>
        </div>
    );
};

export default Home;