import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const {error, status} = useRouteError();
    return (
     <div className="container flex flex-col justify-center items-center text-center h-screen py-32">
        <div>
            <span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>
        </div>
        <div>
            <h1 className="text-red-500 text-7xl font-bold my-6">Error {status || 404}</h1>
            <p className="lg:text-3xl">{error?.message}</p>
        </div>
        <button className="bg-blue-500 p-2 rounded my-4">
            <Link to='/home'>Home</Link>
        </button>
     </div>
    );
};

export default ErrorPage;